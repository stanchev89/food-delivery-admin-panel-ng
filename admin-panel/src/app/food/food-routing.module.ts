import {Routes,RouterModule} from "@angular/router";
import {FoodListComponent} from "./food-list/food-list.component";

const routes: Routes = [
    {
        path: 'food',
        component: FoodListComponent,
    },
    {
        path: 'food/daily_menu',
        component: FoodListComponent,
    },
    {
        path: 'food/all_dishes',
        component: FoodListComponent,
    }

];

export const FoodRoutingModule = RouterModule.forChild(routes);
