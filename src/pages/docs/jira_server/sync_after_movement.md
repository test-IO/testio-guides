---
title: Synchronization with Test IO after Jira issue movement
description: Learn how to ensure proper synchronization with Test IO after moving a Jira issue from one project to another.
---

When moving a Jira issue from one project to another, it's important to ensure proper synchronization with Test IO. Let’s explore the steps and considerations for handling issue movements and their impact on Test IO configurations.

**Case Scenarios**

**Case \#1: New Project Has a Suitable Existing Configuration**

The new project has an existing configuration that can be applied to the issue being moved.

**Dropdown Options and Actions**:
{% list type="dash" %}

- **Apply new configuration**:Select this option to update the issue with the new project's configuration, ensuring it syncs correctly with Test IO.
- **Keep old configuration**: Choose this to retain the existing configuration, even if it's not related to the new project, maintaining the current sync settings.

{% /list %}

**Case \#2: New Project Has a Suitable Existing Configuration, No Current Configuration for the Issue**

When the new project has an existing configuration, but the issue does not have a current configuration:

**Dropdown Options and Actions**:
{% list type="dash" %}

- **Apply new configuration**: This option applies the new project's configuration to the issue, enabling proper Test IO synchronization.
- **Keep disabled synchronization**: Choose this to leave the issue without synchronization settings, effectively disabling Test IO sync for this issue.

{% /list %}

**Case \#3: New Project Lacks Suitable Configuration, Existing Configuration for the Issue**

When the new project does not have a suitable configuration, but the issue has an existing configuration:

**Dropdown Options and Actions**:
{% list type="dash" %}

- **Keep configuration**: Retain the current configuration even though it doesn't match the new project, maintaining existing Test IO sync settings.
- **Disable synchronization**: Opt to disable synchronization with Test IO for this issue, effectively stopping any Test IO updates.

{% /list %}

**Case \#4: New Project Lacks Suitable Configuration, No Current Configuration for the Issue**

Action:
{% list type="dash" %}

- Since there is no configuration to keep or apply, the dropdown will not appear. Create a new configuration for the new project to enable synchronization.

{% /list %}

**No Warning Cases**
{% list type="dash" %}

- **Case \#5**: Changing the issue type within the same project does not affect Test IO synchronization.

- **Case \#6**: Moving a Jira issue to a project that has the same configuration as the issue retains synchronization without any warnings.

{% /list %}

Steps to Move a Jira Issue and Manage Test IO Synchronization:

1. **Select the Issue to Move**:
   {% list type="dash" %}

   - Navigate to the issue you want to move.
   - Choose the new project to move the issue to.

   {% /list %}

2. **Review Configuration Messages**:
   {% list type="dash" %}

   - Based on the scenarios described above, review the displayed info message.
   - Select the appropriate option from the dropdown if applicable.

   {% /list %}

3. **Apply Changes**:
   {% list type="dash" %}

   - Confirm the movement and apply the selected configuration option.

   {% /list %}

4. **Create New Configuration if Needed**:
   {% list type="dash" %}

   - If the new project lacks a suitable configuration, create a new configuration for Test IO synchronization before moving the issue.

   {% /list %}

By following these steps, you can ensure that Jira issues are properly synchronized with Test IO when moved between projects, maintaining consistency and efficiency in your workflow.
