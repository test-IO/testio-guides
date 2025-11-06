---
title: User Stories
description: Create and manage user stories
---

Manage user stories for your products and features.

> **Prerequisites**: You need a product and a feature. See [Products](/docs/api/products) and [Features](/docs/api/features). User stories can also be included directly when creating features.

## Get user story

Retrieve a specific user story by ID.

**Endpoint:** `GET /user_stories/{user_story_id}`

**Parameters:**

- `user_story_id` (number, required) - ID of the User story

**Example Request:**

{% code language="bash" showLineNumbers=true %}
```bash
curl -X GET "https://api.test.io/customer/v2/user_stories/1" \
  -H "Authorization: Token YOUR_API_TOKEN"
```
{% /code %}

**Response:** `200 OK`

{% code language="json" showLineNumbers=true %}
```json
{
  "id": 1,
  "path": "User story title",
  "title": "User story title"
}
```
{% /code %}

## List user stories

Returns user stories of all features under the specified product.

**Endpoint:** `GET /products/{product_id}/user_stories{?section_id}`

**Parameters:**

- `product_id` (number, required) - ID of the Product
- `section_id` (number, optional) - ID of the Section. Must be provided for product with sections

**Notes:**

- For products **without sections**, the response includes user stories from all features of the product
- For products **with sections**, the `section_id` query parameter must be provided. In this case, the response includes user stories from all features that associated with the specified section of the product

**Example Request:**

{% code language="bash" showLineNumbers=true %}
```bash
curl -X GET "https://api.test.io/customer/v2/products/1/user_stories?section_id=2" \
  -H "Authorization: Token YOUR_API_TOKEN"
```
{% /code %}

**Response:** `200 OK`

{% code language="json" showLineNumbers=true %}
```json
{
  "user_stories": [
    {
      "id": 1,
      "path": "First user story",
      "title": "First user story"
    },
    {
      "id": 2,
      "path": "Second user story",
      "title": "Second user story"
    }
  ]
}
```
{% /code %}

## Create user story

Creates a new user story under the feature of the specified product.

**Endpoint:** `POST /products/{product_id}/user_stories{?section_id}`

**Parameters:**

- `product_id` (number, required) - ID of the Product
- `section_id` (number, optional) - ID of the Section. Must be provided for product with sections

**Notes:**

- For products **without sections**, the user story can be created under any feature of the product
- For products **with sections**, the `section_id` query parameter must be provided. In this case, the user story can only be created under a feature associated with the specified section of the product

All attributes must be provided inside the root object `user_story`.

**Request Body:**

- `feature_id` (number, **required**) - ID of the feature under which the user story will be created
- `path` (string, **required**) - Description of the user story

**Example Request:**

{% code language="bash" showLineNumbers=true %}
```bash
curl -X POST "https://api.test.io/customer/v2/products/1/user_stories?section_id=2" \
  -H "Authorization: Token YOUR_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "user_story": {
      "feature_id": 1,
      "path": "The greatest title"
    }
  }'
```
{% /code %}

**Response:** `201 Created`

{% code language="json" showLineNumbers=true %}
```json
{
  "id": 1,
  "path": "The greatest title",
  "title": "The greatest title"
}
```
{% /code %}

## Update user story

Updates the specified user story within the product.

**Endpoint:** `PUT /products/{product_id}/user_stories/{user_story_id}{?section_id}`

**Parameters:**

- `product_id` (number, required) - ID of the Product
- `user_story_id` (number, required) - ID of the User story
- `section_id` (number, optional) - ID of the Section. Must be provided for product with sections

**Notes:**

- For products **without sections**, the user story must be associated with a feature of the specified product
- For products **with sections**, the `section_id` query parameter must be provided. In this case, the user story must be associated with a feature that is part of a section of the specified product

All attributes must be provided inside the root object `user_story`.

**Request Body:**

- `path` (string, **required**) - Description of the user story

**Example Request:**

{% code language="bash" showLineNumbers=true %}
```bash
curl -X PUT "https://api.test.io/customer/v2/products/1/user_stories/2?section_id=2" \
  -H "Authorization: Token YOUR_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "user_story": {
      "path": "The updated title"
    }
  }'
```
{% /code %}

**Response:** `200 OK`

{% code language="json" showLineNumbers=true %}
```json
{
  "id": 2,
  "path": "The updated title",
  "title": "The updated title"
}
```
{% /code %}

## Delete user story

Deletes the specified user story from the product.

**Endpoint:** `DELETE /products/{product_id}/user_stories/{user_story_id}{?section_id}`

**Parameters:**

- `product_id` (number, required) - ID of the Product
- `user_story_id` (number, required) - ID of the User story
- `section_id` (number, optional) - ID of the Section. Must be provided for product with sections

**Notes:**

- For products **without sections**, the user story must be associated with a feature of the specified product
- For products **with sections**, the `section_id` query parameter must be provided. In this case, the user story must be associated with a feature that is part of a section of the specified product

**Example Request:**

{% code language="bash" showLineNumbers=true %}
```bash
curl -X DELETE "https://api.test.io/customer/v2/products/1/user_stories/2?section_id=2" \
  -H "Authorization: Token YOUR_API_TOKEN"
```
{% /code %}

**Response:** `200 OK`

{% code language="json" showLineNumbers=true %}
```json
{
  "id": 2,
  "path": "The greatest title",
  "title": "The greatest title"
}
```
{% /code %}

