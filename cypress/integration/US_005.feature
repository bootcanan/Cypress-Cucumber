Feature: US_005 Login page should not be accessible with invalid credentials



# Background:
# Given user is on GMI Bank page
# Then user clicks regitretion button



  Scenario: TC_001 User cannot login with invalid username validating the error message
 Given user is on GMI Bank page
  Given user clicks sign in button
  And user enters invalid username and valid password
  And user clicks sign in button down
  Then user sees Failed to sign in! Please check your credentials and try again. text

   Scenario: TC_002 User cannot login with invalid password validating the error message
  Given user is on GMI Bank page
   Given user clicks sign in button
  And user enters valid username and invalid password
   And user clicks sign in button down
   Then user sees Failed to sign in! Please check your credentials and try again. text

  Scenario: TC_003 User cannot login with invalid username and password validating the error message
  Given user is on GMI Bank page
   Given user clicks sign in button
  And user enters invalid username and password
   And user clicks sign in button down
   Then user sees Failed to sign in! Please check your credentials and try again. text
  
  Scenario: TC_004 User who wants to login with invalid username and password, there should be password reset button
  Given user is on GMI Bank page
   Given user clicks sign in button
  And user enters invalid username and password
   And user clicks sign in button down
   Then user sees Failed to sign in! Please check your credentials and try again. text
   And user clicks did you forget your password button
   Then user enters the mail to see reset the password button

Scenario: TC_005 User who wants to login with invalid username and password, there should be registration button
  Given user is on GMI Bank page
  Given user clicks sign in button
  And user enters invalid username and password
  And user clicks sign in button down
  Then user sees Failed to sign in! Please check your credentials and try again. text
  Then user clicks register a new account button