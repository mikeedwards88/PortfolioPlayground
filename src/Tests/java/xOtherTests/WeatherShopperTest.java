package xOtherTests;
import TheInternet.Tools;
import org.junit.Test;
import static org.junit.Assert.*;

public class WeatherShopperTest {

    @Test
    public void checkTemperature1() {
        String testString = "Th1s is 2 T3st my code";
        final String temperature2 = Tools.extractDigits(testString);
        int temperatureAsInt = Integer.parseInt(temperature2);
        assertEquals(123, temperatureAsInt);
    }

    @Test
    public void checkTemperature2() {
        String testString = "I l1ke 2 T3st my c0de";
        final String temperature2 = Tools.extractDigits(testString);
        int temperatureAsInt = Integer.parseInt(temperature2);
        assertEquals(123, temperatureAsInt);
    }
}