package TheInternet;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import java.util.concurrent.TimeUnit;

public class TestBase {

    public static WebDriver trialDriver;

    public void initialiseDriver() {
        String projectPath = System.getProperty("user.dir");
        System.setProperty("webdriver.chrome.driver", projectPath + "/src/main/resources/chromedriver.exe");
        TestBase.trialDriver = new ChromeDriver();
        TestBase.trialDriver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        TestBase.trialDriver.manage().timeouts().pageLoadTimeout(20, TimeUnit.SECONDS);
        TestBase.trialDriver.manage().window().maximize();
    }
}