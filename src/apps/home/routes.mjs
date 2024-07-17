import { HomeApplicationIndexPage } from './index.mjs';
import { HomeApplicationFirstPage } from './page1.mjs';
import { HomeApplicationSecondPage } from './page2.mjs';

export const routes = {
    '/home': HomeApplicationIndexPage,
    '/home/page1': HomeApplicationFirstPage,
    '/home/page2': HomeApplicationSecondPage,
};