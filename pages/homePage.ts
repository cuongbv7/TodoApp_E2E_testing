import { Locator, Page } from "@playwright/test";
import { createTaskPage } from "./createTaskPage";

export class homePage {
  private readonly page: Page;
  private readonly createBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.createBtn =  this.page.getByRole('link', { name: 'Create' });

  }
  async gotoCreateTask() {
    await this.createBtn.click();
    return new createTaskPage(this.page);
  }

  async gotoViewOfItem(summary: string) {
    await this.page.getByRole("row", { name: summary ,exact:false}).first().getByRole('link').click();
    return this;
  }
  
}
