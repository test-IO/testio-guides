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

Create a connection by providing a name, your endpoint URL, and authentication credentials. Optionally enable auto-export to send bugs automatically when accepted.

**Endpoint:** `POST /products/{product_id}/custom_bug_export_connections`

**Parameters:**

- `product_id` (number, required) - ID of the product

**Request Body:**

- `name` (string, required) - Name to identify this connection
- `url` (string, required) - HTTPS endpoint URL to receive bug payloads
- `auth_type` (string, required) - Authentication type: `basic`, `bearer`, or `api_key`
- `auth_credentials` (object, required) - Authentication credentials
- `auto_export` (boolean, optional) - Automatically export accepted bugs. Default: `false`
- `section_id` (number, optional) - Limit connection to a specific section

**Example Request:**

{% code language="bash" showLineNumbers=true %}

```bash
curl -X POST "https://api.test.io/customer/v2/products/123/custom_bug_export_connections" \
  -H "Authorization: Token YOUR_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "custom_bug_export_connection": {
      "name": "My Jira Integration",
      "url": "https://your-company.atlassian.net/rest/api/2/issue",
      "auth_type": "basic",
      "auth_credentials": {
        "username": "your-email@company.com",
        "password": "your-api-token"
      },
      "auto_export": false
    }
  }'
```

{% /code %}

**Response:** `201 Created`

{% code language="json" showLineNumbers=true %}

```json
{
  "custom_bug_export_connection": {
    "id": 456,
    "name": "My Jira Integration",
    "url": "https://your-company.atlassian.net/rest/api/2/issue",
    "auth_type": "basic",
    "auto_export": false,
    "section_id": null,
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-15T10:30:00Z"
  }
}
```

{% /code %}

## Get connection

Retrieve details of an existing connection including its name, URL, and settings. Credentials are not returned for security.

**Endpoint:** `GET /products/{product_id}/custom_bug_export_connections/{connection_id}`

**Parameters:**

- `product_id` (number, required) - ID of the product
- `connection_id` (number, required) - ID of the connection

**Example Request:**

{% code language="bash" showLineNumbers=true %}

```bash
curl -X GET "https://api.test.io/customer/v2/products/123/custom_bug_export_connections/456" \
  -H "Authorization: Token YOUR_API_TOKEN"
```

{% /code %}

**Response:** `200 OK`

{% code language="json" showLineNumbers=true %}

```json
{
  "custom_bug_export_connection": {
    "id": 456,
    "name": "My Jira Integration",
    "url": "https://your-company.atlassian.net/rest/api/2/issue",
    "auth_type": "basic",
    "auto_export": false,
    "section_id": null,
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-15T10:30:00Z"
  }
}
```

{% /code %}

## Update connection

Modify any connection setting such as the name, URL, credentials, or auto-export status. Only the fields you include will be updated.

**Endpoint:** `PUT /products/{product_id}/custom_bug_export_connections/{connection_id}`

**Parameters:**

- `product_id` (number, required) - ID of the product
- `connection_id` (number, required) - ID of the connection

**Request Body:** Include only the fields you want to update.

**Example Request:**

{% code language="bash" showLineNumbers=true %}

```bash
curl -X PUT "https://api.test.io/customer/v2/products/123/custom_bug_export_connections/456" \
  -H "Authorization: Token YOUR_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "custom_bug_export_connection": {
      "auto_export": true
    }
  }'
```

{% /code %}

**Response:** `200 OK`

{% code language="json" showLineNumbers=true %}

```json
{
  "custom_bug_export_connection": {
    "id": 456,
    "name": "My Jira Integration",
    "url": "https://your-company.atlassian.net/rest/api/2/issue",
    "auth_type": "basic",
    "auto_export": true,
    "section_id": null,
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-15T14:22:00Z"
  }
}
```

{% /code %}

## Delete connection

Remove a connection permanently. Previously exported bugs remain in your tracker.

**Endpoint:** `DELETE /products/{product_id}/custom_bug_export_connections/{connection_id}`

**Parameters:**

- `product_id` (number, required) - ID of the product
- `connection_id` (number, required) - ID of the connection

**Example Request:**

{% code language="bash" showLineNumbers=true %}

```bash
curl -X DELETE "https://api.test.io/customer/v2/products/123/custom_bug_export_connections/456" \
  -H "Authorization: Token YOUR_API_TOKEN"
```

{% /code %}

**Response:** `204 No Content`

## Export trigger and payload

Bugs are sent to your endpoint when a user clicks "Export" or when auto-export is triggered.

### Request

An HTTP POST request is sent to your endpoint URL with JSON content and your configured authentication.

| Property       | Value                            |
| -------------- | -------------------------------- |
| Method         | `POST`                           |
| Content-Type   | `application/json`               |
| Authentication | As configured in your connection |

### JSON payload

The payload contains the bug title, severity, description, steps to reproduce, expected result, actual result, environment details, attachment URLs, tester information, and test cycle data.

{% code language="json" showLineNumbers=true %}

```json
{
  "bug": {
    "id": 12345,
    "title": "Login button not responding on mobile",
    "severity": "high",
    "status": "accepted",
    "description": "Detailed bug description",
    "steps_to_reproduce": [
      "Open the app on mobile",
      "Navigate to login screen",
      "Tap the login button"
    ],
    "expected_result": "User should be logged in",
    "actual_result": "Nothing happens when tapping the button",
    "environment": {
      "device": "iPhone 14",
      "os": "iOS 17.2",
      "browser": "Safari",
      "app_version": "2.1.0"
    },
    "attachments": [
      {
        "type": "screenshot",
        "url": "https://cdn.test.io/attachments/screenshot.png"
      },
      {
        "type": "video",
        "url": "https://cdn.test.io/attachments/recording.mp4"
      }
    ],
    "tester": {
      "name": "John D.",
      "country": "Germany"
    },
    "created_at": "2024-01-15T14:30:00Z",
    "test_cycle": {
      "id": 789,
      "name": "Sprint 42 Testing"
    }
  },
  "product": {
    "id": 123,
    "name": "My Mobile App"
  }
}
```

{% /code %}

### Notes

- Attachment URLs expire—download them promptly.
- Only exported bugs are sent; pending and rejected bugs are not.
- Auto-export sends bugs immediately when accepted.
- Manually exporting an auto-exported bug sends it again.

### Response handling

Return `200-299` for success. Return `400-499` for client errors (no retry). Return `500-599` for server errors (may retry). Respond within 30 seconds.

| Status Code | Meaning      | Test IO Behavior                    |
| ----------- | ------------ | ----------------------------------- |
| 200-299     | Success      | Marks bug as exported               |
| 400-499     | Client error | Marks as failed; no automatic retry |
| 500-599     | Server error | Marks as failed; may retry later    |
