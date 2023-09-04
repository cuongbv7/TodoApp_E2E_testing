import { Locator, Page } from "@playwright/test";
import { assigneeType, statusType, todoModel } from "../model/todoModel";
import { homePage } from "./homePage";

export class editTaskPage {
  private readonly page: Page;
  private readonly summary: Locator;
  private readonly deleteBtn: Locator;
  private readonly updateBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.updateBtn = this.page.getByRole("button", { name: "Update" });
    this.deleteBtn = this.page.getByRole("button", { name: "Delete" });
    this.summary = this.page.locator("#summary");

  }


  async updateTask(summary: string) {
    await this.summary.fill(summary);
    await this.updateBtn.click();
    return new homePage(this.page);
  }

  async deleteTask() {
    await this.deleteBtn.click();
    return new homePage(this.page);
  }
}
