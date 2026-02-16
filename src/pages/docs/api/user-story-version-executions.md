---
title: User Story Version Executions
description: List and understand user story execution results from test cycles
---

User story version executions represent individual test runs of a user story by testers in a test cycle. Each execution records the outcome (e.g. passed, failed, blocked), who executed it, when, and on which device or browser.

> **Prerequisites**: You need a product with [User Stories](/docs/api/user-stories) and [Exploratory Tests](/docs/api/exploratory-tests). Executions are created when testers run user stories as part of a test cycle.

## What are User Story Version Executions?

When a tester executes a user story during an exploratory test, the system creates a **user story version execution**. Each execution includes:

- **Status** – Whether the story passed, failed, was blocked, or is still pending
- **Comment** – The tester’s notes (required when status is passed, failed, or blocked)
- **Executed by** – The tester’s screen name
- **Device/browser** – Device reports describing the environment used
- **Test cycle** – The test cycle and test environment where the execution took place

Use this API to list executions for your user stories, filter by user story or version, and inspect results for reporting or integrations (e.g. InteractSoftware).

## List user story version executions

Returns a paginated list of user story version executions for the current customer. Results can be filtered by user story IDs or user story version IDs and ordered by creation time.

**Endpoint:** `GET /user_story_version_executions`

**Query Parameters:**

| Parameter                  | Type    | Required | Description                                                                                                                                    |
| -------------------------- | ------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `page`                     | integer | No       | Page number for pagination (default: 1)                                                                                                        |
| `per_page`                 | integer | No       | Number of records per page (default: 25)                                                                                                       |
| `user_story_ids[]`         | array   | No       | Filter by user story IDs. Only executions for these user stories are returned. Pass multiple values as `user_story_ids[]=1&user_story_ids[]=2` |
| `user_story_version_ids[]` | array   | No       | Filter by user story version IDs. Pass multiple values as `user_story_version_ids[]=10&user_story_version_ids[]=11`                            |
| `order`                    | string  | No       | Sort order by creation time: `asc` (oldest first) or `desc` (newest first). Default: `asc`                                                     |

**Example Request (all executions, newest first):**

{% code language="bash" showLineNumbers=true %}

```bash
curl -X GET "https://api.test.io/customer/v2/user_story_version_executions?order=desc&per_page=10" \
  -H "Authorization: Token YOUR_API_TOKEN"
```

{% /code %}

**Example Request (filter by user stories):**

{% code language="bash" showLineNumbers=true %}

```bash
curl -X GET "https://api.test.io/customer/v2/user_story_version_executions?user_story_ids[]=1&user_story_ids[]=2&order=desc&per_page=10" \
  -H "Authorization: Token YOUR_API_TOKEN"
```

{% /code %}

**Example Request (filter by user story version IDs):**

{% code language="bash" showLineNumbers=true %}

```bash
curl -X GET "https://api.test.io/customer/v2/user_story_version_executions?user_story_version_ids[]=5&user_story_version_ids[]=6&page=1&per_page=25" \
  -H "Authorization: Token YOUR_API_TOKEN"
```

{% /code %}

**Response:** `200 OK`

**Response attributes (top level):**

| Attribute                       | Type    | Description                                                       |
| ------------------------------- | ------- | ----------------------------------------------------------------- |
| `meta.record_count`             | integer | Total number of executions matching the query (before pagination) |
| `user_story_version_executions` | array   | List of execution objects (see below)                             |

**User story version execution object attributes:**

| Attribute        | Type           | Description                                                                            |
| ---------------- | -------------- | -------------------------------------------------------------------------------------- |
| `id`             | integer        | Unique execution ID                                                                    |
| `status`         | string         | Execution status. One of: `pending`, `passed`, `failed`, `blocked`, `cancelled`        |
| `comment`        | string \| null | Tester’s comment for the execution (present when status is passed, failed, or blocked) |
| `executed_by`    | string \| null | Screen name of the tester who executed the user story                                  |
| `device_reports` | array          | Device/browser information for the execution (see Device report object below)          |
| `test_cycle`     | object         | Test cycle summary (see Test cycle object below)                                       |
| `executed_at`    | string         | ISO 8601 timestamp when the execution was created                                      |

**Status values:**

- `pending` – Execution not yet completed
- `passed` – Tester confirmed the user story works as expected
- `failed` – Tester found that the user story does not work as expected
- `blocked` – Tester could not complete the user story (e.g. environment issue)
- `cancelled` – Execution was cancelled

**Device report object (each item in `device_reports`):**

| Attribute                  | Type    | Description                                                 |
| -------------------------- | ------- | ----------------------------------------------------------- |
| `id`                       | integer | Device report ID                                            |
| `category`                 | object  | Device category: `id`, `key`, `name` (e.g. desktop, mobile) |
| `vendor`                   | object  | Vendor: `id`, `name`                                        |
| `operating_system`         | object  | OS: `id`, `key`, `name`                                     |
| `operating_system_version` | object  | OS version: `id`, `name`                                    |
| `device`                   | object  | Device: `id`, `name`                                        |
| `browsers`                 | array   | List of browser objects, each with `id` and `name`          |

**Test cycle object:**

| Attribute          | Type    | Description                     |
| ------------------ | ------- | ------------------------------- |
| `id`               | integer | Test cycle ID                   |
| `title`            | string  | Test cycle title                |
| `test_environment` | object  | Test environment: `id`, `title` |

**Example Response:**

{% code language="json" showLineNumbers=true %}

```json
{
  "meta": {
    "record_count": 42
  },
  "user_story_version_executions": [
    {
      "id": 101,
      "status": "passed",
      "comment": "Verified all steps on checkout flow.",
      "executed_by": "tester.screenname",
      "device_reports": [
        {
          "id": 1,
          "category": { "id": 1, "key": "desktop", "name": "Desktop" },
          "vendor": { "id": 1, "name": "Apple" },
          "operating_system": { "id": 1, "key": "macos", "name": "macOS" },
          "operating_system_version": { "id": 1, "name": "14.0" },
          "device": { "id": 1, "name": "MacBook Pro" },
          "browsers": [{ "id": 1, "name": "Chrome" }]
        }
      ],
      "test_cycle": {
        "id": 5,
        "title": "Regression Test – February 2025",
        "test_environment": { "id": 1, "title": "Staging" }
      },
      "executed_at": "2025-02-05T10:30:00.000Z"
    },
    {
      "id": 102,
      "status": "failed",
      "comment": "Add to cart button does not respond on mobile.",
      "executed_by": "another.tester",
      "device_reports": [],
      "test_cycle": {
        "id": 5,
        "title": "Regression Test – February 2025",
        "test_environment": { "id": 2, "title": "Production" }
      },
      "executed_at": "2025-02-05T11:15:00.000Z"
    }
  ]
}
```

{% /code %}

## Usage tips

- Use `user_story_ids[]` when you want all executions for specific user stories (e.g. for a feature or product view).
- Use `user_story_version_ids[]` when you need executions for specific user story versions (e.g. tied to a test cycle or version snapshot).
- Use `order=desc` and `per_page` to fetch the most recent executions first and control page size.
- `meta.record_count` reflects the total matching the filters; use it with `per_page` to compute total pages or show “X of Y” in the UI.
