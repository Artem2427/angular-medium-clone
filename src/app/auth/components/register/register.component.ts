import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { registerAction } from '../../store/actions/register.action';
import { isSubmittingSelector } from '../../store/selectors';

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  isSubmitting$: Observable<boolean>;

  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {
    this.initializeForm();
    this.initializeValues();
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    console.log(this.isSubmitting$, 'isSubmitting');
  }

  initializeForm(): void {
    this.form = this.fb.group({
      username: ['', Validators.required, Validators.email],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });

    console.log(this.form.valid, 'test');
  }

  onSubmit(): void {
    this.store.dispatch(registerAction(this.form.value));
  }
}
