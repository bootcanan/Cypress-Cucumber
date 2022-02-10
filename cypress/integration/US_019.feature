Feature: US_019 System should allow Admin to create a new account

Scenario:TC_001 Admin should create a description for the new account and it cannot be blank
  Given admin is on the manage accounts page
  Then admin clicks create a new account button
  Then admin gets warning when the description box is empty
   Then admin types "description" to the description box
   Then admin clicks save button
Scenario:TC_002 Admin should create a balance for the new account and it cannot be blank
  Given admin is on the manage accounts page
  Then admin clicks create a new account button
  Then admin gets warning when the description box is empty
   Then admin types "description" to the description box
   Then admin gets warning when the balance box is empty
   Then admin types "100" to the balance box
   Then admin clicks save button
   Scenario:TC_003 Admin should choose Checking, Saving, Credit-Card or Investing 
  Given admin is on the manage accounts page
  Then admin clicks create a new account button
  Then admin gets warning when the description box is empty
   Then admin types "description" to the description box
   Then admin types "100" to the balance box
   Then admin choose "Credit-Card" from dropdown box
   Then admin clicks save button
   Scenario:TC_004 Admin should choose Active, Suspended, or Closed
  Given admin is on the manage accounts page
  Then admin clicks create a new account button
  Then admin gets warning when the description box is empty
   Then admin types "description" to the description box
   Then admin types "100" to the balance box
   Then admin choose "Active" from dropdown box
   Then admin clicks save button
      Scenario:TC_005 Admin should choose an employee from menu
  Given admin is on the manage accounts page
  Then admin clicks create a new account button
  Then admin gets warning when the description box is empty
   Then admin types "description" to the description box
   Then admin types "100" to the balance box
   Then admin choose an employee from Employee dropdown box
   Then admin clicks save button