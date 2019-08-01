$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/folder/casestudy1.feature");
formatter.feature({
  "name": "New User registration",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Registration for TestMe Application",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user opens web browser and opens testme application",
  "keyword": "Given "
});
formatter.match({
  "location": "casestudy1.user_opens_web_browser_and_opens_testme_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks signup",
  "keyword": "When "
});
formatter.match({
  "location": "casestudy1.user_clicks_signup()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters username as \"Shiroh\"",
  "keyword": "When "
});
formatter.match({
  "location": "casestudy1.user_enters_username_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters firstname as \"Shiroh\"",
  "keyword": "When "
});
formatter.match({
  "location": "casestudy1.user_enters_firstname_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters lastname as \"Sudha\"",
  "keyword": "When "
});
formatter.match({
  "location": "casestudy1.user_enters_lastname_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters password as \"sudha1997\"",
  "keyword": "When "
});
formatter.match({
  "location": "casestudy1.user_enters_password_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters confirm password \"sudha1997\"",
  "keyword": "When "
});
formatter.match({
  "location": "casestudy1.user_enters_confirm_password(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select gender as \"female\"",
  "keyword": "And "
});
formatter.match({
  "location": "casestudy1.user_select_gender_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters email as \"sudhadass1997@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "casestudy1.user_enters_email_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters mobile number as \"8428643374\"",
  "keyword": "And "
});
formatter.match({
  "location": "casestudy1.user_enters_mobile_number_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters dob as \"06/18/1998\"",
  "keyword": "And "
});
formatter.match({
  "location": "casestudy1.user_enters_dob_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters address as \"chennai\"",
  "keyword": "And "
});
formatter.match({
  "location": "casestudy1.user_enters_address_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters answer as \"ajith\"",
  "keyword": "Then "
});
formatter.match({
  "location": "casestudy1.user_enters_answer_as(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on register button",
  "keyword": "And "
});
formatter.match({
  "location": "casestudy1.user_clicks_on_register_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify registration",
  "keyword": "Then "
});
formatter.match({
  "location": "casestudy1.verify()"
});
formatter.result({
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:22)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:31)\r\n\tat package1.casestudy1.verify(casestudy1.java:100)\r\n\tat ✽.verify registration(src/test/resources/folder/casestudy1.feature:18)\r\n",
  "status": "failed"
});
formatter.uri("src/test/resources/folder/casestudy2.feature");
formatter.feature({
  "name": "Login to testMe Application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Login with registered user",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user opens browser and testMe application",
  "keyword": "Given "
});
formatter.step({
  "name": "user enters username as \"\u003cusername\u003e\" and password as \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user clicks login",
  "keyword": "And "
});
formatter.step({
  "name": "verify login result",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "Lalitha",
        "password123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Login with registered user",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user opens browser and testMe application",
  "keyword": "Given "
});
formatter.match({
  "location": "casestudy2.user_opens_browser_and_testMe_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters username as \"Lalitha\" and password as \"password123\"",
  "keyword": "When "
});
formatter.match({
  "location": "casestudy2.user_enters_username_as_and_password_as(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks login",
  "keyword": "And "
});
formatter.match({
  "location": "casestudy2.user_clicks_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify login result",
  "keyword": "Then "
});
formatter.match({
  "location": "casestudy2.verify_login_result()"
});
formatter.result({
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:22)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:31)\r\n\tat package1.casestudy2.verify_login_result(casestudy2.java:36)\r\n\tat ✽.verify login result(src/test/resources/folder/casestudy2.feature:7)\r\n",
  "status": "failed"
});
formatter.uri("src/test/resources/folder/casestudy3.feature");
formatter.feature({
  "name": "searching for product",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "login to testme app and search for the product",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user opens the TestMeApp and login",
  "keyword": "Given "
});
formatter.match({
  "location": "casestudy3.user_opens_the_TestMeApp_and_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user searches for a particular product like headphones",
  "keyword": "When "
});
formatter.match({
  "location": "casestudy3.user_searches_for_a_particular_product_like_headphones()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks findDetails button",
  "keyword": "When "
});
formatter.match({
  "location": "casestudy3.user_clicks_findDetails_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user proceed to payment by addding product to the cart and clicks the Add To Cart button",
  "keyword": "When "
});
formatter.match({
  "location": "casestudy3.user_proceed_to_payment_by_addding_product_to_the_cart_and_clicks_the_Add_To_Cart_button()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/folder/casestudy4.feature");
formatter.feature({
  "name": "Add to cart functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "login to testme app and search for the product",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user opens the TestMeApp and login",
  "keyword": "Given "
});
formatter.match({
  "location": "casestudy3.user_opens_the_TestMeApp_and_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user searches for a particular product like headphones",
  "keyword": "When "
});
formatter.match({
  "location": "casestudy3.user_searches_for_a_particular_product_like_headphones()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks findDetails button",
  "keyword": "When "
});
formatter.match({
  "location": "casestudy3.user_clicks_findDetails_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user proceed to payment by addding product to the cart and clicks the Add To Cart button",
  "keyword": "When "
});
formatter.match({
  "location": "casestudy3.user_proceed_to_payment_by_addding_product_to_the_cart_and_clicks_the_Add_To_Cart_button()"
});
formatter.result({
  "status": "passed"
});
});