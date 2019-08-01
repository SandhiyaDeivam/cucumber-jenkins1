Feature: Login to testMe Application

Scenario Outline: Login with registered user
Given user opens browser and testMe application
When user enters username as "<username>" and password as "<password>"
And user clicks login
Then verify login result

Examples:
|username|password|
|Lalitha|password123|  