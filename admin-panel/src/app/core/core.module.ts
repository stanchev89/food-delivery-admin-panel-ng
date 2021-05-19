import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {RouterModule} from "@angular/router";
import { AsideBarComponent } from './aside-bar/aside-bar.component';
import {appInterceptorProvider} from "./app.interceptor";
import {FoodService} from "../food/food.service";


@NgModule({
  declarations: [
    HeaderComponent,
    AsideBarComponent
  ],
    exports: [
        HeaderComponent,
        AsideBarComponent
    ],
  imports: [
    CommonModule,
    RouterModule
  ],
    providers: [appInterceptorProvider, FoodService]
})
export class CoreModule { }
