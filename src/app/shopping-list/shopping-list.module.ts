import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingListAddComponent } from './shopping-list-add.component';
import { ShoppingListComponent } from './shopping-list.component';

@NgModule({
    declarations: [
        ShoppingListComponent,
        ShoppingListAddComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ] 
})
export class ShoppingListModule {}