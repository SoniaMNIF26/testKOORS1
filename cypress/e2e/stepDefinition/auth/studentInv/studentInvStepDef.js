import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import Login from "../../../../pageObjects/pageActions/auth/login/login";
import Student from "../../../../pageObjects/pageActions/auth/studentInv/studentInv";

 Given(/^I am on the director login page/, () => {
 Login.visitLogin();
});
// When(/^I enter the (.*) and I enter the (.*)/, (email, password) => {
// Login.typeEmail(email);
// Login.typePassword(password);
// Login.connect();
// });
// Then(/^I am on Activity page/, () => {
// Login.redirectedToHomePage();
// });

When(/^I click on "Etudiant" and I click on "Ajouter un etudiant"/, () => {
  Student.clickAddStudent();
});
And(/^I enter the (.*)  (.*) (.*)/, (nomEtu1, PrenomEtu1, emailEtu1) => {
  Student.studentDataEmpty(nomEtu1, PrenomEtu1, emailEtu1);
  // And(/^I enter (.*), (.*)$/, (lastName, firstName) => {
  //   Student.studentData(lastName, firstName);
});
Then (/^the button inviter is disabled/, () => {
  Student.verifInviterDisabled();
});


And(/^I enter (.*), (.*)/, (lastName,firstName) => {
  Student.studentData(lastName,firstName);
});
// And(/^I enter (.*), (.*), (.*)$/, (nomEtu, PrenomEtu, emailEtu) => {
//   Student.studentDataInvalid(nomEtu, PrenomEtu, emailEtu);
// });
And(/^I enter  (.*)  (.*) (.*)/, (nomEtu, PrenomEtu, emailEtu) => {
  Student.studentDataInvalid(nomEtu, PrenomEtu, emailEtu);
});




And(/^I click on "inviter"/, () => {
  Student.clickInviter();
});

Then(/^A popup appears/, () => {
  Student.popUpVerif();
});
Then(/^An error message appears (.*)/, (errorMsgStd) => {
  Student.errMsgVerif(errorMsgStd);
});

And(/^I click on "Annuler"/, () => {
  Student.clickAnnuler();
});


// Then(/^the popup disappears and I am redirected to the initial/, () => {
//   Student.verifAnnuler();
// });
// When (/^I click on etudiant/, () => {
// Student.clickEtudiant();
// }); 
// And (/^I look for a student/, () => {
// Student.lookForStudent();
// });
// And (/^I cancel the invitation/, () => {
// Student.cancelInvitation();
// });
// Then(/^the student is no longer on the list of student/, () => {
//     ();
//   });