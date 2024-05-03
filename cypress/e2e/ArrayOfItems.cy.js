/// <reference types="Cypress" />

Cypress.Commands.add('generateRandomEmailtype1', () => {
  const randomString = Math.random().toString(36).substring(7);
  return `testuser+${randomString}@example.com`;
});


Cypress.Commands.add('generateRandomEmail',()=>{
  const allowedChars='abcdefghijklmnopqrstuvwxyz0123456789';
  let email='';
  // Generate a random length for the email
  const length=Cypress._.random(1,15);

  // Append random characters to the email
  for (let i = 0; i < length; i++) {
    const index = Cypress._.random(0, allowedChars.length - 1);
    email += allowedChars.charAt(index);
    // Append a domain and top-level domain
   email += '@example.com';

  return email;
  }
})

describe('template spec', () => {
    it('passes', () => {
        let num=[23,45,67,89,45,55]
        let sum=0;
       cy.visit('https://naveenautomationlabs.com/opencart/')
    //     num.forEach((data)=>{
    //      sum=sum+data
    //   })
    cy.generateRandomEmailtype1().then((email)=>{
      cy.log(email);
    })
    const randomNumber=Math.floor(Math.random());
    cy.log(randomNumber);
    for (let i = 0; i < num.length; i++) {
        sum=sum+(num[i]);
    }
      cy.log(`Sum of array is:${sum}`)
    })
  })