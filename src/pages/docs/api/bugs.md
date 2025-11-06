---
title: Bugs
description: Fetch, search, and manage bugs
---

Manage bugs found during testing.

> **Note**: Bugs are automatically created when testers report issues during test execution. To create and run tests, see [Exploratory Tests](/docs/api/exploratory-tests). You can filter bugs by product ID, section ID, or test cycle ID.

## Fetch bugs

Retrieve bugs with optional filtering.

**Endpoint:** `GET /bugs`

**Query Parameters:**

- `filter_product_ids` (string, optional) - Comma-separated product IDs
- `filter_section_ids` (string, optional) - Comma-separated section IDs
- `filter_test_cycle_ids` (string, optional) - Comma-separated test cycle IDs
- `export_status` (string, optional) - Export status filter. Values: `export_requested`, `not_exported`, `exported`

**Example Request:**

{% code language="bash" showLineNumbers=true %}
```bash
curl -X GET "https://api.test.io/customer/v2/bugs?filter_product_ids=1,2&export_status=not_exported" \
  -H "Authorization: Token YOUR_API_TOKEN"
```
{% /code %}

**Response:** `200 OK`

{% code language="json" showLineNumbers=true %}
```json
{
  "bugs": [
    {
      "id": 123,
      "title": "Summary of the bug",
      "severity": "high",
      "language": "en",
      "location": "https://example.com/page",
      "expected_result": "Expected result",
      "actual_result": "Actual result",
      "steps": "Step to reproduce the bug",
      "known": false,
      "exported_at": null
    }
  ]
}
```
{% /code %}

## Get bug

Retrieve a specific bug by ID.

**Endpoint:** `GET /bugs/{bug_id}`

**Parameters:**

- `bug_id` (number, required) - ID of the bug

**Example Request:**

{% code language="bash" showLineNumbers=true %}
```bash
curl -X GET "https://api.test.io/customer/v2/bugs/123" \
  -H "Authorization: Token YOUR_API_TOKEN"
```
{% /code %}

**Response:** `200 OK`

{% code language="json" showLineNumbers=true %}
```json
{
  "bug": {
    "id": 123,
    "title": "Summary of the bug",
    "severity": "high",
    "language": "en",
    "location": "https://example.com/page",
    "expected_result": "Expected result",
    "actual_result": "Actual result",
    "steps": "Step to reproduce the bug",
    "known": false,
    "exported_at": null
  }
}
```
{% /code %}

## Search bug

Search for bugs using external index.

**Endpoint:** `POST /bugs`

**Request Body:**

{% code language="json" showLineNumbers=true %}
```json
{
  "bug": {
    "external_idx": "id in the system"
  }
}
```
{% /code %}

**Example Request:**

{% code language="bash" showLineNumbers=true %}
```bash
curl -X POST "https://api.test.io/customer/v2/bugs" \
  -H "Authorization: Token YOUR_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "bug": {
      "external_idx": "id in the system"
    }
  }'
```
{% /code %}

**Response:** `200 OK`

Returns an array of matching bug objects.

## Fetch Reject Reasons

Get a list of available reject reasons for bugs.

**Endpoint:** `GET /bugs/reject_reasons`

**Example Request:**

{% code language="bash" showLineNumbers=true %}
```bash
curl -X GET "https://api.test.io/customer/v2/bugs/reject_reasons" \
  -H "Authorization: Token YOUR_API_TOKEN"
```
{% /code %}

**Response:** `200 OK`

Returns an array of reject reason objects.

## Accept bug

Accept a bug.

**Endpoint:** `PUT /bugs/{bug_id}/accept`

**Parameters:**

- `bug_id` (number, required) - ID of the bug

**Example Request:**

{% code language="bash" showLineNumbers=true %}
```bash
curl -X PUT "https://api.test.io/customer/v2/bugs/123/accept" \
  -H "Authorization: Token YOUR_API_TOKEN"
```
{% /code %}

**Response:** `200 OK`

{% code language="json" showLineNumbers=true %}
```json
{
  "bug": {
    "id": 123,
    "title": "Summary of the bug",
    "severity": "high",
    "status": "accepted"
  }
}
```
{% /code %}

## Mark As Exported

Mark a bug as exported.

**Endpoint:** `PUT /bugs/{bug_id}/mark_as_exported`

**Parameters:**

- `bug_id` (number, required) - ID of the bug

**Example Request:**

{% code language="bash" showLineNumbers=true %}
```bash
curl -X PUT "https://api.test.io/customer/v2/bugs/123/mark_as_exported" \
  -H "Authorization: Token YOUR_API_TOKEN"
```
{% /code %}

**Response:** `200 OK`

Returns the updated bug object.

## Mark As Known

Mark a bug as known.

**Endpoint:** `PUT /bugs/{bug_id}/mark_as_known`

**Parameters:**

- `bug_id` (number, required) - ID of the bug

**Example Request:**

{% code language="bash" showLineNumbers=true %}
```bash
curl -X PUT "https://api.test.io/customer/v2/bugs/123/mark_as_known" \
  -H "Authorization: Token YOUR_API_TOKEN"
```
{% /code %}

**Response:** `200 OK`

Returns the updated bug object.

## Mark As Fixed

Mark a bug as fixed.

**Endpoint:** `PUT /bugs/{bug_id}/mark_as_fixed`

**Parameters:**

- `bug_id` (number, required) - ID of the bug

**Example Request:**

{% code language="bash" showLineNumbers=true %}
```bash
curl -X PUT "https://api.test.io/customer/v2/bugs/123/mark_as_fixed" \
  -H "Authorization: Token YOUR_API_TOKEN"
```
{% /code %}

**Response:** `200 OK`

Returns the updated bug object.

## Reject bug

Reject a bug with a reason and comment.

**Endpoint:** `PUT /bugs/{bug_id}/reject`

**Parameters:**

- `bug_id` (number, required) - ID of the bug

**Request Body:**

- `reason` (string, required) - Reject reason
- `comment` (string, required) - Reject comment

**Example Request:**

{% code language="bash" showLineNumbers=true %}
```bash
curl -X PUT "https://api.test.io/customer/v2/bugs/123/reject" \
  -H "Authorization: Token YOUR_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "reason": "known_bug",
    "comment": "This bug is already known and being tracked"
  }'
```
{% /code %}

**Response:** `200 OK`

{% code language="json" showLineNumbers=true %}
```json
{
  "bug": {
    "id": 123,
    "title": "Summary of the bug",
    "severity": "high",
    "status": "rejected"
  }
}
```
{% /code %}

