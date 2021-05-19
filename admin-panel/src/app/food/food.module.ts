import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FoodListComponent} from './food-list/food-list.component';
import {FoodRoutingModule} from './food-routing.module';
import { DishItemListComponent } from './dish-item-list/dish-item-list.component'


@NgModule({
    declarations: [
        FoodListComponent,
        DishItemListComponent
    ],
    imports: [
        CommonModule,
        FoodRoutingModule
    ]
})
export class FoodModule {
}
