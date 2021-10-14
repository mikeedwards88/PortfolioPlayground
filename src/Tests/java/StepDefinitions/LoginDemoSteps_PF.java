package StepDefinitions;
import TheInternet.Pages.HomePage_PF;
import TheInternet.Pages.LoginPage_PF;
import TheInternet.Tools;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.concurrent.TimeUnit;

public class LoginDemoSteps_PF {
    WebDriver driver = null;
    LoginPage_PF login;             //This refers to the CONSTRUCTOR on LoginPage_PF class.
    HomePage_PF home;

    @Given("the browser is open")
    public void the_browser_is_open() {

        String projectPath = System.getProperty("user.dir");
        System.setProperty("webdriver.chrome.driver", projectPath + "/src/main/resources/chromedriver.exe");
        driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        driver.manage().timeouts().pageLoadTimeout(20, TimeUnit.SECONDS);
        driver.manage().window().maximize();
    }

    @Given("user is on the login page")
    public void user_is_on_the_login_page() {
        driver.navigate().to("https://example.testproject.io/web");

        if (!driver.getTitle().equals("TestProject Demo")) {
            throw new IllegalStateException("This is not Login Page. The Current Page is "
                    + driver.getTitle());
        }
    }

    @When("^user enters the (.*) and (.*)$")
    public void user_enters_the_username_and_password(String username, String password) {
        login = new LoginPage_PF(driver);

        login.enterUsername(username);
        login.enterPassword(password);
    }

    @And("clicks on the login button")
    public void clicksOnTheLoginButton() {
        login = new LoginPage_PF(driver);
        Tools.addDelay(1500);
        login.clickLogin();
    }

    @Then("user is navigated to the home page")
    public void user_is_navigated_to_the_home_page(){
        home = new HomePage_PF(driver);
        home.checkLogoutIsDisplayed();
        home.homePageCheck();

        Tools.addDelay(1500);

        driver.close();
        driver.quit();
    }

    @Then("user is given an invalid password message")
    public void userIsGivenAnInvalidPasswordMessage() {
        login = new LoginPage_PF(driver);
        login.invalidPasswordMessage();

        Tools.addDelay(1500);

        driver.close();
        driver.quit();
    }
}