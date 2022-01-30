Feature: US_014 The date must be created at the time of account creation.

    Scenario:TC_001 The date cannot be typed earlier, in the past, at the time of creation an account
   
    Given user is on the registration page
    And user clicks on the  date creation input
    Then verify date creation can not type earlier
 
      Scenario:TC_002 User can choose a user from the registration and it cannot be blank
      Then user can choose a user from the registration and it cannot be blank
      
      Scenario:TC_003 user can choose an account created on manage accounts
      Then user can choose an account created on manage accounts

      Scenario:TC_004 User can select Zelle Enrolled optionally and save it
      Then User can select Zelle Enrolled optionally and save it

