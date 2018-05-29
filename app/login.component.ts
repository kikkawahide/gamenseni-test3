

// login password を同じにする　例えば　user = "t"  password = "t" 
import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { Login } from './login';
@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html'
})
export class LoginComponent {
    model = new Login('', '');
    constructor(private router: Router) { }

    onSubmit() {
       
        if (this.model.name == this.model.password) {
            this.router.navigate(['menu']);
        } else {
            this.model.message = "ログインに失敗しました";
        }
    }
}
