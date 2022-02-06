Cypress.on('uncaught:exception', (err, runnable) => {
   
    return false
  });
  
  import { Given, And, When, Then } from "cypress-cucumber-preprocessor/steps";

 
  before(function(){
    cy.fixture('register').then(function(data){
        this.data=data
    })
  })

  Given('user goes login page',function(){
      cy.visit(this.data.loginPage);
      })
      Given('user enter username password',function(){
       cy.get('#username').type(this.data.username)
       cy.get('#password').type(this.data.password)
        })
    Given('user sign in',function(){
            cy.get('.btn-primary').click()
          })

    Given('user click accountDropDown and password',function(){
           cy.get('#account-menu > .dropdown-toggle').click()
           cy.get('[href="/account/password"] > span').click()
          })

          Given('user put current password and new password',function(){

            cy.get('#currentPassword').scrollIntoView().click().type('aaaAA1!')
            cy.get('#newPassword').type(this.data.password)
            cy.get('.btn').click()
            cy.get(':nth-child(2) > .invalid-feedback').should('contain.text','different')
           }) 
          
           Given('user put current password',function(){
            cy.get('#currentPassword').scrollIntoView().type('aaaAA1!')
            })
            Given('user put new password at least upper',function(){
                cy.get('#newPassword').clear().type('AAAAAAA')
            }) 
          
            Given('validate red',function(){
                cy.get('[style="background-color: rgb(255, 0, 0);"]').should('be.visible')
            })

            Given('user put new password at least upper lower',function(){
                cy.get('#newPassword').clear().type('AAAaaaa')
            }) 

             Given('validate orange',function(){
                cy.get('[style="background-color: rgb(255, 153, 0);"]').should('be.visible')
            })
            
            
            Given('user put new password at least upper lower digit',function(){
                cy.get('#newPassword').clear().type('AAAaa11')
            })
            Given('validate yellow',function(){
                cy.get('[style="background-color: rgb(255, 255, 0);"]').should('be.visible')
            })
           
            Given('user put new password at least upper lower digit special char',function(){
                cy.get('#newPassword').clear().type('Aa1!')
            })
            Given('validate lightgreen',function(){
                cy.wait(1000)
                cy.get('[style="background-color: rgb(153, 255, 0);"]').should('be.visible')
            })
            
            Given('user put new password at least upper lower digit special char and seven char',function(){
                
                cy.get('#newPassword').clear().type('AAAaa1!')
            })
            Given('validate green',function(){
                cy.get('[style="background-color: rgb(0, 255, 0);"]').should('be.visible')
            })
            Given('user click save',function(){
                
                 cy.get('#confirmPassword').type('AAAaa1!')
                 cy.get('.btn').click()
                 cy.get(':nth-child(2) > .invalid-feedback').should('contain.text','different')
                //  cy.visit(this.data.passwordPage)
                //  cy.get('#newPassword').clear().type(this.data.password)
                //  cy.get('#confirmPassword').type(this.data.password)
                //  cy.get('.btn').click()
                // git --abort

            })
           
            
          

     