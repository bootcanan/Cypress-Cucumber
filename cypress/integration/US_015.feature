Feature: US_015 System should allow user to manage their account
    Scenario: TC_001 User should see all account types and balance populated
        Given User on the home page
        Then User clikcks menu icon
        And User navigates to Login page
        And User enter valid username
        And User enter valid password
        Then User clicks sign in button
        Then User clicks My Operations
        Then User clicks My Accounts
        Then User verifies account id and balance populated

    Scenario: TC_002 User should be able to view the transfer transactions
        When User clicks View Transfer
        Then User verifies that Transfer transactions are displayed