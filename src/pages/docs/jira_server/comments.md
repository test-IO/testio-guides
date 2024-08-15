---
title: Comments
description: Learn how to synchronize comments between Test IO and Jira.
---

## Synchronize comments between Test IO and Jira

To synchronize comments from Test IO to Jira, you need to identify the user from whom the comments will be created in Jira.

- **Reporter**: Choose from existing Jira users a reporter in your Jira instance who will be used as the author of the comments synced from Test IO.

{% screenshot src="/assets/jira_server/comments_sync/1.png" caption="Specify Reporter for synchronized comments from Test IO to Jira" /%}

Now, based on the configuration, all future comments from the Test IO side will be displayed in Jira under the specified user name.

## Synchronize comments between Jira and Test IO

1. **Define a Sync Identifier**: Set up a specific string or tag to identify which comments should be synchronized between Jira and Test IO.

2. **Automate Comment Synchronization**: Comments containing the defined identifier will be automatically synced on the Test IO side for Jira issues created from accepted Test IO bugs. This ensures that communication and updates are effectively shared with the tester who submitted the Test IO bug.

{% screenshot src="/assets/jira_server/comments_sync/2.png" caption="Specify a tag to synchronize comments from Jira to Test IO" /%}

**Example of comment synchronization between Jira and Test IO**

Consider a scenario where you want to ensure that specific comments made under a Jira ticket created from an accepted Test IO bug are automatically synchronized with Test IO for better collaboration and information sharing.

In the Jira Data Center (Server) Plugin -> Comments section for synchronizing comments between Jira and Test IO set up a specific string or tag, such as "@testIO", to identify which comments should be sent to Test IO.

When comments in Jira contain the "@testIO" tag, they will be automatically synced with the corresponding Test IO bug on the Test IO side. **For example**, if a Jira ticket has a comment like "Issue replicated on multiple devices @testIO", **this comment will be automatically copied to the corresponding Test IO bug**. This ensures that communication and updates are effectively shared with the tester who submitted the Test IO bug.

## Post comment to Test IO bug from Jira

To post comments directly to Test IO bugs from the Bug Triage page in Jira, you need to specify the scope of Jira users who can access this functionality.

- **Scope of Access**: Choose who can post comments:

  {% list type="circle" %}

  - **Disabled**: Comment posting is turned off.
  - **Enable for All Users**: All Jira users can post comments to Test IO bugs.
  - **Enable for Multiple Users**: Only selected Jira users can post comments.
  - **Enable for user group**: Only users belonging to the selected Jira user group can post comments to Test IO bugs.

  {% /list %}

{% screenshot src="/assets/jira_server/comments_sync/3.png" caption="Post comment to Test IO bug from Jira" /%}

Depending on this configuration, Jira users will either see the "Leave comment" action button enabled or disabled for a specific Test IO bug in the Test IO Bug Triage section.

“Leave comment” action button enabled view:

{% screenshot src="/assets/jira_server/comments_sync/4.png" caption="Leave comment button enabled" /%}

“Leave comment” action button disabled view:

{% screenshot src="/assets/jira_server/comments_sync/5.png" caption="Leave comment button disabled" /%}
