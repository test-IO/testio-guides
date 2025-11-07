---
title: Products
description: Manage products
---

Manage products in your account.

## List products

Retrieve all products, optionally filtered by product IDs.

**Endpoint:** `GET /products`

**Query Parameters:**

- `filter[product_ids]` (array[number], optional) - Array of product IDs to filter by

**Example Request:**

{% code language="bash" showLineNumbers=true %}

```bash
curl -X GET "https://api.test.io/customer/v2/products" \
  -H "Authorization: Token YOUR_API_TOKEN"
```

{% /code %}

**Response:** `200 OK`

{% code language="json" showLineNumbers=true %}

```json
{
  "products": [
    {
      "id": 1,
      "name": "My Product",
      "description": "Description of the product",
      "default_section_id": 2,
      "sections": [],
      "connection": null
    }
  ]
}
```

{% /code %}

## Get product

Retrieve a specific product by ID.

**Endpoint:** `GET /products/{product_id}`

**Parameters:**

- `product_id` (number, required) - ID of the Product

**Example Request:**

{% code language="bash" showLineNumbers=true %}

```bash
curl -X GET "https://api.test.io/customer/v2/products/1" \
  -H "Authorization: Token YOUR_API_TOKEN"
```

{% /code %}

**Response:** `200 OK`

{% code language="json" showLineNumbers=true %}

```json
{
  "product": {
    "id": 1,
    "name": "My Product",
    "description": "Description of the product",
    "default_section_id": 2,
    "sections": [],
    "connection": null
  }
}
```

{% /code %}

## Create product

Create a new product.

**Endpoint:** `POST /products`

**Request Body:**

- `product` (Product Create, required) - Product object
  - `title` (string, required) - Title of the product
  - `description` (string, optional) - Description of the product
  - `product_type` (ProductType, required) - Type of product. Values: `website`, `mobile_app_ios`, `mobile_app_android`, `mobile_app_windows`, `streaming_app`, `gaming`
  - `industry` (ProductIndustry, required) - Industry of the product. Values: `retail`, `media`, `travel`, `social`, `health`, `sports`, `education`, `finance`, `games`, `other`

**Example Request:**

{% code language="bash" showLineNumbers=true %}

```bash
curl -X POST "https://api.test.io/customer/v2/products" \
  -H "Authorization: Token YOUR_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "product": {
      "title": "My New Product",
      "description": "Description of my product",
      "product_type": "website",
      "industry": "retail"
    }
  }'
```

{% /code %}

**Response:** `201 Created`

{% code language="json" showLineNumbers=true %}

```json
{
  "product": {
    "id": 1,
    "name": "My New Product",
    "description": "Description of my product",
    "default_section_id": 2,
    "sections": [],
    "connection": null
  }
}
```

{% /code %}

## Update product

Update an existing product.

**Endpoint:** `PUT /products/{product_id}`

**Parameters:**

- `product_id` (number, required) - ID of the Product

**Request Body:**

- `product` (Product Update, required) - Product object
  - `description` (string, optional) - Description of the product

**Example Request:**

{% code language="bash" showLineNumbers=true %}

```bash
curl -X PUT "https://api.test.io/customer/v2/products/1" \
  -H "Authorization: Token YOUR_API_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "product": {
      "description": "Updated description"
    }
  }'
```

{% /code %}

**Response:** `200 OK`

{% code language="json" showLineNumbers=true %}

```json
{
  "product": {
    "id": 1,
    "name": "My New Product",
    "description": "Updated description",
    "default_section_id": 2,
    "sections": [],
    "connection": null
  }
}
```

{% /code %}

## Delete product

Delete a product.

**Endpoint:** `DELETE /products/{product_id}`

**Parameters:**

- `product_id` (number, required) - ID of the Product

**Example Request:**

{% code language="bash" showLineNumbers=true %}

```bash
curl -X DELETE "https://api.test.io/customer/v2/products/1" \
  -H "Authorization: Token YOUR_API_TOKEN"
```

{% /code %}

**Response:** `200 OK`

{% code language="json" showLineNumbers=true %}

```json
{
  "product": {
    "id": 1,
    "name": "My New Product",
    "description": "Updated description",
    "default_section_id": 2,
    "sections": [],
    "connection": null
  }
}
```

{% /code %}
