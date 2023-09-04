import {test,expect} from "../fixtures/pomFixture";
import { assigneeType, statusType } from "../model/todoModel";
import { randomString } from "../utils/utils";



test.describe("To do App test",()=>{

    let summary:string;
    test.beforeEach(async ({page})=>{    
        await page.goto("/");
        summary = await randomString(5);
        
    })


    test('verify user able to create new task', async ({page,homePage,createTaskPage }) => {
        await homePage.gotoCreateTask();
        await createTaskPage.createTask({
            summary:summary,
            description : "test",
            status:statusType.inprogress,
            assignee:assigneeType.admin,
        })
        
        //veriry task just created display on home page
        await expect(page.getByRole('heading', { name: 'Todo Tasks' })).toBeVisible();
        await expect(page.getByRole('cell', { name: summary })).toBeVisible();

    }
    );

    test('verify user able to update  task', async ({page,homePage,createTaskPage,editTaskPage }) => {
        await homePage.gotoCreateTask();
        await createTaskPage.createTask({
            summary:summary,
            description : "test",
            status:statusType.inprogress,
            assignee:assigneeType.admin,
        })
        //go to edit page by click to summary of task
        await homePage.gotoViewOfItem(summary);
        await editTaskPage.updateTask("new summary "+summary);

        //veriry task just created display on home page
        await expect(page.getByRole('heading', { name: 'Todo Tasks' })).toBeVisible();
        await expect(page.getByRole('cell', { name: "new summary "+summary })).toBeVisible();
        
    }
    );

    test('verify user able to delete task', async ({page,homePage,createTaskPage,editTaskPage }) => {
        await homePage.gotoCreateTask();
        await createTaskPage.createTask({
            summary:summary,
            description : "test",
            status:statusType.inprogress,
            assignee:assigneeType.admin,
        })
        //go to edit page by click to summary of task
        await homePage.gotoViewOfItem(summary);
        await editTaskPage.deleteTask();

        //veriry task just deleted shoul not  display on home page
        await expect(page.getByRole('heading', { name: 'Todo Tasks' })).toBeVisible();
        await expect(page.getByRole('cell', { name: summary })).toBeHidden();
        
    }
    )





})