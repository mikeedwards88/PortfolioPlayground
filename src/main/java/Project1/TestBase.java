package Project1;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import java.util.concurrent.TimeUnit;

public class TestBase {

    public static WebDriver trialDriver;

    public void initialiseDriver() {
        String projectPath = System.getProperty("user.dir");
        System.setProperty("webdriver.chrome.driver", projectPath + "/src/main/resources/chromedriver.exe");
        trialDriver = new ChromeDriver();
        trialDriver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        trialDriver.manage().timeouts().pageLoadTimeout(20, TimeUnit.SECONDS);
        trialDriver.manage().window().maximize();
    }
    public static void clearCookies() {
        trialDriver.navigate().to("https://google.com");
        TestBase.addDelay(1000);
        trialDriver.findElement(By.xpath("//*[@id=\"L2AGLb\"]/div")).click();
    }
    public static void addDelay(int ms) {
        try {
            Thread.sleep(ms);
        } catch (InterruptedException ex) {
            Thread.currentThread().interrupt();
            System.out.println("Waiting.....");
            addDelay(5000);
            System.out.println("Done");
            //Example Use:  MyTools.addDelay(5000);  //wait 5seconds
        }
    }
    public static String extractDigits(String src) {
        StringBuilder builder = new StringBuilder();
        for (int i = 0; i < src.length(); i++) {
            char c = src.charAt(i);
            if (Character.isDigit(c)) {
                builder.append(c);
            }
        }
        return builder.toString();
    }
}

//How to:
//Create a new FILE, and name it x.feature
//Create a new CLASS in StepDefinitions folder
//Execute the file.feature, and paste the 'snippets' into the StepsDefinitions file, add relevant code
//Add Tags in Feature file, to be used in TestRunner file

//Two good video series:   https://www.youtube.com/playlist?list=PL6tu16kXT9PpteusHGISu_lHcV6MbBtA6
//                         https://www.youtube.com/playlist?list=PL6tu16kXT9Pqr70SZlwcmTSAfOw_0Qj3R
//                         https://www.youtube.com/watch?v=oSG-r7h0eLE&list=PL6tu16kXT9Prgk2f37ozqcdZac9pSATf6

//test Website:
// http://the-internet.herokuapp.com/
// https://www.youtube.com/watch?v=PGLKmKTjMGI  31mins
//For Login testing: example.testproject.io/web

//Key maven dependencies:
//Cucumber Java, Cucumber JUnit, JUnit, Selenium Java

//List of top 10:
//https://www.techlistic.com/2020/07/automation-testing-demo-websites.html

//DEMO ECCOMERCE SITE:
//https://phptravels.com/demo

//TO TEST WINDOWS ALERTS
//http://www.seleniumframework.com/Practiceform/
//