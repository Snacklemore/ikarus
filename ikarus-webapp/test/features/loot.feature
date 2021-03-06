
Feature: Loot
  As Ikarus web application
  I want to receive loot from monitor
  So that my players can use the loot

  Scenario: Receiving mission loot from supply mission
    Given player "John Doe" with Steam ID "123" exists
    And server "test-server" is registered
    And I am logged in as server "test-server"
    And server "test-server" has status "waiting"
    And company "Manatee-Men" exists
    And "John Doe" is a member of company "Manatee-Men"
    And I am logged in as "John Doe"
    And I create a squad
    And I enter my squad to the queue
    And I am logged in as server "test-server"
    When mission loot "test-loot" is sent from server "test-server" to squad containing "John Doe" from objective "Supply"
    Then "Manatee-Men" should have "1" "CUP_srifle_LeeEnfield" in armory
    And "Manatee-Men" should have "5" "CUP_10x_303_M" in armory

  Scenario: Base modules remove loot they add to the mission
    Given player "John Doe" with Steam ID "123" exists
    And server "test-server" is registered
    And I am logged in as server "test-server"
    And server "test-server" has status "waiting"
    And company "Manatee-Men" exists
    And "John Doe" is a member of company "Manatee-Men"
    And I am logged in as "John Doe"
    And I create a squad
    And I enter my squad to the queue
    And I am logged in as server "test-server"
    When mission loot "hlc_rifle_ak74" is sent from server "test-server" to squad containing "John Doe" from objective "Supply"
    Then "Manatee-Men" should have "0" "hlc_rifle_ak74" in armory
