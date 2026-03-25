---
title: Exploratory Tests
description: Create, update, launch, duplicate, and manage exploratory tests
---

Create and manage exploratory tests for your products.

> **Prerequisites**:
>
> - You need a product (see [Products](/docs/api/products))
> - A test environment is required (see [Test Environments](/docs/api/test-environments))
> - Either features (see [Features](/docs/api/features)) or a test template (see [Test Templates](/docs/api/test-templates)) must be provided
> - For mobile apps, you may need to upload a binary app first (see [Binary Apps](/docs/api/binary-apps))

## Get exploratory test

Retrieve a specific exploratory test by ID.

**Endpoint:** `GET /exploratory_tests/{exploratory_test_id}`

**Parameters:**

- `exploratory_test_id` (number, required) - ID of the Exploratory test

**Query Parameters:**

| Parameter    | Type  | Required | Description                                                                                                                                                                                                                                                                                                                                                                   |
| ------------ | ----- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `includes[]` | array | No       | Optional associations to expand. Supported value: `user_stories`. When included, `user_stories` in each feature returns objects with `id`, `path`, `title`, `feature_id`, `user_story_version_id`, `execution_status`, `tested_by_count`, `bugs_found`, `bug_ids` instead of plain strings. `execution_status` can be `"not_tested"`, `"passed"`, `"failed"`, or `"blocked"`. |

**Example Request:**

{% code language="bash" showLineNumbers=true %}

```bash
curl -X GET "https://api.test.io/customer/v2/exploratory_tests/123" \
  -H "Authorization: Token YOUR_API_TOKEN"
```

{% /code %}

**Response:** `200 OK`

Returns the exploratory test object with full details including test environment, features, requirements, execution metrics, and more. By default, `user_stories` in each feature is an array of path strings. Pass `includes[]=user_stories` to expand them into objects.

### Execution Metrics

The response includes execution metrics at multiple levels, computed from customer-visible test results only (reviewed/verified data):

**Analytics** (top-level `analytics` object):

| Field                  | Type   | Description                                                                       |
| ---------------------- | ------ | --------------------------------------------------------------------------------- |
| `testers_count`        | number | Number of testers who participated                                                |
| `devices_count`        | number | Number of devices used                                                            |
| `total_features`       | number | Total number of features in the test                                              |
| `tested_features`      | number | Features with at least one tested user story or bug                               |
| `passed_features`      | number | Tested features where all user stories passed and no bugs                         |
| `failed_features`      | number | Tested features with at least one failed execution or bug                         |
| `total_user_stories`   | number | Total number of user stories across all features                                  |
| `tested_user_stories`  | number | User stories with at least one execution                                          |
| `passed_user_stories`  | number | Tested user stories where all executions passed and no bugs                       |
| `failed_user_stories`  | number | Tested user stories with at least one failed execution or bug                     |
| `blocked_user_stories` | number | Tested user stories where at least one execution is blocked (and none are failed) |
| `total_bugs`           | number | Total number of customer-visible bugs                                             |

**Feature-level** (each object in `features` array):

| Field              | Type   | Description                                            |
| ------------------ | ------ | ------------------------------------------------------ |
| `execution_status` | string | `"not_tested"`, `"passed"`, `"failed"`, or `"blocked"` |
| `tester_count`     | number | Number of distinct testers who tested this feature     |
| `bugs_found`       | number | Number of customer-visible bugs for this feature       |
| `bug_ids`          | array  | Array of bug IDs associated with this feature          |

**User story-level** (each object in `user_stories` when using `includes[]=user_stories`):

| Field                   | Type   | Description                                            |
| ----------------------- | ------ | ------------------------------------------------------ |
| `id`                    | number | User story ID (same as the standalone user story)      |
| `path`                  | string | User story description                                 |
| `title`                 | string | User story title                                       |
| `feature_id`            | number | ID of the parent feature                               |
| `user_story_version_id` | number | ID of the user story version within this test cycle    |
| `execution_status`      | string | `"not_tested"`, `"passed"`, `"failed"`, or `"blocked"` |
| `tested_by_count`       | number | Number of distinct testers who tested this user story  |
| `bugs_found`            | number | Number of bugs found for this user story               |
| `bug_ids`               | array  | Array of bug IDs associated with this user story       |

