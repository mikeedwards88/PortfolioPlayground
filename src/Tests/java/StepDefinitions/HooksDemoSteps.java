//package StepDefinitions;
//import io.cucumber.java.After;
//import io.cucumber.java.AfterStep;
//import io.cucumber.java.Before;
//import io.cucumber.java.BeforeStep;
//import org.openqa.selenium.WebDriver;
//import org.openqa.selenium.chrome.ChromeDriver;
//
//import java.util.concurrent.TimeUnit;
//
//public class HooksDemoSteps {
//    WebDriver driver = null;
//
//    @Before
//    public void browserSetup() {
//        System.out.println("<<<<<<I am inside browser setup>>>>>>");
//        String projectPath = System.getProperty("user.dir");
//        System.setProperty("webdriver.chrome.driver", projectPath + "/src/main/resources/chromedriver.exe");
//        driver = new ChromeDriver();
//        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
//        driver.manage().timeouts().pageLoadTimeout(20, TimeUnit.SECONDS);
//        driver.manage().window().maximize();
//    }
//
//    @After
//    public void teardown() {
//        System.out.println("<<<<<<I am inside the browser teardown>>>>>>>>");
//        driver.close();
//        driver.quit();
//    }
//
//    @BeforeStep
//    public void beforeStep() {
//
//    }
//    @AfterStep
//    public void afterStep() {
//    }
//}