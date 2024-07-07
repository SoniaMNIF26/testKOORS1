Feature: director Logout
Background:
Given I am on the director login page
When I enter the qa+uptotestg2@koors.io and I enter the 123456789SF

  Scenario: director Loging out
    # Given I am on the director login page
    # When I enter the qa+uptotestg2@koors.io and I enter the 123456789SF
    When I click on the toolbar and on deconnect 
    Then I am redirected to authentication page