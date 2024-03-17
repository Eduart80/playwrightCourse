import { test } from "@playwright/test";
import {v4 as uuid4} from "uuid";
import { ProductPage } from "../Page_Object/ProductPage"

test("New user register", async ({ page }) => {
  const productPage = new ProductPage(page);
  const emailRandom = uuid4()

  await productPage.visit();
  await page.getByRole("link", { name: "Checkout" }).click();
  await page.getByRole("button", { name: "Continue to Checkout" }).click();
  await page.locator('[data-qa="go-to-signup-button"]').click()
  await page.getByPlaceholder("E-Mail").click();
  await page.getByPlaceholder("E-Mail").fill(`${emailRandom}@test.com`)
  await page.getByPlaceholder("Password").click();
  await page.getByPlaceholder("Password").fill('1234')
  await page.getByRole("button", {name: "Register"}).click()
  await page.pause()
});
