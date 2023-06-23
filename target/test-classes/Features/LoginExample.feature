
  @LoginFeature
  Feature: Feature to test login functionality

    @LoginScenario1
    Scenario: Check login is successful with valid credentials
      Given user is on login page
      When user enters username and password
      And clicks on login button
      Then user is navigated to the Home Page

    @LoginScenario2
    Scenario: Check login is unsuccessful with invalid credentials
      Given user is on login page
      When user enters incorrect username and password
      And clicks on login button
      Then user is given an error message