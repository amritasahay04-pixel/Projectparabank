import { test, expect } from '@playwright/test';

export const customtest = test.extend({
  testdataForregistration: {
    firstname: "Testers1",
    lastname: "Talkies",
    city: "San Jose",
    address: "address1",
    state: "California",
    zipcode: "12345",
    phonenumber: "1234567898",
    ssn: "1234512345",
    username: "Testers1",
    password: "1234567891",
    confirmpassword: "1234567891"
  },
  testdataForfundtransfer: {
    amount: "101",
    fromAccount: "12345",
    toAccount: "54321"
  }
});
 

export { expect };
