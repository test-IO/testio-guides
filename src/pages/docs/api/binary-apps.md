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

Request a URL for large files. This lets you upload the file directly from your client to our storage without passing the entire payload through the API server.

**Endpoint:** `GET /binary_apps/upload_url`

**Example Request:**

{% code language="bash" showLineNumbers=true %}

```bash
curl -X GET "https://api.test.io/customer/v2/binary_apps/upload_url" \
  -H "Authorization: Token YOUR_API_TOKEN"
```

{% /code %}

**Response:** `200 OK`

**Response Attributes:**

- `binary_app_id` (number, required) - The ID of the created binary app (use this in the finalization step)
- `url` (string, required) - S3 presigned POST URL
- `fields` (object, required) - Form fields required for the S3 POST request
  - `key` (string, required) - S3 object key pattern. **IMPORTANT:** `${filename}` is a placeholder - replace it with your actual filename when uploading to S3. For example, if uploading `MyApp-v1.2.3.apk`, the key should be `uploads/binary_app/package/123/MyApp-v1.2.3.apk`
  - `success_action_status` (string, required) - HTTP status code S3 will return on success
  - `policy` (string, required) - Base64-encoded upload policy
  - `x-amz-credential` (string, required) - AWS credential for the upload
  - `x-amz-algorithm` (string, required) - AWS signature algorithm
  - `x-amz-date` (string, required) - Request timestamp
  - `x-amz-signature` (string, required) - Request signature

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

Finalizes a direct storage upload by validating metadata, verifying the file exists in storage, and generating a public download URL.

**Important:** After uploading to S3, you have to call this endpoint with the file metadata to complete the process.

**Endpoint:** `PUT /binary_apps/{id}`

**Parameters:**

- `id` (number, required) - Binary app ID from `GET /binary_apps/upload_url`

**Request Body Attributes:**

- `filename` (string, required) - The name of the file uploaded to S3. Must match the filename used in the S3 upload. Used to construct the S3 key for verification.
- `file_size` (number, required) - Size of the uploaded file in bytes. Must not exceed 1GB (1073741824 bytes). This should match the actual file size uploaded to S3.
- `content_type` (string, required) - MIME type of the uploaded file. Common values:
  - `application/vnd.android.package-archive` - APK (Android)
  - `application/octet-stream` - IPA (iOS)
- `bundle_identifier` (string, optional) - The unique bundle/package identifier for the app (e.g., `com.example.myapp` for Android or iOS).
- `bundle_version` (string, optional) - The version string of the app bundle (e.g., `1.2.3` or `4.2.11.5100000`).

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
    "bundle_version": "1.2.3"
  }'
```

{% /code %}

**Response:** `200 OK`

**Response Attributes:**

- `binary_app` (object)
  - `id` (number) - Binary app ID
  - `filename` (string) - The uploaded file name
  - `file_size` (number) - File size in bytes
  - `content_type` (string) - File MIME type
  - `bundle_identifier` (string, nullable) - App bundle identifier
  - `bundle_version` (string, nullable) - App version
  - `status` (string) - Binary app status

{% code language="json" showLineNumbers=true %}

```json
{
  "binary_app": {
    "id": 123,
    "filename": "MyApp-v1.2.3.apk",
    "file_size": 524288000,
    "content_type": "application/vnd.android.package-archive",
    "bundle_identifier": "com.example.myapp",
    "bundle_version": "1.2.3",
    "status": "new"
  }
}
```

{% /code %}

**Error Response:** `400 Bad Request`

Returned when required parameters are missing:

{% code language="json" showLineNumbers=true %}

```json
{
  "error": "filename is missing, file_size is missing, content_type is missing"
}
```

{% /code %}

**Error Response:** `422 Unprocessable Entity`

Returned when the file doesn't exist in S3 or validation fails:

{% code language="json" showLineNumbers=true %}

```json
{
  "error": "File not found in S3: uploads/binary_app/package/123/MyApp-v1.2.3.apk"
}
```

{% /code %}

{% code language="json" showLineNumbers=true %}

```json
{
  "error": "Validation failed: File size exceeds the maximum allowed size of 1GB"
}
```

{% /code %}
