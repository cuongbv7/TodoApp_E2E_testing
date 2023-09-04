import { test as baseTest } from '@playwright/test';


import { homePage } from "../pages/homePage";
import { createTaskPage } from '../pages/createTaskPage';
import { editTaskPage } from '../pages/editTaskPage';

type pages = {
    homePage: homePage;
    createTaskPage: createTaskPage;
    editTaskPage: editTaskPage;
}

const pageManager = baseTest.extend<pages>({
    homePage: async ({page},use)=>{
        await use(new homePage(page));
    },
    createTaskPage: async ({page},use)=>{
        await use(new createTaskPage(page));
    },
    editTaskPage: async ({page},use)=>{
        await use(new editTaskPage(page));
    }

})

export const test = pageManager;
export const expect = pageManager.expect;
