@GoogleSearch   #This is a tag for the TestRunner
Feature: To test Google search functionality

  Scenario Outline: Validate Google search is working
    Given browser is open
    And user is on google search page
    When user enters <text> in search box
    And user hits enter
    Then user is navigated to search <results>

    Examples:
      | text | results |
      | Selenium | https://www.selenium.dev  |
      | Youtube  | https://www.youtube.com  |
      | TestProject Demo | https://example.testproject.io |