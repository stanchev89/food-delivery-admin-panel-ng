import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {tap} from 'rxjs/operators'
import {IDish} from "../interfaces";
import {loadAllDishes} from "./+store/actions";

@Injectable({
    providedIn: 'root'
})
export class FoodService {

    constructor(private http: HttpClient, private store: Store) {
    }

    loadAllDishes(): Observable<any> {
        return this.http.get<IDish[]>('food').pipe(
            tap((dishes: IDish[]) => {
                this.store.dispatch(loadAllDishes({allDishes: dishes}))
            })
        )
    }

}
