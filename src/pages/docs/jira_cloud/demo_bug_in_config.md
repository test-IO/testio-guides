---
title: Demo Bug in Configuration
description: Learn how to create a demo bug.
---

After configuring and saving the Issue Type and Fields Mapping, the **\*"Create demo Bug"** option becomes available. This feature allows you to test your mapping configurations by exporting a sample bug to Jira using the defined mapping rules.

**Key Points**:

1. **Availability**:
   {% list type="circle" %}
   - The **"Create demo Bug"** button becomes enabled only after all changes are saved.
     {% /list %}
2. **Disabled State**:
   {% list type="circle" %}
   - If there are unsaved changes, the **"Create demo Bug"** button is disabled.
     {% /list %}
3. **Creating a demo Bug**:
   {% list type="circle" %}
   - Once you click **"Create demo Bug"** and the demo bug is successfully created in Jira, an info message saying “Demo bug is created” will appear on the page. This message will include a link to the last exported Demo dug for easy access and review.
     {% /list %}

The "Create demo Bug" feature ensures that your mapping configurations are correctly set up before applying them to actual Test IO bugs.
{% screenshot src="/assets/jira_cloud/config/demo_bug.png" caption="The Demo Bug feature allows you to test your mapping configurations" /%}
