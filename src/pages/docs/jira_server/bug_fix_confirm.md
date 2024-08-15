---
title: Bug Fix Confirmation
description: Learn about Bug Fix Confirmation.
---

Once Test IO’s crowd testers report a software issue, teams use the detailed bug report to fix the bug. When the patch is ready, use bug fix confirmation to verify that the issue is resolved. Testers will follow the reproduction steps provided in the initial bug report and will report on whether they have been able to find the issue. After the verification is completed, you’ll be updated on the status of the execution.

{% screenshot src="/assets/jira_cloud/bug_fix_confirm/1.png"  /%}

From the Jira Data Center (Server) side, there are two possible ways to request a Bug Fix Confirmation (BFC):

- **Internal BFC**: A confirmation request is done for a Jira ticket created from an accepted Test IO Bug.
- **External BFC**: A confirmation request is done for a Jira ticket originally created within Jira.

**Steps to Request a Bug Fix Confirmation**:

1.  **Select a Jira Ticket**: On your Jira Data Center (Server) side, select the ticket you want to retest. Click on the Status dropdown on the Jira ticket page and select **"Confirm fix via Test IO"**.

    {% screenshot src="/assets/jira_server/bug_fix_confirm/2.png"
    caption="\"Confirm fix via Test IO\" button" /%}

2.  **Select the Test IO Product (External BFC only)**: Choose a Test IO Product from the dropdown menu to specify where your Bug Fix Confirmation (BFC) will be sent.

3.  **Select the Product Section (External BFC only)**: If the chosen Test IO Product has section(s), select the relevant Product Section from the dropdown menu.

4.  **Select Environment**: Choose the environment testers will use from the dropdown menu. If the needed environment is not listed, **create a new one by clicking the “+” icon** next to the dropdown.

    {% screenshot src="/assets/jira_server/bug_fix_confirm/3.png" caption="Environment in Bug fix confirmation" /%}

    **To create a new environment**:

    {% list type="circle" %}

    - **Title**: Provide a name for the new environment.
    - **Type**: Select whether the environment is a URL or a file upload.
    - **URL / Upload**: Enter the URL or upload the file, based on your previous selection.
    - **Credentials**: Enter a Username and Password if required.
    - **Further instructions**: Add any specific details or instructions for the testers.
    - **Individual accounts/ test data**: Select from the following options to add individual test accounts to the test environment:

      1. **No**: No individual test data will be provided.
      2. **Page URL**: Provide a link to a page or file that contains individual test data for the testers.
      3. **Access Claims**: Use the Test IO service to distribute individual login credentials, test data, or other testing information among the testers.

      When selecting the **Access Claims** option, you can either choose from the available list in the dropdown menu or create a new access claims page by clicking the **"Open/Create new access claims page"** link. Find more details about Access Claims [here](https://help.test.io/en/articles/6376645-how-to-use-access-claims).

    - **Order Permissions**: Select “Yes” or “No” to allow or disallow testers to complete orders.
    - **Network Options**: Choose either Proxy or Default for the network.

      {% screenshot src="/assets/jira_server/bug_fix_confirm/4.png" caption="Create new Environment in Bug fix confirmation" /%}

    - **Click on the “Create” button**: Environment is created successfully and added in both Jira and Test IO platform side.

    {% /list %}

5.  **Specify the Device and Browser**: Customize the selection of devices and browsers at the test level. Default devices are suggested (for Internal BFC, this is the device type the original bug was identified on), but you can edit details or remove irrelevant ones under the Custom tab, or add a new device by clicking **“Add Device”**.

    {% screenshot src="/assets/jira_server/bug_fix_confirm/5.gif" caption="Devices management in BFC" /%}

6.  **Specify Description**: Choose from two options:
    {% list type="circle" %}

    - **Description**: Maps the Jira ticket description details.

      {% screenshot src="/assets/jira_server/bug_fix_confirm/6.png" /%}

    - **Custom Fields**: Customize the mapping by selecting the "Custom field" option. Select the Test IO bug attributes you want to appear in the Jira ticket Description. Combine the selected attributes with manually entered text for more detailed and specific information.

      {% screenshot src="/assets/jira_server/bug_fix_confirm/7.png" caption="Custom Description in BFC" /%}

    {% /list %}

7.  **Add Instructions**: If any of the reproduction steps vary from the original report, add them here (not required steps, different input data, etc.)

    {% screenshot src="/assets/jira_server/bug_fix_confirm/8.png" caption="Instructions in BFC" /%}

8.  **Attachments**: Allow including Jira ticket attachments in the Bug Fix confirmation by checking the mark for Attachment. After enabling, select the desired attachments to include. Maximum upload file size: **10MB**. Supported file extensions: **.mp4, .jpg, .jpeg, .png, .log, .txt, .chls, .crash, .pdf, .xls, .xlsx, .doc, .docx, .csv, .xml, .ips, .gz, .sqlite**.

    {% screenshot src="/assets/jira_server/bug_fix_confirm/9.png" caption="Attachments in BFC" type="narrow center" /%}

9.  **Submit Your Bug Fix Confirmation Request**: Confirmation is requested successfully. The submitted **BFC request is linked to the original Jira ticket**, enabling you to monitor the BFC status from the Jira side.

    {% screenshot src="/assets/jira_server/bug_fix_confirm/10.png" caption="BFC link under original Jira ticket" /%}

The possible **statuses for a Bug Fix Confirmation (BFC)** include:

- **Pending**: The request has been submitted and is awaiting assignment to a tester.
- **Passed**: The bug fix has been confirmed as resolved by the tester.
- **Failed**: The tester was able to reproduce the bug, indicating that the issue persists.
- **Incomplete**: The tester was unable to complete the test due to missing information or other issues.
- **Canceled**: The request was canceled from the Test IO customer interface before tester assignment.
- **Expired**: The request expired because a matching tester could not be found within 24h.

You can view the details of the requested BFC by accessing the linked BFC directly from the Jira ticket. This allows you to seamlessly track the progress and outcome of the confirmation process. Additionally, you can **click to view the full details of the requested BFC** by navigating to the Test IO customer interface through the linked BFC.

After submitting the bug fix confirmation, it is assigned to a tester with a matching device. The tester will replicate the steps that led to the bug. Once completed, they will attach a screencast demonstrating either the presence or absence of the bug and may add a comment for additional context. **You can access all this information under the Jira ticket's Comments section**.

If Bug Fix Confirmation status synchronization is configured in the Test IO Plugin Configuration -> Advanced Integration section, **successful confirmation on the Test IO side will automatically update the Jira ticket to the specified status**. Find more details about BFC status sync in Jira Data Center (Server) [here](/docs/jira_server/advanced_integration).

**Note**: If there is already a Bug Fix Confirmation request with a “Pending” status for the selected Jira ticket, **you cannot request a new BFC until a tester has responded to the existing request**.

{% screenshot src="/assets/jira_server/bug_fix_confirm/11.png" caption="Limitation for BFC requests with \"Pending\" status" /%}

Find more details about Bug Fix Confirmation flow [here](https://help.test.io/en/articles/4201447-how-to-request-a-bug-fix-confirmation).
