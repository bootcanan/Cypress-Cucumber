Feature: US_010 Address of customer can be created 





# Background:
# Given user is on GMI Bank page
# Then user clicks regitretion button



 Scenario: TC_001 Address as street and number should be provided  and cannot be left blank
Given user is on GMI Bank page
  Given user clicks sign in button
  And user enters valid username and password
  And user clicks sign in button down
  And user clicks manage customer button below my operations
  And user clicks create a new customer button
  And user clicks save button
  And user verifies adress box required message
  And user sends adress to adress box
  And user verifies city box required message
  And user sends city name to city box
  And user selects country name to country dropdown
  Then user sends state name to state box

 