---
title: "Bug Triage: Confirm Bug with an Experienced Tester"
description: Learn how to confirm a bug with an experienced tester.
---

Bug Report Confirmation is an individual bug action, that helps you to triage your bugs with more certainty. Each confirmation is executed **by an experienced tester who will reproduce and verify the initial bug on a device type of your choice**. In addition, you can ask for further information (e.g. screen size) or specific attachments (e.g. display of internet speed) to get deeper insight. Follow the steps below to take the action:

1. **Select Bug**: From the Test IO Bugs -> Bug Triage section, select a specific open Test IO bug from the list.

2. **Confirm Bug**: In the expanded bug details on the right side, click the "Confirm Bug" action button.

3. **Specify Device and Browser (Optional)**: Specify the device and possible browser that should be used to reproduce your bug. **By default, this is the device type of the original bug report**. While you can add multiple requirements, **each confirmation will be executed on one device** of your choosing.

4. **Request Additional Information (Optional)**: Choose from a range of additional information that might help you evaluate the bug better, or define your own specific requests.

5. **Request Specific Attachments (Optional)**: Choose from a range of specific attachments to gain further insight.

   {% screenshot src="/assets/jira_cloud/bug_triage/confirm_bug.png" caption="Request Bug Report Confirmation page" /%}

6. **Submit Request**: Click the "Request Confirmation" button.

Once the bug report confirmation request is submitted successfully, a new **"Bug Report Confirmation" section** is added to the selected bug details. Each request item includes the following details: **Device, Browser, OS**, and **Report Submission Date**.

{% screenshot src="/assets/jira_cloud/bug_triage/brc_section.png" caption="A new section "Bug Report Confirmation" is added to the selected bug details" /%}

The BRC can have the following **statuses** based on the request's progress:

- **Pending**: The request has been sent and is awaiting feedback from a Test IO tester.
- **Canceled**: The request was canceled by the customer or on the Test IO platform.
- **Expired**: The request expired after 24 hours without being picked up by a tester.
- **Confirmed**: The tester has reproduced and confirmed the bug.
- **Not Confirmed**: The tester reproduced the bug but did not confirm it as valid.
- **Blocked**: The tester was unable to complete the reproduction process.

For BRC requests with Pending, Canceled and Expired statuses, an icon on the request item line allows you to **expand and view the Device Requirements and Additional Requirements**. For requests with Confirmed, Not Confirmed and Blocked statuses **tester details are also available**.

{% screenshot src="/assets/jira_cloud/bug_triage/status_icon.png" caption="Bug report confirmation section under Bug details" /%}

**Notification Banners**

Once a BRC request is submitted, a **notification banner is displayed under the bug title**. Additional notification banners appear when the **BRC has expired** and when **reaching the maximum number of BRCs per bug** according to the customer pricing plan on the Test IO platform.

{% screenshot src="/assets/jira_cloud/bug_triage/banner_brc_expired.png" caption="Notification banner for Expired BRC" /%}

{% screenshot src="/assets/jira_cloud/bug_triage/banner_brc_max.png" caption="Notification banner for BRC limit reached" /%}

**Tester Feedback**

When a tester completes the bug report confirmation, **the result (Confirmed, Not Confirmed, or Blocked) will be added as a comment** under the selected bug, along with attachments and additional comments from the tester.

Find more details about the Bug Report Confirmation feature [here](https://help.test.io/en/articles/5661827-bug-report-confirmation).
