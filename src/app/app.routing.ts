import { Routes, RouterModule } from "@angular/router";

import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipesComponent } from './recipes/recipes.component';

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    { path: 'recipes', component: RecipesComponent },
    { path: 'shopping-list', component: ShoppingListComponent }
]

export const routing = RouterModule.forRoot(APP_ROUTES);