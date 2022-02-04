Feature: US_018 System should allow Admin to manage a customer

Scenario: TC_001 All customers should show up on manage customers module populating the account information of the customer 
"First Name Last Name Middle Initial Email Mobile Phone Number Phone Number Address Create Date "
  Given user is on the manage customers page
  Then verify user information is on the page
  Then there should be a View option 
   Then There should be an Edit button where all customer information can be populated
   Then Edit portal can allow user to create or update the user info
# User can delete a customer, but seeing a message if the user is sure about deletion