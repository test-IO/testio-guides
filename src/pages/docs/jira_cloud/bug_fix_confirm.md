---
title: Bug Fix Confirmation
description: Learn about Bug Fix Confirmation.
---

Once Test IO’s crowd testers report a software issue, teams use the detailed bug report to fix the bug. When the patch is ready, use bug fix confirmation to verify that the issue is resolved. Testers will follow the reproduction steps provided in the initial bug report and will report on whether they have been able to find the issue. After the verification is completed, you’ll be updated on the status of the execution.
{% screenshot src="/assets/jira_cloud/bug_fix_confirm/1.png" /%}

From the Jira Cloud side, there are two possible ways to request a Bug Fix Confirmation (BFC):
- **Internal BFC**: A confirmation request is done for a Jira ticket created from an accepted Test IO Bug.
- **External BFC**: A confirmation request is done for a Jira ticket originally created within Jira.

**Steps to Request a Bug Fix Confirmation**

1. **Select a Jira Ticket**: On your Jira Cloud side, select the ticket you want to retest. Click on the Actions three dots on the Jira ticket page and select **"Confirm fix via Test IO"**.
{% screenshot src="/assets/jira_cloud/bug_fix_confirm/2.png" /%}

2. **Select the Test IO Product (External BFC only)**: Choose a Test IO Product from the dropdown menu to specify where your Bug Fix Confirmation (BFC) will be sent.

3. **Select the Product Section (External BFC only)**: If the chosen Test IO Product has different sections, select the relevant Product Section from the dropdown menu.
{% screenshot src="/assets/jira_cloud/bug_fix_confirm/3.png" /%}

4. **Select Environment**: Choose the environment testers will use from the dropdown menu. If the needed environment is not listed, create a new one by clicking the “+” icon next to the dropdown.

{% screenshot src="/assets/jira_cloud/bug_fix_confirm/4.png" /%}

**To create a new environment**:
- **Title**: Provide a name for the new environment.
- **Type**: Select whether the environment is a URL or a file upload.
- **Details**: Enter the URL or upload the file, based on your previous selection.
- **Credentials**: Enter a Username and Password if required.
- **Instructions**: Add any specific details or instructions for the testers.
- **Order Permissions**: Check or uncheck the box to allow or disallow testers to complete orders.
- **Network Options**: Choose either Proxy or Default for the network.

{% screenshot src="/assets/jira_cloud/bug_fix_confirm/5.png" type="narrow" /%}

5. **Specify the Device and Browser**: Customize the selection of devices and browsers at the test level. Default devices are suggested (for Internal BFC, this is the device type the original bug was identified on), but you can edit details or remove irrelevant ones under the Custom tab, or add a new device by clicking **“Add Device”**.

{% screenshot src="/assets/jira_cloud/bug_fix_confirm/6.png" /%}
{% screenshot src="/assets/jira_cloud/bug_fix_confirm/7.png" /%}
{% screenshot src="/assets/jira_cloud/bug_fix_confirm/8.png" /%}

6. **Specify Description**: Choose from two options:
    - **Description**: Maps the Jira ticket description details.
      {% screenshot src="/assets/jira_cloud/bug_fix_confirm/9.png" /%}

    - **Custom Fields**: Customize the mapping by selecting the "Custom field" option. Select the Test IO bug attributes you want to appear in the Jira ticket Description. Combine the selected attributes with manually entered text for more detailed and specific information.
      {% screenshot src="/assets/jira_cloud/bug_fix_confirm/10.png" type="narrow" /%}

      For more details about using the Custom field, refer to the guide [here](/docs/jira_cloud/custom_field_in_config).

7. **Add Instructions**: If any of the reproduction steps vary from the original report, add them here (not required steps, different input data, etc.)
{% screenshot src="/assets/jira_cloud/bug_fix_confirm/11.png" type="narrow" /%}

8. **Attachments**: Allow including Jira ticket attachments in the Bug Fix confirmation by checking the mark for Attachment. After enabling, select the desired attachments to include. Maximum upload file size: 10MB. Supported file extensions: .mp4, .jpg, .jpeg, .png, .log, .txt, .chls, .crash, .pdf, .xls, .xlsx, .doc, .docx, .csv, .xml, .ips, .gz, .sqlite.
{% screenshot src="/assets/jira_cloud/bug_fix_confirm/12.png" /%}

9. **Submit Your Bug Fix Confirmation Request**: Confirmation is requested successfully. The submitted **BFC request is linked to the original Jira ticket**, enabling you to monitor the BFC status from the Jira side. 
{% screenshot src="/assets/jira_cloud/bug_fix_confirm/13.png" /%}

The possible **statuses for a Bug Fix Confirmation (BFC)** include:
- **Pending**: The request has been submitted and is awaiting assignment to a tester.
- **Passed**: The bug fix has been confirmed as resolved by the tester.
- **Failed**: The tester was able to reproduce the bug, indicating that the issue persists.
- **Incomplete**: The tester was unable to complete the test due to missing information or other issues.
- **Canceled**: The request was canceled from the Test IO customer interface before tester assignment.
- **Expired**: The request expired because a matching tester could not be found within 24h.

You can view the details of the requested BFC by accessing the linked BFC directly from the Jira ticket. This allows you to seamlessly track the progress and outcome of the confirmation process. Additionally, you can click to view the full details of the requested BFC by navigating to the Test IO customer interface through the linked BFC.

After submitting the bug fix confirmation, it is assigned to a tester with a matching device. The tester will replicate the steps that led to the bug. Once completed, they will attach a screencast demonstrating either the presence or absence of the bug and may add a comment for additional context. You can access all this information under the Jira ticket's Comments section.

If Bug Fix Confirmation status synchronization is configured in the Test IO Plugin Configuration -> Advanced Integration section, successful confirmation on the Test IO side will automatically update the Jira ticket to the specified status. Find more details about BFC status sync in Jira Cloud [here](/docs/jira_cloud/advanced_integration).

**Note**: If there is already a Bug Fix Confirmation request with a “Pending” status for the selected Jira ticket, you cannot request a new BFC until a tester has responded to the existing request.

{% screenshot src="/assets/jira_cloud/bug_fix_confirm/14.png" /%}

Find more details about Bug Fix Confirmation flow [here](https://help.test.io/en/articles/4201447-how-to-request-a-bug-fix-confirmation).
