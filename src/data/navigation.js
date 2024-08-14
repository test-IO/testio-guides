const navigation = [
  {
    title: "Introduction",
    links: [{ title: "Getting started", href: "/" }],
  },
  {
    title: "Integrations",
    links: [
      { title: "Overview", href: "/docs/integrations/overview" },
      { title: "Jira Plugins", href: "/docs/integrations/jira_plugins" },
      { title: "Configure Notion as Bug Tracker", href: "/docs/integrations/notion" },
    ],
  },
  {
    title: "Jira Plugins",
    links: [
      { title: "Migrate Server Plugin To Cloud", href: "/docs/jira_plugins/migration_to_cloud" },
      {
        title: "Jira Cloud Plugin",
        href: "/docs/jira_plugins/cloud",
        children: [
          { title: "Installation", href: "/docs/jira_cloud/installation" },
          { title: "Authentication", href: "/docs/jira_cloud/authentication" },
          {
            title: "Configuration",
            href: "/docs/jira_cloud/configuration",
            children: [
              {
                title: "Custom field",
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
                title: "Confirm Bug with an experienced Tester",
                href: "/docs/jira_cloud/confirm_bug_with_tester",
              },
              { title: "Bug Reporductions", href: "/docs/jira_cloud/bug_reporductions" },
            ],
          },
          { title: "Test IO Bugs: All Bugs page", href: "/docs/jira_cloud/all_bugs_page" },
          { title: "Copy and Share Bug Link", href: "/docs/jira_cloud/share_bug_link" },
          {
            title: "Exploratory Tests and Bug types",
            href: "/docs/jira_cloud/test_bug_types",
          },
          {
            title: "Create New Exploratory Test",
            href: "/docs/jira_cloud/create_exploratory_test",
          },
          { title: "Bug Fix Confirmation", href: "/docs/jira_cloud/bug_fix_confirm" },
          { title: "User Stories execution", href: "/docs/jira_cloud/user_stories" },
        ],
      },
      {
        title: "Jira Server (Data Center)",
        href: "/docs/jira_plugins/server",
        children: [
          { title: "Installation", href: "/docs/jira_server/installation" },
          { title: "Connection", href: "/docs/jira_server/connection" },
          {
            title: "Configuration",
            href: "/docs/jira_server/configuration",
            children: [
              {
                title: "Custom field",
                href: "/docs/jira_server/custom_field",
              },
              { title: "Demo Bug", href: "/docs/jira_server/demo_bug" },
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
                title: "Confirm Bug with an experienced Tester",
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
          { title: "Exploratory Tests and Bug types", href: "/docs/jira_server/test_bug_types" },
          {
            title: "Create New Exploratory Test",
            href: "/docs/jira_server/create_exploratory_test",
          },
          { title: "Manage Exploratory Tests", href: "/docs/jira_server/manage_exploratory_tests" },
          { title: "Bug Fix Confirmation", href: "/docs/jira_server/bug_fix_confirm" },
          { title: "User Stories execution", href: "/docs/jira_server/user_stories" },
        ],
      },
    ],
  },
  {
    title: "Zapier app",
    links: [
      { title: "Release notes", href: "/docs/zapier/release" },
      { title: "Getting started", href: "/docs/zapier/getting_started" },
      { title: "Triggers", href: "/docs/zapier/triggers" },
      { title: "Actions and Searches", href: "/docs/zapier/actions" },
      { title: "Use case 1: Export Test IO bug to Notion", href: "/docs/zapier/use_case_1" },
      { title: "Use case 2: Mark bug as fixed in Test IO", href: "/docs/zapier/use_case_2" },
      { title: "Use case 3: Sync Jira Issue status", href: "/docs/zapier/use_case_3" },
    ],
  },
]

export default navigation
