import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HomePage } from './home/home.page';

import { HomePageRoutingModule } from './home-routing.module';
import {ButtonModule, ListModule, NgZorroAntdMobileModule, WhiteSpaceModule, WingBlankModule} from 'ng-zorro-antd-mobile';
import {PageAComponent} from './page-a/page-a.component';
import {PageBComponent} from './page-b/page-b.component';
import {LoginPage} from './login/login.page';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HomePageRoutingModule,
        WhiteSpaceModule,
        ButtonModule,
        ListModule,
        WingBlankModule,
        ReactiveFormsModule,
        NgZorroAntdMobileModule
    ],
  declarations: [HomePage, PageAComponent, PageBComponent, LoginPage]
})
export class HomePageModule {}
