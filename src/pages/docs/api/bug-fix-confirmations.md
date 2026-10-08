---
title: Bug Fix Confirmations
description: Request confirmation that one or more bugs have been fixed
---

Request a Bug Fix Confirmation (BFC) to have testers verify that a bug has been fixed.

> Not to be confused with [Bug Report Confirmations](/docs/api/bug-report-confirmations), which asks testers for more details when they report a bug.

## Confirm bug fixes in bulk

Request Bug Fix Confirmations for up to 50 bugs in a single call. Each entry in `bug_fix_confirmations` carries its own `customer_test_environment`, `requirements`, `additional_requirement`, and `allow_device_clouds` — so different bugs in the same call can be confirmed against different environments or requirements.

Each bug is processed independently: a failure on one bug (not found, already has a pending confirmation, or an invalid test environment) doesn't stop the rest of the batch from being processed.

**Endpoint:** `POST /bug_fix_confirmations/bulk`

**Request Body:**

- `bug_fix_confirmations` (array, required) - Up to 50 entries, one per bug to confirm. Each entry is an object:
  - `bug_id` (number, required) - ID of the bug to confirm
  - `customer_test_environment` (object, required) - Test environment to confirm the fix against
    - `id` (number, required) - ID of an existing Customer Test Environment to reuse
  - `additional_requirement` (string, optional) - Free-form extra instructions for testers
  - `allow_device_clouds` (boolean, optional, default: `false`) - Allow testers to use device clouds
  - `requirements` (array, optional) - Device/targeting requirements for this bug. Each entry is an object:
    - `id` (number, optional) - Target idx of an existing Requirement to reuse

> If `requirements` is omitted for an entry, requirements are derived automatically from that bug's test's default device targeting. `customer_test_environment` and `requirements` must reference existing resources created beforehand (through the portal or their own endpoints) — this endpoint does not create new test environments or requirements inline.

**Example Request:**

{% code language="bash" showLineNumbers=true %}

```bash
curl -X POST "https://api.test.io/customer/v2/bug_fix_confirmations/bulk" \
  -H "Authorization: Token YOUR_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "bug_fix_confirmations": [
      { "bug_id": 123, "customer_test_environment": { "id": 42 }, "requirements": [{ "id": 7 }] },
      { "bug_id": 124, "customer_test_environment": { "id": 42 }, "requirements": [{ "id": 7 }] },
      { "bug_id": 125, "customer_test_environment": { "id": 43 } }
    ]
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

Returned when `bug_fix_confirmations` contains more than 50 entries.

## Fetch bug fix confirmations

Fetch the bug fix confirmations for a bug.

**Endpoint:** `GET /bug_fix_confirmations`

**Query Parameters:**

- `bug_id` (number, required) - ID of the Bug

**Example Request:**

{% code language="bash" showLineNumbers=true %}

```bash
curl -X GET "https://api.test.io/customer/v2/bug_fix_confirmations?bug_id=123" \
  -H "Authorization: Token YOUR_API_TOKEN"
```

{% /code %}

**Response:** `200 OK`

Returns the bug fix confirmations for the given bug.
