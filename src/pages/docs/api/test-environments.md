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

**Request Body:**

> **Note:** Exactly one access method must be provided: `url` for web environments, `file_url` or `file_base_64`/`file_name` for mobile app uploads, or `binary_app_id` for a previously uploaded binary app.

- `test_environment` (TestEnvironment Create, required) - Test environment object
  - `title` (string, required) - Title of the test environment
  - `url` (string) - URL of the website or app. Required when `file_url` and `file_base_64` are not provided
  - `username` (string, optional) - Username to access the test environment
  - `password` (string, optional) - Password to access the test environment
  - `access` (string, optional) - Additional access information
  - `proxy` (boolean, optional, default: false) - Set true to use test IO proxy
  - `allow_orders` (boolean, optional, default: false) - Allowing testers to place orders and bookings
  - `binary_app_id` (number, optional) - ID of the binary app. Cannot be used together with `url`
  - `file_url` (string, optional) - URL of the app build to be downloaded. Cannot be used together with `url`
  - `file_base_64` (string, optional) - App file APK, IPA for mobile app tests encoded in base 64. Cannot be used together with `url` or `file_url`
  - `file_name` (string, optional) - Name of the app file APK, IPA for mobile app tests. Required when `file_base_64` is provided
  - `environment_test_information` (EnvironmentTestInformation Create, optional) - Environment test information

**Example Request:**

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

**Response:** `201 Created`

Returns the created test environment object.

## Update test environment

Update an existing test environment.

**Endpoint:** `PUT /products/{product_id}/test_environments/{test_environment_id}`

**Parameters:**

- `product_id` (number, required) - ID of the Product
- `test_environment_id` (number, required) - ID of the Test Environment

**Request Body:**

- `test_environment` (TestEnvironment Create, required) - Test environment object (same structure as create)

**Example Request:**

{% code language="bash" showLineNumbers=true %}

```bash
curl -X PUT "https://api.test.io/customer/v2/products/1/test_environments/42" \
  -H "Authorization: Token YOUR_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "test_environment": {
      "title": "Updated Staging Environment",
      "url": "https://staging-updated.example.com"
    }
  }'
```

{% /code %}

**Response:** `200 OK`

Returns the updated test environment object.

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
