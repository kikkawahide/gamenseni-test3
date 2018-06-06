// Angular 2のモジュール参照 ...（1）
import { NgModule }       from "@angular/core";
import { BrowserModule }  from "@angular/platform-browser";
import { RouterModule }   from "@angular/router"

// コンポーネント参照 ...（2）
import { AppComponent }   from "./app.component";
import { HomeComponent }  from "./home.component";
import { Comp1Component } from "./comp1.component";
import { Comp2Component } from "./comp2.component";
import { ErrorComponent } from "./error.component";
@NgModule({
  imports:      [
    BrowserModule,
    // ルーターにルートを指定 ...（3）
    RouterModule.forRoot([
      { path: "comp1", component: Comp1Component },
      { path: "comp2", component: Comp2Component },
      { path: "", component: HomeComponent },
      { path: "**", component: ErrorComponent }
    ])
  ],　
  <!-- ルーターで表示を切り替えるリンク ...（1） -->
  <a routerLink="/comp1" routerLinkActive="active">コンポーネント1</a>
  <a routerLink="/comp2" routerLinkActive="active">コンポーネント2</a>
  <a routerLink="/dummy" routerLinkActive="active">不正なURL</a>
  
  <!-- ルーターがコンポーネントを表示する場所 ...（2）-->
  <router-outlet></router-outlet>
@Component({
  selector: 'app-root',
  template: `
  <form>
 
  <input id="upfile" name="upfile" type="file" #fl
    accept="image/*" (change)="onchange(fl.files)" />
  </form>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = '';
  result='';

  constructor(private http: HttpClient)   {}
  //アップロードの実行
  onchange(list: any) { 
    //ファイルが指定されていなければ
    if (list.length <= 0)  { return ;}
    // ファイルを取得
    let f=list[0];
    // ファイルをセット
    let data= new FormData();
    data.append('upfile',f,f.name);
    //サーバーに送信
    this.http.post('app/upload.php',data)
      .subscribe(
        data => console.log(data),
        error => console.log(error)
      );
    }
  }
      
