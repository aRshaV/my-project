import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.form = fb.group({
      email: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  ngOnInit() {}

  signIn(): void {
    this.authService.signIn(this.form.value).subscribe(
      () => {
        this.router.navigateByUrl('/products');
      },
      (error: HttpErrorResponse) => {
        if (error.status === 401) {
          console.error(error.message);
        }
      }
    );
  }
}
