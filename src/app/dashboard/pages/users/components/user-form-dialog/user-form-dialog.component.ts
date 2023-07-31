import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { User } from '../../models';

@Component({
  selector: 'app-user-form-dialog',
  templateUrl: './user-form-dialog.component.html',
  styleUrls: ['./user-form-dialog.component.scss'],
})
export class UserFormDialogComponent {
  editingUser?: User;
  nameControl = new FormControl<string | null>(null, [
    Validators.required,
    Validators.minLength(2),
  ]);

  surnameControl = new FormControl<string | null>(null, [Validators.required]);
  emailControl = new FormControl<string | null>(null, [Validators.required]);
  passwordControl = new FormControl<string | null>(null, [Validators.required]);
  telefonoControl = new FormControl<string | null>(null, [Validators.required]);

  userForm = new FormGroup({
    name: this.nameControl,
    surname: this.surnameControl,
    email: this.emailControl,
    password: this.passwordControl,
    telefono: this.telefonoControl
  });

  // userForm: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<UserFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data?: User
  ) {
    // this.userForm = this.formBuilder.group({
    //   name: [null, [Validators.required, Validators.min(2)]],
    //   surname: [null, [Validators.required]],
    // });
    if (this.data) {
      this.editingUser = this.data;
      this.nameControl.setValue(this.data.name);
      this.surnameControl.setValue(this.data.surname);
      this.passwordControl.setValue(this.data.password);
      this.emailControl.setValue(this.data.email);
      this.telefonoControl.setValue(this.data.telefono);
    }
  }

  onSubmit(): void {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
    } else {
      this.dialogRef.close(this.userForm.value);
    }
  }
}
