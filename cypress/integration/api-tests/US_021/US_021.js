Given('In countries user sets all response using end point {string} and validate',(endPoint)=>{
  
    cy.api({
          url: '/api/tp-countries',
         method:'GET',
          auth: {
              username: 'team69Admin',
              password: 'Team69+'
            }
        })
        .then((res)=>{
        expect(res.status).to.eq(200);
        })



         
    })
    Given('Read all countries you created and validate them 1 by 1',()=>{
        cy.api({
            url: '/api/tp-countries',
           method:'POST',
            auth: {
                username: 'team69Admin',
                password: 'Team69+'
              },
              body:{
               name: "Milton",
               states: null
 
              }
          }).then((res)=>{
 
 expect(res.body.name).to.eql("Milton");
 expect(res.body.states).to.eql(null);
          })
})