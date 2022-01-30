Feature:US_002 user in registeration page

  
  Scenario: TC001 Any field on the registration page should not be left blank
    Given user goes registration
    Given user checks SSN inbox
    When user checks firstname inbox
    And user checks lastname inbox
    Then user checks address inbox
    And user checks mobilephone inbox
    Then user checks username inbox
    And user checks email inbox
    Then user checks password inbox
    And user checks password_confirmation inbox

  Scenario Outline: TC002 SSN should be with "-"
    # Given user goes registration
    Given user checks "<SSN>" inbox and validate

    Examples:
      | SSN         |
      | 222*22*2222 |
      | 222_22_2222 |
      | 222\22\2222 |
      | 222/22/2222 |
      | 222#22#2222 |
      | 222&22&2222 |
      | 222.22.2222 |
      | 222:22:2222 |
      | 222;22;2222 |

  Scenario Outline: TC003 phone number should be with "-"
    # Given user goes registration
    Given users check "<phone number>" inbox and validate

    Examples:
      | phone number |
      | &            |
      | _            |
      | \|undefined  |
      | /            |
      | #            |
      | &            |
      | .            |
      | :            |
      | ;            |

Scenario Outline: TC004 email should be with "@" and "."
    # Given user goes registration
    Given users checks "<email>" inbox and validate
Examples:
   
|email        |
|xyz@gmailcom|
|xyzgmail.com|
|xyzgmailcom|
|@gmail.com|
|xyzgmailcom|
|xyz@gma@il.com|