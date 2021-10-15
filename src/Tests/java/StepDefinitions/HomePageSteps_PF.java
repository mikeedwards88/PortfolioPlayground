package StepDefinitions;
import TheInternet.Pages.HomePage_PF;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class HomePageSteps_PF {


    HomePage_PF homePage;


    @When("user performs no actions on the form page")
    public void user_performs_no_actions_on_the_form_page() {
        System.out.println("No actions performed on the form");
    }

    @And("user clicks on the Save button")
    public void user_clicks_on_the_Save_button() {

        homePage.clickSave();
    }

    @Then("user will get an error message for all fields")
    public void user_will_get_an_error_message_for_all_fields() {
        System.out.println("user will get error message for all fields");
    }
}