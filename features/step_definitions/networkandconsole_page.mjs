import { Given, When, Then, After, setDefaultTimeout, Before } from "@dev-blinq/cucumber-js";
import { closeContext, initContext, navigate } from "automation_model";
setDefaultTimeout(60 * 1000);

const path = null;

const elements = {
  link_test_string_15: {
    locators: [
      { css: 'internal:role=link[name="Test String 15"i]', priority: 1 },
      { css: 'internal:role=link[name="Test String 15"s]', priority: 1 },
      { css: 'internal:text="Test String 15"i', priority: 1 },
      { css: 'internal:text="Test String 15"s', priority: 1 },
      { css: 'a >> internal:has-text="Test String 15"i', priority: 1 },
      { css: "a >> internal:has-text=/^Test String 15$/", priority: 1 },
    ],
    element_name: "Test String 15 link",
  },
  listitem_https_httpstat_us_200_status_co: {
    locators: [
      { css: 'internal:text="https://httpstat.us/200 ("i', priority: 1 },
      { css: 'internal:text="https://httpstat.us/200 (Status Code: 200)"i', priority: 1 },
      { css: 'internal:text="https://httpstat.us/200 (Status Code: 200)"s', priority: 1 },
      { css: 'li >> internal:has-text="https://httpstat.us/200 ("i', priority: 1 },
      { css: 'li >> internal:has-text="https://httpstat.us/200 (Status Code: 200)"i', priority: 1 },
      { css: "li >> internal:has-text=/^https:\\/\\/httpstat\\.us\\/200 \\(Status Code: 200\\)$/", priority: 1 },
    ],
    element_name: "https://httpstat.us/200 (Status Code: 200) listitem",
  },
};

let context = null;
Before(async function () {
  if (!context) {
    context = await initContext(path, false, false, this);
  }
  await navigate(path);
});
After(async function () {
  await closeContext();
  context = null;
});
/**
 * The user navigates to Test String 15 details page
 * @recorder
 * @path=/networkAndConsole/
 */
async function the_user_navigates_to_test_string_15_details_page() {
  // source: recorder
  // implemented_at: 2025-05-13T12:35:15.281Z
  const _params = {};
  // Click on Test String 15 link
  await context.web.click(elements["link_test_string_15"], _params, null, this);
}

When(
  "The user navigates to Test String 15 details page",
  { timeout: 60000 },
  the_user_navigates_to_test_string_15_details_page
);

/**
 * The user clicks on https:__httpstat.us_200 Status Code 200 listitem
 * @recorder
 * @path=/networkAndConsole/string15/
 */
async function the_user_clicks_on_https__httpstatus_200_status_code_200_listitem() {
  // source: recorder
  // implemented_at: 2025-05-13T12:35:15.293Z
  const _params = {};
  // Click on https://httpstat.us/200 (Status Code: 200) listitem
  await context.web.click(elements["listitem_https_httpstat_us_200_status_co"], _params, null, this);
}

When(
  "The user clicks on https:__httpstat.us_200 Status Code 200 listitem",
  { timeout: 60000 },
  the_user_clicks_on_https__httpstatus_200_status_code_200_listitem
);
