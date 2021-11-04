package Project1.Pages;
import Project1.TestBase;
import org.junit.Assert;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class GoogleHome_PF extends TestBase {
    @FindBy(name = "q")
    WebElement search_field;
    @FindBy(xpath = "//*[@id=\"L2AGLb\"]/div")
    WebElement googleCookies;
    @FindBy(xpath = "//*[@id=\"rcnt\"]") //This is body of Google Search Results
    WebElement googleBody;

    public GoogleHome_PF() {
        PageFactory.initElements(trialDriver, this);
    }
    public void clear_cookies_window(WebDriver driver) {
        TestBase.addDelay(500);
        googleCookies.click();
    }
    public void enter_text_into_search(String text) {
        search_field.sendKeys(text);
    }
    public void press_enter_to_search() {
        search_field.sendKeys(Keys.ENTER);
    }
    public void check_text_exists_as_url (String results) {
        String bodyText = googleBody.getText();
        Assert.assertTrue("Text not found!", bodyText.contains(results));
    }
}