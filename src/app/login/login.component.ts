import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private tostMsg: MessageService) { }
  loginFn(dta: any) {
    const username = dta.form.value.uname.toLowerCase();
    const password = dta.form.value.upwd.toLowerCase();
    if (username === 'admin' && password === 'password') {
      this.tostMsg.add({
        severity: "success",
        summary: "LogIn Successfully",
        detail: `Welcome ${password}`,
        life: 500
      })
      setTimeout(() => {
        this.router.navigate(['/dashboard'])
      }, 1000)

    }
    else {
      this.tostMsg.add({
        severity: "error",
        summary: "Error",
        detail: "Please Enter Valid User Name and Password",
        life: 1500
      })
      dta.form.reset()
    }
  }
  ngOnInit(): void {
  }

}
