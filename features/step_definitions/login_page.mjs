import { Given, When, Then, After, setDefaultTimeout, Before } from "@dev-blinq/cucumber-js";
import { closeContext, initContext, navigate } from "automation_model";
setDefaultTimeout(60 * 1000);

const path = null;

const elements = {
  textbox_username: {
    locators: [
      { strategy: "ROLE_NAME", css: 'internal:role=textbox[name="{password}sername"i]', parameterDependent: true },
      { strategy: "ROLE_NAME", css: 'internal:role=textbox[name="{password}sername"s]', parameterDependent: true },
      { role: ["textbox", { name: "Username *" }], priority: 2 },
      { strategy: "ID", css: "#username", priority: 2 },
      { strategy: "NAME", css: 'internal:attr=[name="username"i]', priority: 2 },
    ],
    element_name: "Username",
  },
  textbox_password: {
    locators: [
      { role: ["textbox", { name: "Password *" }] },
      { strategy: "ROLE_NAME", css: 'internal:role=textbox[name="Password"i]' },
      { strategy: "ROLE_NAME", css: 'internal:role=textbox[name="Password"s]' },
      { strategy: "ID", css: "#password", priority: 1 },
      { strategy: "NAME", css: 'internal:attr=[name="password"i]', priority: 1 },
    ],
    element_name: "Password",
  },
  button_login: {
    locators: [
      { strategy: "ROLE_NAME", css: 'internal:role=button[name="LOGIN"i]' },
      { strategy: "ROLE_NAME", css: 'internal:role=button[name="LOGIN"s]' },
    ],
    element_name: "LOGIN button",
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
 * login with "<username>" and "<password>"
 * @param {string} _username  username
 * @param {string} _password  password
 * @ai
 */
async function login_with_username_and_password(_username, _password) {
  // source: ai
  // implemented_at: 2025-05-08T04:51:48.417Z
  const _params = { _username, _password };
  // Fill Username with "_username"
  await context.web.clickType(elements["textbox_username"], _username, false, _params, null, this);
  // Fill Password with "_password"
  await context.web.clickType(elements["textbox_password"], _password, false, _params, null, this);
  // Click on LOGIN button
  await context.web.click(elements["button_login"], _params, null, this);
}

Given("login with {string} and {string}", { timeout: 240000 }, login_with_username_and_password);
