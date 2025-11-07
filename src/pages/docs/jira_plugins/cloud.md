---
title: "QA Service for Jira: About Us"
description: How Jira Cloud Add-On integrates with Test IO.
---

The Jira Cloud Add-On enables you to review and export bugs reported by Test IO's network of professional testers directly within Jira, streamlining your bug tracking workflow.

## Features

### Bug Management

- **Test IO Bugs in Jira**: Access and manage Test IO bugs directly from your Jira projects
- **Bug Triage**: Accept, reject, request information, and change severity of bugs from both Jira and Test IO interfaces
- **Bug Fix Confirmation**: Request bug fix confirmations for both Test IO bugs and your own bugs directly from Jira
- **Re-Export a Bug**: Re-export bugs from the Test IO interface when necessary

### Test Execution

- **Launch Tests from Jira**: Create exploratory tests directly from Jira using Test Templates configured in the Test IO platform
- **User Stories**: View results of tests containing User Stories, with results displayed per test or per user story

### Field Mapping

- **Default Field Mapping**: Map required and optional Jira fields to predefined Test IO fields (bug title, description, etc.)
- **Custom Field Mapping**: Customize exported information for any Jira field using Test IO bug attributes

### Synchronization

- **Known Bug Status Sync**: Automatically sync bug status when a bug is marked as fixed in Jira
- **Two-Way Comments Sync**: Synchronize comments between Jira and Test IO using a configurable tag (default: "@testio")

### Integration Management

- **Configure a Project**: Easily identify and configure which Jira projects have bug export enabled
- **Jira Add-On ↔ Test IO Interface**: Configurations created in the Jira Add-On are automatically available in your Test IO account and vice versa

## Requirements

You must be a Test IO customer to use this Add-On. If you're not a customer, the app will install but cannot be used without a Test IO subscription. We offer a free test on one of your projects to experience our testing capabilities.

{% quick-links %}

{% quick-link title="Installation" icon="shield_check" href="/docs/jira_cloud/installation" description="Install Jira Cloud Add-On in your Jira Cloud" /%}

{% quick-link title="Authentication" icon="shield_check" href="/docs/jira_cloud/authentication" description="Connect your Test IO account to your Jira Cloud" /%}

{% quick-link title="Configuration" icon="shield_check" href="/docs/jira_cloud/configuration" description="Configure integration between Jira Cloud and Test IO platform" /%}

{% /quick-links %}
