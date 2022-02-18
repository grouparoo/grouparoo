import { url } from "./helpers";

fixture("home").page(url);

test("it renders the home page", async (t) => {
  const $header = Selector("h2");
  await t.expect($header.innerText).eql("Sync, Segment, and Send your Product Data Everywhere");

  const $bottomNavigationMenu = Selector("#bottonNavigationMenu");
  await t.expect($bottomNavigationMenu.innerText).eql("Hello");

  await t.click('#bottomNavigationMenu');
});

const firstName = "mario";
const lastName = "mario";
const email = "mario@example.com";
const password = "P@ssw0rd";
const companyName = "Mario Bros. Plumbing";

fixture("create team").page(`${url}/team/initialize`);

test("it can create the first team", async (t) => {
  await t
    .typeText(companyName)
    .typeText(firstName)
    .typeText(lastName)
    .typeText(email)
    .typeText(password)
    .click('.btn-primary')

  await t.expect(Browser.getCurrentLocation()).eql(`${url}/setup`, { timeout: 5000 });
});
