package StepDefinitions;
import TheInternet.Pages.GoogleHome_PF;
import io.cucumber.java.en.*;  //Add Given, then replace with * to add all dependencies
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import java.util.concurrent.TimeUnit;

public class GoogleSearchSteps_PF {

    WebDriver driver = null;
    GoogleHome_PF google;

    @Given("browser is open")
    public void browser_is_open() {
        System.out.println("Inside Step: Browser is open");

        String projectPath = System.getProperty("user.dir");
        System.setProperty("webdriver.chrome.driver", projectPath + "/src/main/resources/chromedriver.exe");
        driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        driver.manage().timeouts().pageLoadTimeout(20, TimeUnit.SECONDS);
        driver.manage().window().maximize();
    }

    @And("user is on google search page")
    public void user_is_on_google_search_page() {
        System.out.println("Inside Step: User is on Google search page");

        driver.navigate().to("https://google.com");
        google = new GoogleHome_PF(driver);
        google.clear_cookies_window(driver);
    }

    @When("^user enters (.*) in search box$")
    public void user_enters_text_in_search_box(String text) {
        System.out.println("Inside Step: User enters text in search box");

        google = new GoogleHome_PF(driver);
        google.enter_text_into_search(text);
    }

    @And("user hits enter")
    public void user_hits_enter() {
        System.out.println("Inside Step: User hits enter");

        google = new GoogleHome_PF(driver);
        google.press_enter_to_search();
    }

    @Then("^user is navigated to search (.*)$")
    public void user_is_navigated_to_search_results(String results) {
        System.out.println("Inside Step: User is navigated to search results");
        google = new GoogleHome_PF(driver);
        google.check_text_exists_as_url(results);

        driver.close();
        driver.quit();
    }
}