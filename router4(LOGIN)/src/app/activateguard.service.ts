import { Injectable } from "@angular/core";
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";

@Injectable()
export class ActivateGuardService
implements CanActivate { // インタフェースを設定
  /**
   * ガード判定処理
   */
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    // ユーザー名が一致した場合はtrueを返して、画面遷移を許可する
    if (route.params["username"] == "KIKKAWA") {
      return true;
    }
    // それ以外はfalseを返して、画面遷移を許可しない
    else {
      alert("許可されたユーザーではありません。")
      return false;
    }
  }
}