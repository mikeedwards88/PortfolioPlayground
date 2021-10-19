package StepDefinitions;
import TheInternet.Pages.HomePage_PF;
import TheInternet.Pages.LoginPage_PF;
import TheInternet.TestBase;
import TheInternet.Tools;
import io.cucumber.java.After;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class LoginDemoSteps_PF extends TestBase {

    LoginPage_PF login;              //This refers to the CONSTRUCTOR on LoginPage_PF class.
    HomePage_PF home;

    public LoginDemoSteps_PF() {
        this.login = new LoginPage_PF();
        this.home = new HomePage_PF();
    }


    @Given("the browser is open")
    public void the_browser_is_open() {
        login.initialiseDriver();
    }
    @Given("user is on the login page")
    public void user_is_on_the_login_page() {
        trialDriver.navigate().to("https://example.testproject.io/web");

        if (!trialDriver.getTitle().equals("TestProject Demo")) {
            throw new IllegalStateException("This is not Login Page. The Current Page is "
                    + trialDriver.getTitle());
        }
    }

    @When("^user enters the (.*) and (.*)$")
    public void user_enters_the_username_and_password(String username, String password) {
        login = new LoginPage_PF();
        login.enterUsername(username);
        login.enterPassword(password);
    }

    @And("clicks on the login button")
    public void clicksOnTheLoginButton() {
        Tools.addDelay(1500);
        login.clickLogin();
    }

    @Then("user is navigated to the home page")
    public void user_is_navigated_to_the_home_page(){
        home = new HomePage_PF();
        home.checkLogoutIsDisplayed();
        home.homePageCheck();
        Tools.addDelay(1500);
    }

    @Then("user is given an invalid password message")
    public void userIsGivenAnInvalidPasswordMessage() {
        login.invalidPasswordMessage();
        Tools.addDelay(1500);
    }
}