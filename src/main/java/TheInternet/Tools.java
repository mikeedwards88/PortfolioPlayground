package TheInternet;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;


public class Tools {
    public static WebDriver newDriver;

    public static void clearCookies() {
        Tools.newDriver.navigate().to("https://google.com");
        TheInternet.Tools.addDelay(1000);
        Tools.newDriver.findElement(By.xpath("//*[@id=\"L2AGLb\"]/div")).click();
    }

    public static void addDelay(int ms) {
        try {
            Thread.sleep(ms);
        } catch (InterruptedException ex) {
            Thread.currentThread().interrupt();
            System.out.println("Waiting.....");
            addDelay(5000);
            System.out.println("Done");
            //Example Use:  MyTools.addDelay(5000);  //wait 5seconds
        }
    }

    public static String extractDigits(String src) {
        StringBuilder builder = new StringBuilder();
        for (int i = 0; i < src.length(); i++) {
            char c = src.charAt(i);
            if (Character.isDigit(c)) {
                builder.append(c);
            }
        }
        return builder.toString();
    }
}