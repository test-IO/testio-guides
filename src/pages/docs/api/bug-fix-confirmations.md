---
title: Bug Fix Confirmations
description: Request confirmation that one or more bugs have been fixed
---

Request a Bug Fix Confirmation (BFC) to have testers verify that a bug has been fixed. Use the bulk endpoint to request confirmations for several bugs in a single call instead of one request per bug.

> Not to be confused with [Bug Report Confirmations](/docs/api/bug-report-confirmations), which asks testers for more details when they report a bug.

> **Different base path**: unlike the other pages under API Reference, these endpoints are **not** part of the Customer API v2 (`/customer/v2/`). They live on the Integration API, served from the same host under a different path:
>
> ```
> https://api.test.io/integration/v1/
> ```
>
> Authentication uses the same `Authorization` header documented in [Authentication](/docs/api/authentication).

## Confirm a single bug fix

Request a Bug Fix Confirmation for one bug.

**Endpoint:** `POST /bugs/{bug_id}/bug_fix_confirmations`

**Parameters:**

- `bug_id` (number, required) - ID of the Bug

**Request Body:**

- `customer_test_environment` (object, required) - Test environment to confirm the fix against
  - `id` (number, optional) - ID of an existing Customer Test Environment to reuse
  - `title` (string, optional)
  - `url` (string, optional)
  - `file_url` (string, optional) - URL of the app file (APK, IPA) for mobile app tests
  - `file_base_64` (string, optional) - App file (APK, IPA) for mobile app tests encoded in base 64
  - `file_name` (string, optional) - File name for the app file (required when `file_base_64` is provided)
  - `username` (string, optional)
  - `password` (string, optional)
  - `access` (string, optional)
  - `proxy` (boolean, optional)
- `additional_requirement` (string, optional) - Free-form extra instructions for testers
- `allow_device_clouds` (boolean, optional, default: `false`) - Allow testers to use device clouds
- `requirements` (array, optional) - Device/targeting requirements. Each entry is an object:
  - `id` (number, optional) - Target idx of an existing Requirement to reuse
  - `category` (object, optional) - `{ "id": number }`
  - `vendor` (object, optional) - `{ "id": number }`
  - `devices` (array, optional) - `[{ "id": number }]`
  - `operating_system` (object, optional) - `{ "id": number }`
  - `min_operating_system_version` (object, optional) - `{ "id": number }`
  - `max_operating_system_version` (object, optional) - `{ "id": number }`
  - `browsers` (array, optional) - `[{ "id": number }]`
  - `input_devices` (array, optional) - `[{ "id": number }]`

> If `requirements` is omitted, requirements are derived automatically from the test's default device targeting.

**Example Request:**

{% code language="bash" showLineNumbers=true %}

```bash
curl -X POST "https://api.test.io/integration/v1/bugs/123/bug_fix_confirmations" \
  -H "Authorization: Token YOUR_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "customer_test_environment": { "id": 42 },
    "requirements": [{ "id": 7 }]
  }'
```

{% /code %}

**Response:** `201 Created`

Returns the created bug fix confirmation object.

**Response:** `422 Unprocessable Entity`

Returned when a pending Bug Fix Confirmation already exists for this bug.

## Confirm bug fixes in bulk

Request Bug Fix Confirmations for up to 50 bugs in a single call. Every `customer_test_environment`, `requirements`, `additional_requirement`, and `allow_device_clouds` value is applied identically to each bug in the request — to use different requirements per bug, call this endpoint multiple times.

Each bug is processed independently: a failure on one bug (not found, or already has a pending confirmation) doesn't stop the rest of the batch from being processed.

**Endpoint:** `POST /bug_fix_confirmations/bulk`

**Request Body:**

- `bug_ids` (array[number], required) - IDs of the bugs to confirm, up to 50 per request
- `customer_test_environment` (object, required) - Same shape as the [single bug endpoint](#confirm-a-single-bug-fix)
- `additional_requirement` (string, optional)
- `allow_device_clouds` (boolean, optional, default: `false`)
- `requirements` (array, optional) - Same shape as the [single bug endpoint](#confirm-a-single-bug-fix)

**Example Request:**

{% code language="bash" showLineNumbers=true %}

```bash
curl -X POST "https://api.test.io/integration/v1/bug_fix_confirmations/bulk" \
  -H "Authorization: Token YOUR_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "bug_ids": [123, 124, 125],
    "customer_test_environment": { "id": 42 },
    "requirements": [{ "id": 7 }]
  }'
```

{% /code %}

**Response:** `201 Created`

```json
{
  "results": [
    {
      "bug_id": 123,
      "status": "created",
      "bug_fix_confirmation": { "id": 501, "status": "pending", "...": "..." }
    },
    { "bug_id": 124, "status": "error", "error": "Bug Fix Confirmation pending already exists" },
    { "bug_id": 125, "status": "error", "error": "Bug not found" }
  ]
}
```

The response is always `201 Created`, even when some or all of the requested bugs fail — check each entry's `status` field (`created` or `error`) rather than relying on the top-level HTTP status.

**Response:** `400 Bad Request`

Returned when `bug_ids` contains more than 50 entries.
