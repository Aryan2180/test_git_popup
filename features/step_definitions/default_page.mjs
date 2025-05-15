import { Given, When, Then, After, setDefaultTimeout, Before } from "@dev-blinq/cucumber-js";
import { closeContext, initContext, navigate } from "automation_model";
setDefaultTimeout(60 * 1000);

const path = null;

const elements = {
  link_network_console: {
    locators: [
      { css: 'internal:role=link[name="Network & Console"i]', priority: 1 },
      { css: 'internal:role=link[name="Network & Console"s]', priority: 1 },
      { css: 'internal:text="Network & Console"i', priority: 1 },
      { css: 'internal:text="Network & Console"s', priority: 1 },
      { css: 'a >> internal:has-text="Network & Console"i', priority: 1 },
      { css: "a >> internal:has-text=/^Network & Console$/", priority: 1 },
    ],
    element_name: "Network & Console link",
  },
  link_form_input_interaction: {
    locators: [
      { css: 'internal:role=link[name="{form_and_input_interaction_text}"i]', priority: 1 },
      { css: 'internal:role=link[name="{form_and_input_interaction_text}"s]', priority: 1 },
      { css: 'internal:text="{form_and_input_interaction_text}"i', priority: 1 },
      { css: 'internal:text="{form_and_input_interaction_text}"s', priority: 1 },
      { css: 'a >> internal:has-text="{form_and_input_interaction_text}"i', priority: 1 },
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
 * The user navigates to Network and Console page
 * @recorder
 * @path=/
 */
async function the_user_navigates_to_network_and_console_page() {
  // source: recorder
  // implemented_at: 2025-05-13T12:35:15.269Z
  const _params = {};
  // Click on Network & Console link
  await context.web.click(elements["link_network_console"], _params, null, this);
}

When(
  "The user navigates to Network and Console page",
  { timeout: 60000 },
  the_user_navigates_to_network_and_console_page
);

/**
 * The user parameterized clicks on the "<form_and_input_interaction_text>" link to navigate to the form and input interaction page
 * @param {string} _form_and_input_interaction_text  form and input interaction text
 * @recorder
 * @path=/
 */
async function the_user_parameterized_clicks_on_the_form_and_input_interaction_text_link_to_navigate_to_the_form_and_input_interaction_page(
  _form_and_input_interaction_text
) {
  // source: recorder
  // implemented_at: 2025-05-15T09:36:11.798Z
  const _params = { _form_and_input_interaction_text };
  //  Parameterized click on <form_and_input_interaction_text>
  await context.web.click(elements["link_form_input_interaction"], _params, null, this);
}

When(
  "The user parameterized clicks on the {string} link to navigate to the form and input interaction page",
  { timeout: 60000 },
  the_user_parameterized_clicks_on_the_form_and_input_interaction_text_link_to_navigate_to_the_form_and_input_interaction_page
);
