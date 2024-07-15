---
title: "Test IO Bugs: Bug Triage"
description: Learn how to triage the Test IO Bugs.
---

With the Jira Cloud plugin configured, you'll see a new **"Test IO"** section in the left-side navigation menu of your Jira Project. Click on the "Test IO" section and navigate to **"Bug Triage"** under **"Test IO Bugs"**. The Bug Triage page displays a list of open bugs from the configured Test IO Products and Sections that need to be triaged. You can filter this list using the following options:

- **Severity**: Filter by Test IO bug severities.
- **Product**: Filter by configured Test IO Products with open bugs.
- **Feature**: Filter by Test IO Features with open bugs.
- **Test Cycle**: Filter by Test IO Test Cycles with open bugs.

To preview an individual Test IO bug and view its details, follow these steps:

1. **Select Bug**: From the Test IO Bugs -> Bug Triage section, select a specific open Test IO bug from the list.
2. View Details: The bug details will expand on the right side, showing the following information about the Test IO Bug:
   {% list type="dash" %}
   - Test IO Bug title
   - **Action buttons**: Accept, Reject, Change severity, Send request, Confirm bug (action buttons availability can depend on customer pricing plan on Test IO platform).
     {% screenshot src="/assets/jira_cloud/bug_triage/action_btns.png" caption="Action buttons availability can depend on customer pricing plan on Test IO platform" /%}
   - **Test IO Bug Details**
     {% screenshot src="/assets/jira_cloud/bug_triage/bug_details.png" caption="Test IO Bug Details" /%}
   - **Bug Description**: includes Steps to reproduce, Actual result, and Expected result.
     {% screenshot src="/assets/jira_cloud/bug_triage/bug_description.png" caption="Bug Description section" /%}
   - **Attachments** section
     {% screenshot src="/assets/jira_cloud/bug_triage/attachments.png" caption="Attachments section" /%}
   - **Bug Report Confirmation** section: Once a Bug Report Confirmation is requested for an open Test IO Bug from the Jira side, the request details will be displayed under this section.
     {% screenshot src="/assets/jira_cloud/bug_triage/bug_report_confirm.png" caption="Bug Report Confirmation section" /%}
   - **Bug reproductions** section: This section displays information about reproductions of a Test IO bug by testers other than the original reporter. The details about these testers and the devices they used will be displayed in this section.
     {% screenshot src="/assets/jira_cloud/bug_triage/bug_reproductions.png" caption="Bug reproductions section" /%}
   - **Comments of Bug**: Represents details about the Bug related to specific actions taken with it, ex: Rejection reason after performing a Reject action, Comment for Change Severity action, Comment for Send request action from Customer side, and Tester’s answer, Details of Bug Report confirmations from Tester’s side, etc.
     {% screenshot src="/assets/jira_cloud/bug_triage/bug_comments.png" caption="Section with Comments of Bug" /%}
     {% /list %}
