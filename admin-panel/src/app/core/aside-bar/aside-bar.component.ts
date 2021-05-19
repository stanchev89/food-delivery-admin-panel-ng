import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {map} from 'rxjs/operators';

@Component({
    selector: 'app-aside-bar',
    templateUrl: './aside-bar.component.html',
    styleUrls: ['./aside-bar.component.css']
})

export class AsideBarComponent {

    // @ts-ignore
    asideMenuOptions$ = this.store.select(state => state.globals.asideMenu).pipe(
        map(obj => {
            const key = obj ? Object.keys(obj) : undefined;
            if (key) {
                return Object.entries(obj[key[0]]);
            }
            return undefined;
        })
    );
    // @ts-ignore
    currentPage$ = this.store.select(state => state.globals.asideMenu).pipe(
        map(obj => {
            if (obj) {
                return Object.keys(obj)
            }
            return null;
        })
    );

    constructor(private store: Store) {
    }

}
