---
title: Custom field
description: Learn how to work with Custom Fields in Configuration.
---

The Custom Field is a powerful editor that allows you to create pre-formatted bug reports with dynamically changing content, tailored to your preferences. To use the attributes, simply click on them to make them appear in the editor, then use their content as needed.

When working with Custom Fields, you have two options:

- **Use predefined attributes**: Click on the attributes to insert them into the editor and enter any additional text.
- **Enter data manually**: Type directly into the editor to input your custom content.

{% screenshot src="/assets/jira_cloud/config/custom_field.png" caption="Custom Fields in Configuration" /%}

You can find the list of attributes and their corresponding terms in the Test IO Bug Report above:
{% table .custom %}

- **Mappable Fields to Export**
- **Corresponding Term in Bug Report**

---

- **Actual result** /
  ```custom_field
  %{actual_result}
  ```
- Actual Result of the reproduction

---

- **Attachments** /
  ```custom_field
  %{attachments}
  ```
- Screenshots/Screencasts attached to the bug report

---

- **Bug ID** /
  ```custom_field
  %{test IO_idx}
  ```
- Test IO bug ID

---

- **Bug description** /
  ```custom_field
  %{bug_description}
  ```
- - The location of the bug / The URL where the bug has been found
  - The reproduction steps
  - The expected result
  - The actual result
  - The attachments

---

- **Bug type** /
  ```custom_field
  %{bug_type}
  ```
- The type of the bug

---

- **Date of submission** /
  ```custom_field
  %{submission_date}
  ```
- Bug submission date

---

- **Devices and Browser** /
  ```custom_field
  %{environment}
  ```
- The Device and Browser the bug was found on

---

- **Environment URL** /
  ```custom_field
  %{environment_url}
  ```
- Test environment URL

---

- **Environment password** /
  ```custom_field
  %{environment_password}
  ```
- Test environment password

---

- **Environment title** /
  ```custom_field
  %{environment_title}
  ```
- Test environment title

---

- **Environment username** /
  ```custom_field
  %{environment_username}
  ```
- Test environment username

---

- **Expected result** /
  ```custom_field
  %{expected_result}
  ```
- Expected Result of the reproduction

---

- **Feature** /
  ```custom_field
  %{feature}
  ```
- Feature tested

---

- **Further instructions** /
  ```custom_field
  %{environment_access}
  ```
- Further instructions for accessing the test environment

---

- **Product title** /
  ```custom_field
  %{product_title}
  ```
- The Product where the bug was found

---

- **Section title** /
  ```custom_field
  %{section_title}
  ```
- The Product Section where the bug was found

---

- **Severity** /
  ```custom_field
  %{severity}
  ```
- Bug severity

---

- **Steps** /
  ```custom_field
  %{steps}
  ```
- Reproduction steps

---

- **Test IO Bug url** /
  ```custom_field
  %{bug_url}
  ```
- The URL of the bug

---

- **Test IO testcycle url** /
  ```custom_field
  %{test_cycle_url}
  ```
- The URL of the Test Cycle

---

- **Testcycle ID** /
  ```custom_field
  %{test_cycle_id}
  ```
- The ID of the Test Cycle

---

- **Tester** /
  ```custom_field
  %{author}
  ```
- The name of the Tester

---

- **Title of the bug** /
  ```custom_field
  %{title}
  ```
- The title of Test IO bug

---

- **URL where the bug occurred** /
  ```custom_field
  %{url}
  ```
- URL where the bug was found on

{% /table %}

For better visualization, refer to the **template for a Description custom field** provided above:

{% code language="plaintext" showLineNumbers=false %}

```
Test ID: %{test_cycle_id}
URL: %{test_cycle_url}
Bug ID: %{testio_idx}
Link: %{bug_url}
Feature: %{feature}
Date: %{submission_date}
Tester: %{author}
URL: %{url}

h3. Steps
---------------------------
%{steps}

h3. Expected Result
---------------------------
%{expected_result}

h3. Actual Result
---------------------------
%{actual_result}

h3. Attachments
---------------------------
%{attachments}

h3. Environment
---------------------------
%{environment}
```

{% /code %}
