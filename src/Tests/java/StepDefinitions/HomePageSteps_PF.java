package StepDefinitions;
import TheInternet.Pages.HomePage_PF;
import TheInternet.Pages.LoginPage_PF;
import TheInternet.TestBase;
import TheInternet.Tools;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

public class HomePageSteps_PF extends TestBase {

    HomePage_PF home;

    public HomePageSteps_PF() {
        this.home = new HomePage_PF();
    }

    @When("user performs no actions on the form page")
    public void user_performs_no_actions_on_the_form_page() {
        System.out.println("No actions performed on the form");
    }

    @And("user clicks on the Save button")
    public void user_clicks_on_the_Save_button() {
        home.clickSave();
    }

    @Then("user will get an error message for all fields")
    public void user_will_get_an_error_message_for_all_fields() {
        home.check_error_all();
    }

    @When("^user selects (.*) on the form page$")
    public void userSelectsCountryOnTheFormPage(String country) {
        home = new HomePage_PF();
        home.select_country(country);
        Tools.addDelay(2000);
    }

    @Then("error message for country field should not be present")
    public void errorMessageForCountryFieldShouldNotBePresent() {
      // trialDriver.findElements()

    }
}