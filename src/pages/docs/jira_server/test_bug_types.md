---
title: Exploratory Tests and Bug types
description: Learn about Test IO exploratory tests and bug types.
---

## Exploratory Tests in Jira Plugin

Test IO exploratory tests, whether created on the Jira platform or the Test IO platform, can be seamlessly viewed through the Jira Data Center (Server) Plugin. This integration allows users to access and monitor tests with various statuses, including **Waiting, Running, Initialized, Locked** and **Customer Finalized**, directly from Jira.

### Comprehensive Test Details

Users can view detailed information about these tests, including:

- **Start and End Date**: The scheduled time frame for the test.
- **Test IO Product and Section**: The specific product and section associated with the test.
- **Included Features**: A list of features being tested.
- **Devices and Environment**: Information about the devices and environments used for the tests.
- **Test Goal**: The primary objective of the test.
- **Out of Scope**: Clarifies what is not covered in the test session.
- **Requirements**: Specific criteria or requirements for the test.

This detailed view enables efficient tracking of the progress and status of exploratory tests. By consolidating all relevant information in one place, teams can better coordinate their efforts, ensuring comprehensive test coverage.

### Filtering and Navigation Options

- **Filtering Tests**: The page includes a convenient filtering option to sort tests by their current status, enabling users to quickly focus on tests that meet their specific criteria.

  {% screenshot src="/assets/jira_server/exploratory_1.png" caption="Status filter for Exploratory Tests" /%}

- **Previewing Test Details**:
  {% list type="circle" %}

  - Click on the link *'Open at Test IO'* near Test Cycle ID to navigate to the Test IO Platform for a detailed preview.
    {% screenshot src="/assets/jira_server/exploratory_2.png" caption="Test Cycle ID for navigation to Test IO Platform" /%}

  - Click on the **“Test Title”** button at the top left corner of the test card to navigate to a dedicated page where you can see all the details of the test directly within Jira.

    {% screenshot src="/assets/jira_server/exploratory_3.png" caption="View Test details in Jira" /%}

  - Click on the new **“All Bugs”** button on Exploratory test card to navigate to the All Bugs page where "Test ID" filter is prefilled with the selected Test IO Test cycle ID.

  - Click on the new **“Open Bugs”** button on Exploratory test card to navigate to the Bug triage (Received Bugs) page where "Test cycle" filter is prefilled with the selected Test IO Test cycle details.

  - Click on the new **“User Stories”** button on Exploratory test card to navigate to the User Stories page where the page is displayed in Test preview, and "Test cycle" filter is prefilled with the selected Test IO Test cycle details.

    {% screenshot src="/assets/jira_server/exploratory_4.png" caption="View Test details in Jira" /%}

- **Test Details Infographics**:
  {% list type="circle" %}

  - Test Cards in status **“Running”**, **“Locked”** have Test Results that contain graphical representations for **Bug types** with counting: low, high, critical, content, visual, UX, custom, **Bug statuses** with counting: open, total, **User Stories Result** with counting: passed, failed, blocked. 

  - Click on the necessary **Bug type** graphical representation on the test card to navigate to **All bugs** page with pre-selected *Severity* filter and *Test Cycle ID*.

    {% screenshot src="/assets/jira_cloud/exploratory_5.png" caption="Test Results representation" /%}

  {% /list %}

## Exploratory Test types

Test IO offers several types of functional tests, as well as usability testing, all carried out by carefully selected and trained human testers. These tests are designed to get you the kinds of results you need, in the time frame that you need them.

### Rapid Test {% .title-small %}

Rapid tests are fast, they can be completed in as little as two hours and are designed to catch high-priority bugs. They are ideal for cases like launching a new build or making a pull request. Rapid tests ensure that your app functions correctly on the tested devices, providing a "sanity check" before major changes.

### Focused Test {% .title-small %}

Focused tests involve a deep dive into a specific feature or section of your app, akin to putting a part of your software under a microscope. These tests are perfect for identifying bugs in new functionality, including edge cases. Running a focused test helps you find all potential problems in a specific segment of your software.

### Coverage Test {% .title-small %}

Coverage tests address the challenge of ensuring your app works across various devices, browsers, and operating systems. You can specify the types of devices to test on and the areas of the product to cover. This test is mostly useful before releases or following major changes, ensuring compatibility across different platforms.

### Usability Test {% .title-small %}

Usability tests provide feedback from a diverse group of testers, from early-stage feedback to pre-release testing, to identify usability issues in production. For better results, it is recommended to request an evaluation of a specific feature or user flow.

Find more details about each test type on the "Create Exploratory Test" page. After selecting a specific test type, information will be displayed on the right side of the page.

{% screenshot src="/assets/jira_server/test_types.gif" caption="Exploratory Test type details" /%}

## Bug Severities

Different test types include different severity levels in the test scope. To ensure our views on severity are aligned, here’s how we classify bugs and issues:

### Functional Bugs

- **Critical**: Prevents a function of the app or website, potentially causing loss of income (e.g., an app crash or inability to log in).
- **High**: Serious impact on user experience but doesn’t prevent the function of the app or website.
- **Low**: Minimal impact on user experience.

### Non-Functional Bugs

- **Usability**: Suggested improvements to existing features and functions that would make the product easier and more intuitive to use.
- **Visual**: The user can accomplish a task, but the interface looks wrong, typically due to responsive design, CSS, HTML, or layout framework problems.
- **Content**: Bugs related to missing data, images, or broken links.
- **Custom**: Special Bug Reports that are set up by customer if needed.

**Note**: Non-functional bugs are classified as low-severity bugs by definition.

{% quick-links %}

{% quick-link title="Create Exploratory Test" icon="shield_check"
href="/docs/jira_server/create_exploratory_test"
description="Run a new Test on Test IO platform from Jira side" /%}

{% quick-link title="Manage Exploratory Tests" icon="shield_check"
href="/docs/jira_server/manage_exploratory_tests"
description="Edit, Duplicate and Save Test as Template for productive Test management" /%}

{% /quick-links %}
