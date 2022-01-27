Feature: US_004 positive, negative, cancel Login
# Background:
# Given user is on GMI Bank page
# Then user clicks regitretion button
 Scenario: TC_001 positive, negative, cancel Login
Given positiveLogin
And negativeLogin
Then Cancel