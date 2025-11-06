---
title: Bug Report Confirmations
description: Create bug report confirmations
---

Create bug report confirmations to request additional information from testers when they report bugs.

## Create a bug report confirmation

Create a new bug report confirmation.

**Endpoint:** `POST /bug_report_confirmations`

**Request Body:**

- `product_id` (number, required) - Product ID
- `bug_id` (number, required) - Bug ID
- `section_id` (number, optional) - Section ID
- `allow_device_clouds` (boolean, optional, default: false) - Allow device clouds
- `requirements` (array[Requirement Create], optional) - Device requirements
- `bug_report_confirmation_requirement_attributes` (object, required) - Requirement attributes
  - `screen_size_enabled` (boolean, optional) - Enable screen size requirement
  - `browser_version_enabled` (boolean, optional) - Enable browser version requirement
  - `question_enabled` (boolean, optional) - Enable custom question
  - `question` (string, optional) - Your question (if enabled)
  - `internet_speed_enabled` (boolean, optional) - Enable internet speed requirement
  - `console_enabled` (boolean, optional) - Enable console requirement
  - `camera_enabled` (boolean, optional) - Enable camera requirement
  - `logs_enabled` (boolean, optional) - Enable logs requirement

**Example Request:**

{% code language="bash" showLineNumbers=true %}
```bash
curl -X POST "https://api.test.io/customer/v2/bug_report_confirmations" \
  -H "Authorization: Token YOUR_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "product_id": 1,
    "bug_id": 123,
    "bug_report_confirmation_requirement_attributes": {
      "question_enabled": true,
      "question": "Can you provide more details about the issue?",
      "console_enabled": true,
      "logs_enabled": true
    }
  }'
```
{% /code %}

**Response:** `201 Created`

Returns the created bug report confirmation object.

