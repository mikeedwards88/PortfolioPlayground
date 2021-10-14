package TheInternet.Pages;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;


public class HomePage_PF {

    @FindBy(xpath = "//*[@id=\"logout\"]")
    @CacheLookup
    WebElement button_logout;

    @FindBy(xpath = "//*[@id=\"greetings\"]")
    @CacheLookup
    WebElement field_loginMessage;

    WebDriver driver;


    public HomePage_PF(WebDriver driver) {    // This is a Constructor: A Function with the same name as the Class Name
        this.driver = driver;
        PageFactory.initElements(driver, this);

    }

    public void checkLogoutIsDisplayed() {
        button_logout.isDisplayed();
    }

    public void homePageCheck() {
        String bodyText = field_loginMessage.getText();  //Body of page
        Assert.assertTrue("Text not found!", bodyText.contains("let's complete the test form:"));
    }
}