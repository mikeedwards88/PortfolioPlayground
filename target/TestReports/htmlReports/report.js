$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/Tests/java/Features/GoogleSearch.feature");
formatter.feature({
  "name": "To test Google search functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@GoogleSearch"
    },
    {
      "name": "#This"
    },
    {
      "name": "is"
    },
    {
      "name": "a"
    },
    {
      "name": "tag"
    },
    {
      "name": "for"
    },
    {
      "name": "the"
    },
    {
      "name": "TestRunner"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Validate Google search is working",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "browser is open",
  "keyword": "Given "
});
formatter.step({
  "name": "user is on google search page",
  "keyword": "And "
});
formatter.step({
  "name": "user enters \u003ctext\u003e in search box",
  "keyword": "When "
});
formatter.step({
  "name": "user hits enter",
  "keyword": "And "
});
formatter.step({
  "name": "user is navigated to search \u003cresults\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "text",
        "results"
      ]
    },
    {
      "cells": [
        "Selenium",
        "https://www.selenium.dev"
      ]
    },
    {
      "cells": [
        "Youtube",
        "https://www.youtube.com"
      ]
    },
    {
      "cells": [
        "TestProject Demo",
        "https://example.testproject.io"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Validate Google search is working",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@GoogleSearch"
    },
    {
      "name": "#This"
    },
    {
      "name": "is"
    },
    {
      "name": "a"
    },
    {
      "name": "tag"
    },
    {
      "name": "for"
    },
    {
      "name": "the"
    },
    {
      "name": "TestRunner"
    }
  ]
});
formatter.step({
  "name": "browser is open",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.GoogleSearchSteps_PF.browser_is_open()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on google search page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.GoogleSearchSteps_PF.user_is_on_google_search_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters Selenium in search box",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.GoogleSearchSteps_PF.user_enters_text_in_search_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user hits enter",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.GoogleSearchSteps_PF.user_hits_enter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is navigated to search https://www.selenium.dev",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.GoogleSearchSteps_PF.user_is_navigated_to_search_results(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate Google search is working",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@GoogleSearch"
    },
    {
      "name": "#This"
    },
    {
      "name": "is"
    },
    {
      "name": "a"
    },
    {
      "name": "tag"
    },
    {
      "name": "for"
    },
    {
      "name": "the"
    },
    {
      "name": "TestRunner"
    }
  ]
});
formatter.step({
  "name": "browser is open",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.GoogleSearchSteps_PF.browser_is_open()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on google search page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.GoogleSearchSteps_PF.user_is_on_google_search_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters Youtube in search box",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.GoogleSearchSteps_PF.user_enters_text_in_search_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user hits enter",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.GoogleSearchSteps_PF.user_hits_enter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is navigated to search https://www.youtube.com",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.GoogleSearchSteps_PF.user_is_navigated_to_search_results(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate Google search is working",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@GoogleSearch"
    },
    {
      "name": "#This"
    },
    {
      "name": "is"
    },
    {
      "name": "a"
    },
    {
      "name": "tag"
    },
    {
      "name": "for"
    },
    {
      "name": "the"
    },
    {
      "name": "TestRunner"
    }
  ]
});
formatter.step({
  "name": "browser is open",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.GoogleSearchSteps_PF.browser_is_open()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on google search page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.GoogleSearchSteps_PF.user_is_on_google_search_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters TestProject Demo in search box",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.GoogleSearchSteps_PF.user_enters_text_in_search_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user hits enter",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.GoogleSearchSteps_PF.user_hits_enter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is navigated to search https://example.testproject.io",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.GoogleSearchSteps_PF.user_is_navigated_to_search_results(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/Tests/java/Features/LoginDemo.feature");
formatter.feature({
  "name": "Test login functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@LoginDemo"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Check login is successful with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the browser is open",
  "keyword": "Given "
});
formatter.step({
  "name": "user is on the login page",
  "keyword": "And "
});
formatter.step({
  "name": "user enters the \u003cusername\u003e and \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "clicks on the login button",
  "keyword": "And "
});
formatter.step({
  "name": "user is navigated to the home page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "Michael",
        "12345"
      ]
    },
    {
      "cells": [
        "Tester1",
        "12345"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Check login is successful with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LoginDemo"
    }
  ]
});
formatter.step({
  "name": "the browser is open",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.LoginDemoSteps_PF.the_browser_is_open()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on the login page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginDemoSteps_PF.user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the Michael and 12345",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.LoginDemoSteps_PF.user_enters_the_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on the login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginDemoSteps_PF.clicksOnTheLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is navigated to the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.LoginDemoSteps_PF.user_is_navigated_to_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Check login is successful with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LoginDemo"
    }
  ]
});
formatter.step({
  "name": "the browser is open",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.LoginDemoSteps_PF.the_browser_is_open()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on the login page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginDemoSteps_PF.user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the Tester1 and 12345",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.LoginDemoSteps_PF.user_enters_the_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on the login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginDemoSteps_PF.clicksOnTheLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is navigated to the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.LoginDemoSteps_PF.user_is_navigated_to_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Check login is not successful with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the browser is open",
  "keyword": "Given "
});
formatter.step({
  "name": "user is on the login page",
  "keyword": "And "
});
formatter.step({
  "name": "user enters the \u003cusername\u003e and \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "clicks on the login button",
  "keyword": "And "
});
formatter.step({
  "name": "user is given an invalid password message",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "Michael",
        "123"
      ]
    },
    {
      "cells": [
        "Tester1",
        "123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Check login is not successful with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LoginDemo"
    }
  ]
});
formatter.step({
  "name": "the browser is open",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.LoginDemoSteps_PF.the_browser_is_open()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on the login page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginDemoSteps_PF.user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the Michael and 123",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.LoginDemoSteps_PF.user_enters_the_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on the login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginDemoSteps_PF.clicksOnTheLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is given an invalid password message",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.LoginDemoSteps_PF.userIsGivenAnInvalidPasswordMessage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Check login is not successful with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LoginDemo"
    }
  ]
});
formatter.step({
  "name": "the browser is open",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.LoginDemoSteps_PF.the_browser_is_open()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on the login page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginDemoSteps_PF.user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the Tester1 and 123",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.LoginDemoSteps_PF.user_enters_the_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on the login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginDemoSteps_PF.clicksOnTheLoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is given an invalid password message",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.LoginDemoSteps_PF.userIsGivenAnInvalidPasswordMessage()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:src/Tests/java/Features/LoginExample.feature");
formatter.feature({
  "name": "Feature to test login functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@LoginFeature"
    },
    {
      "name": "@Smoke"
    }
  ]
});
formatter.scenario({
  "name": "Check login is successful with valid credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@LoginFeature"
    },
    {
      "name": "@Smoke"
    },
    {
      "name": "@LoginScenario1"
    }
  ]
});
formatter.step({
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.user_is_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters username and password",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.user_enters_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is navigated to the Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.user_is_navigated_to_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Check login is unsuccessful with invalid credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@LoginFeature"
    },
    {
      "name": "@Smoke"
    },
    {
      "name": "@LoginScenario2"
    }
  ]
});
formatter.step({
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.user_is_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters incorrect username and password",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.userEntersIncorrectUsernameAndPassword()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is given an error message",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.userIsGivenAnErrorMessage()"
});
formatter.result({
  "status": "passed"
});
});