import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContentComponent} from "./content/content.component";
import {NotFoundComponent} from "./not-found/not-found.component";

const routes: Routes = [
    { path: 'top-stories', component: ContentComponent },
    { path: 'category/:category', component: ContentComponent },
    { path: '**', component: NotFoundComponent },
];
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [RouterModule]
})

export class AppRoutingModule {
}
