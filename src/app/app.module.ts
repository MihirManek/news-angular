import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LiveTickerComponent} from './live-ticker/live-ticker.component';
import {HorizontalNavbarComponent} from './horizontal-navbar/horizontal-navbar.component';
import {ContentComponent} from './content/content.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {ApiService} from './api.service';
import {HttpModule} from '@angular/http';
import { AppRoutingModule } from './/app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { PagerService } from './pager.service';
import { CategoryService } from './category.service';

@NgModule({
    declarations: [
        AppComponent,
        LiveTickerComponent,
        HorizontalNavbarComponent,
        ContentComponent,
        SidebarComponent,
        NotFoundComponent,

    ],
    imports: [
        BrowserModule,
        HttpModule,
        AppRoutingModule
    ],
    providers: [ApiService, PagerService, CategoryService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
