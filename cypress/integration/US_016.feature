
     Feature: US_16 Para transferi yapilabilmelidir pozitif ve negativ test
     Scenario: TC_01_Kullanici, para transferi yapabilmesi için en az 2 hesabi olmalidir

     Given Kullanici "GMIBankUrl" sayfasina giris yapar
     And Kullanici personel ikonuna tiklar
     And Kullanici signine tiklar
     And Kullanici username kutusuna gecerli "<username>" girer
     And Kullanici password kutusuna gecerli "<password>" girer
     And Kullanici Signin butonuna tiklar
     And Kullanici My operation butonuna tiklar
     And Kullanici My accounts butonuna tiklar
     And Kullanici Customer Accounts sayfasinda kendisi için tanimlanan en az iki hesap turunu ve bakiyesini gormelidir
 
     Scenario:TC_02_Kullanici, 'form' acilir hesap listesinden hesap secer. 
      And Kullanici Transfer Money butonuna tiklar
      And Kullanici From sekmesinden transfer yapacagi hesabi secebilmelidir

      Scenario:TC_03_Kullanici, para gonderme  'to' acilir hesap listesinden hesap secer.
      And Kullanici To sekmesinden transferin yapilacagi hesabi secebilmelidir
      And Kullanici Balance kutusuna transfer etmek istedigi "<balance>" miktarini girer

      Scenario:TC_04_Kullanici, description kismina aciklama girebilir.
      And Kullanici Description kutusuna transfer islemi icin "<description>" girer
      And Kullanici MakeTransfer butonuna tiklar.
      And Kullanici paranin transfer edildigine dair basari mesajini gormelidir.

      Scenario: TC_05_Kullanici yuksek miktar girince islem gerceklesmez
      Then And negativeLogin

      

      


  