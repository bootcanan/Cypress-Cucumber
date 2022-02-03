Feature: US_017 System must allow Admin to manage users

    Scenario: TC_001 Admin can activate a role as user
        Given user is on GMI Bank page
        Then clicks on the profile icon at the top right and then click on the Sign In button
        Then enters the required information and click sign in
        Then after logging in, clicks the Administration icon at the top right and then click the User management button
        Then activates a user in the Users list

    Scenario: TC_002 Admin can activate a role as employee
        Given user is on GMI Bank page
        Then clicks on the profile icon at the top right and then click on the Sign In button
        Then enters the required information and click sign in
        Then after logging in, clicks the Administration icon at the top right and then click the User management button
        Then activates a user in the Users list