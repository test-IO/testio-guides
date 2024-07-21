---
title: Configuration
description: Learn how to configure the Jira Server plugin integration with Test IO.
---

To start, you'll need to **create a configuration**. Follow these steps:

1. **Go to Configurations**: Navigate to the "Configurations" page in the Manage Apps page under the Test IO section.

2. **Add Configuration**: Click the "Add Configuration" button.

3. **Specify Project**: Select the Jira project to integrate with Test IO in the "Project" field. The integration between Test IO and Jira will be actual only for the selected Jira Project.

4. **Name Configuration**: Enter a name for the configuration in the "Configuration Name" field (if you don't specify the configuration name, the project name will be used for it by default).

{% screenshot src="/assets/jira_server/config/1.png" /%}

5. **Create Configuration**: Click the "Add configuration" button.  
   The new configuration will appear under "Configured Projects."  
   &nbsp;

**Set up the Configuration**

1. **Select Configuration**: Choose a configuration from the "Configured Projects" section and click on its name.

2. **View Details**: Configuration details will expand on the right side.

3. **Synchronization Tab**: Your Test IO Products and Product sections are listed under the “Synchronization” tab. Choose the Test IO Product(s) and/or Product Section(s) you want to synchronize with the selected Jira Project and Save the changes.  
   **Note**: If you select a Test IO Product, all the bugs associated with that Product will be exported to the selected Jira Project.
   {% screenshot src="/assets/jira_server/config/2.png" /%}

4. **Issue Type & Fields Mapping Tab**:

   - In the **“Issue type” field**, select the specific type that will be applied to Jira tickets when accepting Test IO bugs and creating the associated Jira tickets. This is usually the Bug issue type, but it could be different depending on the project configuration. Please note, that your Jira Data Center (Server) instance could have multiple Bug issue definitions, please ensure you select the appropriate one.​  
     {% screenshot src="/assets/jira_server/config/3.png" /%}

   - **Map specific Test IO fields to Jira fields** to ensure that Test IO bug details are accurately represented in Jira after accepting that bug and creating the associated Jira ticket. Available mappings include:
     {% list type="circle" %}

     - **Test IO bug Severity → Jira issue field**  
       Choose a Jira issue field that best fits your use case. For example, you might decide to map the Test IO bug Severity to the Jira ticket Priority field. This mapping will allow the Severity value from Test IO to be displayed in the Jira ticket's Priority field once the Test IO bug is accepted and the Jira ticket is created.

       If you need to start over or make changes to your mappings, simply click the **"Clear Mapping" button**. This will reset all mappings, allowing you to configure them from scratch.  
       {% screenshot src="/assets/jira_server/config/4.png" /%}

     - **Jira issue Reporter → Existing Jira user**  
       **Search and select** an existing Jira username to be the reporter for all Jira tickets created from accepted Test IO bugs. Choosing a generic user for both Test IO and Jira can help distinguish Test IO bugs from other issues in Jira.  
       {% screenshot src="/assets/jira_server/config/5.png" /%}

     - **Jira issue Summary → Test IO bug field or Custom field**  
       This mapping allows the Summary field in Jira to reflect specific information from Test IO bug details. For example, you can map it to the Test IO bug Summary, Environment, Description, or any other relevant value from the available list. Once the Test IO bug is accepted and the Jira ticket is created, the chosen Test IO bug detail will populate the Jira issue's Summary field.  
       {% screenshot src="/assets/jira_server/config/6.png" /%}

       In addition to the available options, there is a possibility to customize the mapping by selecting the **"Custom field" option**. Here’s how:

       1. Choose "Custom field" from the mapping options.

       2. Click and select the Test IO bug attributes from the provided list that you want to appear in the Jira ticket Summary.

       3. Combine the selected attributes with manually entered text for more detailed and specific information.

       For more details about using the Custom field, refer to the guide [here](/docs/jira_server/custom_field_in_config).

       {% screenshot src="/assets/jira_server/config/7.png" /%}

     - **Jira issue Components → Jira issue Components options**  
       Jira issues could have certain Components associated with them, to make filtering/ sorting much easier. From the list of available Jira component options, select the components you want to automatically add to all Jira tickets created as a result of accepted Test IO bugs. Additionally, you can select multiple options for mapping, as the Components field mapping supports multiselect.

       **Note**: If your project does not have any defined Components, the list will be empty.

       {% screenshot src="/assets/jira_server/config/8.png" /%}

     - **Jira issue Description → Test IO bug field or Custom field**  
       This mapping allows the Description field in Jira to reflect specific information from Test IO bug details. For example, you can map it to the Test IO bug Environment, Description, Description & Environment, or any other relevant value from the available list. Once the Test IO bug is accepted and the Jira ticket is created, the chosen Test IO bug detail will populate the Jira issue's Description field.

       {% screenshot src="/assets/jira_server/config/9.png" /%}

       For example:

       - Selecting the **Description** option will add Test IO's Steps to Reproduce, Expected Result, and Actual Results to the Jira issue's Description field.

       - Choosing the **Description & Attachments** option will include the above details along with attachments from the Test IO Bug in the Jira issue's Description field.

       In addition to the available options, there is a possibility to customize the mapping by selecting the **"Custom field"** option. Here’s how:

       1. Choose "Custom field” from the mapping options.

       2. Click and select the Test IO bug attributes from the provided list that you want to appear in the Jira ticket Description.

       3. Combine the selected attributes with manually entered text for more detailed and specific information.

       For more details about using the Custom field, refer to the guide here (link Custom Field article).

       {% screenshot src="/assets/jira_server/config/10.png" /%}

     - **Jira issue Priority → Jira issue Priority options**  
       This mapping allows you to set the priority of Jira issues created from accepted Test IO bugs. From the available Jira priority options (depending on Jira Project settings), select the one that you want to assign automatically to all Jira tickets created from accepted Test IO bugs. This ensures that the priority level of Test IO bugs is accurately reflected in Jira, helping to manage and address issues based on their urgency and importance.  
       {% screenshot src="/assets/jira_server/config/11.png" /%}

     - **Jira issue Fix Version/s → Jira issue Fix Version/s options**  
       This mapping allows you to assign specific Fix Version/s to Jira tickets created from accepted Test IO bugs. Select from the available Jira Fix Version/s options to automatically set the Fix Version/s for these tickets. Additionally, you can select multiple options for mapping, as the Fix Version/s field mapping supports multiselect.

       This helps in tracking which version of the product the bug fix will be included in, enhancing release management.  
       {% screenshot src="/assets/jira_server/config/12.png" /%}

       **Note**: If your Jira project does not have any defined Fix Version/s, the list will be empty. In this case, you may need to define Fix Version/s in your Jira project settings before setting up this mapping.

     - **Jira issue Labels → Defined value(s)**  
       This mapping allows you to assign specific labels to Jira tickets created from accepted Test IO bugs. Enter the desired label(s) that you want to apply to these tickets, and separate each label by a space. Labels in Jira help categorize and organize issues, making it easier to filter and search for relevant information.

       Ensure that the entered label(s) accurately reflect the nature or context of the Test IO bugs being addressed. This customization enhances clarity and efficiency in issue management within Jira.  
       {% screenshot src="/assets/jira_server/config/13.png" /%}

     - **Jira issue Epic Link → Existing Epic key value**  
       This mapping feature enables connecting Jira tickets generated from accepted Test IO bugs to a specific Jira Epic by entering an existing Epic key value from your configured Jira Project. This Epic key value specifies which Epic in Jira should be linked to the Jira tickets created from accepted Test IO bugs.

       Ensure that the entered Epic key value accurately identifies the Epic in Jira that encompasses the work related to the Test IO bugs. This integration helps in organizing and tracking work items across related tasks and projects within Jira.  
       {% screenshot src="/assets/jira_server/config/14.png" /%}

     - **Jira issue Environment → Test IO bug field or Custom field**  
       This mapping allows the Environment field in Jira to capture specific information from Test IO bugs. You can choose to map it to the Test IO bug Environment field or any relevant field that suits your needs. Once the Test IO bug is accepted and the Jira ticket is created, the chosen Test IO bug detail will populate the Jira issue's Environment field.  
       {% screenshot src="/assets/jira_server/config/15.png" /%}

       In addition to predefined options, you can customize the mapping by selecting a **"Custom field"**. Here’s how:

       1. Choose "Custom field" from the mapping options.

       2. Click and select the Test IO bug attributes from the provided list that you want to appear in the Jira ticket's Environment field.

       3. Combine the selected attributes with manually entered text for more detailed and specific environmental information.

       Please take note of the Environment-related tags available for use in custom fields, including **Environment URL, Environment title, Environment password and Environment username**.  
       {% screenshot src="/assets/jira_server/config/16.png" /%}

     - **Jira issue Affected version → Jira issue Affects Version/s options**  
       This mapping allows you to specify the Affects Version/s for Jira tickets created from accepted Test IO bugs. Select from the available Jira Affects Version options to indicate which version(s) of the software is impacted by the Test IO bugs. Additionally, you can select multiple options for mapping, as the Affects Version/s field mapping supports multiselect.

       **Note**: If your Jira project does not have any defined Affects Version/s, the list will be empty. You may need to define Affects Version/s in your Jira project settings before setting up this mapping.

       This mapping helps in accurately tracking and managing software issues across different releases or versions.

       {% screenshot src="/assets/jira_server/config/17.png" /%}

     - **Jira issue Assignee → Existing Jira user**  
       This mapping allows you to assign an existing Jira user as the assignee for Jira tickets created from accepted Test IO bugs. Search and select the desired Jira username who will be responsible for resolving these tickets. Assigning a specific user ensures accountability and clarity on who is handling the resolution of Test IO bugs within Jira.

       Defining a default Jira user as an Assignee of Test IO bugs helps streamline task management and enhances collaboration by clearly defining responsibilities for issue resolution.  
       {% screenshot src="/assets/jira_server/config/18.png" /%}

     - **Jira issue Sprint → Existing Sprint ID value**  
       This mapping allows you to connect Jira tickets, created from accepted Test IO bugs, to a specific Jira Sprint by entering an existing Sprint ID value from your configured Jira project. The Sprint ID value specifies which sprint in Jira should be associated with the Jira tickets created from accepted Test IO bugs.

       By setting up this mapping, your Jira tickets created from accepted Test IO bugs will be linked to the specified sprint, ensuring better organization and tracking of related tasks and projects within Jira.
       {% screenshot src="/assets/jira_server/config/19.png" /%}

     - **Jira issue Time Tracking → Entered time value**  
       This mapping feature enables you to link Jira tickets, created from accepted Test IO bugs, to a specific amount of time entered for time tracking in Jira. When entering the time value for Time Tracking fields (Original Estimate field), the system automatically converts the entered value into the day-hour-minute format, ensuring precise time tracking within Jira.

       {% screenshot src="/assets/jira_server/config/20.png" /%}

       {% screenshot src="/assets/jira_server/config/21.png" /%}

     {% /list %}

     Mapping Test IO fields to Jira fields ensures seamless integration and accurate representation of bug details. Remember to review and adjust the mappings based on your project's specific needs to ensure the most meaningful and useful representation in Jira.

Once you have completed setting up the synchronization and mapping rules for the integration between Jira and Test IO, you can proceed to configure the **Comments** and **Advanced Integration** settings.

**Note**: Test IO Plugin configuration can also be performed at the Jira Project settings level. For quick access, navigate to Jira Project -> Test IO Plugin -> Settings/ Configuration page.

{% screenshot src="/assets/jira_server/config/22.gif" /%}
