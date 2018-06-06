import { Component } from "@angular/core";
import { Router } from "@angular/router";
// login user "yoshikawa"
@Component({
  selector: "my-app",
  template: `
    <h1>Angular Router サンプル4</h1>

    <!-- Route.navigateメソッドでコンポーネントを切り替え-->
    <input type="text" placeholder="ユーザー名" [(ngModel)]="username">
    <button (click)="onClickButtonLogin();">ログイン</button>

    <!-- ルーターがコンポーネントを表示する場所 -->
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  // 入力値反映用の変数
  username:string = "a12";

  /**
   * コンストラクター
   * 依存性注入でrouterオブジェクトを受け取る
   */
  constructor(private router:Router) {
  }

  /**
   * ログインボタン押下時の処理
   */
  onClickButtonLogin(){
    console.log(this.username); // 2this.username = "test";
    this.router.navigate(["/comp1", this.username]);
  }
}