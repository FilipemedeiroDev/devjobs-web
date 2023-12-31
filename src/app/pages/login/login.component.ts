import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastService } from 'angular-toastify';
import { ResponseLogin } from 'src/app/models/responseLogin.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginForm!: FormGroup;
  response?: ResponseLogin;

  constructor(private userService: UserService, private router: Router, private _toastService: ToastService) {}


  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  get email() {
    return this.loginForm.get('email')!;
  }

  get password() {
    return this.loginForm.get('password')!;
  }

  async submit() {
    if (this.loginForm.invalid) {
      return;
    }

    await this.userService.login(this.loginForm.value).subscribe((data) => {
      this.response = data
      localStorage.setItem("token", this.response.access_token);
      this._toastService.success('Login realizado com sucesso!');
      this.router.navigate(['dashboard/jobs-applied']);
    });
  }
}
