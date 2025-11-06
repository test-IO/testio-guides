---
title: Migrate Jira Data Center to Jira Cloud Add-On
description: How to perform Jira Data Center to Cloud Add-On migration.
---

## Introduction

Support for Atlassian Server products **ends on Feb. 15, 2024**. {% link href="https://www.atlassian.com/migration/assess/journey-to-cloud" target="_blank" %}Atlassian migration guide{% /link %} has detailed instructions on how to migrate from Server to Cloud.

The Test IO Jira Data Center Add-On **version 3.6.4** provides an option to migrate data to the cloud and continue to use the Test IO Jira Cloud Add-On.

## Atlassian migration

This video provided by Atlassian shows how to migrate from Jira Data Center to Jira Cloud. This step is required before continuing with the Test IO Jira Add-On data migration.

{% youtube title="YouTube video player" src="https://www.youtube.com/embed/pvdWQctPMM4?si=J3xmKMR8KF79X0nj" width="560px" /%}

## Test IO migration

After the Atlassian migration is done and Jira Cloud has migrated the data (Projects, Issues and so on), we can start migrating the Test IO Add-On's data.

{% callout type="warning" %}

The **Jira Data Center Add-On** should be updated to **version 3.6.3** and above.

{% /callout %}

1. Install the Test IO Cloud Add-On from {% link href="https://marketplace.atlassian.com/apps/1217073/qa-service-for-jira?hosting=cloud&tab=overview" target="_blank" %}Atlassian Marketplace{% /link %}.

2. **In Jira Cloud** Go to the "Authentication" page and enter your Test IO API key.

{% screenshot src="/assets/migration_to_cloud/1_authentication.png" caption="Authenticate the Jira Cloud Add-On" /%}

3. **In Jira Data Center** Open the **"Manage apps"** section in Jira Administration, then go to the **"Maintenance page"** for Test IO Add-On and open the **"Migration to Cloud"** tab.

{% screenshot src="/assets/migration_to_cloud/2_maintenance.png" caption="Maintenance Page of the Test IO Jira Data Center Add-On" /%}

4. Select **cloud Add-On installation**

5. Select **migration type** depending on your Altassian Jira migration type:

- **Full migration** if you migrated Jira using {% link href="https://support.atlassian.com/migration/docs/migrate-all-jira-data-at-once-using-the-assistant/" target="_blank" %}Migrate all data at once{% /link %}

- **Partial migration** if you migrated Jira using {% link href="https://support.atlassian.com/migration/docs/choose-what-jira-data-to-migrate-using-the-assistant/" target="_blank" %}Choose what to migrate{% /link %}

{% screenshot src="/assets/migration_to_cloud/1_migration.png" caption="Select cloud Add-On installation and migration type" /%}

6. Select **Jira Projects** and **Configurations** to be migrated. For each configuration the target Project in Jira Cloud should be selected.

{% screenshot src="/assets/migration_to_cloud/3_migration.png" caption="Select target Jira Project in the Cloud" /%}

7. Click **Execute Migration for Test IO Issues** to proceed with the migration.

8. After successful migration, the configuration should appear in the Jira Cloud Add-On.

Please check that the **"Issue Type & Field Mapping"** and **"Advanced Integration"** tabs are similar to the configurations in the Test IO Jira Data Center Add-On.

{% screenshot src="/assets/migration_to_cloud/6_migration.png" caption="Migrated configuration in the Test IO Jira Cloud Add-On" /%}

9. This is a **final step**. At this step, all migrated configurations should already exist in the Jira Cloud Test IO Add-On, but it takes some time to migrate all Test IO bugs.

In the Jira Data Center Add-On, you can check if there are any problems with the migration. If there are **failed bugs**, please **contact your CSM** and provide the list of failed bugs.

{% screenshot src="/assets/migration_to_cloud/5_migration.png" caption="Failed migration bugs" /%}
