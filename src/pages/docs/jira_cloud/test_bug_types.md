---
title: Exploratory Tests and Bug types
description: Learn about Test IO exploratory tests and bug types.
---

## Exploratory Tests in Jira Plugin

Test IO exploratory tests, created on the Jira platform or the Test IO platform, can be seamlessly viewed through the Jira Cloud Plugin. This integration allows users to access and monitor tests with various statuses, including **Customer Finalized**, **Waiting** and **Running** directly from Jira.

Users can view comprehensive details of these tests, which include:

- **Start and End Date**: The time frame during which the test is scheduled to run.
- **Test IO Product and Section**: The specific product and section associated with the test.
- **Included Features**: A list of features being tested.
- **Devices and Environment**: Information about the devices and environments used for the tests.
- **Test Goal**: The primary objective or aim of the test.
- **Out of Scope**: Clarifies aspects that are explicitly not covered or tested as part of the current test session.
- **Requirements**: Any specific requirements or criteria needed for the test.

This detailed view enables tracking the progress and status of exploratory tests efficiently. By having all relevant information in one place, teams can better coordinate their efforts, ensuring that all aspects of the test are covered.

Additionally, the page includes a convenient **filtering option to sort tests by their current status**. This feature enables users to quickly focus on tests that meet their specific status criteria.

{% screenshot src="/assets/jira_cloud/exploratory_tests.png" caption="Test IO Exploratory Tests page" /%}

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

{% screenshot src="/assets/jira_cloud/test_types.gif" /%}

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

**Note**: Non-functional bugs are classified as low-severity bugs by definition.

{% quick-links %}

{% quick-link title="Create Exploratory Test" icon="shield_check"
href="/docs/jira_cloud/create_exploratory_test"
description="Run a new Test on Test IO platform from Jira Cloud side" /%}

{% /quick-links %}
