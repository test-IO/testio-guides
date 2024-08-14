---
title: Accept Test IO Bug
description: Learn how to accept a Test IO bug.
---

Once you have reviewed the received Test IO bug with an open status, you can begin the triaging process. If you validate the bug and would like to export it to your Jira, follow these steps:

1. **Select Bug**: From the Bugs section, choose a specific open Test IO bug from the list.

2. **Accept Bug**: Click the “Accept” button in the expanded bug details on the right.

The Test IO bug is accepted, and an associated **Jira ticket is created** based on the previously defined mapping rules in the Configurations -> Issue Type and Fields Mapping section.

The accepted bug is removed from the open bugs list and moved to a new **"Accepted Bugs"** section, which temporarily appears after the list of open bugs. After reloading the page, this section is no longer accessible.

{% screenshot src="/assets/jira_server/bug_triage/accept_1.gif" caption="Accepting a Test IO bug from Bug Triage" /%}

**Actions for Accepted Bugs**:

- **Re-export**: Re-create another Jira issue ticket for the same Test IO bug.

- **Leave comment**: Leave a comment under Test IO bug from Jira side (availability depends on Jira Plugin Configuration -> Comments tab settings).

- **View Issue Details**: Navigate to the newly created Jira issue page via Jira issue link.

{% screenshot src="/assets/jira_server/bug_triage/accept_2.png" caption="Available action buttons for Accepted Bug" /%}

Once the Test IO Bug is exported to Jira, a new Jira issue link is added as an **External link** under the Test IO bug details on the Test IO side.

{% screenshot src="/assets/jira_server/bug_triage/accept_3.png" caption="External link under the Test IO bug details on the Test IO side" /%}

{% quick-links %}

{% quick-link title="Bug Fix Confirmation" icon="shield_check"
href="/docs/jira_server/bug_fix_confirm"
description="Verify bug fixes for Test IO and Jira Bugs" /%}

{% /quick-links %}
