Feature: US_003 Regristration page should restrict password usage to a secure high level passcode


    Scenario: TC_001 There should be at least 1 lowercase char for stronger password and see the level chart change accordingly
        Given user is on GMI Bank page
        Then Click on user button
        And You should navigate to registration page

    Scenario Outline: TC_002 user enter various examples of passwords and verify to a secure high-level passcode
        And Click on Password textbox
        And Enter a password with 1 '<cases>' of at least 7 characters
        And Color line must be orange or green
        And Click on password confirmation textbox
        Then Enter to second textbox with 1 '<cases>' of at least 7 characters

        Examples:
            | cases   |
            | ajkemhi |
            | Ajkemhi |
            | Ajkemh8 |
            | Ajkemh- |
            | Ajkem.- |
