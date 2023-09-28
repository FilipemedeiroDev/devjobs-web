import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastService } from 'angular-toastify';

import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;

  constructor(
    private userService: UserService,
    private router: Router,
    private _toastService: ToastService
  ){

  }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      first_name: new FormControl('', [Validators.required]),
      last_name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  get first_name() {
    return this.registerForm.get('first_name')!;
  }

  get last_name() {
    return this.registerForm.get('last_name')!;
  }

  get email() {
    return this.registerForm.get('email')!;
  }

  get password() {
    return this.registerForm.get('password')!;
  }

  async submit() {
    if (this.registerForm.invalid) {
      return;
    }

    await this.userService.register(this.registerForm.value).subscribe()

    this._toastService.success('Usuário cadastrado com sucesso!');
    this.router.navigate(['login']);
  }
}
