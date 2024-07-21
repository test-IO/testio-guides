---
title: Demo Bug in Configuration
description: Learn how to create a demo bug.
---

After configuring and saving the Issue Type and Fields Mapping, the **"Create Demo Bug"** option becomes available. This feature allows you to test your mapping configurations by exporting a sample bug to Jira using the defined mapping rules.

**Key Points**:

1. **Availability**:

   - The **"Create Demo Bug"** button becomes enabled only after all changes are saved.

2. **Disabled State**:

   - If there are unsaved changes, the **"Create demo Bug"** button is disabled.

3. **Creating a Demo Bug**:

   - Once you click **"Create Demo Bug"** and the Demo bug is successfully created in Jira, an info message saying “The Issue was created _issue link_” will appear on the page. This message will include a link to the last exported Demo dug for easy access and review.

The "Create Demo Bug" feature ensures that your mapping configurations are correctly set up before applying them to actual Test IO bugs.

{% screenshot src="/assets/jira_server/config/demo_bug.png" /%}
