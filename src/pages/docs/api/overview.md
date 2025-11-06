---
title: API Overview
description: Introduction to the Customer API V2
---

Test IO REST API for customers. It provides access and basic operations for certain resources in the customer interface.

## Base URL

All API requests should be made to:

```
https://api.test.io/customer/v2/
```

## Authentication

All API requests require an API token for authentication. The token can be retrieved from the `Integrations` → `API` section of the test IO account.

Include the token in the HTTP Authorization header using the following format:

```
Authorization: Token YOUR_API_TOKEN
```

For detailed authentication information, see the [Authentication](/docs/api/authentication) page.

> **New to the API?** Start with the [Getting Started](/docs/api/getting-started) guide to learn how to setup, run a test, and fetch bugs.

## Resources

The API provides access to the following resources:

- **[Binary Apps](/docs/api/binary-apps)** - Upload and manage binary application files
- **[Connections](/docs/api/connections)** - Manage connections
- **[User Stories](/docs/api/user-stories)** - Create and manage user stories
- **[Features](/docs/api/features)** - List and create features
- **[Bugs](/docs/api/bugs)** - Fetch, search, and manage bugs
- **[Exploratory Tests](/docs/api/exploratory-tests)** - Create and manage exploratory tests
- **[Test Cases](/docs/api/test-cases)** - Create test cases
- **[Products](/docs/api/products)** - Manage products
- **[Test Case Tests](/docs/api/test-case-tests)** - Create test case tests
- **[Test Environments](/docs/api/test-environments)** - Manage test environments
- **[Test Templates](/docs/api/test-templates)** - List test templates
- **[Bug Report Confirmations](/docs/api/bug-report-confirmations)** - Create bug report confirmations

## Response Format

All responses are returned in JSON format. The API uses standard HTTP status codes to indicate success or failure of requests.

## Error Handling

When an error occurs, the API will return an appropriate HTTP status code along with an error message in the response body.

