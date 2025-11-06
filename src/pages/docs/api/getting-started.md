---
title: Getting Started
description: Quick start guide to setup, run a test, and fetch bugs
---

This guide will help you get started with the Test IO API. You'll learn how to authenticate, set up a test, run it, and retrieve the bugs found.

## Prerequisites

- A Test IO account
- An API token from `Integrations` → `API` in your Test IO account
- Your product already created in Test IO (or you'll create one via API)

## Step 1: Authenticate

All API requests require authentication using your API token in the Authorization header:

{% code language="bash" showLineNumbers=true %}
```bash
curl -X GET "https://api.test.io/customer/v2/products" \
  -H "Authorization: Token YOUR_API_TOKEN"
```
{% /code %}

See [Authentication](/docs/api/authentication) for detailed information.

## Step 2: Get or Create a Product

First, list your existing products:

{% code language="bash" showLineNumbers=true %}
```bash
curl -X GET "https://api.test.io/customer/v2/products" \
  -H "Authorization: Token YOUR_API_TOKEN"
```
{% /code %}

If you need to create a new product:

{% code language="bash" showLineNumbers=true %}
```bash
curl -X POST "https://api.test.io/customer/v2/products" \
  -H "Authorization: Token YOUR_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "product": {
      "title": "My Web Application",
      "description": "E-commerce platform",
      "product_type": "website",
      "industry": "retail"
    }
  }'
```
{% /code %}

Save the `product_id` from the response. You'll need it for subsequent steps.

See [Products](/docs/api/products) for more details.

## Step 3: Create a Test Environment

A test environment defines where testers will access your application:

{% code language="bash" showLineNumbers=true %}
```bash
curl -X POST "https://api.test.io/customer/v2/products/{product_id}/test_environments" \
  -H "Authorization: Token YOUR_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "test_environment": {
      "title": "Staging Environment",
      "url": "https://staging.example.com",
      "username": "tester",
      "password": "test_password",
      "access": "No special access required",
      "allow_orders": false
    }
  }'
```
{% /code %}

> **Note**: For mobile apps, upload your binary app first using [Binary Apps](/docs/api/binary-apps), then reference it with `binary_app_id` in the test environment.

See [Test Environments](/docs/api/test-environments) for more options.

## Step 4: Choose Your Test Approach

You have two options for defining what to test:

### Option A: Use Test Templates (Recommended for Quick Start)

List available templates for your product:

{% code language="bash" showLineNumbers=true %}
```bash
curl -X GET "https://api.test.io/customer/v2/test_templates?product_id={product_id}" \
  -H "Authorization: Token YOUR_API_TOKEN"
```
{% /code %}

Use a template ID when creating your test. See [Test Templates](/docs/api/test-templates).

### Option B: Create Features

Create features that define what testers should focus on:

{% code language="bash" showLineNumbers=true %}
```bash
curl -X POST "https://api.test.io/customer/v2/features" \
  -H "Authorization: Token YOUR_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "product_id": {product_id},
    "feature": {
      "title": "Checkout Process",
      "description": "Test the complete checkout flow",
      "howtofind": "Navigate to cart and proceed to checkout",
      "user_stories": [
        "As a customer, I want to complete a purchase",
        "As a customer, I want to see order confirmation"
      ]
    }
  }'
```
{% /code %}

See [Features](/docs/api/features) for more details.

## Step 5: Create and Run an Exploratory Test

Create an exploratory test that will be executed by testers:

{% code language="bash" showLineNumbers=true %}
```bash
curl -X POST "https://api.test.io/customer/v2/products/{product_id}/exploratory_tests" \
  -H "Authorization: Token YOUR_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "exploratory_test": {
      "test_title": "Checkout Flow Test",
      "goal": "Validate the checkout process for usability and bugs",
      "instructions": "Focus on the checkout flow and payment process",
      "duration": "24",
      "report_language": "en",
      "testing_type": "coverage",
      "test_environment": {
        "title": "Staging Environment",
        "url": "https://staging.example.com",
        "username": "tester",
        "password": "test_password"
      },
      "test_template": {
        "id": {template_id}
      }
    }
  }'
```
{% /code %}

**Key parameters:**
- `testing_type`: `coverage` (default), `usability`, `rapid`, or `focused`
- `duration`: Test duration in hours (default: 28 for coverage, 24 for usability, 2 for rapid)
- `test_environment`: Can reference an existing environment ID or define inline
- `test_template` OR `features`: Provide exactly one (mutually exclusive)

The test will start automatically. Save the `exploratory_test_id` from the response.

See [Exploratory Tests](/docs/api/exploratory-tests) for all options.

## Step 6: Fetch Bugs

Once your test is running, bugs will be reported by testers. Fetch them using:

{% code language="bash" showLineNumbers=true %}
```bash
curl -X GET "https://api.test.io/customer/v2/bugs?filter_product_ids={product_id}" \
  -H "Authorization: Token YOUR_API_TOKEN"
```
{% /code %}

Filter by test cycle to get bugs from a specific test:

{% code language="bash" showLineNumbers=true %}
```bash
curl -X GET "https://api.test.io/customer/v2/bugs?filter_test_cycle_ids={test_cycle_id}" \
  -H "Authorization: Token YOUR_API_TOKEN"
```
{% /code %}

Get a specific bug by ID:

{% code language="bash" showLineNumbers=true %}
```bash
curl -X GET "https://api.test.io/customer/v2/bugs/{bug_id}" \
  -H "Authorization: Token YOUR_API_TOKEN"
```
{% /code %}

**Bug Management:**
- Accept: `PUT /bugs/{bug_id}/accept`
- Reject: `PUT /bugs/{bug_id}/reject` (with reason and comment)
- Mark as fixed: `PUT /bugs/{bug_id}/mark_as_fixed`
- Mark as known: `PUT /bugs/{bug_id}/mark_as_known`

See [Bugs](/docs/api/bugs) for all bug management operations.

## Quick Reference: Typical Flow

1. **Authenticate** → Get API token
2. **Get Product** → List or create product, save `product_id`
3. **Create Test Environment** → Define where to test, save `test_environment_id` (or use inline)
4. **Choose Test Definition** → Use template OR create features
5. **Create Exploratory Test** → Test starts automatically
6. **Fetch Bugs** → Retrieve bugs as they're reported

## Testing Types

- **Coverage** (default): Comprehensive testing, 28 hours default duration
- **Usability**: Focus on user experience, 24 hours default
- **Rapid**: Quick feedback, 2 hours default
- **Focused**: Target specific bug severities (high/critical), 24 hours default

## Next Steps

- Review [API Overview](/docs/api/overview) for all available resources
- Check [Test Environments](/docs/api/test-environments) for advanced configuration
- Explore [Features](/docs/api/features) for detailed test planning
- Learn about [Bug Report Confirmations](/docs/api/bug-report-confirmations) to request additional information from testers

## Error Handling

The API uses standard HTTP status codes:
- `200 OK` - Successful request
- `201 Created` - Resource created successfully
- `400 Bad Request` - Invalid request parameters
- `401 Unauthorized` - Invalid or missing API token
- `404 Not Found` - Resource not found
- `422 Unprocessable Entity` - Validation error

Always check the response status and handle errors appropriately:

{% code language="bash" showLineNumbers=true %}
```bash
# Example: Check response status
response=$(curl -s -w "\n%{http_code}" -X GET "https://api.test.io/customer/v2/products" \
  -H "Authorization: Token YOUR_API_TOKEN")
http_code=$(echo "$response" | tail -n1)
body=$(echo "$response" | sed '$d')

if [ "$http_code" -eq 200 ]; then
  echo "Success: $body"
else
  echo "Error ($http_code): $body"
fi
```
{% /code %}

## Best Practices

### 1. Store Credentials Securely

Never hardcode your API token. Use environment variables:

{% code language="bash" showLineNumbers=true %}
```bash
export TESTIO_API_TOKEN="your_token_here"
curl -X GET "https://api.test.io/customer/v2/products" \
  -H "Authorization: Token $TESTIO_API_TOKEN"
```
{% /code %}

### 2. Poll for Test Completion

Tests run asynchronously. Poll the test status to know when it's complete:

{% code language="bash" showLineNumbers=true %}
```bash
# Get test status
curl -X GET "https://api.test.io/customer/v2/exploratory_tests/{test_id}" \
  -H "Authorization: Token YOUR_API_TOKEN"
```
{% /code %}

Check the `status` field in the response. Common statuses include `pending`, `running`, `completed`, `cancelled`.

### 3. Filter Bugs Efficiently

Use filters to get only relevant bugs:

{% code language="bash" showLineNumbers=true %}
```bash
# Get only unexported bugs for a specific product
curl -X GET "https://api.test.io/customer/v2/bugs?filter_product_ids=1&export_status=not_exported" \
  -H "Authorization: Token YOUR_API_TOKEN"
```
{% /code %}

### 4. Reuse Test Environments

Create test environments once and reuse them across multiple tests by referencing the `test_environment_id`:

{% code language="bash" showLineNumbers=true %}
```bash
# Use existing environment ID instead of inline definition
{
  "exploratory_test": {
    "test_environment_id": 42,  // Reference existing environment
    "test_template": { "id": 1 }
  }
}
```
{% /code %}

### 5. Handle Pagination

When listing resources, use pagination for large datasets:

{% code language="bash" showLineNumbers=true %}
```bash
# Paginated request
curl -X GET "https://api.test.io/customer/v2/products/1/exploratory_tests?page=1&per_page=25" \
  -H "Authorization: Token YOUR_API_TOKEN"
```
{% /code %}

## Common Workflows

### Website Testing Workflow

1. Get or create product (`product_type: "website"`)
2. Create test environment with URL
3. List test templates or create features
4. Create exploratory test with template/features
5. Poll test status until complete
6. Fetch bugs filtered by product or test cycle

### Mobile App Testing Workflow

1. Get or create product (`product_type: "mobile_app_ios"` or `"mobile_app_android"`)
2. Upload binary app (`.ipa` or `.apk`)
3. Create test environment with `binary_app_id`
4. Create exploratory test
5. Fetch bugs

### Rapid Testing Workflow

For quick feedback, use `testing_type: "rapid"` with a 2-hour duration:

{% code language="bash" showLineNumbers=true %}
```bash
{
  "exploratory_test": {
    "testing_type": "rapid",
    "duration": "2",
    "test_environment": { ... },
    "test_template": { "id": 1 }
  }
}
```
{% /code %}

## Troubleshooting

### Authentication Issues

- Verify your API token is correct
- Check token hasn't expired (rotate if needed)
- Ensure header format: `Authorization: Token YOUR_API_TOKEN`

### Test Not Starting

- Verify test environment is correctly configured
- Check that either `test_template` OR `features` is provided (not both)
- Ensure product exists and is active

### No Bugs Returned

- Tests may still be running (check test status)
- Verify filters are correct (product_id, test_cycle_id)
- Bugs appear as testers report them (may take time)

### Mobile App Upload Fails

- Check file size (max 1GB)
- Verify file extension (`.ipa`, `.apk`, `.xap`, `.appx`, `.zip`, `.wgt`)
- For large files, use S3 upload URL method (see [Binary Apps](/docs/api/binary-apps))

## Additional Resources

- [API Overview](/docs/api/overview) - Complete API reference
- [Test IO Help Center](https://help.test.io/en/) - Platform documentation and FAQs
- [Authentication](/docs/api/authentication) - Detailed authentication guide
- [Bugs](/docs/api/bugs) - Complete bug management reference

For more help, visit the [Test IO Help Center](https://help.test.io/en/).

