---
title: Custom Reports
description: Learn how to configure mapping of Custom Reports.
---

After adding at least one **"Custom Report"** in the Customer's Product settings, the **"Custom Reports"** section becomes available in Jira Configuration. This feature allows you to configure field mapping between **Test IO** and **Jira** for selected Custom Reports. **Custom Reports** could be added only after Jira Fields mapping is completed.

{% screenshot src="/assets/jira_server/config/custom_reports_1.png" caption="Custom Reports preview" /%}

**Key Points**:

1. **Availability**: The **Custom Reports** section appears only if at least one Custom Report is added in the **product settings**.

2. **Report Selection**: The dropdown menu displays only Custom Reports that are enabled in the customer’s product settings.

3. **Creating a Mapping**:

- Select a **Custom Report** from the dropdown menu.
- Click **"Create Template"** to generate the mapping interface.
- The mapping table will appear with Test IO fields mapped to Jira fields.

4. **Jira Field Options**: You can map Test IO fields to the following Jira fields:

- *Standard fields*: Description, Labels;
- *Custom fields*: Text, Number, Label fields.

5. **Multiple Report Mapping**:

- You can create mappings for multiple reports.
- Select another report from the dropdown and click **"Create Template"** again to add it.

6. **Removing a Mapping**: Click **"Remove Mapping"** to delete an unwanted report mapping.

7. **Saving Changes**: Click **"Save Changes"** to apply and store the configured mappings.

This feature ensures that custom bugs reported in Test IO are properly mapped to Jira fields based on your customized configuration.

{% screenshot src="/assets/jira_server/config/custom_reports_2.png" caption="Custom Reports mapping interface" /%}
