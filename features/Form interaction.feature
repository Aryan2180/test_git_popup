Feature: Form interaction
	@global_test_data
Scenario Outline: Navigate and fill form
	When The user parameterized clicks on the "<form_and_input_interaction_text>" link to navigate to the form and input interaction page
	# fill you@example.com with <user_email>
	When The user fills the email textbox with "<user_email>"
		Examples:
		| form_and_input_interaction_text | user_email      |
		| Form & Input Interaction        | aryan@gmail.com |
