---
title: Test Cases
description: Create, list, update, and delete test cases
---

Create and manage test cases for your products.

## Get test case

Retrieve a specific test case by ID.

**Endpoint:** `GET /products/{product_id}/test_cases/{test_case_id}`

**Parameters:**

- `product_id` (number, required) - ID of the Product
- `test_case_id` (number, required) - ID of the Test Case

**Example Request:**

{% code language="bash" showLineNumbers=true %}

```bash
curl -X GET "https://api.test.io/customer/v2/products/1/test_cases/123" \
  -H "Authorization: Token YOUR_API_TOKEN"
```

{% /code %}

**Response:** `200 OK`

Returns the test case object. See the response shape in [Create a bulk of test cases](#create-a-bulk-of-test-cases) below.

## List test cases

Returns all visible (non-hidden) test cases for a product.

**Endpoint:** `GET /products/{product_id}/test_cases`

**Parameters:**

- `product_id` (number, required) - ID of the Product

**Example Request:**

{% code language="bash" showLineNumbers=true %}

```bash
curl -X GET "https://api.test.io/customer/v2/products/1/test_cases" \
  -H "Authorization: Token YOUR_API_TOKEN"
```

{% /code %}

**Response:** `200 OK`

Returns an array of test case objects. See the response shape in [Create a bulk of test cases](#create-a-bulk-of-test-cases) below.

## Create a bulk of test cases

Create multiple test cases at once.

**Endpoint:** `POST /products/{product_id}/test_cases`

**Parameters:**

- `product_id` (number, required) - ID of the Product

**Request Body:**

- `test_cases` (array[TestCase], required) - Array of test case objects

**TestCase Object:**

- `title` (string, required) - Title of the test case
- `feature_id` (number, required) - ID of the Feature the test case belongs to
- `test_case_steps` (array[Step], required) - Array of step objects
- `target_idx` (string, optional) - Reference of the test case in other system

**Step Object:**

- `description` (string, required) - Description of the step
- `target_idx` (string, optional) - Reference of the test case step in other system

**Example Request:**

{% code language="bash" showLineNumbers=true %}

```bash
curl -X POST "https://api.test.io/customer/v2/products/1/test_cases" \
  -H "Authorization: Token YOUR_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "test_cases": [
      {
        "title": "Login Test",
        "feature_id": 123,
        "test_case_steps": [
          {
            "description": "Navigate to login page"
          },
          {
            "description": "Enter credentials"
          },
          {
            "description": "Click login"
          }
        ]
      }
    ]
  }'
```

{% /code %}

**Response:** `201 Created`

Returns an array of created test case objects.

{% callout type="note" %}
In the response, the steps field is returned as `steps` (not `test_case_steps` as in the request). Each step object in the response also includes `id`, `test_case_id`, and `target_idx` fields.
{% /callout %}

## Update test case

Updates the top-level fields of a test case. Test case steps are not managed through this endpoint.

**Endpoint:** `PUT /products/{product_id}/test_cases/{test_case_id}`

**Parameters:**

- `product_id` (number, required) - ID of the Product
- `test_case_id` (number, required) - ID of the Test Case

All attributes must be provided inside the root object `test_case`. All fields are optional — only the fields you provide are updated.

**Request Body:**

- `title` (string, optional) - Title of the test case
- `requirements` (string, optional) - Requirements of the test case
- `target_idx` (string, optional) - Reference of the test case in other system
- `feature_id` (number, optional) - ID of the Feature to move the test case to. Must belong to the same product.

**Example Request:**

{% code language="bash" showLineNumbers=true %}

```bash
curl -X PUT "https://api.test.io/customer/v2/products/1/test_cases/123" \
  -H "Authorization: Token YOUR_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "test_case": {
      "title": "Login Test (updated)"
    }
  }'
```

{% /code %}

**Response:** `200 OK`

Returns the updated test case object. See the response shape in [Create a bulk of test cases](#create-a-bulk-of-test-cases) above.

## Delete test case

Deletes the specified test case from the product.

**Endpoint:** `DELETE /products/{product_id}/test_cases/{test_case_id}`

**Parameters:**

- `product_id` (number, required) - ID of the Product
- `test_case_id` (number, required) - ID of the Test Case

{% callout type="note" %}
If the test case is already in use by a test cycle, it is not permanently deleted — it is hidden instead so historical test results remain intact. Hidden test cases no longer appear in [List test cases](#list-test-cases).
{% /callout %}

**Example Request:**

{% code language="bash" showLineNumbers=true %}

```bash
curl -X DELETE "https://api.test.io/customer/v2/products/1/test_cases/123" \
  -H "Authorization: Token YOUR_API_TOKEN"
```

{% /code %}

**Response:** `204 No Content`
