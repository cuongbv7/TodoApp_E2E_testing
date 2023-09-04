import { Locator, Page } from "@playwright/test";
import { assigneeType, statusType, todoModel } from "../model/todoModel";
import { homePage } from "./homePage";

export class createTaskPage {
  private readonly page: Page;
  private readonly createBtn: Locator;
  private readonly summary: Locator;
  private readonly description: Locator;
  private readonly status: Locator;
  private readonly assignee: Locator;

  constructor(page: Page) {
    this.page = page;
    this.createBtn = this.page.getByRole("button", { name: "Create" });
    this.summary = this.page.locator("#summary");
    this.description = this.page.locator("#description");
    this.status = this.page.locator("#status");
    this.assignee = this.page.locator("#assignee");
  }

  async selectStatus(status: statusType) {
    await this.status.click();
    await this.page.getByText(status).click();
    return this;
  }

  async selectAssignee(assignee: assigneeType) {
    await this.assignee.click();
    await this.page.getByText(assignee).click();
    return this;
  }

  async createTask(task: todoModel) {
    await this.summary.fill(task.summary);
    await this.description.fill(task.description);
    await this.createBtn.click();
    return new homePage(this.page);
  }
}
