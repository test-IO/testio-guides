---
title: User Stories
description: Create and manage user stories
---

Manage user stories for your products and features.

> **Prerequisites**: You need a product and a feature. See [Products](/docs/api/products) and [Features](/docs/api/features). User stories can also be included directly when creating features.

## What are User Stories?

User Stories describe expected behavior from a user’s perspective. In testing, your task is to confirm whether each User Story works as expected.

Examples of User Stories:

- A user can add a product to the cart
- A user can remove items from the cart
- When a valid promo code is applied, the correct discount is applied
- A user can log in with valid credentials

Executing a User Story typically takes under 5 minutes. You can find them on the test overview page above the Feature description. Not every test will include User Stories.

> Important: A User Story is not executed standalone. It is always executed in the scope of a test, specifically an exploratory test. You can include User Stories via Features and then run them by creating an [Exploratory Test](/docs/api/exploratory-tests).

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
  "path": "As a shopper, I can add a product to my cart",
  "title": "Add product to cart"
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
      "path": "As a shopper, I can add a product to my cart",
      "title": "Add product to cart"
    },
    {
      "id": 2,
      "path": "As a shopper, I can remove a product from my cart",
      "title": "Remove product from cart"
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
- `path` (string, **required**) - Description of the user story in the form "As a <user>, I can <action>"

**Example Request:**

{% code language="bash" showLineNumbers=true %}
```bash
curl -X POST "https://api.test.io/customer/v2/products/1/user_stories?section_id=2" \
  -H "Authorization: Token YOUR_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "user_story": {
      "feature_id": 1,
      "path": "As a shopper, I can add a product to my cart"
    }
  }'
```
{% /code %}

**Response:** `201 Created`

{% code language="json" showLineNumbers=true %}
```json
{
  "id": 1,
  "path": "As a shopper, I can add a product to my cart",
  "title": "Add product to cart"
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
      "path": "As a shopper, I can remove a product from my cart"
    }
  }'
```
{% /code %}

**Response:** `200 OK`

{% code language="json" showLineNumbers=true %}
```json
{
  "id": 2,
  "path": "As a shopper, I can remove a product from my cart",
  "title": "Remove product from cart"
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
  "path": "As a shopper, I can add a product to my cart",
  "title": "Add product to cart"
}
```
{% /code %}

