package WeatherShopper;
import TheInternet.TestBase;
import TheInternet.Tools;
import org.openqa.selenium.By;

public class WeatherShopper {

    public static void main(String[] args) {
        System.out.println("Testing Started...........");
        new TestBase();
        loadHomePage();
        Tools.addDelay(3000);  //wait 5seconds
        checkTemperature();
        System.out.println("Testing Ended.............");
    }

    public static void loadHomePage() {

        Tools.newDriver.get("https://weathershopper.pythonanywhere.com/");
        Tools.newDriver.manage().window().maximize();
    }

    static void clickMoisturizers() {
        Tools.newDriver.findElement(By.xpath("/html/body/div/div[3]/div[1]/a/button")).click();
    }

    static void clickSunscreen() {
        Tools.newDriver.findElement(By.xpath("/html/body/div/div[3]/div[2]/a/button")).click();
    }

    static void checkTemperature() {
        String temperature = Tools.newDriver.findElement(By.xpath("//*[@id=\"temperature\"]")).getText();
        final String temperature2 = Tools.extractDigits(temperature);   //Extracts "degrees C" from temperature
        int temperatureAsInt = Integer.parseInt(temperature2);        //String to Int conversion
        System.out.println("The Temperature is: " + temperatureAsInt);

       if (temperatureAsInt <= 18) {
           System.out.println("Moisturizers Clicked");
           clickMoisturizers();
       }

       if (temperatureAsInt >= 35) {
           System.out.println("Sunscreen Clicked");
           clickSunscreen();
       }
    }
}