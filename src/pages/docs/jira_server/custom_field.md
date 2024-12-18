---
title: Custom field
description: Learn how to work with Custom Fields in Configuration.
---

The Custom Field is a powerful editor that allows you to create pre-formatted bug reports with dynamically changing content, tailored to your preferences. To use the attributes, simply click on them to make them appear in the editor, then use their content as needed.

When working with Custom Fields, you have three options:

- **Use predefined attributes**: Click on the attributes to insert them into the editor and enter any additional text.

- **Enter data manually**: Type directly into the editor to input your custom content.

{% screenshot src="/assets/jira_server/config/custom_field.png" caption="Custom Fields in Configuration" /%}

- **Use predefined example with attributes**: Click on 'Example' and copy paste ready example into the editor.

{% screenshot src="/assets/jira_server/config/custom_example.png" caption="Custom field with ready example" /%}

After all the attributes are filled, user can see the final result while checking the check box **'Show template preview based on demo bug attributes'**.

{% screenshot src="/assets/jira_server/config/custom_preview.png" caption="Preview of Custom Field" /%}

You can find the list of attributes and their corresponding terms in the Test IO Bug Report above:
{% table .custom %}

- **Mappable Fields to Export**
- **Corresponding Term in Bug Report**

---

- **Actual results** /
  ```custom_field
  %{Actual results}
  ```
- Actual Result of the reproduction

---

- **Attachments** /
  ```custom_field
  %{Attachments}
  ```
- Screenshots/Screencasts attached to the bug report

---

- **Tester** /
  ```custom_field
  %{Tester}
  ```
- The name of the Tester

---

- **Bug description** /
  ```custom_field
  %{Bug_description}
  ```
- - The location of the bug / The URL where the bug has been found
  - The reproduction steps
  - The expected result
  - The actual result
  - The attachments

---

- **test IO Bug url** /
  ```custom_field
  %{test IO Bug url}
  ```
- The URL of the bug

---

- **Devices and Browser** /
  ```custom_field
  %{Devices & Browser}
  ```
- The Device and Browser the bug was found on

---

- **Expected results** /
  ```custom_field
  %{Expected results}
  ```
- Expected Result of the reproduction

---

- **Feature** /
  ```custom_field
  %{Feature}
  ```
- Feature tested

---

- **Severity** /
  ```custom_field
  %{Severity}
  ```
- Bug severity

---

- **Steps** /
  ```custom_field
  %{Steps}
  ```
- Reproduction steps

---

- **Date of submission** /
  ```custom_field
  %{Date of submission}
  ```
- Bug submission date

---

- **Testcycle ID** /
  ```custom_field
  %{Testcycle ID}
  ```
- The ID of the Test Cycle

---

- **test IO testcycle url** /
  ```custom_field
  %{test IO testcycle url}
  ```
- The URL of the Test Cycle

---

- **Bug ID** /
  ```custom_field
  %{Bug ID}
  ```
- Test IO bug ID

---

- **Title of the bug** /
  ```custom_field
  %{Title of the bug}
  ```
- The title of Test IO bug

---

- **Environment** /
  ```custom_field
  %{Environment}
  ```
- Full information about environmental details including Title, URL, Username, Password, and Instructions

---

- **Environment title** /
  ```custom_field
  %{Environment_title}
  ```
- Test environment title

---

- **Environment URL** /
  ```custom_field
  %{Environment_url}
  ```
- Test environment URL

---

- **Environment Instructions** /
  ```custom_field
  %{Environment instructions}
  ```
- Further instructions for accessing the test environment

---

- **Environment username** /
  ```custom_field
  %{Environment_username}
  ```
- Test environment username

---

- **Environment password** /
  ```custom_field
  %{Environment_password}
  ```
- Test environment password

---

- **Product title** /
  ```custom_field
  %{Product title}
  ```
- The Product where the bug was found

---

- **Section title** /
  ```custom_field
  %{Section title}
  ```
- The Product Section where the bug was found

{% /table %}

For better visualization, refer to the **template for a Description custom field** provided above:

{% code language="plaintext" showLineNumbers=false %}

```
Test ID: %{Testcycle ID}
URL: %{test IO testcycle url}
Bug ID: %{Bug ID}
Feature: %{Feature}
Date: %{Date of submission}
Tester: %{Tester}

h3. Steps
---------------------------
%{Steps}

h3. Expected Result
---------------------------
%{Expected results}

h3. Actual Result
---------------------------
%{actual_result}

h3. Attachments
---------------------------
%{Attachments}

h3. Environment
---------------------------
%{Environment}
```

{% /code %}
