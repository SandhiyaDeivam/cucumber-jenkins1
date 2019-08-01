Feature: New User registration

Scenario: Registration for TestMe Application
Given user opens web browser and opens testme application
When user clicks signup
When user enters username as "Shiroh"
When user enters firstname as "Shiroh"
When user enters lastname as "Sudha"
When user enters password as "sudha1997"
When user enters confirm password "sudha1997"
And user select gender as "female"
And user enters email as "sudhadass1997@gmail.com"
And user enters mobile number as "8428643374"
And user enters dob as "06/18/1998"
And user enters address as "chennai"
Then user enters answer as "ajith"
And user clicks on register button
Then verify registration