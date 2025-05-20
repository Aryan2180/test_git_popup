Feature: User interaction flow
	
Scenario Outline: Login and add to cart
	# fill Username with <username>, fill Password with <password>, click on Login
	Given The user logs in with username "<username>" and password "<password>"
	# click on Add to cart in the context of <mechanical_keyboard_product_name>, click on Add to cart in the context of <mizu_bottle_product_name>
	When The user context clicks on Add to cart button in the context of "<mechanical_keyboard_product_name>" and "<mizu_bottle_product_name>"
		Examples:
		| username   | password  | mechanical_keyboard_product_name | mizu_bottle_product_name         |
		| blinq_user | let_me_in | KeyX 3000 - Mechanical Keyboard  | Mizu Bottle - Durable Hot & Cold |
