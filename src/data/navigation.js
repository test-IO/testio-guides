const navigation = [
  {
    title: "API Reference",
    links: [
      { title: "Getting Started", href: "/docs/api/getting-started" },
      { title: "Authentication", href: "/docs/api/authentication" },
      { title: "Products", href: "/docs/api/products" },
      { title: "Features", href: "/docs/api/features" },
      { title: "User Stories", href: "/docs/api/user-stories" },
      { title: "Test Environments", href: "/docs/api/test-environments" },
      { title: "Binary Apps", href: "/docs/api/binary-apps" },
      { title: "Exploratory Tests", href: "/docs/api/exploratory-tests" },
      { title: "Test Templates", href: "/docs/api/test-templates" },
      { title: "Bugs", href: "/docs/api/bugs" },
      { title: "Custom Bug Export Connections", href: "/docs/api/connections" },
      { title: "Bug Report Confirmations", href: "/docs/api/bug-report-confirmations" },
      { title: "Test Cases", href: "/docs/api/test-cases" },
      { title: "Test Case Tests", href: "/docs/api/test-case-tests" },
    ],
  },

  {
    title: "Jira Add-Ons",
    links: [
      {
        title: "Jira Cloud Add-On",
        href: "/docs/jira_plugins/cloud",
        children: [
          { title: "Installation", href: "/docs/jira_cloud/installation" },
          { title: "Authentication", href: "/docs/jira_cloud/authentication" },
          {
            title: "Configuration",
            href: "/docs/jira_cloud/configuration",
            children: [
              {
                title: "Custom Field",
                href: "/docs/jira_cloud/custom_field",
              },
              { title: "Demo Bug", href: "/docs/jira_cloud/demo_bug" },
              {
                title: "Advanced Integration",
                href: "/docs/jira_cloud/advanced_integration",
              },
            ],
          },
          {
            title: "Test IO Bugs: Bug Triage",
            href: "/docs/jira_cloud/test_io_bugs_triage",
            children: [
              { title: "Accept Test IO Bug", href: "/docs/jira_cloud/accept_bug" },
              {
                title: "Reject Test IO Bug",
                href: "/docs/jira_cloud/reject_bug",
              },
              {
                title: "Change Severity of Test IO Bug",
                href: "/docs/jira_cloud/change_severity",
              },
              {
                title: "Send a Request to Test IO Tester",
                href: "/docs/jira_cloud/send_request_to_tester",
              },
              {
                title: "Confirm Bug with an Experienced Tester",
                href: "/docs/jira_cloud/confirm_bug_with_tester",
              },
              { title: "Bug Reporductions", href: "/docs/jira_cloud/bug_reporductions" },
            ],
          },
          { title: "Test IO Bugs: All Bugs Page", href: "/docs/jira_cloud/all_bugs_page" },
          { title: "Copy and Share Bug Link", href: "/docs/jira_cloud/share_bug_link" },
          {
            title: "Exploratory Tests and Bug Types",
            href: "/docs/jira_cloud/test_bug_types",
          },
          {
            title: "Create New Exploratory Test",
            href: "/docs/jira_cloud/create_exploratory_test",
          },
          { title: "Bug Fix Confirmation", href: "/docs/jira_cloud/bug_fix_confirm" },
          { title: "User Stories Execution", href: "/docs/jira_cloud/user_stories" },
        ],
      },
      {
        title: "Jira Data Center",
        href: "/docs/jira_plugins/server",
        children: [
          { title: "Installation", href: "/docs/jira_server/installation" },
          { title: "Connection", href: "/docs/jira_server/connection" },
          {
            title: "Configuration",
            href: "/docs/jira_server/configuration",
            children: [
              {
                title: "Custom Field",
                href: "/docs/jira_server/custom_field",
              },
              { title: "Demo Bug", href: "/docs/jira_server/demo_bug" },
              { title: "Custom Reports", href: "/docs/jira_server/custom_reports" },
              { title: "Comments", href: "/docs/jira_server/comments" },
              {
                title: "Advanced Integration",
                href: "/docs/jira_server/advanced_integration",
              },
            ],
          },
          { title: "Maintenance", href: "/docs/jira_server/maintenance" },
          {
            title: "Test IO Bugs: Received Bugs and All Bugs",
            href: "/docs/jira_server/bugs_preview_modes",
            children: [
              { title: "Accept Test IO Bug", href: "/docs/jira_server/accept_bug" },
              { title: "Reject Test IO Bug", href: "/docs/jira_server/reject_bug" },
              {
                title: "Change Severity of Test IO Bug",
                href: "/docs/jira_server/change_severity",
              },
              {
                title: "Send a Request to Test IO Tester",
                href: "/docs/jira_server/send_request",
              },
              {
                title: "Confirm Bug with an Experienced Tester",
                href: "/docs/jira_server/confirm_bug",
              },
              {
                title: "Leave a Comment under Test IO Bug",
                href: "/docs/jira_server/leave_comment",
              },
              { title: "Bug Reporductions", href: "/docs/jira_server/bug_reporductions" },
            ],
          },
          { title: "Copy and Share Bug Link", href: "/docs/jira_server/share_bug_link" },
          { title: "Exploratory Tests and Bug Types", href: "/docs/jira_server/test_bug_types" },
          {
            title: "Create New Exploratory Test",
            href: "/docs/jira_server/create_exploratory_test",
          },
          { title: "Manage Exploratory Tests", href: "/docs/jira_server/manage_exploratory_tests" },
          { title: "Bug Fix Confirmation", href: "/docs/jira_server/bug_fix_confirm" },
          { title: "User Stories Execution", href: "/docs/jira_server/user_stories" },
        ],
      },
    ],
  },
  {
    title: "Notion Integration",
    links: [{ title: "Configure Notion as Bug Tracker", href: "/docs/integrations/notion" }],
  },
  {
    title: "Zapier App",
    links: [
      { title: "Release Notes", href: "/docs/zapier/release" },
      { title: "Getting Started", href: "/docs/zapier/getting_started" },
      { title: "Triggers", href: "/docs/zapier/triggers" },
      { title: "Actions and Searches", href: "/docs/zapier/actions" },
      { title: "Use Case 1: Export Test IO Bug to Notion", href: "/docs/zapier/use_case_1" },
      { title: "Use Case 2: Mark Bug as Fixed in Test IO", href: "/docs/zapier/use_case_2" },
      { title: "Use Case 3: Sync Jira Issue Status", href: "/docs/zapier/use_case_3" },
    ],
  },
]

export default navigation
