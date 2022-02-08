Feature: US_027 System should allow to delete states using api end point

    Scenario Outline: TC_001 User can just delete each state 1 by 1

        Given Deletes user endpoint "<endPoint>" and id "<id>" state

        Examples:
            | endPoint                               | id    |
            | https://www.gmibank.com/api/tp-states/ | 22716 |

