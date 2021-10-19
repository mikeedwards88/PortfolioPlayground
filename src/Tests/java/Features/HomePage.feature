@HomePage
Feature: To test the functionality of the Form on the Home Page of TestProject Demo

  Scenario Outline: To check entering no data in the form will give every user all 5 error messages
    Given the browser is open
    And user is on the login page
    When user enters the <username> and <password>
    And clicks on the login button
    Then user is navigated to the home page
    When user performs no actions on the form page
    And user clicks on the Save button
    Then user will get an error message for all fields

    Examples:
      | username | password |
      | Michael  | 12345    |
      | Tester1  | 12345    |

  Scenario Outline: To check the functionality of the country field for each user
    Given the browser is open
    And user is on the login page
    When user enters the <username> and <password>
    And clicks on the login button
    Then user is navigated to the home page
    When user selects <country> on the form page
    And user clicks on the Save button
    Then  error message for country field should not be present

    Examples:
      | username | password | country |
      | Michael  | 12345    | Afghanistan |
      | Tester1  | 12345    | Albania |

  @FillForm
  Scenario Outline: To check if correctly completing the form, will give the 'Saved' message
    Given the browser is open
    And user is on the login page
    When user enters the <username> and <password>
    And clicks on the login button
    Then user is navigated to the home page
    When user selects <country> on the form page
    And enters <address> into the address field
    And enters a <email> address
    And enters <phone> into the phone field
    And user clicks on the Save button
    Then  Saved will appear in green text below the form

    Examples:
      | username | password | country        | address          | email             | phone      |
      | Michael  | 12345    | United Kingdom | House 1, Bristol | michael@email.com | 0800123456 |
      | Tester1  | 12345    | Australia      | Flat 20, Bristol | tester1@email.com | 0123456789 |