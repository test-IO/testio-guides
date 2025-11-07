---
title: Custom Bug Export Connections
description: Configure outbound bug export webhooks
---

Manage custom bug export connections for your products and sections.

Custom Bug Export Connections let you expose an HTTPS endpoint that receives a bug payload when someone clicks "Export" in the customer interface. Only bugs exported by a user action (or auto‑export if enabled) are sent. Use this to integrate any external tracker or workflow system without a native integration.

## Supported bug trackers

Use a Custom Bug Export Connection for any tracker or workflow that can accept an HTTP POST. For native trackers, see our integrations list; otherwise, a custom connection is a flexible alternative.

### Common trackers used with custom exports

{% grid-list columns="3" %}

- Azure DevOps
- Bugzilla
- ClickUp
- GitHub
- GitLab
- Gitea
- Jira Cloud
- Jira Server
- Linear
- Monday
- Notion
- OpenProject
- PivotalTracker
- Rally
- Redmine
- Shortcut
- Teamwork
- Trello
- Wrike
- YouTrack
- Zendesk
- Zoho
  {% /grid-list %}

## Create Custom Bug Export Connection

Create a new connection.

**Endpoint:** `POST /connections`

**Request Body:**

- `name` (string, required) - Connection name
- `url` (string, required) - HTTPS endpoint that will receive exported bug payloads via POST
- `fixed` (boolean, optional) - Whether the connection is fixed
- `product_ids` (array[number], optional) - Array of product IDs
- `section_ids` (array[number], optional) - Array of section IDs

**Example Request:**

{% code language="bash" showLineNumbers=true %}

```bash
curl -X POST "https://api.test.io/customer/v2/connections" \
  -H "Authorization: Token YOUR_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Issue Endpoint",
    "url": "https://issues.example.com/export",
    "fixed": false,
    "product_ids": [1, 2],
    "section_ids": [5]
  }'
```

{% /code %}

**Response:** `201 Created`

{% code language="json" showLineNumbers=true %}

```json
{
  "connection": {
    "id": 42,
    "name": "Issue Endpoint",
    "url": "https://issues.example.com/export",
    "fixed": false
  }
}
```

{% /code %}

## Get connection

Retrieve a specific connection by ID.

**Endpoint:** `GET /connections/{connection_id}`

**Parameters:**

- `connection_id` (number, required) - The ID of the connection

**Example Request:**

{% code language="bash" showLineNumbers=true %}

```bash
curl -X GET "https://api.test.io/customer/v2/connections/42" \
  -H "Authorization: Token YOUR_API_TOKEN"
```

{% /code %}

**Response:** `200 OK`

{% code language="json" showLineNumbers=true %}

```json
{
  "connection": {
    "id": 42,
    "name": "Issue Endpoint",
    "url": "https://issues.example.com/export",
    "fixed": false
  }
}
```

{% /code %}

## Update connection

Update an existing connection.

**Endpoint:** `PUT /connections/{connection_id}`

**Parameters:**

- `connection_id` (number, required) - The ID of the connection

**Request Body:**

- `name` (string, required) - Connection name
- `url` (string, optional) - Connection URL
- `fixed` (boolean, optional) - Whether the connection is fixed
- `product_ids` (array[number], optional) - Array of product IDs
- `section_ids` (array[number], optional) - Array of section IDs

**Example Request:**

{% code language="bash" showLineNumbers=true %}

```bash
curl -X PUT "https://api.test.io/customer/v2/connections/42" \
  -H "Authorization: Token YOUR_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Issue Endpoint (Prod)",
    "url": "https://issues.example.com/export",
    "fixed": true
  }'
```

{% /code %}

**Response:** `200 OK`

{% code language="json" showLineNumbers=true %}

```json
{
  "connection": {
    "id": 42,
    "name": "Issue Endpoint (Prod)",
    "url": "https://issues.example.com/export",
    "fixed": true
  }
}
```

{% /code %}

## Delete connection

Delete a connection.

**Endpoint:** `DELETE /connections/{connection_id}`

**Parameters:**

- `connection_id` (number, required) - The ID of the connection

**Example Request:**

{% code language="bash" showLineNumbers=true %}

```bash
curl -X DELETE "https://api.test.io/customer/v2/connections/42" \
  -H "Authorization: Token YOUR_API_TOKEN"
```

{% /code %}

**Response:** `200 OK`

{% code language="json" showLineNumbers=true %}

```json
{
  "connection": {
    "id": 42,
    "name": "Issue Endpoint (Prod)",
    "url": "https://issues.example.com/export",
    "fixed": true
  }
}
```

{% /code %}

## Export trigger and payload

An export is triggered when a user clicks "Export" in the customer interface for a bug (or when auto‑export is enabled for accepted bugs). When triggered, test IO sends an HTTP POST to your `url` with a JSON body that includes the bug and useful context.

### Request

- Method: `POST`
- URL: The `url` you configured on the connection
- Headers: `Content-Type: application/json`

### JSON payload

```
{
  "event": "bug.exported",
  "exported_at": "2025-11-07T10:15:00Z",
  "bug": {
    "id": 12345,
    "title": "Checkout total is incorrect",
    "description": "Observed wrong total after applying promo code.",
    "steps_to_reproduce": [
      "Add item to cart",
      "Apply PROMO20",
      "Proceed to checkout"
    ],
    "expected_result": "20% discount applied to subtotal",
    "actual_result": "10% discount applied",
    "severity": "high",
    "priority": "p2",
    "status": "accepted",
    "attachments": [
      { "url": "https://files.test.io/attachments/abc.png", "type": "image/png" },
      { "url": "https://files.test.io/attachments/repro.mp4", "type": "video/mp4" }
    ],
    "device": {
      "device_type": "mobile",
      "os": "ios",
      "os_version": "17.2",
      "browser": "safari"
    },
    "reporter": { "id": 999, "name": "QA Tester" },
    "test_cycle_id": 7777,
    "product_id": 1,
    "link": "https://app.test.io/bugs/12345"
  }
}
```

### Notes

- Use the `bug.link` to navigate back to the bug in test IO.
- `attachments` are provided as direct URLs.
- You can correlate exports to internal systems using the `bug.id` and `test_cycle_id`.

### Response handling

Your endpoint should return `2xx` on success. Non‑2xx responses may be retried.
