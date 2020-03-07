Feature: Validation of Calculator funtionality

   Validation of Calculator funtionality

   @calculator @ready
   Scenario Outline: Validate Calculator
      Given I am on "http://juliemr.github.io/protractor-demo/" page
      When I enter "<value1>", "<value2>", select "<operator>" and click Go
      Then I expect to get "<result>" as a result


      Examples:
         | value1 | value2 | operator       | result |
         | 3      | 5      | ADDITION       | 8      |
         | 3      | 5      | MULTIPLICATION | 15     |
         | 1      | 1      | MULTIPLICATION | 1      |