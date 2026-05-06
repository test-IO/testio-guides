---
title: Test Environments
description: Manage test environments
---

Manage test environments for your products.

> **Prerequisites**: You need a product before creating test environments. See [Products](/docs/api/products) to get or create a product. For mobile app tests, you may need to upload a binary app first (see [Binary Apps](/docs/api/binary-apps)).

> **Large files**: For mobile apps larger than typical upload limits, use the direct upload URL flow in [Binary Apps](/docs/api/binary-apps#get-direct-upload-url-large-files) and then reference the resulting `binary_app_id` here.

## List test environments

Retrieve all test environments for a specific product.

**Endpoint:** `GET /products/{product_id}/test_environments`

**Parameters:**

- `product_id` (number, required) - ID of the Product

**Example Request:**

{% code language="bash" showLineNumbers=true %}

```bash
curl -X GET "https://api.test.io/customer/v2/products/1/test_environments" \
  -H "Authorization: Token YOUR_API_TOKEN"
```

{% /code %}

**Response:** `200 OK`

Returns an array of test environment objects.

## Get test environment

Retrieve a specific test environment by ID.

**Endpoint:** `GET /products/{product_id}/test_environments/{test_environment_id}`

**Parameters:**

- `product_id` (number, required) - ID of the Product
- `test_environment_id` (number, required) - ID of the Test Environment

**Example Request:**

{% code language="bash" showLineNumbers=true %}

```bash
curl -X GET "https://api.test.io/customer/v2/products/1/test_environments/42" \
  -H "Authorization: Token YOUR_API_TOKEN"
```

{% /code %}

**Response:** `200 OK`

Returns the test environment object.

## Create test environment

Create a new test environment.

**Endpoint:** `POST /products/{product_id}/test_environments`

**Parameters:**

- `product_id` (number, required) - ID of the Product

### Access methods

A test environment must have exactly **one** access method. Pick the one that fits your case and provide only its fields — combining fields from different access methods will be rejected.

| Access method | When to use | Required field(s) |
| --- | --- | --- |
| **Web URL** | Testing a website or web app | `url` |
| **Existing binary app** | Mobile app already uploaded via [Binary Apps](/docs/api/binary-apps) | `binary_app_id` |
| **Remote binary download** | Mobile app hosted at a URL we should fetch | `file_url` |
| **Inline binary upload** | Mobile app sent inline as base64 | `file_base_64` + `file_name` |

### Request body

- `test_environment` (object, required)
  - `title` (string, required) — Title of the test environment
  - **One** access method from the table above (see field details below)
  - `username` (string, optional) — Username to access the test environment
  - `password` (string, optional) — Password to access the test environment
  - `access` (string, optional) — Additional access information
  - `proxy` (boolean, optional, default: `false`) — Set `true` to route traffic through the test IO proxy
  - `allow_orders` (boolean, optional, default: `false`) — Allow testers to place orders and bookings
  - `environment_test_information` (object, optional) — Per-environment test guidance. See [Environment test information](#environment-test-information)

**Access method fields:**

- `url` (string) — URL of the website or web app
- `binary_app_id` (number) — ID of a binary app previously uploaded via [Binary Apps](/docs/api/binary-apps). **Note:** providing `binary_app_id` alone is sufficient — do not also send `url`, `file_url`, or `file_base_64`
- `file_url` (string) — URL we will download the app build from (APK, IPA, etc.)
- `file_base_64` (string) — App file (APK, IPA, …) encoded in base64. Must be sent together with `file_name`
- `file_name` (string) — File name for the base64 upload (e.g. `app-release.apk`)

### Environment test information

Optional structured guidance attached to the environment. When provided, it must be an **object** with these fields:

- `data_type` (string, required) — One of `custom`, `access_claims`
- `page_url` (string, required) — Absolute `http://` or `https://` URL
- `description` (string, optional, max 255 chars) — Free-form description

> Sending `environment_test_information` as a plain string will be rejected — it must be an object with at least `data_type` and `page_url`.

### Example: Web URL

{% code language="bash" showLineNumbers=true %}

```bash
curl -X POST "https://api.test.io/customer/v2/products/1/test_environments" \
  -H "Authorization: Token YOUR_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "test_environment": {
      "title": "Staging Environment",
      "url": "https://staging.example.com",
      "username": "tester",
      "password": "secret",
      "access": "VPN required",
      "allow_orders": false
    }
  }'
```

{% /code %}

### Example: Existing binary app

{% code language="bash" showLineNumbers=true %}

```bash
curl -X POST "https://api.test.io/customer/v2/products/1/test_environments" \
  -H "Authorization: Token YOUR_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "test_environment": {
      "title": "Android build 47",
      "binary_app_id": 47
    }
  }'
```

{% /code %}

### Example: With environment test information

{% code language="bash" showLineNumbers=true %}

```bash
curl -X POST "https://api.test.io/customer/v2/products/1/test_environments" \
  -H "Authorization: Token YOUR_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "test_environment": {
      "title": "Staging with login flow",
      "url": "https://staging.example.com",
      "environment_test_information": {
        "data_type": "custom",
        "page_url": "https://staging.example.com/login",
        "description": "Use the seeded test accounts on this page"
      }
    }
  }'
```

{% /code %}

**Response:** `201 Created` — Returns the created test environment object.

## Update test environment

Update an existing test environment. Partial updates are supported: send **only the fields you want to change**, and everything else is preserved.

**Endpoint:** `PUT /products/{product_id}/test_environments/{test_environment_id}`

**Parameters:**

- `product_id` (number, required) - ID of the Product
- `test_environment_id` (number, required) - ID of the Test Environment

**Request Body:**

- `test_environment` (object, required) — Any subset of the fields documented under [Create test environment](#create-test-environment)

> Unlike create, **no field is required** on update. To rename an environment, send only `title`. To rotate credentials, send only `username`/`password`. You can also switch the access method (e.g. from `url` to `binary_app_id`) by sending the new access field.

### Example: Rename only

{% code language="bash" showLineNumbers=true %}

```bash
curl -X PUT "https://api.test.io/customer/v2/products/1/test_environments/42" \
  -H "Authorization: Token YOUR_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "test_environment": {
      "title": "Updated Staging Environment"
    }
  }'
```

{% /code %}

### Example: Update URL

{% code language="bash" showLineNumbers=true %}

```bash
curl -X PUT "https://api.test.io/customer/v2/products/1/test_environments/42" \
  -H "Authorization: Token YOUR_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "test_environment": {
      "url": "https://staging-v2.example.com"
    }
  }'
```

{% /code %}

**Response:** `200 OK` — Returns the updated test environment object.

## Delete test environment

Delete a test environment.

**Endpoint:** `DELETE /products/{product_id}/test_environments/{test_environment_id}`

**Parameters:**

- `product_id` (number, required) - ID of the Product
- `test_environment_id` (number, required) - ID of the Test Environment

**Example Request:**

{% code language="bash" showLineNumbers=true %}

```bash
curl -X DELETE "https://api.test.io/customer/v2/products/1/test_environments/42" \
  -H "Authorization: Token YOUR_API_TOKEN"
```

{% /code %}

**Response:** `200 OK`

Returns the deleted test environment object.
