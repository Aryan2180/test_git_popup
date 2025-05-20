import { Given, When, Then, After, setDefaultTimeout, Before } from "@dev-blinq/cucumber-js";
import { closeContext, initContext, navigate } from "automation_model";
setDefaultTimeout(60 * 1000);

const path = null;

const elements = {
  textbox_username_1: {
    locators: [
      { css: "#username", priority: 1 },
      { css: 'internal:label="Username *"i', priority: 1 },
      { css: 'internal:label="Username *"s', priority: 1 },
      { css: 'internal:role=textbox[name="Username"i]', priority: 1 },
      { css: 'internal:role=textbox[name="Username"s]', priority: 1 },
    ],
    element_name: "Username",
  },
  textbox_password_1: {
    locators: [
      { css: "#password", priority: 1 },
      { css: 'internal:label="Password *"i', priority: 1 },
      { css: 'internal:label="Password *"s', priority: 1 },
      { css: 'internal:role=textbox[name="Password"i]', priority: 1 },
      { css: 'internal:role=textbox[name="Password"s]', priority: 1 },
    ],
    element_name: "Password",
  },
  button_login_1: {
    locators: [
      { css: "button", priority: 1 },
      { css: 'internal:role=button[name="Login"i]', priority: 1 },
      { css: 'internal:role=button[name="Login"s]', priority: 1 },
      { css: 'internal:text="Login"i', priority: 1 },
      { css: 'internal:text="Login"s', priority: 1 },
      { css: 'button >> internal:has-text="Login"i', priority: 1 },
      { css: "button >> internal:has-text=/^Login$/", priority: 1 },
    ],
    element_name: "LOGIN button",
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
 * The user logs in with username "<username>" and password "<password>"
 * @param {string} _username  username
 * @param {string} _password  password
 * @ai
 */
async function the_user_logs_in_with_username_username_and_password_password(_username, _password) {
  // source: ai
  // implemented_at: 2025-05-20T04:13:27.372Z
  const _params = { _username, _password };
  // Fill Username with "_username"
  await context.web.clickType(elements["textbox_username_1"], _username, false, _params, null, this);
  // Fill Password with "_password"
  await context.web.clickType(elements["textbox_password_1"], _password, false, _params, null, this);
  // Click on LOGIN button
  await context.web.click(elements["button_login_1"], _params, null, this);
  let caught = null;
  
  try {
    await context.web.verifyPagePath("$$NON_EXISTENT_PATH$$", {}, this);
  } catch (e) {
    caught = e;
    console.log("error:", e.message);
  }
}

Given(
  "The user logs in with username {string} and password {string}",
  { timeout: 240000 },
  the_user_logs_in_with_username_username_and_password_password
);
