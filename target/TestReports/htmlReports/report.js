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
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created: This version of ChromeDriver only supports Chrome version 94\nCurrent browser version is 110.0.5481.77 with binary path C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe\nBuild info: version: \u00273.9.1\u0027, revision: \u002763f7b50\u0027, time: \u00272018-02-07T22:25:02.294Z\u0027\nSystem info: host: \u0027DESKTOP-C7BK7KA\u0027, ip: \u0027192.168.1.171\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_281\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: Backtrace:\n\tOrdinal0 [0x00F0B9D3+2472403]\n\tOrdinal0 [0x00EA6961+2058593]\n\tOrdinal0 [0x00DB22B8+1057464]\n\tOrdinal0 [0x00DD03FA+1180666]\n\tOrdinal0 [0x00DCC2E5+1164005]\n\tOrdinal0 [0x00DC9B7F+1153919]\n\tOrdinal0 [0x00DF997F+1350015]\n\tOrdinal0 [0x00DF95EA+1349098]\n\tOrdinal0 [0x00DF545B+1332315]\n\tOrdinal0 [0x00DD1FB4+1187764]\n\tOrdinal0 [0x00DD2E09+1191433]\n\tGetHandleVerifier [0x01093396+1551078]\n\tGetHandleVerifier [0x0113D53A+2247818]\n\tGetHandleVerifier [0x00F97FBB+521995]\n\tGetHandleVerifier [0x00F97079+518089]\n\tOrdinal0 [0x00EABD4D+2080077]\n\tOrdinal0 [0x00EAFC18+2096152]\n\tOrdinal0 [0x00EAFD52+2096466]\n\tOrdinal0 [0x00EB94B1+2135217]\n\tBaseThreadInitThunk [0x772100F9+25]\n\tRtlGetAppContainerNamedObjectPath [0x77AF7BBE+286]\n\tRtlGetAppContainerNamedObjectPath [0x77AF7B8E+238]\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$new$0(W3CHandshakeResponse.java:57)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$getResponseFunction$2(W3CHandshakeResponse.java:104)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:123)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:499)\r\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:486)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:472)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\r\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:126)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:73)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:138)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:219)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:142)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat TheInternet.TestBase.initialiseDriver(TestBase.java:13)\r\n\tat StepDefinitions.GoogleSearchSteps_PF.browser_is_open(GoogleSearchSteps_PF.java:18)\r\n\tat ✽.browser is open(file:///C:/Users/mikee/IdeaProjects/PortfolioPlayground/src/Tests/java/Features/GoogleSearch.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user is on google search page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.GoogleSearchSteps_PF.user_is_on_google_search_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters Selenium in search box",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.GoogleSearchSteps_PF.user_enters_text_in_search_box(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user hits enter",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.GoogleSearchSteps_PF.user_hits_enter()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is navigated to search https://www.selenium.dev",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.GoogleSearchSteps_PF.user_is_navigated_to_search_results(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NullPointerException\r\n\tat StepDefinitions.BeforeAndAfterSteps.teardown(BeforeAndAfterSteps.java:12)\r\n",
  "status": "failed"
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
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created: This version of ChromeDriver only supports Chrome version 94\nCurrent browser version is 110.0.5481.77 with binary path C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe\nBuild info: version: \u00273.9.1\u0027, revision: \u002763f7b50\u0027, time: \u00272018-02-07T22:25:02.294Z\u0027\nSystem info: host: \u0027DESKTOP-C7BK7KA\u0027, ip: \u0027192.168.1.171\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_281\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: Backtrace:\n\tOrdinal0 [0x00F0B9D3+2472403]\n\tOrdinal0 [0x00EA6961+2058593]\n\tOrdinal0 [0x00DB22B8+1057464]\n\tOrdinal0 [0x00DD03FA+1180666]\n\tOrdinal0 [0x00DCC2E5+1164005]\n\tOrdinal0 [0x00DC9B7F+1153919]\n\tOrdinal0 [0x00DF997F+1350015]\n\tOrdinal0 [0x00DF95EA+1349098]\n\tOrdinal0 [0x00DF545B+1332315]\n\tOrdinal0 [0x00DD1FB4+1187764]\n\tOrdinal0 [0x00DD2E09+1191433]\n\tGetHandleVerifier [0x01093396+1551078]\n\tGetHandleVerifier [0x0113D53A+2247818]\n\tGetHandleVerifier [0x00F97FBB+521995]\n\tGetHandleVerifier [0x00F97079+518089]\n\tOrdinal0 [0x00EABD4D+2080077]\n\tOrdinal0 [0x00EAFC18+2096152]\n\tOrdinal0 [0x00EAFD52+2096466]\n\tOrdinal0 [0x00EB94B1+2135217]\n\tBaseThreadInitThunk [0x772100F9+25]\n\tRtlGetAppContainerNamedObjectPath [0x77AF7BBE+286]\n\tRtlGetAppContainerNamedObjectPath [0x77AF7B8E+238]\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$new$0(W3CHandshakeResponse.java:57)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$getResponseFunction$2(W3CHandshakeResponse.java:104)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:123)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:499)\r\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:486)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:472)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\r\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:126)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:73)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:138)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:219)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:142)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat TheInternet.TestBase.initialiseDriver(TestBase.java:13)\r\n\tat StepDefinitions.GoogleSearchSteps_PF.browser_is_open(GoogleSearchSteps_PF.java:18)\r\n\tat ✽.browser is open(file:///C:/Users/mikee/IdeaProjects/PortfolioPlayground/src/Tests/java/Features/GoogleSearch.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user is on google search page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.GoogleSearchSteps_PF.user_is_on_google_search_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters Youtube in search box",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.GoogleSearchSteps_PF.user_enters_text_in_search_box(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user hits enter",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.GoogleSearchSteps_PF.user_hits_enter()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is navigated to search https://www.youtube.com",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.GoogleSearchSteps_PF.user_is_navigated_to_search_results(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NullPointerException\r\n\tat StepDefinitions.BeforeAndAfterSteps.teardown(BeforeAndAfterSteps.java:12)\r\n",
  "status": "failed"
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
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created: This version of ChromeDriver only supports Chrome version 94\nCurrent browser version is 110.0.5481.77 with binary path C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe\nBuild info: version: \u00273.9.1\u0027, revision: \u002763f7b50\u0027, time: \u00272018-02-07T22:25:02.294Z\u0027\nSystem info: host: \u0027DESKTOP-C7BK7KA\u0027, ip: \u0027192.168.1.171\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_281\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: Backtrace:\n\tOrdinal0 [0x00F0B9D3+2472403]\n\tOrdinal0 [0x00EA6961+2058593]\n\tOrdinal0 [0x00DB22B8+1057464]\n\tOrdinal0 [0x00DD03FA+1180666]\n\tOrdinal0 [0x00DCC2E5+1164005]\n\tOrdinal0 [0x00DC9B7F+1153919]\n\tOrdinal0 [0x00DF997F+1350015]\n\tOrdinal0 [0x00DF95EA+1349098]\n\tOrdinal0 [0x00DF545B+1332315]\n\tOrdinal0 [0x00DD1FB4+1187764]\n\tOrdinal0 [0x00DD2E09+1191433]\n\tGetHandleVerifier [0x01093396+1551078]\n\tGetHandleVerifier [0x0113D53A+2247818]\n\tGetHandleVerifier [0x00F97FBB+521995]\n\tGetHandleVerifier [0x00F97079+518089]\n\tOrdinal0 [0x00EABD4D+2080077]\n\tOrdinal0 [0x00EAFC18+2096152]\n\tOrdinal0 [0x00EAFD52+2096466]\n\tOrdinal0 [0x00EB94B1+2135217]\n\tBaseThreadInitThunk [0x772100F9+25]\n\tRtlGetAppContainerNamedObjectPath [0x77AF7BBE+286]\n\tRtlGetAppContainerNamedObjectPath [0x77AF7B8E+238]\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$new$0(W3CHandshakeResponse.java:57)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$getResponseFunction$2(W3CHandshakeResponse.java:104)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:123)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:499)\r\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:486)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:472)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\r\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:126)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:73)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:138)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:219)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:142)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat TheInternet.TestBase.initialiseDriver(TestBase.java:13)\r\n\tat StepDefinitions.GoogleSearchSteps_PF.browser_is_open(GoogleSearchSteps_PF.java:18)\r\n\tat ✽.browser is open(file:///C:/Users/mikee/IdeaProjects/PortfolioPlayground/src/Tests/java/Features/GoogleSearch.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user is on google search page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.GoogleSearchSteps_PF.user_is_on_google_search_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters TestProject Demo in search box",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.GoogleSearchSteps_PF.user_enters_text_in_search_box(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user hits enter",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.GoogleSearchSteps_PF.user_hits_enter()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is navigated to search https://example.testproject.io",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.GoogleSearchSteps_PF.user_is_navigated_to_search_results(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NullPointerException\r\n\tat StepDefinitions.BeforeAndAfterSteps.teardown(BeforeAndAfterSteps.java:12)\r\n",
  "status": "failed"
});
formatter.uri("file:src/Tests/java/Features/HomePage.feature");
formatter.feature({
  "name": "To test the functionality of the Form on the Home Page of TestProject Demo",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@HomePage"
    }
  ]
});
formatter.scenarioOutline({
  "name": "To check entering no data in the form will give every user all 5 error messages",
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
formatter.step({
  "name": "user performs no actions on the form page",
  "keyword": "When "
});
formatter.step({
  "name": "user clicks on the Save button",
  "keyword": "And "
});
formatter.step({
  "name": "user will get an error message for all fields",
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
  "name": "To check entering no data in the form will give every user all 5 error messages",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@HomePage"
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
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created: This version of ChromeDriver only supports Chrome version 94\nCurrent browser version is 110.0.5481.77 with binary path C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe\nBuild info: version: \u00273.9.1\u0027, revision: \u002763f7b50\u0027, time: \u00272018-02-07T22:25:02.294Z\u0027\nSystem info: host: \u0027DESKTOP-C7BK7KA\u0027, ip: \u0027192.168.1.171\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_281\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: Backtrace:\n\tOrdinal0 [0x00F0B9D3+2472403]\n\tOrdinal0 [0x00EA6961+2058593]\n\tOrdinal0 [0x00DB22B8+1057464]\n\tOrdinal0 [0x00DD03FA+1180666]\n\tOrdinal0 [0x00DCC2E5+1164005]\n\tOrdinal0 [0x00DC9B7F+1153919]\n\tOrdinal0 [0x00DF997F+1350015]\n\tOrdinal0 [0x00DF95EA+1349098]\n\tOrdinal0 [0x00DF545B+1332315]\n\tOrdinal0 [0x00DD1FB4+1187764]\n\tOrdinal0 [0x00DD2E09+1191433]\n\tGetHandleVerifier [0x01093396+1551078]\n\tGetHandleVerifier [0x0113D53A+2247818]\n\tGetHandleVerifier [0x00F97FBB+521995]\n\tGetHandleVerifier [0x00F97079+518089]\n\tOrdinal0 [0x00EABD4D+2080077]\n\tOrdinal0 [0x00EAFC18+2096152]\n\tOrdinal0 [0x00EAFD52+2096466]\n\tOrdinal0 [0x00EB94B1+2135217]\n\tBaseThreadInitThunk [0x772100F9+25]\n\tRtlGetAppContainerNamedObjectPath [0x77AF7BBE+286]\n\tRtlGetAppContainerNamedObjectPath [0x77AF7B8E+238]\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$new$0(W3CHandshakeResponse.java:57)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$getResponseFunction$2(W3CHandshakeResponse.java:104)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:123)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:499)\r\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:486)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:472)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\r\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:126)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:73)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:138)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:219)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:142)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat TheInternet.TestBase.initialiseDriver(TestBase.java:13)\r\n\tat StepDefinitions.LoginDemoSteps_PF.the_browser_is_open(LoginDemoSteps_PF.java:25)\r\n\tat ✽.the browser is open(file:///C:/Users/mikee/IdeaProjects/PortfolioPlayground/src/Tests/java/Features/HomePage.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user is on the login page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginDemoSteps_PF.user_is_on_the_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters the Michael and 12345",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.LoginDemoSteps_PF.user_enters_the_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clicks on the login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginDemoSteps_PF.clicksOnTheLoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is navigated to the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.LoginDemoSteps_PF.user_is_navigated_to_the_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user performs no actions on the form page",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.HomePageSteps_PF.user_performs_no_actions_on_the_form_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on the Save button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.HomePageSteps_PF.user_clicks_on_the_Save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user will get an error message for all fields",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.HomePageSteps_PF.user_will_get_an_error_message_for_all_fields()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NullPointerException\r\n\tat StepDefinitions.BeforeAndAfterSteps.teardown(BeforeAndAfterSteps.java:12)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "To check entering no data in the form will give every user all 5 error messages",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@HomePage"
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
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created: This version of ChromeDriver only supports Chrome version 94\nCurrent browser version is 110.0.5481.77 with binary path C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe\nBuild info: version: \u00273.9.1\u0027, revision: \u002763f7b50\u0027, time: \u00272018-02-07T22:25:02.294Z\u0027\nSystem info: host: \u0027DESKTOP-C7BK7KA\u0027, ip: \u0027192.168.1.171\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_281\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: Backtrace:\n\tOrdinal0 [0x00F0B9D3+2472403]\n\tOrdinal0 [0x00EA6961+2058593]\n\tOrdinal0 [0x00DB22B8+1057464]\n\tOrdinal0 [0x00DD03FA+1180666]\n\tOrdinal0 [0x00DCC2E5+1164005]\n\tOrdinal0 [0x00DC9B7F+1153919]\n\tOrdinal0 [0x00DF997F+1350015]\n\tOrdinal0 [0x00DF95EA+1349098]\n\tOrdinal0 [0x00DF545B+1332315]\n\tOrdinal0 [0x00DD1FB4+1187764]\n\tOrdinal0 [0x00DD2E09+1191433]\n\tGetHandleVerifier [0x01093396+1551078]\n\tGetHandleVerifier [0x0113D53A+2247818]\n\tGetHandleVerifier [0x00F97FBB+521995]\n\tGetHandleVerifier [0x00F97079+518089]\n\tOrdinal0 [0x00EABD4D+2080077]\n\tOrdinal0 [0x00EAFC18+2096152]\n\tOrdinal0 [0x00EAFD52+2096466]\n\tOrdinal0 [0x00EB94B1+2135217]\n\tBaseThreadInitThunk [0x772100F9+25]\n\tRtlGetAppContainerNamedObjectPath [0x77AF7BBE+286]\n\tRtlGetAppContainerNamedObjectPath [0x77AF7B8E+238]\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$new$0(W3CHandshakeResponse.java:57)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$getResponseFunction$2(W3CHandshakeResponse.java:104)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:123)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:499)\r\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:486)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:472)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\r\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:126)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:73)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:138)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:219)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:142)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat TheInternet.TestBase.initialiseDriver(TestBase.java:13)\r\n\tat StepDefinitions.LoginDemoSteps_PF.the_browser_is_open(LoginDemoSteps_PF.java:25)\r\n\tat ✽.the browser is open(file:///C:/Users/mikee/IdeaProjects/PortfolioPlayground/src/Tests/java/Features/HomePage.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user is on the login page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginDemoSteps_PF.user_is_on_the_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters the Tester1 and 12345",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.LoginDemoSteps_PF.user_enters_the_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clicks on the login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginDemoSteps_PF.clicksOnTheLoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is navigated to the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.LoginDemoSteps_PF.user_is_navigated_to_the_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user performs no actions on the form page",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.HomePageSteps_PF.user_performs_no_actions_on_the_form_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on the Save button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.HomePageSteps_PF.user_clicks_on_the_Save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user will get an error message for all fields",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.HomePageSteps_PF.user_will_get_an_error_message_for_all_fields()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NullPointerException\r\n\tat StepDefinitions.BeforeAndAfterSteps.teardown(BeforeAndAfterSteps.java:12)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "name": "To check the functionality of the country field for each user",
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
formatter.step({
  "name": "user selects \u003ccountry\u003e on the form page",
  "keyword": "When "
});
formatter.step({
  "name": "user clicks on the Save button",
  "keyword": "And "
});
formatter.step({
  "name": "error message for country field should not be present",
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
        "password",
        "country"
      ]
    },
    {
      "cells": [
        "Michael",
        "12345",
        "Afghanistan"
      ]
    },
    {
      "cells": [
        "Tester1",
        "12345",
        "Albania"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To check the functionality of the country field for each user",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@HomePage"
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
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created: This version of ChromeDriver only supports Chrome version 94\nCurrent browser version is 110.0.5481.77 with binary path C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe\nBuild info: version: \u00273.9.1\u0027, revision: \u002763f7b50\u0027, time: \u00272018-02-07T22:25:02.294Z\u0027\nSystem info: host: \u0027DESKTOP-C7BK7KA\u0027, ip: \u0027192.168.1.171\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_281\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: Backtrace:\n\tOrdinal0 [0x00F0B9D3+2472403]\n\tOrdinal0 [0x00EA6961+2058593]\n\tOrdinal0 [0x00DB22B8+1057464]\n\tOrdinal0 [0x00DD03FA+1180666]\n\tOrdinal0 [0x00DCC2E5+1164005]\n\tOrdinal0 [0x00DC9B7F+1153919]\n\tOrdinal0 [0x00DF997F+1350015]\n\tOrdinal0 [0x00DF95EA+1349098]\n\tOrdinal0 [0x00DF545B+1332315]\n\tOrdinal0 [0x00DD1FB4+1187764]\n\tOrdinal0 [0x00DD2E09+1191433]\n\tGetHandleVerifier [0x01093396+1551078]\n\tGetHandleVerifier [0x0113D53A+2247818]\n\tGetHandleVerifier [0x00F97FBB+521995]\n\tGetHandleVerifier [0x00F97079+518089]\n\tOrdinal0 [0x00EABD4D+2080077]\n\tOrdinal0 [0x00EAFC18+2096152]\n\tOrdinal0 [0x00EAFD52+2096466]\n\tOrdinal0 [0x00EB94B1+2135217]\n\tBaseThreadInitThunk [0x772100F9+25]\n\tRtlGetAppContainerNamedObjectPath [0x77AF7BBE+286]\n\tRtlGetAppContainerNamedObjectPath [0x77AF7B8E+238]\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$new$0(W3CHandshakeResponse.java:57)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$getResponseFunction$2(W3CHandshakeResponse.java:104)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:123)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:499)\r\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:486)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:472)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\r\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:126)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:73)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:138)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:219)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:142)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat TheInternet.TestBase.initialiseDriver(TestBase.java:13)\r\n\tat StepDefinitions.LoginDemoSteps_PF.the_browser_is_open(LoginDemoSteps_PF.java:25)\r\n\tat ✽.the browser is open(file:///C:/Users/mikee/IdeaProjects/PortfolioPlayground/src/Tests/java/Features/HomePage.feature:20)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user is on the login page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginDemoSteps_PF.user_is_on_the_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters the Michael and 12345",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.LoginDemoSteps_PF.user_enters_the_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clicks on the login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginDemoSteps_PF.clicksOnTheLoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is navigated to the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.LoginDemoSteps_PF.user_is_navigated_to_the_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects Afghanistan on the form page",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.HomePageSteps_PF.userSelectsCountryOnTheFormPage(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on the Save button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.HomePageSteps_PF.user_clicks_on_the_Save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "error message for country field should not be present",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.HomePageSteps_PF.errorMessageForCountryFieldShouldNotBePresent()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NullPointerException\r\n\tat StepDefinitions.BeforeAndAfterSteps.teardown(BeforeAndAfterSteps.java:12)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "To check the functionality of the country field for each user",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@HomePage"
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
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created: This version of ChromeDriver only supports Chrome version 94\nCurrent browser version is 110.0.5481.77 with binary path C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe\nBuild info: version: \u00273.9.1\u0027, revision: \u002763f7b50\u0027, time: \u00272018-02-07T22:25:02.294Z\u0027\nSystem info: host: \u0027DESKTOP-C7BK7KA\u0027, ip: \u0027192.168.1.171\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_281\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: Backtrace:\n\tOrdinal0 [0x00F0B9D3+2472403]\n\tOrdinal0 [0x00EA6961+2058593]\n\tOrdinal0 [0x00DB22B8+1057464]\n\tOrdinal0 [0x00DD03FA+1180666]\n\tOrdinal0 [0x00DCC2E5+1164005]\n\tOrdinal0 [0x00DC9B7F+1153919]\n\tOrdinal0 [0x00DF997F+1350015]\n\tOrdinal0 [0x00DF95EA+1349098]\n\tOrdinal0 [0x00DF545B+1332315]\n\tOrdinal0 [0x00DD1FB4+1187764]\n\tOrdinal0 [0x00DD2E09+1191433]\n\tGetHandleVerifier [0x01093396+1551078]\n\tGetHandleVerifier [0x0113D53A+2247818]\n\tGetHandleVerifier [0x00F97FBB+521995]\n\tGetHandleVerifier [0x00F97079+518089]\n\tOrdinal0 [0x00EABD4D+2080077]\n\tOrdinal0 [0x00EAFC18+2096152]\n\tOrdinal0 [0x00EAFD52+2096466]\n\tOrdinal0 [0x00EB94B1+2135217]\n\tBaseThreadInitThunk [0x772100F9+25]\n\tRtlGetAppContainerNamedObjectPath [0x77AF7BBE+286]\n\tRtlGetAppContainerNamedObjectPath [0x77AF7B8E+238]\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$new$0(W3CHandshakeResponse.java:57)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$getResponseFunction$2(W3CHandshakeResponse.java:104)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:123)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:499)\r\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:486)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:472)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\r\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:126)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:73)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:138)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:219)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:142)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat TheInternet.TestBase.initialiseDriver(TestBase.java:13)\r\n\tat StepDefinitions.LoginDemoSteps_PF.the_browser_is_open(LoginDemoSteps_PF.java:25)\r\n\tat ✽.the browser is open(file:///C:/Users/mikee/IdeaProjects/PortfolioPlayground/src/Tests/java/Features/HomePage.feature:20)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user is on the login page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginDemoSteps_PF.user_is_on_the_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters the Tester1 and 12345",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.LoginDemoSteps_PF.user_enters_the_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clicks on the login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginDemoSteps_PF.clicksOnTheLoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is navigated to the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.LoginDemoSteps_PF.user_is_navigated_to_the_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects Albania on the form page",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.HomePageSteps_PF.userSelectsCountryOnTheFormPage(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on the Save button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.HomePageSteps_PF.user_clicks_on_the_Save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "error message for country field should not be present",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.HomePageSteps_PF.errorMessageForCountryFieldShouldNotBePresent()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NullPointerException\r\n\tat StepDefinitions.BeforeAndAfterSteps.teardown(BeforeAndAfterSteps.java:12)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "name": "To check if correctly completing the form, will give the \u0027Saved\u0027 message",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@FillForm"
    }
  ]
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
formatter.step({
  "name": "user selects \u003ccountry\u003e on the form page",
  "keyword": "When "
});
formatter.step({
  "name": "enters \u003caddress\u003e into the address field",
  "keyword": "And "
});
formatter.step({
  "name": "enters a \u003cemail\u003e address",
  "keyword": "And "
});
formatter.step({
  "name": "enters \u003cphone\u003e into the phone field",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on the Save button",
  "keyword": "And "
});
formatter.step({
  "name": "Saved will appear in green text below the form",
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
        "password",
        "country",
        "address",
        "email",
        "phone"
      ]
    },
    {
      "cells": [
        "Michael",
        "12345",
        "Finland",
        "House 1, Bristol",
        "michael@email.com",
        "0800123456"
      ]
    },
    {
      "cells": [
        "Tester1",
        "12345",
        "Australia",
        "Flat 20, Bristol",
        "tester1@email.com",
        "0123456789"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To check if correctly completing the form, will give the \u0027Saved\u0027 message",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@HomePage"
    },
    {
      "name": "@FillForm"
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
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created: This version of ChromeDriver only supports Chrome version 94\nCurrent browser version is 110.0.5481.77 with binary path C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe\nBuild info: version: \u00273.9.1\u0027, revision: \u002763f7b50\u0027, time: \u00272018-02-07T22:25:02.294Z\u0027\nSystem info: host: \u0027DESKTOP-C7BK7KA\u0027, ip: \u0027192.168.1.171\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_281\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: Backtrace:\n\tOrdinal0 [0x00F0B9D3+2472403]\n\tOrdinal0 [0x00EA6961+2058593]\n\tOrdinal0 [0x00DB22B8+1057464]\n\tOrdinal0 [0x00DD03FA+1180666]\n\tOrdinal0 [0x00DCC2E5+1164005]\n\tOrdinal0 [0x00DC9B7F+1153919]\n\tOrdinal0 [0x00DF997F+1350015]\n\tOrdinal0 [0x00DF95EA+1349098]\n\tOrdinal0 [0x00DF545B+1332315]\n\tOrdinal0 [0x00DD1FB4+1187764]\n\tOrdinal0 [0x00DD2E09+1191433]\n\tGetHandleVerifier [0x01093396+1551078]\n\tGetHandleVerifier [0x0113D53A+2247818]\n\tGetHandleVerifier [0x00F97FBB+521995]\n\tGetHandleVerifier [0x00F97079+518089]\n\tOrdinal0 [0x00EABD4D+2080077]\n\tOrdinal0 [0x00EAFC18+2096152]\n\tOrdinal0 [0x00EAFD52+2096466]\n\tOrdinal0 [0x00EB94B1+2135217]\n\tBaseThreadInitThunk [0x772100F9+25]\n\tRtlGetAppContainerNamedObjectPath [0x77AF7BBE+286]\n\tRtlGetAppContainerNamedObjectPath [0x77AF7B8E+238]\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$new$0(W3CHandshakeResponse.java:57)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$getResponseFunction$2(W3CHandshakeResponse.java:104)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:123)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:499)\r\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:486)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:472)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\r\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:126)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:73)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:138)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:219)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:142)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat TheInternet.TestBase.initialiseDriver(TestBase.java:13)\r\n\tat StepDefinitions.LoginDemoSteps_PF.the_browser_is_open(LoginDemoSteps_PF.java:25)\r\n\tat ✽.the browser is open(file:///C:/Users/mikee/IdeaProjects/PortfolioPlayground/src/Tests/java/Features/HomePage.feature:36)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user is on the login page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginDemoSteps_PF.user_is_on_the_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters the Michael and 12345",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.LoginDemoSteps_PF.user_enters_the_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clicks on the login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginDemoSteps_PF.clicksOnTheLoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is navigated to the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.LoginDemoSteps_PF.user_is_navigated_to_the_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects Finland on the form page",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.HomePageSteps_PF.userSelectsCountryOnTheFormPage(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "enters House 1, Bristol into the address field",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.HomePageSteps_PF.entersAddressIntoTheAddressField(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "enters a michael@email.com address",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.HomePageSteps_PF.entersAEmailAddress(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "enters 0800123456 into the phone field",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.HomePageSteps_PF.entersPhoneIntoThePhoneField(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on the Save button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.HomePageSteps_PF.user_clicks_on_the_Save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Saved will appear in green text below the form",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.HomePageSteps_PF.savedWillAppearInGreenTextBelowTheForm()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NullPointerException\r\n\tat StepDefinitions.BeforeAndAfterSteps.teardown(BeforeAndAfterSteps.java:12)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "To check if correctly completing the form, will give the \u0027Saved\u0027 message",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@HomePage"
    },
    {
      "name": "@FillForm"
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
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created: This version of ChromeDriver only supports Chrome version 94\nCurrent browser version is 110.0.5481.77 with binary path C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe\nBuild info: version: \u00273.9.1\u0027, revision: \u002763f7b50\u0027, time: \u00272018-02-07T22:25:02.294Z\u0027\nSystem info: host: \u0027DESKTOP-C7BK7KA\u0027, ip: \u0027192.168.1.171\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_281\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: Backtrace:\n\tOrdinal0 [0x00F0B9D3+2472403]\n\tOrdinal0 [0x00EA6961+2058593]\n\tOrdinal0 [0x00DB22B8+1057464]\n\tOrdinal0 [0x00DD03FA+1180666]\n\tOrdinal0 [0x00DCC2E5+1164005]\n\tOrdinal0 [0x00DC9B7F+1153919]\n\tOrdinal0 [0x00DF997F+1350015]\n\tOrdinal0 [0x00DF95EA+1349098]\n\tOrdinal0 [0x00DF545B+1332315]\n\tOrdinal0 [0x00DD1FB4+1187764]\n\tOrdinal0 [0x00DD2E09+1191433]\n\tGetHandleVerifier [0x01093396+1551078]\n\tGetHandleVerifier [0x0113D53A+2247818]\n\tGetHandleVerifier [0x00F97FBB+521995]\n\tGetHandleVerifier [0x00F97079+518089]\n\tOrdinal0 [0x00EABD4D+2080077]\n\tOrdinal0 [0x00EAFC18+2096152]\n\tOrdinal0 [0x00EAFD52+2096466]\n\tOrdinal0 [0x00EB94B1+2135217]\n\tBaseThreadInitThunk [0x772100F9+25]\n\tRtlGetAppContainerNamedObjectPath [0x77AF7BBE+286]\n\tRtlGetAppContainerNamedObjectPath [0x77AF7B8E+238]\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$new$0(W3CHandshakeResponse.java:57)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$getResponseFunction$2(W3CHandshakeResponse.java:104)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:123)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:499)\r\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:486)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:472)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\r\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:126)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:73)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:138)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:219)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:142)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat TheInternet.TestBase.initialiseDriver(TestBase.java:13)\r\n\tat StepDefinitions.LoginDemoSteps_PF.the_browser_is_open(LoginDemoSteps_PF.java:25)\r\n\tat ✽.the browser is open(file:///C:/Users/mikee/IdeaProjects/PortfolioPlayground/src/Tests/java/Features/HomePage.feature:36)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user is on the login page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginDemoSteps_PF.user_is_on_the_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters the Tester1 and 12345",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.LoginDemoSteps_PF.user_enters_the_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clicks on the login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginDemoSteps_PF.clicksOnTheLoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is navigated to the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.LoginDemoSteps_PF.user_is_navigated_to_the_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user selects Australia on the form page",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.HomePageSteps_PF.userSelectsCountryOnTheFormPage(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "enters Flat 20, Bristol into the address field",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.HomePageSteps_PF.entersAddressIntoTheAddressField(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "enters a tester1@email.com address",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.HomePageSteps_PF.entersAEmailAddress(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "enters 0123456789 into the phone field",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.HomePageSteps_PF.entersPhoneIntoThePhoneField(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on the Save button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.HomePageSteps_PF.user_clicks_on_the_Save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Saved will appear in green text below the form",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.HomePageSteps_PF.savedWillAppearInGreenTextBelowTheForm()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NullPointerException\r\n\tat StepDefinitions.BeforeAndAfterSteps.teardown(BeforeAndAfterSteps.java:12)\r\n",
  "status": "failed"
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
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created: This version of ChromeDriver only supports Chrome version 94\nCurrent browser version is 110.0.5481.77 with binary path C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe\nBuild info: version: \u00273.9.1\u0027, revision: \u002763f7b50\u0027, time: \u00272018-02-07T22:25:02.294Z\u0027\nSystem info: host: \u0027DESKTOP-C7BK7KA\u0027, ip: \u0027192.168.1.171\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_281\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: Backtrace:\n\tOrdinal0 [0x00F0B9D3+2472403]\n\tOrdinal0 [0x00EA6961+2058593]\n\tOrdinal0 [0x00DB22B8+1057464]\n\tOrdinal0 [0x00DD03FA+1180666]\n\tOrdinal0 [0x00DCC2E5+1164005]\n\tOrdinal0 [0x00DC9B7F+1153919]\n\tOrdinal0 [0x00DF997F+1350015]\n\tOrdinal0 [0x00DF95EA+1349098]\n\tOrdinal0 [0x00DF545B+1332315]\n\tOrdinal0 [0x00DD1FB4+1187764]\n\tOrdinal0 [0x00DD2E09+1191433]\n\tGetHandleVerifier [0x01093396+1551078]\n\tGetHandleVerifier [0x0113D53A+2247818]\n\tGetHandleVerifier [0x00F97FBB+521995]\n\tGetHandleVerifier [0x00F97079+518089]\n\tOrdinal0 [0x00EABD4D+2080077]\n\tOrdinal0 [0x00EAFC18+2096152]\n\tOrdinal0 [0x00EAFD52+2096466]\n\tOrdinal0 [0x00EB94B1+2135217]\n\tBaseThreadInitThunk [0x772100F9+25]\n\tRtlGetAppContainerNamedObjectPath [0x77AF7BBE+286]\n\tRtlGetAppContainerNamedObjectPath [0x77AF7B8E+238]\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$new$0(W3CHandshakeResponse.java:57)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$getResponseFunction$2(W3CHandshakeResponse.java:104)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:123)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:499)\r\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:486)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:472)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\r\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:126)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:73)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:138)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:219)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:142)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat TheInternet.TestBase.initialiseDriver(TestBase.java:13)\r\n\tat StepDefinitions.LoginDemoSteps_PF.the_browser_is_open(LoginDemoSteps_PF.java:25)\r\n\tat ✽.the browser is open(file:///C:/Users/mikee/IdeaProjects/PortfolioPlayground/src/Tests/java/Features/LoginDemo.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user is on the login page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginDemoSteps_PF.user_is_on_the_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters the Michael and 12345",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.LoginDemoSteps_PF.user_enters_the_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clicks on the login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginDemoSteps_PF.clicksOnTheLoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is navigated to the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.LoginDemoSteps_PF.user_is_navigated_to_the_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NullPointerException\r\n\tat StepDefinitions.BeforeAndAfterSteps.teardown(BeforeAndAfterSteps.java:12)\r\n",
  "status": "failed"
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
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created: This version of ChromeDriver only supports Chrome version 94\nCurrent browser version is 110.0.5481.77 with binary path C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe\nBuild info: version: \u00273.9.1\u0027, revision: \u002763f7b50\u0027, time: \u00272018-02-07T22:25:02.294Z\u0027\nSystem info: host: \u0027DESKTOP-C7BK7KA\u0027, ip: \u0027192.168.1.171\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_281\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: Backtrace:\n\tOrdinal0 [0x00F0B9D3+2472403]\n\tOrdinal0 [0x00EA6961+2058593]\n\tOrdinal0 [0x00DB22B8+1057464]\n\tOrdinal0 [0x00DD03FA+1180666]\n\tOrdinal0 [0x00DCC2E5+1164005]\n\tOrdinal0 [0x00DC9B7F+1153919]\n\tOrdinal0 [0x00DF997F+1350015]\n\tOrdinal0 [0x00DF95EA+1349098]\n\tOrdinal0 [0x00DF545B+1332315]\n\tOrdinal0 [0x00DD1FB4+1187764]\n\tOrdinal0 [0x00DD2E09+1191433]\n\tGetHandleVerifier [0x01093396+1551078]\n\tGetHandleVerifier [0x0113D53A+2247818]\n\tGetHandleVerifier [0x00F97FBB+521995]\n\tGetHandleVerifier [0x00F97079+518089]\n\tOrdinal0 [0x00EABD4D+2080077]\n\tOrdinal0 [0x00EAFC18+2096152]\n\tOrdinal0 [0x00EAFD52+2096466]\n\tOrdinal0 [0x00EB94B1+2135217]\n\tBaseThreadInitThunk [0x772100F9+25]\n\tRtlGetAppContainerNamedObjectPath [0x77AF7BBE+286]\n\tRtlGetAppContainerNamedObjectPath [0x77AF7B8E+238]\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$new$0(W3CHandshakeResponse.java:57)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$getResponseFunction$2(W3CHandshakeResponse.java:104)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:123)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:499)\r\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:486)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:472)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\r\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:126)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:73)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:138)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:219)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:142)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat TheInternet.TestBase.initialiseDriver(TestBase.java:13)\r\n\tat StepDefinitions.LoginDemoSteps_PF.the_browser_is_open(LoginDemoSteps_PF.java:25)\r\n\tat ✽.the browser is open(file:///C:/Users/mikee/IdeaProjects/PortfolioPlayground/src/Tests/java/Features/LoginDemo.feature:5)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user is on the login page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginDemoSteps_PF.user_is_on_the_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters the Tester1 and 12345",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.LoginDemoSteps_PF.user_enters_the_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clicks on the login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginDemoSteps_PF.clicksOnTheLoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is navigated to the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.LoginDemoSteps_PF.user_is_navigated_to_the_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NullPointerException\r\n\tat StepDefinitions.BeforeAndAfterSteps.teardown(BeforeAndAfterSteps.java:12)\r\n",
  "status": "failed"
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
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created: This version of ChromeDriver only supports Chrome version 94\nCurrent browser version is 110.0.5481.77 with binary path C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe\nBuild info: version: \u00273.9.1\u0027, revision: \u002763f7b50\u0027, time: \u00272018-02-07T22:25:02.294Z\u0027\nSystem info: host: \u0027DESKTOP-C7BK7KA\u0027, ip: \u0027192.168.1.171\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_281\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: Backtrace:\n\tOrdinal0 [0x00F0B9D3+2472403]\n\tOrdinal0 [0x00EA6961+2058593]\n\tOrdinal0 [0x00DB22B8+1057464]\n\tOrdinal0 [0x00DD03FA+1180666]\n\tOrdinal0 [0x00DCC2E5+1164005]\n\tOrdinal0 [0x00DC9B7F+1153919]\n\tOrdinal0 [0x00DF997F+1350015]\n\tOrdinal0 [0x00DF95EA+1349098]\n\tOrdinal0 [0x00DF545B+1332315]\n\tOrdinal0 [0x00DD1FB4+1187764]\n\tOrdinal0 [0x00DD2E09+1191433]\n\tGetHandleVerifier [0x01093396+1551078]\n\tGetHandleVerifier [0x0113D53A+2247818]\n\tGetHandleVerifier [0x00F97FBB+521995]\n\tGetHandleVerifier [0x00F97079+518089]\n\tOrdinal0 [0x00EABD4D+2080077]\n\tOrdinal0 [0x00EAFC18+2096152]\n\tOrdinal0 [0x00EAFD52+2096466]\n\tOrdinal0 [0x00EB94B1+2135217]\n\tBaseThreadInitThunk [0x772100F9+25]\n\tRtlGetAppContainerNamedObjectPath [0x77AF7BBE+286]\n\tRtlGetAppContainerNamedObjectPath [0x77AF7B8E+238]\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$new$0(W3CHandshakeResponse.java:57)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$getResponseFunction$2(W3CHandshakeResponse.java:104)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:123)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:499)\r\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:486)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:472)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\r\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:126)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:73)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:138)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:219)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:142)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat TheInternet.TestBase.initialiseDriver(TestBase.java:13)\r\n\tat StepDefinitions.LoginDemoSteps_PF.the_browser_is_open(LoginDemoSteps_PF.java:25)\r\n\tat ✽.the browser is open(file:///C:/Users/mikee/IdeaProjects/PortfolioPlayground/src/Tests/java/Features/LoginDemo.feature:17)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user is on the login page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginDemoSteps_PF.user_is_on_the_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters the Michael and 123",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.LoginDemoSteps_PF.user_enters_the_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clicks on the login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginDemoSteps_PF.clicksOnTheLoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is given an invalid password message",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.LoginDemoSteps_PF.userIsGivenAnInvalidPasswordMessage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NullPointerException\r\n\tat StepDefinitions.BeforeAndAfterSteps.teardown(BeforeAndAfterSteps.java:12)\r\n",
  "status": "failed"
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
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created: This version of ChromeDriver only supports Chrome version 94\nCurrent browser version is 110.0.5481.77 with binary path C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe\nBuild info: version: \u00273.9.1\u0027, revision: \u002763f7b50\u0027, time: \u00272018-02-07T22:25:02.294Z\u0027\nSystem info: host: \u0027DESKTOP-C7BK7KA\u0027, ip: \u0027192.168.1.171\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_281\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: Backtrace:\n\tOrdinal0 [0x00F0B9D3+2472403]\n\tOrdinal0 [0x00EA6961+2058593]\n\tOrdinal0 [0x00DB22B8+1057464]\n\tOrdinal0 [0x00DD03FA+1180666]\n\tOrdinal0 [0x00DCC2E5+1164005]\n\tOrdinal0 [0x00DC9B7F+1153919]\n\tOrdinal0 [0x00DF997F+1350015]\n\tOrdinal0 [0x00DF95EA+1349098]\n\tOrdinal0 [0x00DF545B+1332315]\n\tOrdinal0 [0x00DD1FB4+1187764]\n\tOrdinal0 [0x00DD2E09+1191433]\n\tGetHandleVerifier [0x01093396+1551078]\n\tGetHandleVerifier [0x0113D53A+2247818]\n\tGetHandleVerifier [0x00F97FBB+521995]\n\tGetHandleVerifier [0x00F97079+518089]\n\tOrdinal0 [0x00EABD4D+2080077]\n\tOrdinal0 [0x00EAFC18+2096152]\n\tOrdinal0 [0x00EAFD52+2096466]\n\tOrdinal0 [0x00EB94B1+2135217]\n\tBaseThreadInitThunk [0x772100F9+25]\n\tRtlGetAppContainerNamedObjectPath [0x77AF7BBE+286]\n\tRtlGetAppContainerNamedObjectPath [0x77AF7B8E+238]\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$new$0(W3CHandshakeResponse.java:57)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$getResponseFunction$2(W3CHandshakeResponse.java:104)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:123)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:499)\r\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:486)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:472)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\r\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:126)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:73)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:138)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:219)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:142)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat TheInternet.TestBase.initialiseDriver(TestBase.java:13)\r\n\tat StepDefinitions.LoginDemoSteps_PF.the_browser_is_open(LoginDemoSteps_PF.java:25)\r\n\tat ✽.the browser is open(file:///C:/Users/mikee/IdeaProjects/PortfolioPlayground/src/Tests/java/Features/LoginDemo.feature:17)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user is on the login page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginDemoSteps_PF.user_is_on_the_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters the Tester1 and 123",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.LoginDemoSteps_PF.user_enters_the_username_and_password(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clicks on the login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginDemoSteps_PF.clicksOnTheLoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is given an invalid password message",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.LoginDemoSteps_PF.userIsGivenAnInvalidPasswordMessage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NullPointerException\r\n\tat StepDefinitions.BeforeAndAfterSteps.teardown(BeforeAndAfterSteps.java:12)\r\n",
  "status": "failed"
});
formatter.uri("file:src/Tests/java/Features/LoginExample.feature");
formatter.feature({
  "name": "Feature to test login functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@LoginFeature"
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
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created: This version of ChromeDriver only supports Chrome version 94\nCurrent browser version is 110.0.5481.77 with binary path C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe\nBuild info: version: \u00273.9.1\u0027, revision: \u002763f7b50\u0027, time: \u00272018-02-07T22:25:02.294Z\u0027\nSystem info: host: \u0027DESKTOP-C7BK7KA\u0027, ip: \u0027192.168.1.171\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_281\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: Backtrace:\n\tOrdinal0 [0x00F0B9D3+2472403]\n\tOrdinal0 [0x00EA6961+2058593]\n\tOrdinal0 [0x00DB22B8+1057464]\n\tOrdinal0 [0x00DD03FA+1180666]\n\tOrdinal0 [0x00DCC2E5+1164005]\n\tOrdinal0 [0x00DC9B7F+1153919]\n\tOrdinal0 [0x00DF997F+1350015]\n\tOrdinal0 [0x00DF95EA+1349098]\n\tOrdinal0 [0x00DF545B+1332315]\n\tOrdinal0 [0x00DD1FB4+1187764]\n\tOrdinal0 [0x00DD2E09+1191433]\n\tGetHandleVerifier [0x01093396+1551078]\n\tGetHandleVerifier [0x0113D53A+2247818]\n\tGetHandleVerifier [0x00F97FBB+521995]\n\tGetHandleVerifier [0x00F97079+518089]\n\tOrdinal0 [0x00EABD4D+2080077]\n\tOrdinal0 [0x00EAFC18+2096152]\n\tOrdinal0 [0x00EAFD52+2096466]\n\tOrdinal0 [0x00EB94B1+2135217]\n\tBaseThreadInitThunk [0x772100F9+25]\n\tRtlGetAppContainerNamedObjectPath [0x77AF7BBE+286]\n\tRtlGetAppContainerNamedObjectPath [0x77AF7B8E+238]\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$new$0(W3CHandshakeResponse.java:57)\r\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$getResponseFunction$2(W3CHandshakeResponse.java:104)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:123)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:193)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:126)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:499)\r\n\tat java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:486)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:472)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:152)\r\n\tat java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:464)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:126)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:73)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:138)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:219)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:142)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\r\n\tat TheInternet.TestBase.initialiseDriver(TestBase.java:13)\r\n\tat StepDefinitions.LoginSteps.user_is_on_login_page(LoginSteps.java:11)\r\n\tat ✽.user is on login page(file:///C:/Users/mikee/IdeaProjects/PortfolioPlayground/src/Tests/java/Features/LoginExample.feature:7)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user enters username and password",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.user_enters_username_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.clicks_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is navigated to the Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.LoginSteps.user_is_navigated_to_the_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NullPointerException\r\n\tat StepDefinitions.BeforeAndAfterSteps.teardown(BeforeAndAfterSteps.java:12)\r\n",
  "status": "failed"
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
