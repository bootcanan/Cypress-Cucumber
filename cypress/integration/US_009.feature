   Feature: US_009 user should see customer details by using ssn and create new customer

    Scenario: TC_009 user should see customer details by using ssn
        Given user is on GMI Bank page
        Given user clicks sign in button
        And user enters valid username and password
        And user clicks sign in button down
        And user clicks manage customer button below my operations
        And user clicks create a new customer button
        And send ssn number and search
        And assert green pop up displayed
        And assert firstname
        And assert lastname
        And assert email
        And assert mobilephone
        And assert address
        