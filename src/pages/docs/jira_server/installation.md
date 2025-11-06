---
title: Installation
description: Learn how to install the Jira Data Center Add-On.
---

## Overview

To install the Jira Data Center Add-On, follow these steps:

1. **Log in to Jira instance**: Ensure you are logged in as an admin user.
   To proceed with the installation, you need to have admin privileges on your Jira Data Center instance. Please contact your Jira Administrator if you need assistance.

2. **Navigate to Manage Apps**: Click the “Jira Administration” icon and select **"Manage apps"** from the dropdown.

   {% screenshot src="/assets/jira_server/install/1.png" caption="Navigate to Manage Apps" type="narrow center" /%}

3. **Find QA Service for Jira**:
   {% list type="circle" %}

   - Click on **"Find new apps"** on the left-hand side of the page under the Atlassian Marketplace section.

   - Search for "**QA Service for Jira**".

   {% /list %}

   {% screenshot src="/assets/jira_server/install/2.png" caption="Find QA Service for Jira" /%}

4. **Install the Add-On**: Select the app and click **"Install"** to download and install it.

5. **Confirm app installation**: Accept Test IO’s Privacy Policy and Terms of Use by clicking **“Accept & install”**.

   {% screenshot src="/assets/jira_server/install/3.png" caption="Accept & install to confirm app installation" /%}

6. **Finalize Installation**: Wait for the installation to complete and click "Close" in the “Installed and ready to go!” dialog.

   {% screenshot src="/assets/jira_server/install/4.png" caption="Finalize the installation of the Jira Data Center Add-On" /%}

   The Test IO Add-On will appear under the **"User-installed apps"** in the **Manage apps** section. Expand the Test IO Add-On section to view details like Version, Vendor, Support, etc.

   {% screenshot src="/assets/jira_server/install/5.png" caption="Jira Data Center Add-On in User-installed apps" /%}

## Installation from Atlassian Marketplace

Alternatively, you can install the Test IO Jira Data Center Add-On directly from the [Atlassian Marketplace](https://marketplace.atlassian.com/apps/1217073/qa-service-for-jira?hosting=datacenter&tab=overview). Download it from Marketplace and upload it in Jira via **"Upload app"** button in the **Manage apps** sub-section under the Atlassian Marketplace section.

{% screenshot src="/assets/jira_server/install/6.png" /%}

After installation, a new **"Test IO"** section will appear in the left-side navigation menu under "Apps." This section includes **"Connection"**, **"Configuration"** and **"Maintenance"** subsections. Configure these settings to enable integration between Jira and Test IO.

{% quick-links %}

{% quick-link title="Connection" icon="shield_check" href="/docs/jira_server/connection" description="Connect your Test IO account to your Jira" /%}

{% quick-link title="Configuration" icon="shield_check" href="/docs/jira_server/configuration" description="Configure integration between Jira and Test IO platform" /%}

{% /quick-links %}
