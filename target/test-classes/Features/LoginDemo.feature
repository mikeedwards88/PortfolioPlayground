@LoginDemo
Feature: Test login functionality

  Scenario Outline: Check login is successful with valid credentials
    Given the browser is open
    And user is on the login page
    When user enters the <username> and <password>
    And clicks on the login button
    Then user is navigated to the home page

   Examples:
      | username | password |
      | Michael  | 12345   |
      | Tester1  | 12345    |

  Scenario Outline: Check login is not successful with invalid credentials
    Given the browser is open
    And user is on the login page
    When user enters the <username> and <password>
    And clicks on the login button
    Then user is given an invalid password message
    Examples:
      |username  |password|
      |Michael   | 123    |
      |Tester1   | 123    |

    ##Use Scenario Outline, and auto get option to "Create Example"
