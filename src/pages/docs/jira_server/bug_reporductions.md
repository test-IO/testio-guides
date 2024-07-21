---
title: Bug Reproductions
description: Learn about Test IO bug reproductions.
---

Executing a bug reproduction involves retesting a bug reported by another tester. There are two types of reproductions:

- **Positive Reproduction**: The tester encounters the same bug after following the steps outlined in the original bug report.
- **Negative Reproduction**: The tester cannot reproduce the bug despite following the same steps, indicating that the functionality works correctly on the tester’s device.

**Viewing Bug Reproductions**

Bug reproductions for open Test IO bugs are accessible via the Jira Data Center (Server) Add-on. When previewing bug details, you can find a dedicated section for bug reproductions under Attachments. This section includes:

- **Reproduced on**: Indicates a Positive Reproduction.
- **Not reproduced on**: Indicates a Negative Reproduction.

The bug reproduction section provides the following details:

- **Device**: The device used for reproduction.
- **OS**: The operating system used.
- **Browser**: The browser used for reproduction.
- **Tester Name**: The name of the tester who performed the reproduction.

This information helps in understanding the context of the reproduction and verifying the bug under various conditions.

{% screenshot src="/assets/jira_server/reproduced.png" /%}
{% screenshot src="/assets/jira_server/not_reproduced.png" /%}
