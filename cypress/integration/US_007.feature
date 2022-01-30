Feature: US_007 Sistem, geçersiz kimlik bilgileriyle güncelleme yapilmasina izin vermemelidir.

    Scenario: TC_001 E-posta adresi, "@" veya "." işaretleri olmadan yalnizca rakam veya karakter içeremez.
        Given user is on GMI Bank page

#Feature: US_007 The system should not allow updates with invalid credentials.

#   Background:
#     When user goes to gmibank page
#     Then clicks the profile icon
#     Then clicks signIn
#     Then writes username and password
#     Then clicks user info

#   @tc_030
#   Scenario: TC_030
#     Then email address "@" and "." must contain
#     And closes the browser

#   @tc_031
#   Scenario: TC_026  There should be 2 language options, "English and Turkish".
#     Then There should be two "<language>" options, English and Turkish.
#     And closes the browser