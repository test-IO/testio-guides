---
title: Configuration
description: Learn how to configure the Jira Cloud plugin integration with Test IO.
---

## Create new Configuration

To start, you'll need to **create a configuration**. Follow these steps:

1. **Go to Configurations**: Navigate to the "Configurations" page located under the Test IO section in the Manage Apps page.
2. **Add Configuration**: Click the "Add Configuration" button.
3. **Specify Project**: Select the Jira project to integrate with Test IO in the "Project" field. The integration between Test IO and Jira will be actual only for the selected Jira Project.
4. **Name Configuration**: Enter a name for the configuration in the "Config Name" field.
   {% screenshot src="/assets/jira_cloud/config/1.png" caption="Create a new configuration for your Jira project" /%}
5. **Create Configuration**: Click the "Add Project" button.
   The new configuration will appear under "Configured Projects."  
   &nbsp;

## Set up the Configuration

1.  **Select Configuration**: Choose a configuration from the "Configured Projects" section and click on its name: configuration details will expand on the right side.

2.  **Synchronization Tab**: Your Test IO Products and Product sections are listed under the “Synchronization” tab. Choose the Test IO Product(s) and/or Product Section(s) you want to synchronize with the selected Jira Project and Save the changes.  
    **Note**: If you select a Test IO Product, all the bugs associated with that product will be exported to the selected Jira Project.
    {% screenshot src="/assets/jira_cloud/config/2.png" caption="Select which Test IO Products or Sections should be synchronized with your Jira project" /%}

