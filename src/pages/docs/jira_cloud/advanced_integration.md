---
title: Advanced Integration in Configuration
description: Learn how to configure advanced settings for integration between Jira and Test IO.
---

Configure advanced settings for comprehensive two-way integration between Jira and Test IO.  
&nbsp;

**Synchronize the status of Jira issues and Test IO bugs**:

1. **Configure Status and Resolution**: Set up specific Status and Resolution values for Jira tickets created from accepted Test IO bugs.
2. **Automate Bug Resolution**: When a Jira issue created from an accepted Test IO bug reaches the defined status and resolution, the corresponding Test IO bug will automatically be marked as **"fixed"** in Test IO. This update removes the bug from the Known Bug list on the Test IO side.

**Example of Advanced Integration for Known Bug Status Synchronization**

Consider a Test IO bug listed among the Known Bugs on the Test IO side. A Jira issue has been created from this accepted Test IO bug.

In the Advanced Integration settings for Known Bug status synchronization:

- **The Status** is set to "Resolved".
- **The Resolution** is set to "Done".

When the Jira ticket created from the accepted Test IO bug reaches the "Resolved" status with a "Done" resolution, the associated Test IO bug will be marked as "Fixed" in Test IO. Consequently, it will be removed from the Known Bugs list on Test IO.

This process ensures that the bug is considered fixed and allows testers to report the bug again in the future if it reoccurs. By setting up these advanced integration settings, you enable seamless synchronization between Jira and Test IO, enhancing the efficiency of your bug tracking and resolution processes.
{% screenshot src="/assets/jira_cloud/config/sync_status.png" caption="Synchronize the status of Jira issues and Test IO bugs" /%}

**Synchronize the status of Jira issues and Test IO bug fix confirmations**:

1. **Select Jira Status for Bug Fix Confirmation**: Configure a specific status to be applied to Jira tickets, whether they are created from accepted Test IO bugs or originally created within Jira.
2. **Automatic Status Update**: When the Bug Fix Confirmation for these Jira tickets passes on the Test IO side, the selected status will automatically be applied to the corresponding Jira tickets.

By setting up these advanced integration settings, you ensure that Jira issues and Test IO Bug Fix Confirmations are synchronized, enhancing the efficiency and accuracy of your bug tracking and resolution processes.

**Example of Synchronizing the Status of Jira Issues and Test IO Bug Fix Confirmations**

Consider a scenario where a Jira ticket is created either from an accepted Test IO bug or directly within Jira. You want to ensure that the status of this Jira ticket is updated based on bug fix confirmations from Test IO.

In the Advanced Integration settings for synchronizing Jira issue status and Test IO Bug Fix Confirmations configure a specific status to be applied to Jira tickets once the Bug fix is confirmed. For example, set the status to "Closed".

When the Bug Fix Confirmation for this Jira ticket passes on the Test IO side, the Jira ticket will automatically be updated to the "Closed" status.
{% screenshot src="/assets/jira_cloud/config/sync_fix_confirm.png" caption="Synchronize the status of Jira issues and Test IO bug fix confirmations" /%}

**Synchronize comments between Jira and Test IO**:

1. **Define a Sync Identifier**: Set up a specific string or tag to identify which comments should be synchronized between Jira and Test IO.
2. **Automate Comment Synchronization**: Comments containing the defined identifier will be automatically synced on the Test IO side for Jira issues created from accepted Test IO bugs. This ensures that communication and updates are effectively shared with the tester who submitted the Test IO bug.

**Example of comment synchronization between Jira and Test IO**

Consider a scenario where you want to ensure that specific comments made under a Jira ticket created from an accepted Test IO bug are automatically synchronized with Test IO for better collaboration and information sharing.

In the Advanced Integration settings for synchronizing comments between Jira and Test IO set up a specific string or tag, such as "@testIO", to identify which comments should be sent to Test IO.

When comments in Jira contain the "@testIO" tag, they will be automatically synced with the corresponding Test IO bug on the Test IO side. For example, if a Jira ticket has a comment like "Issue replicated on multiple devices @testIO", this comment will be automatically copied to the corresponding Test IO bug. This ensures that communication and updates are effectively shared with the tester who submitted the Test IO bug.
{% screenshot src="/assets/jira_cloud/config/sync_comments.png" caption="Synchronize comments between Jira and Test IO" /%}

You have now fully configured the Jira Cloud Plugin. Next, navigate to your configured Jira Project to explore and utilize the integration capabilities provided by the plugin.
