Given('In customers user sets all response using end point {string} and validate',(endPoint)=>{
  
      cy.api({
            url: '/api/tp-customers',
           method:'GET',
            auth: {
                username: 'team69Admin',
                password: 'Team69+'
              }
          })
          .then((res)=>{
          expect(res.status).to.eq(200);
          })

     //    cy.request({
     //    method:'GET',
     //    url: '/api/tp-customers',
     //    auth: {
     //       username: 'team69Admin',
     //       password: 'Team69+'
     //     }
     //   }) .then((res)=>{
     //     expect(res.status).to.eq(200);
   // })

    //cy.request({
     // method: 'POST',
     // url: '/api/tp-customers',
   //   bearer:"eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJvbmRlciIsImF1dGgiOiJST0xFX0VNUExPWUVFIiwiZXhwIjoxNjQzOTY3NDg0fQ.zAq0HqM8010w_8loroE7buf5sDZm_5asMhYb4S_DgyBH9PuJmcp8N2whwyCxtpEBQz9sIh8JLQKWDJJ-OSwjMA",
     // auth: {
       // username: 'team69Admin',
        //password: 'Team69+'
     // },
      //body: {
        
        //  "firstName": "onder",
         // "lastName": "kus",
          //"middleInitial": "The",
          //"email": "onder36@gmail.com",
         // "mobilePhoneNumber": "532-156-3624",
        //  "phoneNumber": "532-156-3624",
        //  "zipCode": "06300",
        //  "address": "New York",
        //  "city": "New York",
        //  "ssn": "159-63-9248",
        //  "createDate": "2021-03-02T21:00:00Z",
        //  "zelleEnrolled": false,
        //  "country": null,
        //  "state": "",
        //  "user": {
       //      "id": 85376,
       //      "login": "dt36",
       //      "firstName": "Demo",
       //      "lastName": "Team30",
       //      "email": "demot36@gmail.com",
       //      "activated": true,
       //      "langKey": "en",
       //      "imageUrl": null,
       //      "resetDate": null
       //  },
       //  "accounts": null
      
//      }
// }).then((response) => { 
//         expect(response.body).has.property("firstName","onder"); 
// })


           
      })
      Given('post reqresin',()=>{
        cy.api({
          url: 'https://reqres.in/api/login',
         method:'POST',
         body: {
          email: "eve.holt@reqres.in",
          password: "cityslicka"
         }
      })
      .its('status').should('eq', 200)
     // .then((res)=>{
       //            expect(res.body.password).to.eql("cityslicka");
         //  })
    })
//    body:{
//      name: "Surrey",
//      tpcountry: null
//   }
//}).then((res)=>{
//expect(res.body.name).to.eql("Surrey");
//expect(res.body.tpcountry).to.eql(null);