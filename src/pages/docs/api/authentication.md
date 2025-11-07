---
title: Authentication
description: How to authenticate with the Customer API V2
---

All API requests require an API token for authentication.

## Getting Your API Token

The token can be retrieved from the `Integrations` → `API` section of the test IO account.

## Using the Token

Include the token in the HTTP Authorization header using the following format:

```
Authorization: Token YOUR_API_TOKEN
```

### Example Request

{% code language="bash" showLineNumbers=true %}

```bash
curl -X GET "https://api.test.io/customer/v2/products" \
  -H "Authorization: Token YOUR_API_TOKEN"
```

{% /code %}

## Security Best Practices

- Keep your API token secure and never expose it in client-side code
- Do not commit API tokens to version control systems
- Rotate your API token regularly
- Use environment variables to store your API token
