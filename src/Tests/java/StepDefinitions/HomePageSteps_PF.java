package StepDefinitions;
import Project1.Pages.HomePage_PF;
import Project1.TestBase;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

import static org.junit.Assert.assertTrue;

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
        home.check_for_country_error();
        home.check_for_address_error();
        home.check_for_email_error();
        home.check_for_number_error();
    }

    @When("^user selects (.*) on the form page$")
    public void userSelectsCountryOnTheFormPage(String country) {
        home = new HomePage_PF();
        home.select_country(country);
        TestBase.addDelay(2000);
    }

    @Then("error message for country field should not be present")
    public void errorMessageForCountryFieldShouldNotBePresent() {
        home.check_no_country_error();
    }

    @And("^enters (.*) into the address field$")
    public void entersAddressIntoTheAddressField(String address) {
        home.enter_address(address);
        TestBase.addDelay(500);
    }

    @And("^enters a (.*) address$")
    public void entersAEmailAddress(String email) {
        home.enter_email(email);
        TestBase.addDelay(500);
    }

    @And("^enters (.*) into the phone field$")
    public void entersPhoneIntoThePhoneField(String phone) {
        home.enter_phone(phone);
        TestBase.addDelay(500);
    }

    @Then("Saved will appear in green text below the form")
    public void savedWillAppearInGreenTextBelowTheForm() {
        home.verify_form_saved();
        TestBase.addDelay(2000);
    }
}