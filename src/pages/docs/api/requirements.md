---
title: Requirements
description: Define device and platform targeting for tests
---

Use requirements to target devices, platforms, and locales for your tests. Each requirement is an object with a `type` and `value`. Combine multiple requirements to narrow your target audience.

## Supported requirement types

- `device_type`: `desktop`, `mobile`, `tablet`
- `os`: `ios`, `android`, `windows`, `macos`, `linux`
- `os_version`: semantic version or range (e.g. `"17"`, `">=13"`)
- `browser`: `chrome`, `safari`, `firefox`, `edge`
- `browser_version`: version or range (optional)
- `locale`: IETF language tag (e.g. `"en-US"`, `"de-DE"`)
- `manufacturer` (mobile): e.g. `"samsung"`, `"apple"`
- `device_model` (mobile): e.g. `"iphone_14"`, `"pixel_7"`

## Examples

Target iOS Safari on mobile:

{% code language="json" showLineNumbers=true %}

```json
[
  { "type": "device_type", "value": "mobile" },
  { "type": "os", "value": "ios" },
  { "type": "browser", "value": "safari" }
]
```

{% /code %}

Target German desktop Chrome, latest versions:

{% code language="json" showLineNumbers=true %}

```json
[
  { "type": "device_type", "value": "desktop" },
  { "type": "browser", "value": "chrome" },
  { "type": "locale", "value": "de-DE" }
]
```

{% /code %}

Use requirements in `exploratory_tests` and `test_case_tests` requests to scope who can join and execute your test.
