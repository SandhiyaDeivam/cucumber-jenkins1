package package1;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class casestudy2 {
	WebDriver driver;
	@Given("user opens browser and testMe application")
	public void user_opens_browser_and_testMe_application() {
		System.setProperty("webdriver.chrome.driver", "C:\\seldriver\\chromedriver.exe");
	    driver=new ChromeDriver();
	    driver.get("http://10.232.237.143:443/TestMeApp");
	    driver.findElement(By.xpath("//a[@href='login.htm']")).click();
	}

	@When("user enters username as {string} and password as {string}")
	public void user_enters_username_as_and_password_as(String un, String pwd) {
	    driver.findElement(By.id("userName")).sendKeys(un);
	    driver.findElement(By.id("password")).sendKeys(pwd);
	    
	}

	@When("user clicks login")
	public void user_clicks_login() {
	    driver.findElement(By.xpath("//input[@value='Login']")).click();
	}

	@Then("verify login result")
	public void verify_login_result() {
		Assert.assertTrue(driver.getTitle().contains("Login"));
		   //driver.close();
	}
}
