package TheInternet.Pages;
import TheInternet.TestBase;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;


public class HomePage_PF extends TestBase {

    @FindBy(xpath = "//*[@id=\"logout\"]")
    @CacheLookup
    WebElement button_logout;

    @FindBy(xpath = "//*[@id=\"greetings\"]")
    @CacheLookup
    WebElement field_loginMessage;

    @FindBy(xpath = "//*[@id=\"save\"]")
    WebElement button_save;


    public HomePage_PF() {    // This is a Constructor: A Function with the same name as the Class Name
        PageFactory.initElements(trialDriver, this);
    }

    public void checkLogoutIsDisplayed() {
        button_logout.isDisplayed();
    }

    public void homePageCheck() {
        String bodyText = field_loginMessage.getText();  //Body of page
        Assert.assertTrue("Text not found!", bodyText.contains("let's complete the test form:"));
    }

    public void clickSave() {
        button_save.click();
    }
}