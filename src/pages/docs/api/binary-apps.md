---
title: Binary Apps
description: Upload and manage binary application files
---

Manage binary application files for your tests. Supported file extensions include: `.ipa`, `.apk`, `.xap`, `.appx`, `.zip`, `.wgt`. Files can be up to 1 gigabyte in size.

> **Usage**: Binary apps are required for mobile app tests. After uploading, use the `binary_app_id` when creating test environments (see [Test Environments](/docs/api/test-environments)).

## Upload a binary application file

Upload a binary application file directly to the API.

**Endpoint:** `POST /binary_apps`

**Request Body:**

- `file` (string, required) - Binary application file (up to 1 gigabyte). Supported extensions: .ipa, .apk, .xap, .appx, .zip, .wgt

**Example Request:**

{% code language="bash" showLineNumbers=true %}
```bash
curl -X POST "https://api.test.io/customer/v2/binary_apps" \
  -H "Authorization: Token YOUR_API_TOKEN" \
  -F "file=@MyApp.apk"
```
{% /code %}

**Response:** `201 Created`

{% code language="json" showLineNumbers=true %}
```json
{
  "binary_app": {
    "id": 123,
    "filename": "MyApp.apk",
    "file_size": 52428800,
    "url": "https://files.test.io/uploads/binary_app/123/MyApp.apk"
  }
}
```
{% /code %}

## Get direct upload URL (large files)

Request a pre-signed direct upload URL for large files. This lets you upload the file directly from your client to our storage without passing the entire payload through the API server.

**Endpoint:** `GET /binary_apps/upload_url`

**Example Request:**

{% code language="bash" showLineNumbers=true %}
```bash
curl -X GET "https://api.test.io/customer/v2/binary_apps/upload_url" \
  -H "Authorization: Token YOUR_API_TOKEN"
```
{% /code %}

**Response:** `200 OK`

{% code language="json" showLineNumbers=true %}
```json
{
  "binary_app_id": 123,
  "url": "https://upload.test.io/direct",
  "fields": {
    "key": "uploads/binary_app/123/${filename}",
    "success_action_status": "201",
    "policy": "<opaque-policy>",
    "algorithm": "<signature-algorithm>",
    "date": "20251104T154715Z",
    "signature": "<signature>"
  }
}
```
{% /code %}

## Finalize binary app upload

Finalize a direct upload by validating metadata, verifying the file exists in storage, and generating a public download URL.

**Endpoint:** `PUT /binary_apps/{id}`

**Parameters:**

- `id` (number, required) - Binary app ID from GET /binary_apps/upload_url

**Request Body:**

{% code language="json" showLineNumbers=true %}
```json
{
  "filename": "MyApp-v1.2.3.apk",
  "file_size": 524288000,
  "content_type": "application/vnd.android.package-archive",
  "bundle_identifier": "com.example.myapp",
  "bundle_version": "1.2.3",
  "url": "https://files.test.io/uploads/binary_app/13/MyApp-v1.2.3.apk"
}
```
{% /code %}

**Example Request:**

{% code language="bash" showLineNumbers=true %}
```bash
curl -X PUT "https://api.test.io/customer/v2/binary_apps/123" \
  -H "Authorization: Token YOUR_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "filename": "MyApp-v1.2.3.apk",
    "file_size": 524288000,
    "content_type": "application/vnd.android.package-archive",
    "bundle_identifier": "com.example.myapp",
    "bundle_version": "1.2.3",
    "url": "https://testcloud-staging-webapp.s3.eu-west-1.amazonaws.com/uploads/binary_app/package/13/MyApp-v1.2.3.apk"
  }'
```
{% /code %}

**Response:** `200 OK`

{% code language="json" showLineNumbers=true %}
```json
{
  "binary_app": {
    "id": 123,
    "filename": "MyApp-v1.2.3.apk",
    "file_size": 524288000,
    "url": "https://files.test.io/uploads/binary_app/123/MyApp-v1.2.3.apk"
  }
}
```
{% /code %}

**Error Response:** `422 Unprocessable Entity`

If the file is not found in storage, returns:

{% code language="json" showLineNumbers=true %}
```json
{
  "error": "File not found: uploads/binary_app/123/MyApp-v1.2.3.apk"
}
```
{% /code %}

