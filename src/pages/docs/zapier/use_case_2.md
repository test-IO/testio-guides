---
title: "Use Case 2: Mark Bug as Fixed in Test IO"
description: Learn how to automatically mark a Test IO bug as fixed when its status is updated in another system.
---

## Overview

The [Mark Bug as Fixed action](/docs/zapier/actions#mark-bug-as-fixed), combined with the [Fetch Test IO Bug by External Id action](/docs/zapier/actions#fetch-test-io-bug-by-external-id), lets you build a workflow to mark a bug as fixed in Test IO when its status changes in your connected bug tracker.

{% callout type="info" %}
This integration assumes the bug has already been exported from Test IO to another bug tracker (e.g., Asana).
{% /callout %}

In this use case, we'll demonstrate how to sync Test IO bug statuses with Asana using the {% link href="https://zapier.com/apps/asana/integrations" target="_blank" %}Asana{% /link %} and {% link href="https://zapier.com/apps/test-io/integrations" target="_blank" %}Test IO{% /link %} Zapier apps.

## Configure Completed Task trigger (Asana)

1. Search for and select the Asana Zapier app.
2. Select "Completed Task" as the Event (required) field and press **Continue**.
   {% screenshot src="/assets/zapier/use_case_2/1.png" caption="Screenshot 1. Select a trigger" /%}
3. **(Account Tab)** Sign in to Asana and press **Continue**.
4. **(Trigger Tab)** Select your workspace and project. Press **Continue**.
   {% screenshot src="/assets/zapier/use_case_2/2.png" caption="Screenshot 2. Select workspace and project" /%}
5. **(Test Tab)** Press **Test trigger**. Inspect the sample data and press **Continue with selected record**.
   {% screenshot src="/assets/zapier/use_case_2/3.png" caption="Screenshot 3. Test trigger" /%}

## Configure Fetch Test IO Bug by External Id (Test IO)

Now that we have an Asana task completion trigger, we'll fetch the corresponding Test IO bug. We'll use the Asana task's GID to locate the bug in Test IO.

1. Search for and select the Test IO Zapier app.
2. Select "Fetch Test IO Bug by External Id" and press **Continue**.
   {% screenshot src="/assets/zapier/use_case_2/4.png" caption="Screenshot 4. Select a search" /%}
3. **(Account Tab)** Authenticate with your Test IO API token if needed.
4. **(Action Tab)** In the External Bug ID field, select "Gid" from the Asana trigger output. Press **Continue**.
   {% screenshot src="/assets/zapier/use_case_2/5.png" caption="Screenshot 5. Configure search" /%}
5. **(Test Tab)**
   - **If you received a real Asana task previously exported from Test IO, press "Test step".**
   - **If not, press "Skip test". Sample data will be used.**
     {% screenshot src="/assets/zapier/use_case_2/6.png" caption="Screenshot 6. Test trigger" /%}

## Configure Mark Bug as Fixed (Test IO)

Let's mark the fetched Test IO bug as fixed:

1. Search for and select the Test IO Zapier app.
2. Select "Mark Bug as Fixed" and press **Continue**.
   {% screenshot src="/assets/zapier/use_case_2/7.png" caption="Screenshot 7. Select an action" /%}
3. **(Account Tab)** Authenticate with your Test IO API token if needed.
4. **(Action Tab)** In the Bug ID field, select "ID" from the previous Test IO action output. Press **Continue**.
   {% screenshot src="/assets/zapier/use_case_2/8.png" caption="Screenshot 8. Configure search" /%}
5. **(Test Tab)**
   - **If you received a real Test IO bug on the previous step, press "Test step".**
   - **If not, press "Skip Test". Sample data will be used.**
     {% screenshot src="/assets/zapier/use_case_2/9.png" caption="Screenshot 9. Test action" /%}
6. **Publish your Zap!**
   {% screenshot src="/assets/zapier/use_case_2/10.png" caption="Screenshot 10. Publish Zap" /%}

**Congratulations!** You've synced bug statuses between Asana and Test IO. Replace Asana with other Zapier-supported bug trackers (Jira, AzureDevOps, GitHub, etc.) to customize this integration.
