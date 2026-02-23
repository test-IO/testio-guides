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

**TestCase Object:**

- `title` (string, required) - Title of the test case
- `feature_id` (number, required) - ID of the Feature the test case belongs to
- `test_case_steps` (array[Step], required) - Array of step objects

**Step Object:**

- `description` (string, required) - Description of the step

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
