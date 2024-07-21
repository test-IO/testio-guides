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

- **The Status** is set to "Done".
- **The Resolution** is set to "Cannot Reproduce".

When the Jira ticket created from the accepted Test IO bug reaches the "Done" status with the "Cannot Reproduce" resolution, the associated Test IO bug will be marked as "Fixed" in Test IO. Consequently, it will be removed from the Known Bugs list on Test IO.

This process ensures that the bug is considered fixed and allows testers to report the bug again in the future if it reoccurs. By setting up these advanced integration settings, you enable seamless synchronization between Jira and Test IO, enhancing the efficiency of your bug tracking and resolution processes.

{% screenshot src="/assets/jira_server/advanced_integration/1.png" /%}

**Synchronize the status of Jira issues and Test IO bug fix confirmations**

1. **Select Jira Status and Resolution for Bug Fix Confirmation**: Configure a specific status and resolution to be applied to Jira tickets, whether they are created from accepted Test IO bugs or originally created within Jira.

2. **Automatic Status Update**: When the Bug Fix Confirmation for these Jira tickets passes on the Test IO side, the selected status and resolution will automatically be applied to the corresponding Jira tickets.

By setting up these advanced integration settings, you ensure that Jira issues and Test IO Bug Fix Confirmations are synchronized, enhancing the efficiency and accuracy of your bug tracking and resolution processes.

**Example of Synchronizing the Status of Jira Issues and Test IO Bug Fix Confirmations**

Consider a scenario where a Jira ticket is created either from an accepted Test IO bug or directly within Jira. You want to ensure that the status of this Jira ticket is updated based on bug fix confirmations from Test IO.

In the Advanced Integration settings for synchronizing Jira issue status and Test IO Bug Fix Confirmations configure a specific status and resolution to be applied to Jira tickets once the Bug fix is confirmed. For example, set the Status to "Done" and Resolution to “Cannot Reproduce”.

When the Bug Fix Confirmation for this Jira ticket passes on the Test IO side, the Jira ticket will automatically be updated to the "Closed" status and “Cannot Reproduce” resolution .

{% screenshot src="/assets/jira_server/advanced_integration/2.png" /%}

**Update imported Test IO bug with issue property for JQL Search**

Users can set a specific property for Test IO bugs imported into Jira, making them easily searchable through Jira’s advanced JQL queries. By default, the status 'imported' is applied to all imported Test IO bugs, while the status 'demo' is used for all demo bugs.

This feature allows for efficient organization and retrieval of Test IO bugs within Jira. For example, you can use the following JQL queries to find these bugs:

- To find bugs with a specific status: `issue.property[testio].status ~ 'status_name'`

- To find all Test IO bugs: `TestIO is not EMPTY`

{% screenshot src="/assets/jira_server/advanced_integration/3.png" /%}

By configuring these properties, you enhance the ability to manage and track imported Test IO bugs using Jira's powerful search capabilities.

---

**Configuring the Jira Data Center Plugin from Project Settings**

You can also configure the Jira Data Center Plugin from the Project Settings page using a Jira user account with **non-admin permissions**.

This means you don't need admin-level access to set up the plugin for your specific project, making it more accessible and easier to manage for individual project teams.

{% screenshot src="/assets/jira_server/advanced_integration/4.png" /%}

---

You have now fully configured the Jira Data Center (Server) Plugin. Next, navigate to your configured Jira Project to explore and utilize the integration capabilities provided by the plugin.
