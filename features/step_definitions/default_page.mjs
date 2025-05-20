import { Given, When, Then, After, setDefaultTimeout, Before } from "@dev-blinq/cucumber-js";
import { closeContext, initContext, navigate } from "automation_model";
setDefaultTimeout(60 * 1000);

const path = null;

const elements = {
  link_form_input_interaction: {
    locators: [
      { css: 'internal:role=link[name="Form & Input Interaction"i]', priority: 1 },
      { css: 'internal:role=link[name="Form & Input Interaction"s]', priority: 1 },
      { css: 'internal:text="Form & Input Interaction"i', priority: 1 },
      { css: 'internal:text="Form & Input Interaction"s', priority: 1 },
      { css: 'a >> internal:has-text="Form & Input Interaction"i', priority: 1 },
      { css: "a >> internal:has-text=/^Form & Input Interaction$/", priority: 1 },
    ],
    element_name: "Form & Input Interaction link",
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
 * The user navigates to Form and Input Interaction page
 * @recorder
 * @path=/
 */
async function the_user_navigates_to_form_and_input_interaction_page() {
  // source: recorder
  // implemented_at: 2025-05-20T06:03:54.341Z
  const _params = {};
  // Click on Form & Input Interaction link
  await context.web.click(elements["link_form_input_interaction"], _params, null, this);
}

Given(
  "The user navigates to Form and Input Interaction page",
  { timeout: 60000 },
  the_user_navigates_to_form_and_input_interaction_page
);
