Feature: Data logic flow 

  Scenario Outline: Luanch testing files into the programs
    Given user login
    When user click the event list
    Then <list> will  be display
    
    Given the command as <command>
    When I add the parameters as <parameters>
    Then I got the output as <result>

    Examples:
      | command | parameters   | result     |
      | main.js | ./../../../config/myexpense.json  | All Pass！ |
      | main.js | ./../../../config/mylearning.json  | All Pass！|


