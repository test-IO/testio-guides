---
title: User Stories execution
description: Learn about User Stories execution.
---

{% screenshot src="/assets/jira_cloud/user_stories/1.png" /%}
You can review the results of user story executions included in your tests on the separate **"User Stories"** page. User story executions are displayed on this page in two formats:

- **Features**: User stories are grouped and displayed by the features they belong to. You can access them in the Test IO Product/Feature/User Stories preview. Expand the Test IO product, then the selected feature to see the included user stories.
  {% screenshot src="/assets/jira_cloud/user_stories/2.png" /%}

- **Tests**: User stories are grouped and displayed by the tests they were included in. You can access them in the Test IO Product/Test/User Stories preview. Expand the Test IO product, then the selected Test to see the included user stories.
  {% screenshot src="/assets/jira_cloud/user_stories/3.png" /%}

User story executions can have three possible statuses:

- **Passed**: The user story has been successfully executed and met all the acceptance criteria.
- **Blocked**: The user story could not be executed due to a blocking issue that prevented testing.
- **Failed**: The user story did not meet the acceptance criteria or encountered errors during execution.

**User Story Execution Details**

User story executions can be viewed in expanded mode at various levels:

- **Test IO Product Level**: You can see the overall counts for Passed, Failed, and Blocked executions on the right side of the table.
- **Feature/Test Level**: Expand specific features or tests to view the associated user stories.
- **User Story Level**: View the execution status (Passed, Failed, Blocked) for each user story without expanding the details.

For a quicker and more comfortable preview of results, you can use the **“Expand All Rows”** and **“Collapse All Rows”** action buttons. These buttons allow you to expand or collapse all user stories displayed on the page simultaneously, providing a more streamlined and efficient way to navigate through the execution details.

To see detailed information about a specific user story execution, **click on the user story name**. This will expand the user story execution details on the right side, including:

- **Test**: The name of the test in which the user story was executed.
- **Environment**: The test environment where the user story was executed.
- **Status**: The status of the user story execution (Passed, Blocked, Failed).
- **Executed by**: The tester name who executed the user story.
- **Comment**: Any comments or observations made by the tester during execution.
- **Device**: The specific device used to execute the user story.
  {% screenshot src="/assets/jira_cloud/user_stories/4.png" /%}

If a single user story has more than one execution, all executions will be expanded one after the other, allowing you to see the detailed history of each execution attempt.
{% screenshot src="/assets/jira_cloud/user_stories/5.png" /%}

Additionally, you can filter the list of user stories on the “User Stories” page using the following filters:

- **Product**: Select the product associated with the user stories.
- **Test environment**: Filter by the specific test environment used for execution.
- **Test cycle**: Choose the test cycle in which the user stories were executed.
- **Date range**: Specify the date range to filter user stories executed within a particular timeframe.
