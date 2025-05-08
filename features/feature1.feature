Feature: feature1

  Scenario Outline: buy item
    Given login with "<username>" and "<password>"

    Examples:
      | username   | password | item                               |
      | blinq_user | {{data}} | Urban Backpack - Compact & Durable |