package TheInternet.Pages;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage_PF {

    @FindBy(xpath = "//*[@id=\"name\"]")
    @CacheLookup                            //Once element found once, it will be cached (Performance)
    WebElement field_username;

    @FindBy(xpath = "//*[@id=\"password\"]")
    @CacheLookup
    WebElement field_password;

    @FindBy(xpath = "//*[@id=\"login\"]")
    @CacheLookup
    WebElement button_login;

    @FindBy(xpath = "//*[@id=\"pageLogin\"]/form/div[2]/div/div[2]")
    @CacheLookup
    WebElement error_message;

    WebDriver driver;

    public LoginPage_PF(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }


    public void enterUsername(String username) {
        field_username.sendKeys(username);
    }

    public void enterPassword(String password) {
        field_password.sendKeys(password);
    }

    public void clickLogin() {
        button_login.click();
    }

    public void invalidPasswordMessage(){
       error_message.isDisplayed();
    }
}
