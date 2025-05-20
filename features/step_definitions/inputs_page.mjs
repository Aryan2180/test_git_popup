import { Given, When, Then, After, setDefaultTimeout, Before } from "@dev-blinq/cucumber-js";
import { closeContext, initContext, navigate } from "automation_model";
setDefaultTimeout(60 * 1000);

const path = null;

const elements = {
  combobox_dropdown_: {
    locators: [
      { css: 'internal:label="Dropdown:"i', priority: 1 },
      { css: 'internal:label="Dropdown:"s', priority: 1 },
    ],
    element_name: "Dropdown: combobox",
  },
  combobox_dropdown__1: {
    locators: [
      { css: 'internal:label="Dropdown:"i', priority: 1 },
      { css: 'internal:label="Dropdown:"s', priority: 1 },
    ],
    element_name: "Dropdown: combobox",
  },
  combobox_dropdown__2: {
    locators: [
      { css: 'internal:label="Dropdown:"i', priority: 1 },
      { css: 'internal:label="Dropdown:"s', priority: 1 },
    ],
    element_name: "Dropdown: combobox",
  },
  combobox_dropdown__3: {
    locators: [
      { css: 'internal:label="Dropdown:"i', priority: 1 },
      { css: 'internal:label="Dropdown:"s', priority: 1 },
    ],
    element_name: "Dropdown: combobox",
  },
  searchbox_search_: {
    locators: [
      { css: 'internal:role=searchbox[name="Search..."i]', priority: 1 },
      { css: 'internal:role=searchbox[name="Search..."s]', priority: 1 },
    ],
    element_name: "Search... searchbox",
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
 * The user selects dropdown value "<dropdown_value>" from the Dropdown
 * @param {string} _dropdown_value  dropdown value
 * @recorder
 * @path=/inputs/
 */
async function the_user_selects_dropdown_value_dropdown_value_from_the_dropdown(_dropdown_value) {
  // source: recorder
  // implemented_at: 2025-05-20T06:03:54.352Z
  const _params = { _dropdown_value };
  // Select "_dropdown_value" from Dropdown: combobox
  await context.web.selectOption(elements["combobox_dropdown_"], _dropdown_value, _params, null, this);
}

When(
  "The user selects dropdown value {string} from the Dropdown",
  { timeout: 60000 },
  the_user_selects_dropdown_value_dropdown_value_from_the_dropdown
);

/**
 * Verify that the innerText property of the select tag Dropdown: is "dropdown 1
dropdown 3"
 * @param {string} _param_0  param 0
 * @recorder
 * @path=/inputs/
 */
async function verify_that_the_innertext_property_of_the_select_tag_dropdown_is_dropdown_1_dropdown_3(_param_0) {
  // source: recorder
  // implemented_at: 2025-05-20T06:03:54.360Z
  const _params = { _param_0 };
  await context.web.verifyAttribute(
    elements["combobox_dropdown__1"],
    "innerText",
    "dropdown 1\ndropdown 3",
    _params,
    null,
    this
  );
}

Then(
  "Verify that the innerText property of the select tag Dropdown: is {string}",
  { timeout: 60000 },
  verify_that_the_innertext_property_of_the_select_tag_dropdown_is_dropdown_1_dropdown_3
);

/**
 * Verify that the innerText property of the select tag Dropdown: is "dropdown 1
dropdown 2
dropdown4" 1
 * @param {string} _param_0  param 0
 * @recorder
 * @path=/inputs/
 */
async function verify_that_the_innertext_property_of_the_select_tag_dropdown_is_dropdown_1_dropdown_2_dropdown4_1(
  _param_0
) {
  // source: recorder
  // implemented_at: 2025-05-20T06:03:54.371Z
  const _params = { _param_0 };
  await context.web.verifyAttribute(
    elements["combobox_dropdown__2"],
    "innerText",
    "dropdown 1\ndropdown 2\ndropdown4",
    _params,
    null,
    this
  );
}

Then(
  "Verify that the innerText property of the select tag Dropdown: is {string} 1",
  { timeout: 60000 },
  verify_that_the_innertext_property_of_the_select_tag_dropdown_is_dropdown_1_dropdown_2_dropdown4_1
);

/**
 * Verify that the innerText property of the select tag Dropdown: is "/dropdown 1
dropdown 3/" 2
 * @param {string} _param_0  param 0
 * @recorder
 * @path=/inputs/
 */
async function verify_that_the_innertext_property_of_the_select_tag_dropdown_is_dropdown_1_dropdown_3_2(_param_0) {
  // source: recorder
  // implemented_at: 2025-05-20T06:03:54.382Z
  const _params = { _param_0 };
  await context.web.verifyAttribute(
    elements["combobox_dropdown__3"],
    "innerText",
    "/dropdown 1\ndropdown 3/",
    _params,
    null,
    this
  );
}

Then(
  "Verify that the innerText property of the select tag Dropdown: is {string} 2",
  { timeout: 60000 },
  verify_that_the_innertext_property_of_the_select_tag_dropdown_is_dropdown_1_dropdown_3_2
);

/**
 * The user clicks on the Search searchbox
 * @recorder
 * @path=/inputs/
 */
async function the_user_clicks_on_the_search_searchbox() {
  // source: recorder
  // implemented_at: 2025-05-20T06:13:54.904Z
  const _params = {};
  // Click on Search... searchbox
  await context.web.click(elements["searchbox_search_"], _params, null, this);
}

When("The user clicks on the Search searchbox", { timeout: 60000 }, the_user_clicks_on_the_search_searchbox);