**Execution status logic:**

| Status         | Condition                                                        |
| -------------- | ---------------------------------------------------------------- |
| `"not_tested"` | No executions exist for this user story or feature               |
| `"failed"`     | At least one execution has failed, OR at least one bug is linked |
| `"blocked"`    | At least one execution is blocked, and none are failed           |
| `"passed"`     | All executions passed with no bugs                               |

At the feature level, `execution_status` is derived from its user stories. A feature without user stories can only be `"not_tested"` or `"failed"` (if it has bugs).

### Example Response

{% code language="json" showLineNumbers=true %}

```json
{
  "exploratory_test": {
    "id": 123,
    "test_title": "Checkout Flow Test",
    "status": "completed",
    "analytics": {
      "testers_count": 5,
      "devices_count": 8,
      "total_features": 3,
      "tested_features": 2,
      "passed_features": 1,
      "failed_features": 1,
      "total_user_stories": 10,
      "tested_user_stories": 7,
      "passed_user_stories": 5,
      "failed_user_stories": 1,
      "blocked_user_stories": 1,
      "total_bugs": 4
    },
    "features": [
      {
        "id": 1,
        "feature_id": 500,
        "title": "Shopping Cart",
        "description": "Verify cart functionality",
        "howtofind": "Navigate to cart",
        "execution_status": "failed",
        "tester_count": 3,
        "bugs_found": 2,
        "bug_ids": [101, 102],
        "user_stories": ["As a customer, I want to add items to my cart"]
      }
    ]
  }
}
```

{% /code %}

**Example Response (with `includes[]=user_stories`):**

{% code language="json" showLineNumbers=true %}

```json
{
  "exploratory_test": {
    "id": 123,
    "features": [
      {
        "id": 1,
        "feature_id": 500,
        "title": "Shopping Cart",
        "execution_status": "failed",
        "tester_count": 3,
        "bugs_found": 2,
        "bug_ids": [101, 102],
        "user_stories": [
          {
            "id": 10,
            "path": "As a customer, I want to add items to my cart",
            "title": "As a customer, I want to add items to my cart",
            "feature_id": 500,
            "user_story_version_id": 9001,
            "execution_status": "passed",
            "tested_by_count": 2,
            "bugs_found": 0,
            "bug_ids": []
          }
        ]
      }
    ]
  }
}
```

{% /code %}

## List exploratory tests

Returns a paginated list of exploratory tests for the specified product.

**Endpoint:** `GET /products/{product_id}/exploratory_tests{?page,per_page}`

**Parameters:**

- `product_id` (number, required) - ID of the Product
- `page` (number, optional) - Page number of the result set
- `per_page` (number, optional) - Number of items per page when pagination is applied. Used only if **page** is provided. Default: 25

**Query Parameters:**

