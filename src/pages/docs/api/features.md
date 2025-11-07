---
title: Features
description: List and create features
---

Manage features for your products.

> **Prerequisites**: You need a product before creating features. See [Products](/docs/api/products) to get or create a product. Features are used when creating exploratory tests (see [Exploratory Tests](/docs/api/exploratory-tests)).

## List features

Retrieve all features for a specific product.

**Endpoint:** `GET /products/{product_id}/features`

**Parameters:**

- `product_id` (number, required) - ID of the Product

**Example Request:**

{% code language="bash" showLineNumbers=true %}

```bash
curl -X GET "https://api.test.io/customer/v2/products/1/features" \
  -H "Authorization: Token YOUR_API_TOKEN"
```

{% /code %}

**Response:** `200 OK`

{% code language="json" showLineNumbers=true %}

```json
{
  "features": [
    {
      "id": 1,
      "title": "Account Management",
      "description": "Manage your account information",
      "howtofind": "Top right of the screen",
      "user_stories": ["User story 1", "User story 2"]
    }
  ]
}
```

{% /code %}

## Create feature

Create a new feature.

**Endpoint:** `POST /features`

**Request Body:**

- `product_id` (number, required) - ID of the Product
- `section_ids` (array[number], optional) - Array of section IDs
- `feature` (object, required) - Feature object
  - `title` (string, required) - Feature title
  - `description` (string, required) - Feature description
  - `howtofind` (string, optional) - Instructions on how to find the feature
  - `target_idx` (string, optional) - Target index
  - `user_stories` (array[string], optional) - Array of user story descriptions
  - `use_markdown` (boolean, optional) - Whether to use markdown formatting

**Example Request:**

{% code language="bash" showLineNumbers=true %}

```bash
curl -X POST "https://api.test.io/customer/v2/features" \
  -H "Authorization: Token YOUR_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "product_id": 1,
    "section_ids": [1],
    "feature": {
      "title": "Account Management",
      "description": "Manage your account information",
      "howtofind": "Top right of the screen",
      "user_stories": ["User story 1"],
      "use_markdown": true
    }
  }'
```

{% /code %}

**Response:** `201 Created`

{% code language="json" showLineNumbers=true %}

```json
{
  "feature": {
    "id": 15,
    "title": "Account Management",
    "description": "Manage your account information",
    "howtofind": "Top right of the screen",
    "user_stories": ["User story 1"]
  }
}
```

{% /code %}
