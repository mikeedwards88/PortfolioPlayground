package Project1.Pages;
import Project1.TestBase;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

public class HomePage_PF extends TestBase {
    @FindBy(xpath = "//*[@id=\"pageProfile\"]/form")
    WebElement form_body;
    @FindBy(xpath = "//*[@id=\"logout\"]")
    WebElement button_logout;
    @FindBy(xpath = "//*[@id=\"greetings\"]")
    WebElement field_loginMessage;
    @FindBy(xpath = "//*[@id=\"save\"]")
    WebElement button_save;
    @FindBy(xpath = "//*[@id=\"country\"]")
    WebElement dropDown_country;
    @FindBy(xpath = "//*[@id=\"address\"]")
    WebElement field_address;
    @FindBy(xpath = "//*[@id=\"email\"]")
    WebElement field_email;
    @FindBy(xpath = "//*[@id=\"phone\"]")
    WebElement field_phone;


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
    public void check_for_country_error() {
        String formBodyText = form_body.getText();
        Assert.assertTrue("Error Message is NOT displayed",formBodyText.contains("Please choose your country"));
    }
    public void check_for_address_error() {
        String formBodyText = form_body.getText();
        Assert.assertTrue("Error Message is NOT displayed",formBodyText.contains("Please enter your address"));
    }
    public void check_for_email_error() {
        String formBodyText = form_body.getText();
        Assert.assertTrue("Error Message is NOT displayed",formBodyText.contains("Please enter a valid email"));
    }
    public void check_for_number_error() {
        String formBodyText = form_body.getText();
        Assert.assertTrue("Error Message is NOT displayed",formBodyText.contains("Please enter a valid phone number"));
    }
    public void check_no_country_error() {
        String formBodyText = form_body.getText();
        Assert.assertFalse("Error Message Still Present",formBodyText.contains("Please choose your country"));
    }
    public void check_no_address_error() {
        String formBodyText = form_body.getText();
        Assert.assertFalse("Error Message Still Present",formBodyText.contains("Please enter your address"));
    }
    public void check_no_email_error() {
        String formBodyText = form_body.getText();
        Assert.assertFalse("Error Message Still Present",formBodyText.contains("Please enter a valid email"));
    }
    public void check_no_number_error() {
        String formBodyText = form_body.getText();
        Assert.assertFalse("Error Message Still Present", formBodyText.contains("Please enter a valid phone number"));
    }
    public void select_country(String country) {
        Select dropdown = new Select(dropDown_country);
        dropdown.selectByVisibleText(country);
    }
    public void enter_address(String address) {
        field_address.sendKeys(address);
    }
    public void enter_email(String email) {
        field_email.sendKeys(email);
    }
    public void enter_phone(String phone) {
        field_phone.sendKeys(phone);
    }
    public void verify_form_saved() {
        String savedForm = form_body.getText();
        Assert.assertTrue("Form was NOT saved",savedForm.contains("Saved"));
    }
}