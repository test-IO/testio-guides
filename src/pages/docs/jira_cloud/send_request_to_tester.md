---
title: Send a Request to Test IO Tester
description: Learn how to send a request to the Test IO tester.
---

If you require additional information from a tester to investigate a specific bug, such as browser version, Session ID, UDID, etc., you can contact the tester using the "Send Request" feature located in the right action bar.

1. **Select Bug**: From the Bug Triage section, choose an open Test IO bug from the list.
2. **Send Request**: In the expanded bug details, click the “Send Request” button.
3. **Fill in Comment**: Enter the details of the request in the comment field. You can ask a question or request more information about the bug from the tester who reported the bug.

   {% screenshot src="/assets/jira_cloud/bug_triage/request_comment.png"
   caption="\"Send request to Test IO\" modal on Bug Triage" /%}

4. **Confirm Request**: Click the “Send” button.

The bug status changes to **"Question"**, and a **notification banner is added under the bug title** in Bug Triage, indicating that a response is pending from the Test IO side.
**The comment and the tester's response will be displayed under the Comments section** of the selected bug.

The bug status changes to "Question," and a notification banner is added under the bug title in Bug Triage, indicating that a response is pending from the Test IO side. The comment and the tester's response will be displayed under the Comments section of the selected bug.
The notification banner and question mark are removed upon receiving the tester's response.

{% screenshot src="/assets/jira_cloud/bug_triage/request_banner.png"
caption="Test IO bug in Question state after applying \"Send request\" action" /%}
