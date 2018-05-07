import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes}  from '@angular/router';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import {ListComponent } from './components/list/list.component';
import {SearchService} from './shared-service/search.service';

//this is used for routing to different pages/components
const appRoutes:Routes=[

  {path:'', component:ListComponent}

];


@NgModule({
  declarations: [
    AppComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
