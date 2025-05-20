import { Given, When, Then, After, setDefaultTimeout, Before } from "@dev-blinq/cucumber-js";
import { closeContext, initContext, navigate } from "automation_model";
setDefaultTimeout(60 * 1000);

const path = null;

const elements = {
  button_add_to_cart_2: {
    locators: [
      {
        css: 'div.MuiGrid-root.MuiGrid-container > div.MuiGrid-root.MuiGrid-item:nth-child(1) > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiCard-root > div.MuiBox-root > button.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium[aria-label="Add\\ to\\ cart"]',
        priority: 1,
      },
      { css: 'internal:text="KeyX 3000 - Mechanical"i >> xpath=../.. >> internal:label="Add to cart"i', priority: 2 },
      { css: 'internal:text="KeyX 3000 - Mechanical"i >> xpath=../.. >> internal:label="Add to cart"s', priority: 2 },
      {
        css: 'internal:text="KeyX 3000 - Mechanical"i >> xpath=../.. >> internal:role=button[name="Add to cart"i]',
        priority: 2,
      },
      {
        css: 'internal:text="KeyX 3000 - Mechanical"i >> xpath=../.. >> internal:role=button[name="Add to cart"s]',
        priority: 2,
      },
    ],
    element_name: "Add to cart (KeyX 3000 - Mechanical Keyboard)",
    tagName: null,
  },
  button_add_to_cart_3: {
    locators: [
      {
        css: 'div.MuiGrid-root.MuiGrid-container > div.MuiGrid-root.MuiGrid-item:nth-child(2) > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-rounded.MuiCard-root > div.MuiBox-root > button.MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeMedium[aria-label="Add\\ to\\ cart"]',
        priority: 1,
      },
      {
        css: 'internal:text="Mizu Bottle - Durable Hot & Cold$"i >> xpath=.. >> internal:label="Add to cart"i',
        priority: 2,
      },
      {
        css: 'internal:text="Mizu Bottle - Durable Hot & Cold$"i >> xpath=.. >> internal:label="Add to cart"s',
        priority: 2,
      },
      {
        css: 'internal:text="Mizu Bottle - Durable Hot & Cold$"i >> xpath=.. >> internal:role=button[name="Add to cart"i]',
        priority: 2,
      },
      {
        css: 'internal:text="Mizu Bottle - Durable Hot & Cold$"i >> xpath=.. >> internal:role=button[name="Add to cart"s]',
        priority: 2,
      },
    ],
    element_name: "Add to cart (Mizu Bottle - Durable Hot & Cold)",
    tagName: null,
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
 * The user context clicks on Add to cart button in the context of "<mechanical_keyboard_product_name>" and "<mizu_bottle_product_name>"
 * @param {string} _mechanical_keyboard_product_name  mechanical keyboard product name
 * @param {string} _mizu_bottle_product_name  mizu bottle product name
 * @ai
 */
async function the_user_context_clicks_on_add_to_cart_button_in_the_context_of_mechanical_keyboard_product_name_and_mizu_bottle_product_name(
  _mechanical_keyboard_product_name,
  _mizu_bottle_product_name
) {
  // source: ai
  // implemented_at: 2025-05-20T04:13:27.493Z
  const _params = { _mechanical_keyboard_product_name, _mizu_bottle_product_name };
  // Click on Add to cart (KeyX 3000 - Mechanical Keyboard)
  await context.web.click(elements["button_add_to_cart_2"], _params, null, this);
  // Click on Add to cart (Mizu Bottle - Durable Hot & Cold)
  await context.web.click(elements["button_add_to_cart_3"], _params, null, this);
}

When(
  "The user context clicks on Add to cart button in the context of {string} and {string}",
  { timeout: 120000 },
  the_user_context_clicks_on_add_to_cart_button_in_the_context_of_mechanical_keyboard_product_name_and_mizu_bottle_product_name
);
