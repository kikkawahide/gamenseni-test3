import { Component } from "@angular/core";

@Component({
  // CSSの定義
  styles:["div.component{ background-color:#cccccc; }"],
  // テンプレートの定義
  template: `
    <div class="component">
      <h2>ホーム</h2>
      <p>HomeComponentコンポーネントによる描画です。</p>
    </div>
  `
})
export class HomeComponent { }