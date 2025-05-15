Feature: Network console navigation

  Scenario: Navigate and view test string details
	# click on Network & Console
    When The user navigates to Network and Console page
	# click on Test String 15
    When The user navigates to Test String 15 details page
	# click on https://httpstat.us/200 (Status Code: 200)
    When The user clicks on https:__httpstat.us_200 Status Code 200 listitem