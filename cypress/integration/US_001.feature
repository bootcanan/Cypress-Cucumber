Feature: US_001 System should allow any user to register with valid credentials



    Scenario: TC_001 There should be a valid SSN respecting the "-" where necessary, it should be 9 digits long
        #Geçerli bir SSN, "-"  işaretine uygun bir şekilde, 9 rakamdan oluşmalıdır.
        Given user is on GMI Bank page
        Then user clicks registration button
        Then tests that information can be entered in the SSN box as desired.


    Scenario: TC_002 There should be a valid name that contains chars and cannot be blank
        #Geçerli bir isim harflerden oluşmalı ve boş bırakılamamalıdır.
        Given user is on GMI Bank page
        Then user clicks registration button
        Then letters must be entered in the firstname box
        Then number cannot be entered in the firstname box
        Then the firstname box should be left blank


    Scenario: TC_003 There should be a valid lastname that contains chars and it is a required field
        #Geçerli bir soyisim harflerden oluşmalı ve boş bırakılamamalıdır.
        Given user is on GMI Bank page
        Then user clicks registration button
        Then letters must be entered in the lastname box
        Then number cannot be entered in the lastname box
        Then the lastname box should be left blank


    Scenario: TC_004 You can provide chars and digits to describe a valid address along with zip code
        #Posta koduyla birlikte geçerli bir adresi tanımlamak için harfler ve rakamlar kullanılabilmelidir.
        Given user is on GMI Bank page
        Then user clicks registration button
        Then letters & numbers must be entered in the adress box
        Then the adress box should be left blank


    Scenario: TC_005 User should provide 10 digit-long mobilephone number as a required field respecting the "-"
        #Kullanıcı "-" işaretine uygun olarak, 10 haneli zorunlu telefon numarası alanını doldurmalıdır.
        Given user is on GMI Bank page
        Then user clicks registration button
        Then missing numbers cannot be entered in the number box.
        Then numbers must be entered in the phone number box
        Then the phone number box should be left blank


    Scenario: TC_006 User cannot use just digits, but can use any chars and digits along with them and of any length
        #Kullanıcı alanları doldururken sadece rakamları kullanamaz,
        #ancak onlarla birlikte ve herhangi bir uzunlukta herhangi bir karakter ve rakam kullanabilir.
        Given user is on GMI Bank page
        Then user clicks registration button
        Then only numbers cannot be written in the username box
        Then the username box should be left blank
        Then must accept any character along with numbers in the username box


    Scenario: TC_007 You should provide a valid email format that contains "@"sign and "." extensions
        #Kullanıcı "@" ve "." karakterlerini içeren geçerli bir email formu sağlamalıdır.
        Given user is on GMI Bank page
        Then user clicks registration button
        Then enters an email according to the desired criteria

