package StepDefinitions;

import Project1.TestBase;
import io.cucumber.java.After;

public class BeforeAndAfterSteps extends TestBase {

    @After
    public void teardown() {
        TestBase.addDelay(1500);
        trialDriver.close();
        trialDriver.quit();
    }
}