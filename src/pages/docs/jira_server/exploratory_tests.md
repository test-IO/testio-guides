---
title: Exploratory Tests
description: Learn about Test IO exploratory tests.
---

Test IO exploratory tests, whether created on the Jira platform or the Test IO platform, can be seamlessly viewed through the Jira Data Center (Server) Plugin. This integration allows users to access and monitor tests with various statuses, including **Waiting, Running, Initialized** and **Customer Finalized**, directly from Jira.

## Comprehensive Test Details

Users can view detailed information about these tests, including:

- **Start and End Date**: The scheduled time frame for the test.
- **Test IO Product and Section**: The specific product and section associated with the test.
- **Included Features**: A list of features being tested.
- **Devices and Environment**: Information about the devices and environments used for the tests.
- **Test Goal**: The primary objective of the test.
- **Out of Scope**: Clarifies what is not covered in the test session.
- **Requirements**: Specific criteria or requirements for the test.

This detailed view enables efficient tracking of the progress and status of exploratory tests. By consolidating all relevant information in one place, teams can better coordinate their efforts, ensuring comprehensive test coverage.

## Filtering and Navigation Options

- **Filtering Tests**: The page includes a convenient filtering option to sort tests by their current status, enabling users to quickly focus on tests that meet their specific criteria.

  {% screenshot src="/assets/jira_server/exploratory_1.png" /%}

- **Previewing Test Details**:
  {% list type="circle" %}

  - Click on the Test Cycle ID under the Test Title to navigate to the Test IO Platform for a detailed preview.
    {% screenshot src="/assets/jira_server/exploratory_2.png" /%}

  - Click on the **“View”** button at the top right corner of the test card to navigate to a dedicated page where you can see all the details of the test directly within Jira.

    {% screenshot src="/assets/jira_server/exploratory_3.png" /%}

  {% /list %}
