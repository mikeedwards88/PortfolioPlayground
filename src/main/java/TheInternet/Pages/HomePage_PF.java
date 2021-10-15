package TheInternet.Pages;
import TheInternet.TestBase;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

public class HomePage_PF extends TestBase {
    @FindBy(xpath = "//*[@id=\"logout\"]")
    WebElement button_logout;
    @FindBy(xpath = "//*[@id=\"greetings\"]")
    WebElement field_loginMessage;
    @FindBy(xpath = "//*[@id=\"save\"]")
    WebElement button_save;
    @FindBy(xpath = "//*[@id=\"pageProfile\"]/form/div[1]/div/div")
    WebElement error_country;
    @FindBy(xpath = "//*[@id=\"pageProfile\"]/form/div[2]/div/div")
    WebElement error_address;
    @FindBy(xpath = "//*[@id=\"pageProfile\"]/form/div[3]/div/div")
    WebElement error_email;
    @FindBy(xpath = "//*[@id=\"pageProfile\"]/form/div[4]/div/div")
    WebElement error_number;
    @FindBy(xpath = "//*[@id=\"country\"]")
    WebElement dropDown_country;

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
    public void check_error_all() {
        error_country.isDisplayed();
        error_address.isDisplayed();
        error_email.isDisplayed();
        error_number.isDisplayed();
    }
    public void check_error_country() {
        error_country.isDisplayed();
    }
//    public void check_error_country_missing() {
//        trialDriver.findElements()
//    }

    public void check_error_address() {
        error_address.isDisplayed();
    }
    public void check_error_email() {
        error_email.isDisplayed();
    }
    public void check_error_number() {
        error_number.isDisplayed();
    }

    public void select_country(String country) {
        Select dropdown = new Select(dropDown_country);
        dropdown.selectByVisibleText(country);
    }
}