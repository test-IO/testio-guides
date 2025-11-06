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
    "url": "https://s3.amazonaws.com/bucket/uploads/binary_app/package/123/MyApp.apk"
  }
}
```
{% /code %}

## Get S3 upload URL

Get a pre-signed S3 URL for direct upload to S3. This is useful for large files.

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
  "url": "https://my-bucket.s3.eu-west-1.amazonaws.com",
  "fields": {
    "key": "uploads/binary_app/package/123/${filename}",
    "success_action_status": "201",
    "policy": "eyJleHBpcmF0aW9uIjoiMjAyNS0xMS0wNFQxNjo0NzoxNVoiLCJjb25kaXRpb25zIjpbeyJidWNrZXQiOiJteS1idWNrZXQifSxbInN0YXJ0cy13aXRoIiwiJGtleSIsInVwbG9hZHMvYmluYXJ5X2FwcC9wYWNrYWdlLzEyMy8iXSx7InN1Y2Nlc3NfYWN0aW9uX3N0YXR1cyI6IjIwMSJ9LFsiY29udGVudC1sZW5ndGgtcmFuZ2UiLDEsMTA3Mzc0MTgyNF1dfQ==",
    "x-amz-credential": "AKIAEXAMPLE/20251104/eu-west-1/s3/aws4_request",
    "x-amz-algorithm": "AWS4-HMAC-SHA256",
    "x-amz-date": "20251104T154715Z",
    "x-amz-signature": "abc123def456..."
  }
}
```
{% /code %}

## Finalize binary app upload

Finalizes a direct S3 upload by validating metadata, verifying the file exists in S3, and generating a public download URL.

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
  "url": "https://testcloud-staging-webapp.s3.eu-west-1.amazonaws.com/uploads/binary_app/package/13/MyApp-v1.2.3.apk"
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
    "url": "https://s3.amazonaws.com/bucket/uploads/binary_app/package/123/MyApp-v1.2.3.apk"
  }
}
```
{% /code %}

**Error Response:** `422 Unprocessable Entity`

If the file is not found in S3, returns:

{% code language="json" showLineNumbers=true %}
```json
{
  "error": "File not found in S3: uploads/binary_app/package/123/MyApp-v1.2.3.apk"
}
```
{% /code %}

