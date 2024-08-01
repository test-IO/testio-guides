---
title: Installation
description: Learn how to install the Jira Cloud Plugin.
---

To install the Jira Cloud Plugin, follow these steps:

1. **Log in to Jira Cloud**: Ensure you are logged in as an admin user.
   To proceed with the installation, you need to have admin privileges on your Jira Cloud instance. Please contact your Jira Administrator if you need assistance.
2. **Navigate to Manage Apps**: Click the admin dropdown and select **"Apps"** under Jira Settings.

   {% screenshot src="/assets/jira_cloud/install/1.png" caption="Navigate to Manage Apps" /%}

3. **Find QA Service for Jira**:

- Click on **"Find new apps"** on the left-hand side of the page under the Atlassian Marketplace section.

- Search for **"QA Service for Jira"**.

  {% screenshot src="/assets/jira_cloud/install/2.png" caption="Find QA Service for Jira" /%}

4. **Install the Plugin**: Select the app and click **"Get app"** to download and install it.
5. **Finalize Installation**: Click "Close" in the “QA Service for Jira installed successfully” dialog. The Test IO plugin will appear under the **"User-installed apps"** in the **Manage apps** section. Expand the Test IO plugin section to view details like Version, Vendor, Support, etc.

   {% screenshot src="/assets/jira_cloud/install/3.png" caption="Jira Cloud Plugin in User-installed apps" /%}

## Installation from Atlassian Marketplace

Alternatively, you can install the Test IO Cloud plugin directly from the {% link href="https://marketplace.atlassian.com/apps/1217073/qa-service-for-jira?tab=overview&hosting=cloud" target="_blank" %}Atlassian Marketplace{% /link %}. Download it from Marketplace and upload it in Jira via **"Upload app"** button in the **Manage apps** sub-section under the Atlassian Marketplace section.

{% screenshot src="/assets/jira_cloud/install/4.png" caption="Installation from Atlassian Marketplace" /%}

After installation, a new **"Test IO"** section will appear in the left-side navigation menu under "Apps." This section includes **"Authentication"** and **"Configuration"** subsections. Configure these settings to enable integration between Jira and Test IO.
