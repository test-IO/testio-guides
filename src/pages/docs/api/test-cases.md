---
title: Test Cases
description: Create test cases
---

Create test cases for your products.

## Create a bulk of test cases

Create multiple test cases at once.

**Endpoint:** `POST /products/{product_id}/test_cases`

**Parameters:**

- `product_id` (number, required) - ID of the Product

**Request Body:**

- `test_cases` (array[TestCase], required) - Array of test case objects

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
        "steps": "1. Navigate to login page\n2. Enter credentials\n3. Click login"
      }
    ]
  }'
```
{% /code %}

**Response:** `201 Created`

Returns an array of created test case objects.

