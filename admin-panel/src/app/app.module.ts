import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CoreModule} from "./core/core.module";
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools'
import { reducers } from "./+store";
import {environment} from '../environments/environment';
import {FoodModule} from "./food/food.module";
import {FoodService} from "./food/food.service";
import {HttpClientModule} from "@angular/common/http";
import {SharedModule} from "./shared/shared.module";


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        SharedModule,
        CoreModule,
        FoodModule,
        StoreModule.forRoot(reducers),
        StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production})
    ],
    providers: [FoodService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
