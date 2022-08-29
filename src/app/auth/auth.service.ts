import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { TLogin, TRegister } from '../books/types/auth.type';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuth: boolean = false;
  isLoading: boolean = false;
  passwordMatched: boolean = true;

  constructor(private router: Router) {}

  login(form: TLogin) {
    if (this.isLoading) {
      return;
    }
    this.isLoading = true;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        this.router.navigate(['']);
        this.isAuth = true;

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        this.isAuth = false;
      })
      .finally(() => (this.isLoading = false));
  }
  register(formReg: TRegister) {
    this.isLoading = true;
    if (formReg.password !== formReg.confirmPassword) {
      this.passwordMatched = false;
      this.isLoading = false;
      return;
    }
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, formReg.email, formReg.password)
      .then((userCredential) => {
        const user = userCredential.user;
        this.isAuth = true;
      })
      .catch((err) => {
        this.isAuth = false;
        console.log(err);
      })
      .finally(() => (this.isLoading = false));
  }

  logout() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        this.isAuth = false;
        this.router.navigate(['/login']);
      })
      .catch((err) => {});
  }
}
