---
title: Manage Exploratory Tests
description: Learn how to manage exploratory tests.
---

## Edit Test

You can edit tests that are in the "Initialized" status, meaning the test creation process has been started but not yet finally submitted.

**Where to Find the Edit Button for Initialized Tests**

The Edit button is available in the following locations:

- **Test Preview Page**: After clicking on the “Save and continue” button on the Create Exploratory Test page.
- **Exploratory Tests Page**: On the test card in the "Exploratory Tests" section.

**How to Edit a Test**

1. **Select a Test**:
   {% list type="circle" %}

   - Navigate to the "Exploratory tests" page.
   - Choose a test that is in the Initialized status, or initiate test creation and reach the Test Preview page by clicking the “Save and continue” button.

   {% /list %}

2. **Click on the Edit Button**:
   {% list type="circle" %}

   - Locate and click the “Edit” button available on the selected test.

   {% /list %}

3. **Perform Desired Changes**:
   {% list type="circle" %}

   - Make the necessary changes to the test details, such as modifying the test objectives, scope, devices, or instructions.

   {% /list %}

4. **Save the Changes**:
   {% list type="circle" %}

   - Click on the “Update” button to apply the changes and save the updated test configuration.

   {% /list %}

{% screenshot src="/assets/jira_server/manage_tests/1.png"
caption="\"Edit\" button on Exploratory Test card" /%}

{% screenshot src="/assets/jira_server/manage_tests/2.gif" caption="Edit an Exploratory Test" /%}

## Duplicate a Test

The Duplicate feature allows you to create an identical copy of an existing test, preserving the original test configuration while enabling you to reuse or modify it for new testing scenarios.

**Where to Find the Duplicate Button**

The Duplicate button is available in the following locations:

- **Test Preview Page**: After clicking on the “Save and continue” button on the Create Exploratory Test page.
- **Test View Page**: After clicking on “View” button from Exploratory tests page or right after the exploratory test has been submitted.

**How to Duplicate a Test**

1. **Select a Test to Duplicate**:
   {% list type="circle" %}

   - Navigate to the "Test Preview" page by clicking the “Save and continue” button on the Create Exploratory Test page.
   - Navigate to the "Test View" page after the test has been submitted .

   {% /list %}

2. **Click on the Duplicate Button**:
   {% list type="circle" %}

   - On the selected test, locate and click the “Duplicate” button to create a copy of the test. The newly duplicated test preview page is expanded automatically.

   {% /list %}

3. **Review and Modify (Optional)**:
   {% list type="circle" %}

   - The duplicated test will be initialized with the same configurations as the original test (besides the default date range for test run).
   - You can review the duplicated test and make any necessary modifications, such as changing the test objectives, scope, devices, or instructions.

   {% /list %}

4. **Save the Duplicated Test (Optional)**:
   {% list type="circle" %}

   - After reviewing or modifying the duplicated test, click on the “Submit test” button to finalize and submit the duplicated test.

   {% /list %}

By using the Duplicate feature, you can efficiently create multiple tests with similar settings, ensuring consistency and saving time in test preparation.

{% screenshot src="/assets/jira_server/manage_tests/3.gif" caption="Duplicate a Test" /%}

## Save Test as Template

The Save as Template feature allows you to create reusable test templates from existing tests. This functionality helps standardize your testing processes and saves time when creating new tests with similar configurations.

**Where to Find the Save as Template Button**

The Save as Template button is available in the following locations:

- **Create New Exploratory Test Page**: Initially disabled, this button becomes enabled once all required fields are filled in.
- **Test Preview Page**: After clicking on the “Save and continue” button on the Create Exploratory Test page.
- **Test View Page**: After the test has been submitted.

**How to Save a Test as a Template**

1. **Select a Test to Save as Template**:
   {% list type="circle" %}

   - Create New Exploratory Test Page: Fill in all required fields during test creation to enable the Save as Template button.
   - Test Preview Page: Navigate by clicking the “Save and continue” button on the Create Exploratory Test page.
   - Test View Page: Access this page after the test has been submitted.

   {% /list %}

2. **Click on the Save as Template Button**:
   {% list type="circle" %}

   - Locate and click the “Save as Template” button on the selected test.

   {% /list %}

3. **Name the Template**:
   {% list type="circle" %}

   - Provide a title for your template that clearly identifies its purpose.

   {% /list %}

4. **Save the Template**:
   {% list type="circle" %}

   - After naming and describing the template, click on the “Save” button to finalize and save the template.

   {% /list %}

{% screenshot src="/assets/jira_server/manage_tests/4.gif" caption="Add title for template" /%}

**Using Templates for Quick Exploratory Test Creation**

Templates created from either Jira or the Test IO platform can be used to streamline the creation of new exploratory tests. Follow these steps to use a template for quicker test setup:

1. **Initiate New Test Creation**:
   {% list type="circle" %}

   - Begin the process to create a new exploratory test as usual.

   {% /list %}

2. **Select Template Option**:
   {% list type="circle" %}

   - Instead of selecting a test type, click on the "Template" option.

   {% /list %}

3. **Choose a Template**:
   {% list type="circle" %}

   - Pick the desired template from the available list.

   {% /list %}

4. **Apply Template Details**:
   {% list type="circle" %}

   - Once selected, the details from the template will be automatically applied to your new test.

   {% /list %}

5. **Review and Finalize**:
   {% list type="circle" %}

   - Review the pre-filled details to ensure everything meets your requirements.
   - Proceed with the test creation by following the remaining steps.

   {% /list %}

Using templates in this way helps you save time and ensures consistency in your testing processes.

{% screenshot src="/assets/jira_server/manage_tests/5.gif" caption="Initiate test using Template" /%}
