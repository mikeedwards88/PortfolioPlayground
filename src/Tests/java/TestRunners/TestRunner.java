package TestRunners;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features= "src/Tests/java/Features", //Right click on 'Features' folder to copy path
        glue = {"StepDefinitions"},
        monochrome = false, //Different formatting views
        plugin = {"pretty", "junit:target/TestReports/JUnitReports/TestReport.xml",
        "json:target/TestReports/JSONReports/TestReport.json",                      //Creates reports in target folder
        "html:target/TestReports/htmlReports"},
        strict = true, //When matching StepDefinition not found, --strict will cause cucumber to exit
        tags = "")  //Multiple:::  tags = "@Scenario1 and/or/not @Scenario2") *Same tag can be used multiple scenarios. Brackets can be used
//ALL SCENARIOS
// CI/CD: Jenkins Integration, the JUnit Test Results can be displayed on the Jenkins Dashboard


public class TestRunner {
    }