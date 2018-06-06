import { Component } from "@angular/core";

@Component({
  // CSSの定義
  styles:["div.component{ background-color:#ffd5d5; }"],
  // テンプレートの定義
  template: `
    <div class="component">
      <h2>エラー：不正なURLです！</h2>
      <p>ErrorComponentコンポーネントによる描画です。</p>
    </div>
  `
})
export class ErrorComponent { }