
Feature:US_008 user in password page

  
  Scenario: TC001 same password not to be repeat
    Given user goes login page
    Given user enter username password
    Given user sign in
    Given user click accountDropDown and password
    Given user put current password and new password

    Scenario:  TC002 different passwords with different forms
    
    Given user put current password 
    Given user put new password at least upper
    Given validate red
    Given user put new password at least upper lower
    Given validate orange
    Given user put new password at least upper lower digit
    Given validate yellow
    Given user put new password at least upper lower digit special char 
    Given validate lightgreen
    Given user put new password at least upper lower digit special char and seven char
    Given validate green
   Given user click save