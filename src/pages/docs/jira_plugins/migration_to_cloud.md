---
title: Migrate Jira Server to Jira Cloud plugin
description: How to perform Jira Server to Cloud plugin migration.
---

## Introduction

Support for Atlassian Server products **ends on Feb. 15, 2024**. {% link href="https://www.atlassian.com/migration/assess/journey-to-cloud" target="_blank" %}Atlassian migration guide{% /link %} has detailed instructions on how to migrate from Server to Cloud.

The Test IO Jira Server plugin provides an option to migrate data to the cloud and continue to use the Test IO Jira Cloud plugin.

## Atlassian migration

This video provided by Atlassian shows how to migrate from Jira Server to Jira Cloud. This step is required before continuing with the Test IO Jira plugin data migration.

{% youtube title="YouTube video player" src="https://www.youtube.com/embed/pvdWQctPMM4?si=J3xmKMR8KF79X0nj" width="560px" /%}

## Test IO migration

After the Atlassian migration is done and Jira Cloud has migrated the data (Projects, Issues and so on), we can start migrating the Test IO plugin's data.

1. Install the Test IO Cloud plugin from {% link href="https://marketplace.atlassian.com/apps/1217073/qa-service-for-jira?hosting=cloud&tab=overview" target="_blank" %}Atlassian Marketplace{% /link %}.

2. **In Jira Cloud** Go to the "Authentication" page and enter your Test IO API key.

{% screenshot src="/assets/migration_to_cloud/1_authentication.png" caption="Authenticate the Jira Cloud plugin" /%}

3. **In Jira Server** Open the **"Manage apps"** section in Jira Administration, then go to the **"Maintenance page"** for Test IO plugin and open the **"Migration to Cloud"** tab.

{% screenshot src="/assets/migration_to_cloud/2_maintenance.png" caption="Maintenance Page of the Test Io Jira Server plugin" /%}

4. Select **cloud plugin installation**

5. Select **migration type** depending on your Altassian Jira migration type:

- **Full migration** if you migrated Jira using {% link href="https://support.atlassian.com/migration/docs/migrate-all-jira-data-at-once-using-the-assistant/" target="_blank" %}Migrate all data at once{% /link %}

- **Partial migration** if you migrated Jira using {% link href="https://support.atlassian.com/migration/docs/choose-what-jira-data-to-migrate-using-the-assistant/" target="_blank" %}Choose what to migrate{% /link %}

{% screenshot src="/assets/migration_to_cloud/1_migration.png" caption="Select cloud plugin installation and migration type" /%}

6. Select **Jira Projects** and **Configurations** to be migrated. For each configuration the target Project in Jira Cloud should be selected.

{% screenshot src="/assets/migration_to_cloud/3_migration.png" caption="Select target Jira Project in the Cloud" /%}

7. Click **Execute Migration for Test IO Issues** to proceed with the migration.

8. After successful migration, the configuration should appear in the Jira Cloud plugin.

Please check that the **"Issue Type & Field Mapping"** and **"Advanced Integration"** tabs are similar to the configurations in the Test IO Jira Server plugin.

{% screenshot src="/assets/migration_to_cloud/6_migration.png" caption="Migrated configuration in the Test IO Jira Cloud plugin" /%}

9. This is a **final step**. At this step, all migrated configurations should already exist in the Jira Cloud Test IO plugin, but it takes some time to migrate all Test IO bugs.

In the Jira Server plugin, you can check if there are any problems with the migration. If there are **failed bugs**, please **contact your CSM** and provide the list of failed bugs.

{% screenshot src="/assets/migration_to_cloud/5_migration.png" caption="Failed migration bugs" /%}
