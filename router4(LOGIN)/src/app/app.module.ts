// Angular 2のモジュール参照
// Angular 2のモジュール参照
import { NgModule }       from "@angular/core";
import { BrowserModule }  from "@angular/platform-browser";
import { FormsModule } from "@angular/forms"
import { RouterModule }   from "@angular/router"

// コンポーネント参照
import { AppComponent }   from "./app.component";
import { HomeComponent }  from "./home.component";
import { Comp1Component } from "./comp1.component";
// import { Comp2Component } from "./comp2.component";
import { ErrorComponent } from "./error.component";
// Guardサービスの参照
import { ActivateGuardService } from "./activateguard.service";
import { DeactivateGuardService } from "./deactivateguard.service";
@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    // ルーターにルートを指定
    RouterModule.forRoot([
      {
        // パスでusernameパラメーターを受け取るよう指定
        path: "comp1/:username",
        component: Comp1Component,
        // 遷移時のガード処理サービス指定
        canActivate: [ActivateGuardService],
        // 退出時のガード処理サービス指定
        canDeactivate: [DeactivateGuardService],
      },
      { path: "", component: HomeComponent },
      { path: "**", component: ErrorComponent }
    ])
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    Comp1Component,
    
    ErrorComponent
  ],
  // Guardサービスをprovidersに指定
  providers: [
    ActivateGuardService,
    DeactivateGuardService
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
