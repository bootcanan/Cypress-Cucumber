Cypress.on('uncaught:exception', (err, runnable) => {
   
    return false
  });
  
  import { Given, Then } from "cypress-cucumber-preprocessor/steps";

  before(function(){
    cy.fixture('register').then(function(data){
        this.data=data
    })
  })

  Given('Girilen tarih, müşteri oluşturma anından daha erken veya geçmişte olamaz.',function(){

      cy.visit(this.data.loginPage);
      cy.get('#username').type('HelloWorld');
      cy.get('#password').type('GMIBANK.2123');
      cy.get('.btn-primary').click();
      cy.contains('My Operations').click();
      cy.get('[href="/tp-customer"] > span').click();
      cy.get('#jh-create-entity').click();
      cy.get('#search-ssn').type('709-98-675');
      cy.get('#tp-customer-firstName').type('deneme');
      cy.get('#tp-customer-lastName').type('deneme');
      cy.get('#tp-customer-middleInitial').type('type');
      cy.get('#tp-customer-email').type('deneme@gmail.com');
      cy.get('#tp-customer-mobilePhoneNumber').type('555-555-5555');
      cy.get('#tp-customer-phoneNumber').type('122-121-1121');
      cy.get('#tp-customer-zipCode').type(57834)
      cy.get('#tp-customer-address').type('london');
      cy.get('#tp-customer-city').type('london');
      cy.get('#tp-customer-ssn').type('452-52-5252');
    })
    
    Then('Tarih ay, gün, yıl, saat ve dakika olarak oluşturulmalıdır.',function(){
        cy.get('#tp-customer-createDate').type('2017-06-01T08:30');
        cy.get('#tp-customer-createDate').should('not.have.value','2022-01-18T00:00');
        cy.get('#tp-customer-createDate').first().screenshot().click()
        cy.screenshot()
        cy.wait(3000)
        
        })
    
        Then('Kullanıcı kayıtlı kullanıcılardan bir kullanıcı seçebilir ve bu kısmı boş bırakamaz.',function(){

            cy.get('#tp-customer-user').select('jean.king Mason Change').should('have.value', '111238');

        })  
        
        Then('Bu kısımda kullanıcı, hesapları yönetmek için oluşturulan bir hesabı seçebilir.',function(){
            cy.get('[value="121377"]').click();
        })  
        
        Then('Kullanıcı isteğe bağlı olarak Zelle Enrolled seçeneğini seçebilir ve kaydedebilir.',function(){
            cy.get('#tp-customer-zelleEnrolled').click()
            cy.get('#save-entity').click();
        })
        
        Then('Kullanıcı isteğe bağlı olarak Zelle Enrolled seçeneğini seçebilir ve kaydedebilir.',function(){
        
        })  
        
    