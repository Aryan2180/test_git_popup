import { Given, When, Then, After, setDefaultTimeout, Before } from "@dev-blinq/cucumber-js";
import { closeContext, initContext, navigate } from "automation_model";
setDefaultTimeout(60 * 1000);

const path = null;

const elements = {
  checkbox_option_1: { locators: [{ text: "Option 1", css: "input", climb: 1 }], element_name: "Option 1 checkbox" },
  checkbox_option_2: { locators: [{ text: "Option 2", css: "input", climb: 1 }], element_name: "Option 2 checkbox" },
  textbox_you_example_com: {
    locators: [
      { css: 'internal:role=textbox[name="you@example.com"i]', priority: 1 },
      { css: 'internal:role=textbox[name="you@example.com"s]', priority: 1 },
    ],
    element_name: "you@example.com textbox",
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
 * The user fills the email textbox with "<user_email>"
 * @param {string} _user_email  user email
 * @recorder
 * @path=/inputs/
 */
async function the_user_fills_the_email_textbox_with_user_email(_user_email) {
  // source: recorder
  // implemented_at: 2025-05-15T09:36:11.975Z
  const _params = { _user_email };
  // Check Option 1 checkbox
  await context.web.setCheck(elements["checkbox_option_1"], true, _params, null, this);
  // Check Option 2 checkbox
  await context.web.setCheck(elements["checkbox_option_2"], true, _params, null, this);
  // Fill you@example.com textbox with "_user_email"
  await context.web.clickType(elements["textbox_you_example_com"], _user_email, false, _params, null, this);
}

When(
  "The user fills the email textbox with {string}",
  { timeout: 180000 },
  the_user_fills_the_email_textbox_with_user_email
);
