import { Injectable } from "@angular/core";
import {
  CanDeactivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";

import { Comp1Component } from "./comp1.component";

@Injectable()
export class DeactivateGuardService
implements CanDeactivate<Comp1Component> { // インタフェースを実装 ...（1）
  /**
   * ガード判定処理
   */
  canDeactivate(
    // 第1引数に（1）で指定したコンポーネントが渡される ...（2）
    component: Comp1Component,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    // コンポーネントのcanLogoutプロパティがtrueの時には
    // trueを返して、画面遷移を許可する
    if (component.canLogout) {
      return true;
    }
    // それ以外はfalseを返して、画面遷移を許可しない
    else {
      alert("ログアウト許可チェックボックスをチェックしてください。");
      return false;
    }
  }
}