Cypress.on('uncaught:exception', (err, runnable) => {
   
    return false
  });
  
  import { Given, Then, And, } from "cypress-cucumber-preprocessor/steps";

       Given('Kullanici "GMIBankUrl" sayfasina giris yapar',()=>{
             cy.visit('https://gmibank.com/');

       Given('Kullanici personel ikonuna tiklar',()=>{
              cy.get('#account-menu > .dropdown-toggle').click()
       })

       Given('Kullanici signine tiklar',()=>{
              cy.get('#login-item > span').click() 
       })

       Given('Kullanici username kutusuna gecerli "<username>" girer',()=>{
               cy.get('#username').type('Customer625')
       })


       Given('Kullanici password kutusuna gecerli "<password>" girer',()=>{
                cy.get('#password').type('625Aaa.')
       })


       Given('Kullanici Signin butonuna tiklar',()=>{
                 cy.get('.btn-primary').click()
       })

       Given('Kullanici My operation butonuna tiklar',()=>{
                cy.get('#entity-menu > .dropdown-toggle > span').click()
       })


       Given('Kullanici My accounts butonuna tiklar',()=>{
                cy.get('[href="/customer/tp-customer-accounts/124108"]').click()
       })


        Given('Kullanici Customer Accounts sayfasinda kendisi için tanimlanan en az iki hesap turunu ve bakiyesini gormelidir',()=>{
         cy.get(':nth-child(2) > :nth-child(4) > .btn').click()
         cy.get(':nth-child(1) > :nth-child(4) > .btn').click()
         cy.get(':nth-child(1) > :nth-child(4) > .btn').should('contain.text', 'View Transaction')
   
    })
     
      And ('Kullanici Transfer Money butonuna tiklar',()=>{
      cy.get('#entity-menu > .dropdown-toggle').click()
      cy.get('[href="/customer/tp-customer-accounts/transfer/124108"]').click()
               })

      And('Kullanici From sekmesinden transfer yapacagi hesabi secebilmelidir',()=>{
             cy.get('select').eq(0).select(1)

      And('Kullanici To sekmesinden transferin yapilacagi hesabi secebilmelidir',()=>{
               cy.get('select').eq(1).select(1)
      })

      And('Kullanici Balance kutusuna transfer etmek istedigi "<balance>" miktarini girer',()=>{
        cy.get('#balance').type('100')
        cy.get('#balancecent').type('0')
      })

      And('Kullanici Description kutusuna transfer islemi icin "<description>" girer',()=>{

         cy.get('#description').type('VALLA DURUMLAR IYI DEGIL BU KADAR GONDEREBILDIM')
         cy.wait(3000)
      })

      Then ('Kullanici MakeTransfer butonuna tiklar.',()=>{

          cy.get('#make-transfer').click()
      })
      
      And('Kullanici paranin transfer edildigine dair basari mesajini gormelidir.',()=>{
         cy.get('.Toastify__toast-body').should('be.visible')
         cy.screenshot()
      })

    });
      And ('And negativeLogin',()=>{
          cy.visit('https://gmibank.com/')
          cy.get('#entity-menu > .dropdown-toggle > span').click()
          cy.get('[href="/customer/tp-customer-accounts/transfer/124108"]').click()
          cy.get('select').eq(0).select(1)
          cy.get('select').eq(1).select(1)
          cy.get('#balance').type('10000')
          cy.get('#balancecent').type('1')
          cy.get('#description').type('COK GONDERECEM BANKA BAKALIM MUSADE EDECEKMI')
          cy.wait(3000)
          cy.get('#make-transfer').click()
          cy.get('.Toastify__toast-body').should('be.visible')
          cy.screenshot()
        

      })
      

  })