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
        href: "/docs/jira_cloud/qa_jira_about",
        children: [
          { title: "Installation", href: "/docs/jira_cloud/installation" },
          { title: "Authentication", href: "/docs/jira_cloud/authentication" },
          {
            title: "Configuration",
            href: "/docs/jira_cloud/configuration",
            children: [
              {
                title: "Custom field",
                href: "/docs/jira_cloud/custom_field_in_config",
              },
              { title: "Demo Bug", href: "/docs/jira_cloud/demo_bug_in_config" },
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
              { title: "Accepting Test IO Bug", href: "/docs/jira_cloud/accepting_bug" },
              {
                title: "Rejection of Test IO Bug",
                href: "/docs/jira_cloud/rejection_of_bug",
              },
              {
                title: "Changing Severity of Test IO Bug",
                href: "/docs/jira_cloud/changing_severity_of_bug",
              },
              {
                title: "Sending a request to the Test IO tester",
                href: "/docs/jira_cloud/sending_request_to_tester",
              },
            ],
          },
          {
            title: "Confirm Bug with an Experienced Tester",
            href: "/docs/jira_cloud/confirm_bug_with_tester",
          },
          { title: "Copy and Share Bug Link", href: "/docs/jira_cloud/share_bug_link" },
          { title: "Bug Reporductions", href: "/docs/jira_cloud/bug_reporductions" },
          { title: "Test IO Bugs: All Bugs page", href: "/docs/jira_cloud/all_bugs_page" },
          {
            title: "Exploratory Tests and Bug types",
            href: "/docs/jira_cloud/test_bug_types",
          },
          {
            title: "Create New Exploratory Test",
            href: "/docs/jira_cloud/create_exploratory_test",
          },
          { title: "User Stories execution", href: "/docs/jira_cloud/user_stories" },
          { title: "Bug Fix Confirmation", href: "/docs/jira_cloud/bug_fix_confirm" },
        ],
      },
      {
        title: "Jira Server (Data Center)",
        href: "/docs/jira_server/qa_jira_about",
        children: [
          { title: "Installation", href: "/docs/jira_server/installation" },
          { title: "Connection", href: "/docs/jira_server/connection" },
          {
            title: "Configuration",
            href: "/docs/jira_server/configuration",
            children: [
              {
                title: "Custom field",
                href: "/docs/jira_server/custom_field_in_config",
              },
              { title: "Demo Bug", href: "/docs/jira_server/demo_bug_in_config" },
              { title: "Comments Synchronization", href: "/docs/jira_server/comments_sync" },
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
              { title: "Accept a Test IO Bug", href: "/docs/jira_server/accept_bug" },
              { title: "Reject a Test IO Bug", href: "/docs/jira_server/reject_bug" },
              {
                title: "Changing Severity of Test IO Bug",
                href: "/docs/jira_server/change_severity",
              },
              {
                title: "Send a request to the Test IO tester",
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
            ],
          },
          { title: "Copy and Share Bug Link", href: "/docs/jira_server/share_bug_link" },
          { title: "Bug Reporductions", href: "/docs/jira_server/bug_reporductions" },
          { title: "Exploratory Tests", href: "/docs/jira_server/exploratory_tests" },
          { title: "Exploratory Test types", href: "/docs/jira_server/exploratory_test_types" },
          { title: "Bug Severities", href: "/docs/jira_server/bug_severities" },
          {
            title: "Create New Exploratory Test",
            href: "/docs/jira_server/create_exploratory_test",
          },
          { title: "Manage Exploratory Tests", href: "/docs/jira_server/manage_exploratory_tests" },
          { title: "User Stories execution", href: "/docs/jira_server/user_stories" },
          { title: "Bug Fix Confirmation", href: "/docs/jira_server/bug_fix_confirm" },
          {
            title: "Synchronization with Test IO after Jira issue movement",
            href: "/docs/jira_server/sync_after_movement",
          },
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
