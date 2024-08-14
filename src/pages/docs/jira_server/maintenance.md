---
title: Maintenance
description: Learn how to maintain Test IO integration with your Jira instance.
---

The Maintenance page provides essential tools to manage and troubleshoot the Test IO integration with your Jira instance.

## General Tab

{% screenshot src="/assets/jira_server/maintain/1.png" caption="General tab in Maintenance" /%}

**Test environment**: This feature allows you to perform a test on the Test IO API and your Jira database. It ensures that communication between Test IO and Jira is functioning correctly.

**Steps to Perform a Test**:

1. Navigate to the **Maintenance page** under the Test IO Plugin section in your Jira instance.

2. Click on the **Test Environment** button.

3. Review the test results to confirm that the connection and communication are working properly.

{% screenshot src="/assets/jira_server/maintain/2.png" caption="Test environment results" /%}

**Download Logs**: This option provides access to the logs of the Jira Data Center(Server) addon and not only. These logs can be crucial for troubleshooting issues and may be requested by Test IO support for resolving problems. You have the flexibility to **choose between downloading all Jira logs or only the logs specific to the plugin by using the "Download only plugin logs" checkbox**.

To further refine your log downloads, you can specify a time range for the logs you need. The available options include:

- **Last Hour**: Quickly access logs from the past hour to identify and address recent issues.

  {% screenshot src="/assets/jira_server/maintain/3.png" caption="Download Test IO logs for last hour" /%}

- **Custom Date Range**: Define a specific start and end date, with a maximum duration of 3 days, to download logs covering any period of interest. This flexibility helps in investigating issues that may have occurred over longer periods or during specific events.

  {% screenshot src="/assets/jira_server/maintain/4.png" caption="Download Test IO logs for Custom Date range" /%}

**Clear Test IO data**: This feature allows you to perform a **hard reset**, clearing all Test IO settings created by the Jira Data Center (Server) Plugin. **Use this option with caution, as it will delete all plugin-related setups**.

{% screenshot src="/assets/jira_server/maintain/5.png" caption="Clear Test IO data" /%}

## Synchronization Jobs Tab

The Synchronization Job tab provides detailed information and control over various synchronization jobs between Test IO and Jira.

{% screenshot src="/assets/jira_server/maintain/6.png" caption="Synchronization Jobs" /%}

**Issues Sync Job**: Handles the import of issues that have been requested for Export or Re-Export from Test IO to Jira.

**Configuration Validation Job**: Ensures the correct operation of importing issues with the current "Issue Type" and "Fields Mapping" settings.

**Comments Sync Job**: Synchronizes comments from Test IO to Jira.

**Connections Sync Job**: Handles the synchronization of Test IO Products or Sections with the Jira project.

In the synchronization job table, you can easily monitor the status, details, last and next execution dates, and explanations for each job:

- **Status Column**: Displays the current status of each job.

- **Details Column**: Provides detailed information about the current state of the job. Click on the "Show" link in this column to expand and view additional details.

- **Last and Next Execution Dates**: Shows when the job was last executed and when it is scheduled to run next.

- **About Column**: Offers explanations for each job's purpose and significance. Click on the info links to learn more about what each job entails.

- **Notifications**: Each job has a checkbox under the Notification column that allows you to turn notifications on or off for that specific job in the Test IO plugin section. This helps you stay informed about the execution and status of each synchronization job as needed.

## Migration to Cloud Tab

Support for Atlassian Server products ends on Feb. 15, 2024. [Atlassian migration guide](https://www.atlassian.com/migration/assess/journey-to-cloud) has detailed instructions on how to migrate from Server to Cloud. Find more details about migration processes [here](https://guides.test.io/docs/jira_plugins/migration_to_cloud#test-io-migration) in our Test IO Guides platform.
