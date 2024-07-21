---
title: Connection
description: Learn how to set up and manage the Jira Server Plugin's connections.
---

The Jira Data Center (Server) Plugin supports two types of connections: **Default** and **Jira Project specific**. Follow the instructions below to set up and manage these connections effectively.

**Connection Types**

**1. Default Connection**: A default connection applies globally across all Jira projects in your instance. Only one default connection can exist, and it is inactive by default.

**2. Project-Specific Connection**: This type of connection links a specific Jira project to your Test IO account, ideal when a particular project requires a different configuration from the global default or when establishing Test IO and Jira integration for only one Jira Project.

**Setting Up a Default Connection**

1. **Navigate to Connection**: Go to the "Connection" page found in the Manage Apps section under the Test IO Plugin details.

2. **Enter API Key**: Obtain your Test IO Personal API key from the Test IO Customer Account (found on the Integrations -> API page) and enter it.

{% screenshot src="/assets/jira_server/connect/1.png" /%}

3. **Save Changes**: Click "Save" to complete the authentication process.

{% screenshot src="/assets/jira_server/connect/2.png" /%}

**Setting Up a Jira Project specific connection**

1. **Navigate to Connection**: Go to the "Connection" page in the Manage Apps section under the Test IO details.

2. **Add a connection**: Click the “Add connection” button to create a new project-specific connection.

3. **Select Jira Project**: From the dropdown menu, select the Jira project you want to connect to your Test IO account.

{% screenshot src="/assets/jira_server/connect/3.png" /%}

4. **Add connection**: Click the “Add connection” button. The new connection will appear under the “Jira Project specific” connections section.

{% screenshot src="/assets/jira_server/connect/4.png" /%}

5. **Enter API Key**: Obtain your Test IO Personal API key from the Test IO Customer Account (found on the Integrations -> API page) and enter it.

{% screenshot src="/assets/jira_server/connect/1.png" /%}

6. **Save Changes**: Click "Save" to complete the authentication process.

**Multi-Customer support**

The Jira Data Center (Server) Plugin supports **Multi-Customer connections**, allowing you to **integrate Jira with multiple Test IO accounts**. This can be achieved through different combinations of Global (Default) and Jira Project-specific connections.

**How Multi-Customer Support Works**

1. **Global (Default) and Project-Specific Connections**:
   {% list type="circle" %}

   - Configure one Global (Default) connection to integrate Jira with a Test IO account that is available to all Jira projects.

   - In addition, configure one or more Jira Project-specific connections to integrate different Jira projects with different Test IO accounts.

   {% /list %}

2. **Multiple Project-Specific Connections Without a Global Connection**:
   {% list type="circle" %}

   - Configure two or more Jira Project-specific connections without setting up a Global connection.

   - Each Jira project can be integrated with a different Test IO account independently.

   {% /list %}

**Benefits of Multi-Customer Support**

- **Flexibility**: Integrate different Jira projects with different Test IO accounts, allowing for tailored integration and management per project.

- **Customization**: Set up specific rules and configurations for each Jira project, enabling precise control over how each integration operates.

- **Scalability**: Easily manage multiple Test IO accounts within a single Jira instance, enhancing your ability to handle large-scale projects.

By utilizing the multi-customer support feature, you can efficiently manage integrations with multiple Test IO accounts, ensuring each Jira project operates with the specific integration rules and capabilities it needs.

{% screenshot src="/assets/jira_server/connect/5.gif" /%}

**Post-Connection Setup**

After setting up the connection, proceed to the Configuration page to configure synchronization settings and define integration rules as per your requirements.
