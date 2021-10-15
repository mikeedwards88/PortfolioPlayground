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
    #@After Teardown

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
    #@After Teardown

    Examples:
      | username | password | country |
      | Michael  | 12345    | Afghanistan |
      | Tester1  | 12345    | Albania |