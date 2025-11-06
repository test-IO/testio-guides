---
title: Connections
description: Manage connections
---

Manage connections for your products and sections.

## Create connection

Create a new connection.

**Endpoint:** `POST /connections`

**Request Body:**

- `name` (string, required) - Connection name
- `url` (string, optional) - Connection URL
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
    "name": "Staging Connection",
    "url": "https://staging.example.com",
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
    "name": "Staging Connection",
    "url": "https://staging.example.com",
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
    "name": "Staging Connection",
    "url": "https://staging.example.com",
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
    "name": "Updated Connection",
    "url": "https://updated.example.com",
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
    "name": "Updated Connection",
    "url": "https://updated.example.com",
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
    "name": "Updated Connection",
    "url": "https://updated.example.com",
    "fixed": true
  }
}
```
{% /code %}

