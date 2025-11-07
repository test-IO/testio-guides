---
title: Test Case Tests
description: Create test case tests
---

Create test case tests for your products.

## Create a test case test

Create a new test case test.

**Endpoint:** `POST /products/{product_id}/test_case_test`

**Parameters:**

- `product_id` (number, required) - ID of the Product

**Request Body:**

- `test_case_test` (TestCaseTest Create, required) - Test case test object
  - `test_title` (string, optional) - Title of the test
  - `goal` (string, optional) - Goal of the test
  - `out_of_scope` (string, optional) - What is out of scope of the test
  - `instructions` (string, optional) - Additional instructions for the crowd
  - `start_at` (string, optional) - Start date and time of test. Default: within the next full hour
  - `duration` (string, optional) - Duration of the test in hours
  - `report_language` (ReportLanguage, optional) - Language for bug reports
  - `requirements` (array[Requirement Create], optional) - Device requirements
  - `test_cases` (array[TestCase Create], required) - Array of test cases
  - `test_environment` (TestEnvironment Create, required) - Test environment

**Example Request:**

{% code language="bash" showLineNumbers=true %}

```bash
curl -X POST "https://api.test.io/customer/v2/products/1/test_case_test" \
  -H "Authorization: Token YOUR_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "test_case_test": {
      "test_title": "Login Flow Test",
      "goal": "Validate login functionality",
      "duration": "2",
      "report_language": "en",
      "test_cases": [
        {
          "id": 1
        }
      ],
      "test_environment": {
        "title": "Staging",
        "url": "https://staging.example.com"
      }
    }
  }'
```

{% /code %}

**Response:** `201 Created`

Returns the created test case test object.

### Building the requirements array

Use `requirements` to target devices/platforms exactly. A requirement is a small object with a `type` and `value` (and sometimes additional keys), and you can pass multiple to combine filters.

- Device types: `{ "type": "device_type", "value": "desktop" }`, `{ "type": "device_type", "value": "mobile" }`
- Operating systems: `{ "type": "os", "value": "ios" }`, `{ "type": "os", "value": "android" }`, `{ "type": "os", "value": "windows" }`, `{ "type": "os", "value": "macos" }`
- OS versions: `{ "type": "os_version", "value": ">=17" }`, `{ "type": "os_version", "value": "13" }`
- Browsers: `{ "type": "browser", "value": "chrome" }`, `{ "type": "browser", "value": "safari" }`
- Locales: `{ "type": "locale", "value": "de-DE" }`

Example:

{% code language="json" showLineNumbers=true %}

```json
{
  "test_case_test": {
    "test_title": "Checkout - iOS Safari",
    "requirements": [
      { "type": "device_type", "value": "mobile" },
      { "type": "os", "value": "ios" },
      { "type": "browser", "value": "safari" }
    ],
    "test_cases": [{ "id": 1 }],
    "test_environment": { "title": "Staging", "url": "https://staging.example.com" }
  }
}
```

{% /code %}

See the dedicated [Requirements](/docs/api/requirements) page for full details and allowed values.
