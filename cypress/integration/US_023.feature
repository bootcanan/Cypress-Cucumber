Feature: US_023 Sistem, tum Basvuru Sahiplerinin api end point kullanilarak okunmasina izin vermelidir.

    Scenario:Read all states you created and validate them 1 by 1 

        Given Get registrations data
        Then Post registrations data