import { Component } from "@angular/core";

@Component({
  // CSSの定義
  styles:["div.component{ background-color:#ffeeaa; }"],
  // テンプレートの定義
  template: `
    <div class="component">
      <h2>コンポーネント1</h2>
      <input type="checkbox" [(ngModel)]="canLogout">ログアウト許可
      &nbsp;
      <a routerLink="/">ログアウト</a>
      </div> 
  `
})
export class Comp1Component { 
 /// ログアウト可否を表す変数
  // 双方向データバインディングで、チェックボックス状態が反映される
  canLogout:boolean;
}