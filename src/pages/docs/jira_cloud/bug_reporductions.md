---
title: Bug Reproductions
description: Learn about Test IO bug reproductions.
---

Executing a bug reproduction involves retesting a bug reported by another tester. There are two types of reproductions:

- **Positive Reproduction**: The tester encounters the same bug after following the steps outlined in the original bug report.
- **Negative Reproduction**: The tester cannot reproduce the bug despite following the same steps, indicating that the functionality works correctly on the tester’s device.

**Viewing Bug Reproductions**
Bug reproductions for Test IO bugs are accessible via the Jira Cloud Add-on. When previewing bug details, you can find a **dedicated section for bug reproductions under Attachments**. This section includes following sub-sections:

- **Reproduced on**: Indicates a Positive Reproduction.
- **Not reproduced on**: Indicates a Negative Reproduction.

The bug reproduction section provides the following details:

- **Device**: The device used for reproduction.
- **OS**: The operating system used.
- **Browser**: The browser used for reproduction.
- **Tester Name**: The name of the tester who performed the reproduction.

A single Test IO bug can have multiple reproductions, with each displayed under the appropriate sub-section of Bug reproductions. This information helps in understanding the reproduction scenarios and verifying the bug across different conditions.

{% screenshot src="/assets/jira_cloud/not_reproduced_bug.png" caption="Negative Reproduction" /%}
{% screenshot src="/assets/jira_cloud/reproduced_bug.png" caption="Positive Reproduction" /%}
