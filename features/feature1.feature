Feature: feature1

  Scenario Outline: buy item
    Given login with "<username>" and "<password>"

    Examples:
      | username   | password |
      | blinq_user | {{data}} |