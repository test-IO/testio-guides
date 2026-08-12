---
title: Access Claims
description: Create and manage access claims groups and test accounts
---

Create access claims groups pre-populated with test accounts and an expiration, so testers can access password-protected pages during a test cycle. This mirrors what you can already do manually in the Access Claims UI.

## List access claims

Returns the customer's access claims pages.

**Endpoint:** `GET /access_claims`

**Response:** `200 OK`

Returns `access_claim_pages`, an array of access claims pages (`id`, `page_url`, `name`, `intro`), plus `meta.base_path` — the Access Claims base URL used to build full page links.

**Error Responses:**

- `401 Unauthorized` - Missing or invalid API token
- `403 Forbidden` - Access Claims is not enabled for your account

## Create an access claims group

Create a new access claims group with initial test accounts and an expiration, in one call.

**Endpoint:** `POST /access_claims`

**Request Body:**

- `name` (string, required) - Group name
- `intro` (string, optional) - Introductory text shown on the access claims page
- `test_cycle_url` (string, optional) - URL of the related test cycle
- `expiration_period` (number, required) - Days until the group expires. One of `1`, `2`, `7`, `14`, `30`, `90`, `180`, `365`
- `access_entries` (array[Access Entry Create], required, min 1) - Test accounts to create in this group
  - `credentials` (string, required) - Login credentials for this test account (format is up to you — e.g. `"username:password"` — testers see this text as-is)

**Example Request:**

{% code language="bash" showLineNumbers=true %}

```bash
curl -X POST "https://api.test.io/customer/v2/access_claims" \
  -H "Authorization: Token YOUR_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "CI Run #4821",
    "expiration_period": 2,
    "access_entries": [
      { "credentials": "user1:pass1" },
      { "credentials": "user2:pass2" }
    ]
  }'
```

{% /code %}

**Response:** `201 Created`

```json
{
  "id": 42,
  "token": "abc123",
  "page_url": "https://access.claims/pages/abc123",
  "name": "CI Run #4821",
  "expires_at": "2026-08-12T10:00:00Z",
  "access_entries": [{ "id": 101 }, { "id": 102 }]
}
```

Credentials are never returned in the response — store what you sent, since it isn't retrievable afterward.

**Error Responses:**

- `400 Bad Request` - Missing required field, or `expiration_period`/`access_entries` value fails validation
- `401 Unauthorized` - Missing or invalid API token
- `403 Forbidden` - Access Claims is not enabled for your account
- `422 Unprocessable Entity` - The access claims group could not be created
