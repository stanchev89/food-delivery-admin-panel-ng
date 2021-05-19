import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {FoodService} from "../food.service";
import {AppRootState} from "../../+store";
import {setSelectedMenu} from "../../+store/actions";
import {map} from 'rxjs/operators'
import {Router} from "@angular/router";

@Component({
    selector: 'app-food-list',
    templateUrl: './food-list.component.html',
    styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit, OnDestroy {
    asideBarMenu = {
        food: {
            daily_menu: 'Daily Menu',
            all_dishes: 'All Dishes',
            add_new_dish: 'Add new dish'
        }
    };
    // @ts-ignore
    dishes$ = this.store.select((state: AppRootState) => state.food.allDishes).pipe(
        map(allDishes =>
            this.router.url.includes('daily_menu')
                ? allDishes.filter(d => d.daily_menu).sort((a, b) => a.name.localeCompare(b.name))
                : Array.from(allDishes).sort((a, b) => a.name.localeCompare(b.name))
        )
    );
    salads$ = this.dishes$.pipe(
        map(dishes => dishes.filter(d => d.category === 'salad'))
    );
    soups$ = this.dishes$.pipe(
        map(dishes => dishes.filter(d => d.category === 'soup'))
    );
    mainDish$ = this.dishes$.pipe(
        map(dishes => dishes.filter(d => d.category === 'main'))
    );
    deserts$ = this.dishes$.pipe(
        map(dishes => dishes.filter(d => d.category === 'desert'))
    );

    typeMenu = this.router.url.includes('daily_menu') ? 'Daily Menu' : 'All Dishes'

    constructor(private store: Store, private foodService: FoodService, private router: Router) {
    }

    ngOnInit(): void {
        this.foodService.loadAllDishes().subscribe();
        this.store.dispatch(setSelectedMenu({asideMenu: this.asideBarMenu}))

    }

    ngOnDestroy(): void {
        this.store.dispatch(setSelectedMenu({asideMenu: null}))
    }

}