| Parameter    | Type  | Required | Description                                                                                                                                                                 |
| ------------ | ----- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `includes[]` | array | No       | Optional associations to expand. Supported value: `user_stories`. Note: execution metrics are only available on the [Get exploratory test](#get-exploratory-test) endpoint. |

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
- `requirements` (array, optional) - Device requirements (see [Building Requirements Array](#building-requirements-array) below)
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

> **Note on `user_stories` in response**: The `user_stories` field in the response is an array of path strings by default. To get expanded user story objects, use `includes[]=user_stories` on the GET endpoints (see [Get exploratory test](#get-exploratory-test)).

## Update exploratory test

Updates an existing exploratory test. You can modify test parameters, features, and the test environment.

**Endpoint:** `PUT /exploratory_tests/{exploratory_test_id}`

**Parameters:**

- `exploratory_test_id` (number, required) - ID of the Exploratory test

All attributes must be provided inside the root object `exploratory_test`. Only provided fields will be updated.

### Attributes

Same attributes as [Create exploratory test](#create-exploratory-test), with the following differences:

- `test_environment` (object, **optional**) - Test environment related attributes. If omitted, the existing test environment is kept
- `features` (array, optional) - Features to be tested. If omitted, existing features are kept
- `test_template` is **not available** for updates

**Example Request:**

{% code language="bash" showLineNumbers=true %}

```bash
curl -X PUT "https://api.test.io/customer/v2/exploratory_tests/123" \
  -H "Authorization: Token YOUR_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "exploratory_test": {
      "test_title": "Updated Checkout Flow Test",
      "goal": "Re-validate the checkout process after fixes",
      "features": [
        {
          "id": 15
        },
        {
          "title": "Payment Flow",
          "description": "Verify payment methods work correctly.",
          "howtofind": "Proceed to payment after adding items to cart.",
          "user_stories": [
            "As a customer, I want to pay with a credit card.",
            "As a customer, I want to apply a discount code."
          ]
        }
      ]
    }
  }'
```

{% /code %}

**Response:** `200 OK`

Returns the updated exploratory test object with full details.

## Launch exploratory test

Launches a previously created exploratory test that has not been launched yet. This is useful when the test was created with `auto_launch: false`.

**Endpoint:** `POST /exploratory_tests/{exploratory_test_id}/launch`

**Parameters:**

- `exploratory_test_id` (number, required) - ID of the Exploratory test

**Example Request:**

{% code language="bash" showLineNumbers=true %}

```bash
curl -X POST "https://api.test.io/customer/v2/exploratory_tests/123/launch" \
  -H "Authorization: Token YOUR_API_TOKEN"
```

{% /code %}

**Response:** `200 OK`

Returns the launched exploratory test object with full details.

## Duplicate exploratory test

Creates a copy of an existing exploratory test. The duplicated test will have the same configuration (features, test environment, requirements, etc.) but will be a new, independent test.

**Endpoint:** `POST /exploratory_tests/{exploratory_test_id}/duplicate`

**Parameters:**

- `exploratory_test_id` (number, required) - ID of the Exploratory test to duplicate

**Example Request:**

{% code language="bash" showLineNumbers=true %}

```bash
curl -X POST "https://api.test.io/customer/v2/exploratory_tests/123/duplicate" \
  -H "Authorization: Token YOUR_API_TOKEN"
```

{% /code %}

**Response:** `200 OK`

Returns the newly created (duplicated) exploratory test object with full details. The duplicated test will have a new ID.

## Create test template from exploratory test

Creates a reusable test template based on an existing exploratory test's configuration. The template captures the test scenario settings (features, requirements, etc.) so they can be reused when creating future tests.

**Endpoint:** `POST /exploratory_tests/{exploratory_test_id}/templates`

**Parameters:**

- `exploratory_test_id` (number, required) - ID of the Exploratory test to create a template from

**Request Body:**

- `test_template` (object, required)
  - `title` (string, required) - Title for the new test template

**Example Request:**

{% code language="bash" showLineNumbers=true %}

```bash
curl -X POST "https://api.test.io/customer/v2/exploratory_tests/123/templates" \
  -H "Authorization: Token YOUR_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "test_template": {
      "title": "Checkout Flow Template"
    }
  }'
```

{% /code %}

**Response:** `201 Created`

Returns the newly created test template object. See [Test Templates](/docs/api/test-templates) for more details on the response format.

### Building Requirements Array

The `requirements` array allows you to specify device targeting for your test. Each requirement object can include:

- `category` - Device category (e.g., mobile, desktop, tablet)
- `vendor` - Device manufacturer (e.g., Apple, Samsung)
- `devices` - Specific device models
- `operating_system` - OS (e.g., iOS, Android, Windows)
- `min_operating_system_version` / `max_operating_system_version` - OS version range
- `browsers` - Browser applications
- `input_devices` - Input methods (e.g., keyboard, touch)

**Important**: All IDs in the requirements array (category, vendor, devices, operating_system, browsers, etc.) must be retrieved from the [Public Device API](https://api.test.io/public/v2/devices). Use the Public Device API to:

1. List available device categories, vendors, and models
2. Get operating system and browser options
3. Retrieve the correct IDs for each requirement field

Example: To find available iOS devices, query the Public Device API for devices with `operating_system: "iOS"`, then use the returned IDs in your requirements array.

For a simpler approach using device type, OS, and browser names, see the [Requirements](/docs/api/requirements) page which explains the alternative format used in test case tests.
