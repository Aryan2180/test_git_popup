Feature: Form and Input Interaction
	
Scenario Outline: Verify dropdown values selection
	# click on Form & Input Interaction link
	Given The user navigates to Form and Input Interaction page
	# select <dropdown_value> from Dropdown: combobox
	When The user selects dropdown value "<dropdown_value>" from the Dropdown
	Then Verify that the innerText property of the select tag Dropdown: is "dropdown 1__NEWLINE__dropdown 3"
	Then Verify that the innerText property of the select tag Dropdown: is "/dropdown 1__NEWLINE__dropdown 3/" 2
	# click on Search...
	When The user clicks on the Search searchbox
		Examples:
		| dropdown_value |
		| dropdown2      |
