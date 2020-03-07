Feature: Validation of AngularIO page

   Validation AngularIO page

   @angularIO @ready
   Scenario: Validate AngularIO Home Page
      Given I am on "https://angularjs.org" page
      When I click on "angular.io" link
      Then I expect to see "Angular" page

   @angularIO @ready
   Scenario: Validate Search on AngularIO home page
      Given I am on "https://angular.io/" page
      When I enter "Hello" on the Search textbox
      Then I expect to see matching results


