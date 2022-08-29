import { Component, OnInit } from '@angular/core';
import { TLogin } from '../../books/types/auth.type';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: TLogin = {
    email: '',
    password: '',
  };

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}
  onSubmit() {
    this.authService.login(this.form);
  }
  isLoading() {
    return this.authService.isLoading;
  }
}
