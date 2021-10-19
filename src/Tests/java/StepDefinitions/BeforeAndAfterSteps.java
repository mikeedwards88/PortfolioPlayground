package StepDefinitions;

import TheInternet.TestBase;
import TheInternet.Tools;
import io.cucumber.java.After;

public class BeforeAndAfterSteps extends TestBase {

    @After
    public void teardown() {
        Tools.addDelay(1500);
        trialDriver.close();
        trialDriver.quit();
    }
}