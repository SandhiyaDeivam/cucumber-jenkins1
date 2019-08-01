package package1;

import org.testng.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class casestudy3 {
	WebDriver driver;
	@Given("user opens the TestMeApp and login")
	public void user_opens_the_TestMeApp_and_login() {
		System.setProperty("webdriver.chrome.driver", "C:\\seldriver\\chromedriver.exe");
	    driver=new ChromeDriver();
	    driver.get("http://10.232.237.143:443/TestMeApp");
	    driver.findElement(By.xpath("//a[@href='login.htm']")).click();
	    driver.findElement(By.id("userName")).sendKeys("Lalitha");
	    driver.findElement(By.id("password")).sendKeys("password123");
	    driver.findElement(By.xpath("//input[@value='Login']")).click();
	}

	@When("user searches for a particular product like headphones")
	public void user_searches_for_a_particular_product_like_headphones() {
		   WebElement search = driver.findElement(By.id("myInput"));
           search.sendKeys("h");
		   search.sendKeys("e");
		   search.sendKeys("a");
		   search.sendKeys("d");
		   Actions act1 = new Actions(driver);
		   act1.moveToElement(driver.findElement(By.xpath("//div[contains(text(),'Headphone')]"))).click().build().perform();
	}

	@When("user clicks findDetails button")
	public void user_clicks_findDetails_button() {
		driver.findElement(By.xpath("//input[@value='FIND DETAILS']")).click();
	}

	@When("user proceed to payment by addding product to the cart and clicks the Add To Cart button")
	public void user_proceed_to_payment_by_addding_product_to_the_cart_and_clicks_the_Add_To_Cart_button() {
		//String title=driver.getTitle();
		//Assert.assertEquals("Search", title);
		//driver.findElement(By.linkText("Add to cart")).click();
		//driver.findElement(By.partialLinkText("Cart")).click();
	}
}
