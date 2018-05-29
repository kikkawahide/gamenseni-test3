
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent }  from './login.component';
import { MenuComponent }  from './menu.component';



@NgModule({
  declarations: [
    LoginComponent,
        MenuComponent,
        AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
       RouterModule.forRoot([
      { path: 'menu', component: MenuComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent }
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
