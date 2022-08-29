import { Component, OnInit } from '@angular/core';
import { TRegister } from '../../books/types/auth.type';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  formReg: TRegister = { confirmPassword: '', email: '', password: '' };
  passwordMatched: boolean = true;
  constructor(private AuthService: AuthService) {}

  ngOnInit(): void {}

  onSubmit() {
    this.AuthService.register(this.formReg);
  }
  isLoading() {
    return this.AuthService.isLoading;
  }
}
