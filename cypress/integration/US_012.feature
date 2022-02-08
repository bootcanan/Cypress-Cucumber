Feature: US_012 Tests

    Scenario: TC_012_01 user anters gmibank homepage then reaches create new costomers link
        Given user enters gmibank homepage
        Then user clicks userEntry icon
        Then user clicks signIn link
        Then user enters admin username
        Then user enters admin password
        Then user clicks signIn button
        And user clicks myOperations link
        And user clicks manageCostomers link

    Scenario: TC_012_02 user should show the account information of the customer First Name
        Given     user should show First Name and verify valid

    Scenario:   TC_012_03 user should show the account information of the customer Last Name
        Given     user should show Last Name and verify valid

    Scenario:  TC_012_04  user should show the account information of the customer Middle Initial
        Given     user should show Middle Initial and verify valid

    Scenario:  TC_012_05  user should show the account information of the customer Email
        Given     user should show Email and verify valid

    Scenario:  TC_012_06 user should show the account information of the customer Mobile Phone Nummer
        Given     user should show Mobile Phone Nummer and verify valid

    Scenario:  TC_012_07 user should show the account information of the customer Phone Nummer
        Given     user should show Phone Nummer and verify valid

    Scenario:   TC_012_08 user should show the account information of the customer Address
        Given     user should show Address and verify valid

    Scenario:   TC_012_09 user should show the account information of the customer Create Date
        Given     user should show Create Date and verify valid

    Scenario:   TC_012_10 user should be an Edit Button where all customer information can be populated
        Given     user should show Edit Button and verify valid

    Scenario:  TC_012_11 user should to create or update the Email address
        Given     user should write and new the Email address
        And       user click Save Button

    Scenario:  TC_012_12 user should to create or update the Mobile Phone Nummer
        Given     user should write and new the Mobile Phone Nummer
        And       user click Save one Button

    Scenario:   TC_012_13 user should to create or update the Phone Nummer
        Given     user should write and new the Phone Nummer
        And       user click Save two Button

    Scenario:  TC_012_14 user should to create or update the Address
        Given     user should write and new the Address
        And       user click Save three Button

    Scenario:  TC-012_15 user should delete a customer but seeing a message if the user is sure about deletion
        Given     user click Delete Button


