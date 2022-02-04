Feature: US_017 System must allow Admin to manage users

    Scenario: TC_001 Admin can activate a role as user
        Given user is on GMI Bank page
        Then clicks on the profile icon at the top right and then click on the Sign In button
        Then enters the required information and click sign in
        Then after logging in, clicks the Administration icon at the top right and then click the User management button
        Then activates a user in the Users list

    Scenario: TC_002 Admin can activate a role as employee
        Then activates a employee in the employees list

    Scenario: TC_003 Admin can activate a role as manager
        Then activates a manager in the managers list

    Scenario: TC_004 Admin can activate a role as admin
        Then activates a admin in the admins list

    Scenario: TC_005 Admin can view all user info (admin, manager, employee and user)
        Then clicks admin view buttons

    Scenario: TC_006 Admin can edit all user info  (admin, manager, employee and user)
        Then clicks admin edit buttons

    Scenario: TC_007 Admin can delete all user info  (admin, manager, employee and user)
        Then clicks admin delete buttons
