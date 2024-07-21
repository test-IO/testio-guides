---
title: "Test IO Bugs: Received Bugs and All Bugs"
description: Learn about the two preview options of the Test IO Bugs page.
---

With the Jira Data Center (Server) plugin configured, a new "**Test IO**" section will appear in the left-side navigation menu of your Jira Project. Click on the "Test IO" section and navigate to the **"Bugs"** page.

The Bugs page offers two preview options: **"Received Bugs"** and **"All Bugs"**. You can easily switch between these preview modes using the **Switch filter**.

{% screenshot src="/assets/jira_server/bugs_preview_modes/1.png" /%}

**Received Bugs**

Received Bugs page displays a list of open bugs from the configured Test IO Products and Sections that need to be triaged. You can filter this list using the following options:

- **Severity**: Filter by Test IO bug severities.

- **Product**: Filter by configured Test IO Products with open bugs.

- **Feature**: Filter by Test IO Features with open bugs.

- **Test Cycle**: Filter by Test IO Test Cycles with open bugs.

On the right side of the page, you'll see a list of open bugs displayed by their titles. Each bug entry includes short information icons for quick reference, such as Reproductions and Devices count info badges, Bug Severity, and other indicators. For example, a warning icon may signify a bug in Question status.

{% screenshot src="/assets/jira_server/bugs_preview_modes/2.png" type="narrow" /%}

To preview an individual Test IO bug and view its details, follow these steps:

1. **Select Bug**: From the Test IO Bugs -> Received Bugs section, select a specific open Test IO bug from the list.

2. **View Details**: The bug details will expand on the right side, showing the following information about the Test IO Bug:

   {% list type="dash" %}

   - **Test IO Bug title**
   - **Action buttons**:The available action buttons include **Accept, Reject, Send Request, Change Severity, Confirm Bug**, and **Leave Comment**. The availability of these action buttons may depend on your customer pricing plan on the Test IO platform. By default, only three buttons are displayed in the action bar, while the remaining buttons are accessible under the **“More”** dropdown menu.

     {% screenshot src="/assets/jira_server/bugs_preview_modes/3.png" /%}

   - **Test IO Bug Details**

     {% screenshot src="/assets/jira_server/bugs_preview_modes/4.png" /%}

   - **Bug Description**: includes Steps to reproduce, Actual result, and Expected result.

     {% screenshot src="/assets/jira_server/bugs_preview_modes/5.png" type="narrow" /%}

   - **Attachments** section

     {% screenshot src="/assets/jira_server/bugs_preview_modes/6.png" type="narrow" /%}

   - **Bug Report Confirmation** section: Once a Bug Report Confirmation is requested for an open Test IO Bug from the Jira side, the request details will be displayed under this section.

     {% screenshot src="/assets/jira_server/bugs_preview_modes/7.png" /%}

   - **Bug reproductions** section: This section displays information about reproductions of a Test IO bug by testers other than the original reporter. The details about these testers and the devices they used will be displayed in this section.

     {% screenshot src="/assets/jira_server/bugs_preview_modes/8.png" /%}

   - **Comments of Bug**: Represents details about the Bug related to specific actions taken with it, ex: Rejection reason after performing a Reject action, Comment for Change Severity action, Comment for Send request action from Customer side, and Tester’s answer, Details of Bug Report confirmations from Tester’s side, etc.

     {% screenshot src="/assets/jira_server/bugs_preview_modes/9.png" /%}

   {% /list %}

**All Bugs**

The Jira Data Center (Server) plugin provides comprehensive access to Test IO bugs, even after they have been accepted or rejected. The plugin's **“All Bugs”** preview mode offers a unified view that includes:

- **Open Bugs**: Bugs that are currently under review or awaiting action.

- **Accepted Bugs**: Bugs that have been validated and accepted, and have associated Jira tickets created for them.

- **Rejected Bugs**: Bugs that have been reviewed and dismissed with any of the rejection reasons.

- **Bugs with Pending Status**: Bugs that are awaiting confirmation or further information after Send request action.

First, **apply a search** to view results based on your specified criteria. You can search for bugs on the "All Bugs" page by their **Title, ID**, and **Test Cycle ID**.

{% screenshot src="/assets/jira_server/bugs_preview_modes/10.png" type="narrow" /%}

You will be able to interact with bugs and perform available actions on specific bugs directly from the "All Bugs" page.

{% screenshot src="/assets/jira_server/bugs_preview_modes/11.png" /%}

The advanced search functionality streamlines bug management and tracking, offering quick access to relevant information and enhancing efficiency.
