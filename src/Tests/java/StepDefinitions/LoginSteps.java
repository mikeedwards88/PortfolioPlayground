package StepDefinitions;
import TheInternet.TestBase;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class LoginSteps extends TestBase {
    @Given("user is on login page")
    public void user_is_on_login_page() {
        initialiseDriver();
        System.out.println("Inside Step - User is on the login page");}

    @When("user enters username and password")
    public void user_enters_username_and_password() {
        System.out.println("Inside Step - User enters Username and Password");}

    @And("clicks on login button")
    public void clicks_on_login_button() {
        System.out.println("Inside Step - User clicks on Login Button");}

    @Then("user is navigated to the Home Page")
    public void user_is_navigated_to_the_home_page() {
        System.out.println("Inside Step - User is navigated to the Home Page");}

    @When("user enters incorrect username and password")
    public void userEntersIncorrectUsernameAndPassword() {
        System.out.println("Inside Step - User enters incorrect username and password");}

    @Then("user is given an error message")
    public void userIsGivenAnErrorMessage() {
        System.out.println("Inside Step - User is given an error message");}
}