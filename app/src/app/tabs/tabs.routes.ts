import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const tabsRoutes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'jadlospis',
        loadComponent: () => import('../pages/meal-plan/meal-plan.page').then((m) => m.MealPlanPage),
      },
      {
        path: 'cele',
        loadComponent: () => import('../pages/goals/goals.page').then((m) => m.GoalsPage),
      },
      {
        path: 'asystent',
        loadComponent: () => import('../pages/assistant/assistant.page').then((m) => m.AssistantPage),
      },
      {
        path: 'przepisy',
        loadComponent: () => import('../pages/recipes/recipes.page').then((m) => m.RecipesPage),
      },
      {
        path: 'wiecej',
        loadComponent: () => import('../pages/more/more.page').then((m) => m.MorePage),
      },
      { path: '', redirectTo: 'jadlospis', pathMatch: 'full' },
    ],
  },
];
