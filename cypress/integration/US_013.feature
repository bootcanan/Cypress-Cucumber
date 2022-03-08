Feature: US_013 A customer may create a new bank account.

    Scenario:TC_001 A customer may create a new bank account.
        Given The user must enter a description for the new account.This part cannot be left blank.
        Then The user must provide a balance in Dollars to create an account for the first time.
        # Then User can select an account type as CHECKING, SAVING, CREDIT_CARD or INVESTING.
        Then Account status should be defined as ACTIVE, SUSPENDED or CLOSED.
        Then User can select an employee from the drop-down menu / Optional.
