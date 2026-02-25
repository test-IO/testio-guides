---
title: Features
description: List, create, and copy features
---

Manage features for your products.

> **Prerequisites**: You need a product before creating features. See [Products](/docs/api/products) to get or create a product. Features are used when creating exploratory tests (see [Exploratory Tests](/docs/api/exploratory-tests)).

## List features

Retrieve all features for a specific product. This endpoint returns the full list of features regardless of whether sections are enabled for the product.

**Endpoint:** `GET /products/{product_id}/features`

**Parameters:**

- `product_id` (number, required) - ID of the Product

**Query Parameters:**

| Parameter    | Type  | Required | Description                                                                                                                                                                        |
| ------------ | ----- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `includes[]` | array | No       | Optional associations to expand. Supported value: `user_stories`. When included, `user_stories` returns objects with `id`, `path`, `title`, `feature_id` instead of plain strings. |

> To retrieve features for a particular section (when sections are enabled for the product), use `GET /products/{product_id}/sections/{section_id}/features`. See [List features by section](#list-features-by-section) below.

**Example Request:**

{% code language="bash" showLineNumbers=true %}

```bash
curl -X GET "https://api.test.io/customer/v2/products/1/features" \
  -H "Authorization: Token YOUR_API_TOKEN"
```

{% /code %}

**Response:** `200 OK`

By default, `user_stories` is an array of path strings:

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

**Example Request (with expanded user stories):**

{% code language="bash" showLineNumbers=true %}

```bash
curl -X GET "https://api.test.io/customer/v2/products/1/features?includes[]=user_stories" \
  -H "Authorization: Token YOUR_API_TOKEN"
```

{% /code %}

**Response:** `200 OK`

When `includes[]=user_stories` is passed, each user story is returned as an object:

{% code language="json" showLineNumbers=true %}

```json
{
  "features": [
    {
      "id": 1,
      "title": "Account Management",
      "description": "Manage your account information",
      "howtofind": "Top right of the screen",
      "user_stories": [
        {
          "id": 10,
          "path": "User story 1",
          "title": "User story 1",
          "feature_id": 1
        },
        {
          "id": 11,
          "path": "User story 2",
          "title": "User story 2",
          "feature_id": 1
        }
      ]
    }
  ]
}
```

{% /code %}

## List features by section

Retrieve all features for a specific section of a product. Use this endpoint for products that have sections enabled.

**Endpoint:** `GET /products/{product_id}/sections/{section_id}/features`

**Parameters:**

- `product_id` (number, required) - ID of the Product
- `section_id` (number, required) - ID of the Section

**Query Parameters:**

| Parameter    | Type  | Required | Description                                                                                                        |
| ------------ | ----- | -------- | ------------------------------------------------------------------------------------------------------------------ |
| `includes[]` | array | No       | Optional associations to expand. Supported value: `user_stories`. See [List features](#list-features) for details. |

**Example Request:**

{% code language="bash" showLineNumbers=true %}

```bash
curl -X GET "https://api.test.io/customer/v2/products/1/sections/2/features" \
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
      "user_stories": ["User story 1"]
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

## Copy features

Copy all features (including their user stories) from one product to another. The features are duplicated into the destination product.

**Endpoint:** `PUT /products/{product_id}/features/copy`

**Parameters:**

- `product_id` (number, required) - ID of the source Product to copy features from
- `destination_product_id` (number, required) - ID of the destination Product to copy features to

**Query Parameters:**

| Parameter    | Type  | Required | Description                                                                                                        |
| ------------ | ----- | -------- | ------------------------------------------------------------------------------------------------------------------ |
| `includes[]` | array | No       | Optional associations to expand. Supported value: `user_stories`. See [List features](#list-features) for details. |

**Example Request:**

{% code language="bash" showLineNumbers=true %}

```bash
curl -X PUT "https://api.test.io/customer/v2/products/1/features/copy" \
  -H "Authorization: Token YOUR_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "destination_product_id": 2
  }'
```

{% /code %}

**Response:** `200 OK`

Returns the list of features in the destination product after copying.

{% code language="json" showLineNumbers=true %}

```json
{
  "features": [
    {
      "id": 30,
      "title": "Account Management",
      "description": "Manage your account information",
      "howtofind": "Top right of the screen",
      "user_stories": ["User story 1"]
    }
  ]
}
```

{% /code %}
