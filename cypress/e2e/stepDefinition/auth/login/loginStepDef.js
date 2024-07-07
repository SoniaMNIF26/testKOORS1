import {Given, When , Then , And} from "cypress-cucumber-preprocessor/steps";
import Login from '../../../../pageObjects/pageActions/auth/login/login'

Given (/^I am on the director login page/,() => {
    Login.visitLogin();


});
// Scenario: director Login with valid credentials

When (/^I enter the qa+uptotestg2@koors.io and I enter the 123456789SF/,() => {

    Login.typeEmail("qa+uptotestg2@koors.io");
    Login.typePassword("123456789SF");
    Login.connect()
});

Then (/^I am on Activity page/ ,() => {
    Login.redirectedToHomePage();

});
// Scenario Outline: director Login with invalid credentials

// Then (/^Under the field I should see the (.*)/,(errmsg) => {
//     Login.errorPage(errmsg);
// });

When (/^I enter the (.*) and I enter the (.*)/,(email,password) => {
    
    Login.typeEmail(email);
    Login.typePassword(password);
    Login.connect()
    

});
Then (/^Under the (.*) I should see the (.*)/,(fields,errmsg) => {
    Login.errorMsg(fields,errmsg);
});
