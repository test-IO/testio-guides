---
title: Test Templates
description: List test templates
---

List test templates available for your products and sections.

> **Prerequisites**: You need a product to list test templates. See [Products](/docs/api/products) to get or create a product. Test templates can be used as an alternative to features when creating exploratory tests (see [Exploratory Tests](/docs/api/exploratory-tests)).

## List test templates

Retrieve all test templates for a specific product, optionally filtered by section.

**Endpoint:** `GET /test_templates`

**Query Parameters:**

- `product_id` (number, required) - ID of the Product
- `section_id` (number, optional) - ID of the Section

**Example Request:**

{% code language="bash" showLineNumbers=true %}
```bash
curl -X GET "https://api.test.io/customer/v2/test_templates?product_id=1" \
  -H "Authorization: Token YOUR_API_TOKEN"
```
{% /code %}

**Response:** `200 OK`

Returns an array of test template objects.

Each test template includes:
- `id` (number) - Template ID
- `title` (string) - Title of test template
- `test_scenario_template` (string) - Type of test scenario template
- `max_test_duration` (number) - Max duration of the test in hours
- `min_test_duration` (number) - Min duration of the test in hours
- `default_test_duration` (number) - Default duration of the test in hours

