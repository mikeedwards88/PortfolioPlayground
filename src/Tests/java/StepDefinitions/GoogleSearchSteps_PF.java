package StepDefinitions;
import Project1.Pages.GoogleHome_PF;
import Project1.TestBase;
import io.cucumber.java.en.*;  //Add Given, then replace with * to add all dependencies

public class GoogleSearchSteps_PF extends TestBase {

    GoogleHome_PF google;

    public GoogleSearchSteps_PF() {
        this.google = new GoogleHome_PF();
    }

    @Given("browser is open")
    public void browser_is_open() {
        google.initialiseDriver();
    }

    @And("user is on google search page")
    public void user_is_on_google_search_page() {System.out.println("Inside Step: User is on Google search page");
        google = new GoogleHome_PF();
        trialDriver.navigate().to("https://google.com");
        google.clear_cookies_window(trialDriver);
    }

    @When("^user enters (.*) in search box$")
    public void user_enters_text_in_search_box(String text) {System.out.println("Inside Step: User enters text in search box");
        google.enter_text_into_search(text);
    }

    @And("user hits enter")
    public void user_hits_enter() {System.out.println("Inside Step: User hits enter");
        google.press_enter_to_search();
    }

    @Then("^user is navigated to search (.*)$")
    public void user_is_navigated_to_search_results(String results) {System.out.println("Inside Step: User is navigated to search results");
        google.check_text_exists_as_url(results);
    }
}