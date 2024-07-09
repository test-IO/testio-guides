---
title: Configurartion
description: Learn how to configure the Jira Cloud plugin integration with Test IO.
---

To start, you'll need to **create a configuration**. Follow these steps:
1. **Go to Configurations:** Navigate to the "Configurations" page located under the Test IO section in the Manage Apps page.
2. **Add Configuration:** Click the "Add Configuration" button.
3. **Specify Project:** Select the Jira project to integrate with Test IO in the "Project" field. The integration between Test IO and Jira will be actual only for the selected Jira Project.
4. **Name Configuration:** Enter a name for the configuration in the "Config Name" field.
   {% screenshot src="/assets/jira_cloud/config/1.png" caption="Create a new configuration for your Jira project" /%}
5. **Create Configuration:** Click the "Add Project" button. 
The new configuration will appear under "Configured Projects."


**Set up the Configuration**
1. **Select Configuration:** Choose a configuration from the "Configured Projects" section and click on its name.
2. **View Details:** Configuration details will expand on the right side.
3. **Synchronization Tab:** Your Test IO Products and Product sections are listed under the “Synchronization” tab. Choose the Test IO Product(s) and/or Product Section(s) you want to synchronize with the selected Jira Project and Save the changes.”
   **Note:** If you select a Test IO Product, all the bugs associated with that product will be exported to the selected Jira Project.
   {% screenshot src="/assets/jira_cloud/config/2.png" caption="Select wich Test IO Products or Sections should be synchronized with your Jira project" /%}
4. **Issue Type & Fields Mapping Tab:**
   - In the “Issue type” field, select the specific type that will be applied to Jira tickets when accepting Test IO bugs and creating the associated Jira tickets. This is usually the Bug issue type, but it could be totally different depending on the project configuration. Please note, that your Jira Cloud instance could have multiple Bug issue definitions, please ensure you select the appropriate one.​