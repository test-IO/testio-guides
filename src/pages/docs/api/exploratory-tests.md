---
title: Exploratory Tests
description: Create and manage exploratory tests
---

Create and manage exploratory tests for your products.

> **Prerequisites**: 
> - You need a product (see [Products](/docs/api/products))
> - A test environment is required (see [Test Environments](/docs/api/test-environments))
> - Either features (see [Features](/docs/api/features)) or a test template (see [Test Templates](/docs/api/test-templates)) must be provided
> - For mobile apps, you may need to upload a binary app first (see [Binary Apps](/docs/api/binary-apps))

## Get exploratory test

Retrieve a specific exploratory test by ID.

**Endpoint:** `GET /exploratory_tests/{exploratory_test_id}`

**Parameters:**

- `exploratory_test_id` (number, required) - ID of the Exploratory test

**Example Request:**

{% code language="bash" showLineNumbers=true %}
```bash
curl -X GET "https://api.test.io/customer/v2/exploratory_tests/123" \
  -H "Authorization: Token YOUR_API_TOKEN"
```
{% /code %}

**Response:** `200 OK`

Returns the exploratory test object with full details including test environment, features, requirements, and more.

## List exploratory tests

Returns a paginated list of exploratory tests for the specified product.

**Endpoint:** `GET /products/{product_id}/exploratory_tests{?page,per_page}`

**Parameters:**

- `product_id` (number, required) - ID of the Product
- `page` (number, optional) - Page number of the result set
- `per_page` (number, optional) - Number of items per page when pagination is applied. Used only if **page** is provided. Default: 25

**Notes:**

If `page` parameter is omitted, pagination is not applied and the last 150 tests are returned.

**Example Request:**

{% code language="bash" showLineNumbers=true %}
```bash
curl -X GET "https://api.test.io/customer/v2/products/1/exploratory_tests?page=1&per_page=25" \
  -H "Authorization: Token YOUR_API_TOKEN"
```
{% /code %}

**Response:** `200 OK`

Returns an array of exploratory test objects.

## Create exploratory test

Creates a new exploratory test for the specified product.

**Endpoint:** `POST /products/{product_id}/exploratory_tests`

**Parameters:**

- `product_id` (number, required) - ID of the Product

All attributes must be provided inside the root object `exploratory_test`.

### Attributes

- `test_title` (string, optional) - Test title
- `goal` (string, optional) - Goal of the test
- `out_of_scope` (string, optional) - Out of scope items
- `instructions` (string, optional) - Additional requirements for testers
- `start_at` (string, optional) - Start date and time of the test. Default: within the next full hour
- `duration` (string, optional) - Duration of the test. Default:
  - 2 hours for rapid test
  - 24 hours for usability and focused test
  - 28 hours for coverage test
- `report_language` (string, optional, default: **en**) - Language in which bugs will be reported. Allowed values: **en**, **de**
- `testing_type` (string, optional, default: **coverage**) - Type of the test. Allowed values: **coverage**, **usability**, **rapid**, **focused**
- `bug_severities` (object, optional) - Bug severities related attributes (only applicable if `testing_type` is **focused**)
  - `low` (boolean, optional, default: **false**) - Enable low-severity bugs
  - `high` (boolean, optional, default: **false**) - Enable high-severity bugs
  - `critical` (boolean, optional, default: **false**) - Enable critical-severity bugs
- `section_id` (number, optional) - Section ID to associate the test with
- `allow_device_clouds` (boolean, optional, default: **false**) - Allow testers to use device clouds
- `requirements` (array, optional) - Device requirements
- `attachments` (array, optional) - Test attachments
- `use_default_devices` (boolean, optional, default: **true**) - Whether to use default devices selection
- `test_environment` (object, **required**) - Test environment related attributes
- `features` (array, optional) - Features to be tested
- `test_template` (object, optional) - Test template related attributes

⚠️ **Constraint**: `features` and `test_template` are mutually exclusive - exactly one must be provided.

### Example Request

{% code language="json" showLineNumbers=true %}
```json
{
  "exploratory_test": {
    "test_title": "Checkout Flow Test",
    "goal": "Validate the checkout process for usability and bugs",
    "out_of_scope": "Payment provider integration",
    "instructions": "Focus on speed and clarity of the checkout process.",
    "start_at": "2025-09-20T14:00:00Z",
    "duration": "30",
    "report_language": "en",
    "testing_type": "focused",
    "bug_severities": {
      "high": true,
      "critical": true
    },
    "section_id": 42,
    "allow_device_clouds": true,
    "requirements": [
      {
        "category": {
          "id": 5
        },
        "vendor": {
          "id": 10
        },
        "devices": [
          {
            "id": 101
          },
          {
            "id": 102
          }
        ],
        "operating_system": {
          "id": 20
        },
        "min_operating_system_version": {
          "id": 200
        },
        "max_operating_system_version": {
          "id": 205
        },
        "browsers": [
          {
            "id": 301
          }
        ],
        "input_devices": [
          {
            "id": 401
          }
        ]
      }
    ],
    "attachments": [
      {
        "id": 5
      },
      {
        "file_url": "https://example.com/checkout_flow.pdf"
      }
    ],
    "use_default_devices": false,
    "test_environment": {
      "title": "Staging Checkout Environment",
      "url": "https://staging.example.com/",
      "username": "tester",
      "password": "secret",
      "access": "VPN required",
      "allow_orders": false
    },
    "features": [
      {
        "id": 15
      },
      {
        "title": "Shopping Cart",
        "description": "Verify adding and removing items works as expected.",
        "howtofind": "Navigate to cart after adding an item.",
        "enable_default": true,
        "enable_content": true,
        "enable_visual": false,
        "user_stories": [
          "As a customer, I want to add items to my cart so I can purchase them.",
          "As a customer, I want to remove items from my cart if I change my mind."
        ],
        "use_markdown": true
      }
    ]
  }
}
```
{% /code %}

**Response:** `201 Created`

Returns the created exploratory test object with full details.

