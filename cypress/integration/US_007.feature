Feature: US_007 Sistem, geçersiz kimlik bilgileriyle güncelleme yapilmasina izin vermemelidir.


    Scenario: TC_001 Email id cannot contain just digits or chars without "@" sign or "." extension
        Given user is on GMI Bank page
        Then clicks the profile icon
        Then clicks signIn
        Then writes username and password
        Then clicks user info
        Then email address "@" and "." must contain


    Scenario: TC_002 There should not be an option of any other language other than English or Turkish
        Then There should be two "<language>" options, English and Turkish.