3.  **Issue Type & Fields Mapping Tab**:

    - In the **“Issue type” field**, select the specific type that will be applied to Jira tickets when accepting Test IO bugs and creating the associated Jira tickets. This is usually the Bug issue type, but it could be totally different depending on the project configuration. Please note, that your Jira Cloud instance could have multiple Bug issue definitions, please ensure you select the appropriate one.​

      {% screenshot src="/assets/jira_cloud/config/3.png" caption="Select the issue type that will be applied to Jira tickets when you accept Test IO bugs" /%}

    - **Map specific Test IO fields to Jira fields** to ensure that Test IO bug details are accurately represented in Jira after accepting that bug and creating the associated Jira ticket. Available mappings include:
      {% list type="circle" %}

      - **Test IO bug Severity → Jira issue field**  
        Choose a Jira issue field that best fits your use case. For example, you might decide to map the Test IO bug Severity to the Jira ticket Priority field. This mapping will allow the Severity value from Test IO to be displayed in the Jira ticket's Priority field once the Test IO bug is accepted and the Jira ticket is created.

        If you need to start over or make changes to your mappings, simply click the **"Clear Mapping" button**. This will reset all mappings, allowing you to configure them from scratch.

        {% screenshot src="/assets/jira_cloud/config/4.png" caption="Map Test IO Severity field to specific Jira field" /%}

      - **Jira issue Summary → Test IO bug field or Custom field**  
        This mapping allows the Summary field in Jira to reflect specific information from Test IO bug details. For example, you can map it to the Test IO bug Summary, Environment, Description, or any other relevant value from the available list. Once the Test IO bug is accepted and the Jira ticket is created, the chosen Test IO bug detail will populate the Jira issue's Summary field.

        {% screenshot src="/assets/jira_cloud/config/5.png" caption="Map Jira issue Summary to Test IO bug field or Custom field" /%}

        In addition to the available options, there is a possibility to customize the mapping by selecting the **"Custom field" option**. Here’s how:

        1. Choose "Custom field" from the mapping options.
        2. Click and select the Test IO bug attributes from the provided list that you want to appear in the Jira ticket Summary.
        3. Combine the selected attributes with manually entered text for more detailed and specific information.

        For more details about using the Custom field, refer to the guide [here](/docs/jira_cloud/custom_field_in_config).

        {% screenshot src="/assets/jira_cloud/config/6.png" caption="Customize the mapping by selecting the Custom field option" /%}

      - **Jira issue Components → Jira issue Components options**  
        Jira issues could have certain Components associated with them, to make filtering/sorting much easier. From the list of available Jira component options, select the components you want to automatically add to all Jira tickets created as a result of accepted Test IO bugs. \
        **Note**: If your project does not have any defined Components, the list will be empty.

        {% screenshot src="/assets/jira_cloud/config/7.png" caption="Select Components you want to automatically add to all Jira tickets" /%}

      - **Jira issue Description → Test IO bug field or Custom field**  
        This mapping allows the Description field in Jira to reflect specific information from Test IO bug details. For example, you can map it to the Test IO bug Environment, Description, Description & Environment, or any other relevant value from the available list. Once the Test IO bug is accepted and the Jira ticket is created, the chosen Test IO bug detail will populate the Jira issue's Description field.

        For example:

        - Selecting the **Description** option will add Test IO's Steps to Reproduce, Expected Result, and Actual Results to the Jira issue's Description field.
        - Choosing the **Description & Environment** option will include the above details along with Environment-related information in the Jira issue's Description field.

        In addition to the available options, there is a possibility to customize the mapping by selecting the **"Custom field"** option. Here’s how:

        1. Choose "Custom field” from the mapping options.
        2. Click and select the Test IO bug attributes from the provided list that you want to appear in the Jira ticket Description.
        3. Combine the selected attributes with manually entered text for more detailed and specific information.

        For more details about using the Custom field, refer to the guide [here](/docs/jira_cloud/custom_field_in_config).

        {% screenshot src="/assets/jira_cloud/config/8.png" caption="Map Jira issue Description to Test IO bug field or Custom field" /%}

      - **Jira issue Reporter → Existing Jira user**  
        **Search and select** an existing Jira username to be the reporter for all Jira tickets created from accepted Test IO bugs. Choosing a generic user for both Test IO and Jira can help distinguish Test IO bugs from other issues in Jira.

        {% screenshot src="/assets/jira_cloud/config/9.png" caption="Map a Jira issue Reporter to an existing Jira user" /%}

      - **Jira issue Priority → Jira issue Priority options**  
        This mapping allows you to set the priority of Jira issues created from accepted Test IO bugs. From the available Jira priority options (depending on Jira Project settings), select the one that you want to assign automatically to all Jira tickets created from accepted Test IO bugs. This ensures that the priority level of Test IO bugs is accurately reflected in Jira, helping to manage and address issues based on their urgency and importance.

        {% screenshot src="/assets/jira_cloud/config/10.png" caption="Select one Jira priority option that you want to assign to all Jira tickets" /%}

      - **Jira issue Fix versions → Jira issue Fix versions options**  
        This mapping allows you to assign specific Fix versions to Jira tickets created from accepted Test IO bugs. Select from the available Jira Fix version options to automatically set the Fix versions for these tickets. This helps in tracking which version of the product the bug fix will be included in, enhancing release management.

        **Note**: If your Jira project does not have any defined Fix versions, the list will be empty. In this case, you may need to define Fix versions in your Jira project settings before setting up this mapping.

        {% screenshot src="/assets/jira_cloud/config/11.png" caption="Select Jira Fix version options to set the Fix versions for Jira tickets" /%}

      - **Jira issue Labels → Defined value(s)**  
        This mapping allows you to assign specific labels to Jira tickets created from accepted Test IO bugs. Enter the desired label(s) that you want to apply to these tickets, and separate each label by a space. Labels in Jira help categorize and organize issues, making it easier to filter and search for relevant information.

        Ensure that the entered label(s) accurately reflect the nature or context of the Test IO bugs being addressed. This customization enhances clarity and efficiency in issue management within Jira.

        {% screenshot src="/assets/jira_cloud/config/12.png" caption="Map Jira issue Labels to desired specific labels" /%}

      - **Jira issue Epic Link → Existing Epic key value**  
        This mapping feature enables connecting Jira tickets generated from accepted Test IO bugs to a specific Jira Epic by entering an existing Epic key value from your configured Jira Project. This Epic key value specifies which Epic in Jira should be linked to the Jira tickets created from accepted Test IO bugs.

        Ensure that the entered Epic key value accurately identifies the Epic in Jira that encompasses the work related to the Test IO bugs. This integration helps in organizing and tracking work items across related tasks and projects within Jira.

        {% screenshot src="/assets/jira_cloud/config/13.png" caption="Map Jira issue Epic Link to Existing Epic key value" /%}

      - **Jira issue Environment → Test IO bug field or Custom field**  
        This mapping allows the Environment field in Jira to capture specific information from Test IO bugs. You can choose to map it to the Test IO bug Environment field or any relevant field that suits your needs. Once the Test IO bug is accepted and the Jira ticket is created, the chosen Test IO bug detail will populate the Jira issue's Environment field.

        {% screenshot src="/assets/jira_cloud/config/14.png" caption="Map Jira issue Environment to Test IO bug field or Custom field" /%}

        In addition to predefined options, you can customize the mapping by selecting a **"Custom field"**. Here’s how:

        1. Choose "Custom field" from the mapping options.
        2. Click and select the Test IO bug attributes from the provided list that you want to appear in the Jira ticket's Environment field.
        3. Combine the selected attributes with manually entered text for more detailed and specific environmental information.

        Please take note of the Environment-related tags available for use in custom fields, including **Environment URL, Environment title, Environment password, and Environment username**.

        {% screenshot src="/assets/jira_cloud/config/15.png" caption="Customize the mapping by selecting Environment-related tags in the Custom field" /%}

      - **Jira issue Affected version → Jira issue Affected versions options**  
        This mapping allows you to specify the affected version(s) for Jira tickets created from accepted Test IO bugs. Select from the available Jira Affected version options to indicate which version(s) of the software is impacted by the Test IO bugs.

        **Note**: If your Jira project does not have any defined affected versions, the list will be empty. You may need to define affected versions in your Jira project settings before setting up this mapping.

        This mapping helps in accurately tracking and managing software issues across different releases or versions.

        {% screenshot src="/assets/jira_cloud/config/16.png" caption="Select Jira Affected version options for Jira tickets" /%}

      - **Jira issue Assignee → Existing Jira user**  
        This mapping allows you to assign an existing Jira user as the assignee for Jira tickets created from accepted Test IO bugs. Search and select the desired Jira username who will be responsible for resolving these tickets. Assigning a specific user ensures accountability and clarity on who is handling the resolution of Test IO bugs within Jira.

        Defining a default Jira user as an Assignee of Test IO bugs helps streamline task management and enhances collaboration by clearly defining responsibilities for issue resolution.

        {% screenshot src="/assets/jira_cloud/config/17.png" caption="Map the assignee for Jira tickets to an existing Jira user" /%}

      {% /list %}

      Mapping Test IO fields to Jira fields ensures seamless integration and accurate representation of bug details. Remember to review and adjust the mappings based on your project's specific needs to ensure the most meaningful and useful representation in Jira.

Once you have completed setting up the synchronization and mapping rules for the integration between Jira and Test IO, you can proceed to configure the **Advanced Integration settings**.

**Note**: Test IO Plugin configuration can also be performed at the Jira Project settings level. For quick access, navigate to Jira Project -> Test IO Plugin -> Settings/Configuration page.

{% screenshot src="/assets/jira_cloud/config/18.png" caption="Setup Jira Plugin Configuration in Jira Project level" /%}

{% quick-links %}

{% quick-link title="Custom Field" icon="shield_check" href="/docs/jira_cloud/custom_field_in_config" description="Configure specific Jira Fields with dynamically changing content" /%}

{% quick-link title="Demo Bug" icon="shield_check" href="/docs/jira_cloud/demo_bug_in_config" description="Export a sample bug to Jira Cloud and test your mapping configurations" /%}

{% quick-link title="Advanced Integration" icon="shield_check"
href="/docs/jira_cloud/advanced_integration"
description="Configure two-way integration between Jira Cloud and Test IO platform" /%}

{% /quick-links %}
