import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';
import { DialogDirective } from 'src/app/shared/components/dialog/dialog.directive';
import { DialogService } from 'src/app/shared/services/dialog/dialog.service';
import Validation from '../../shared/models/validation';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  submitted = false;
  @ViewChild(DialogDirective, { static: true }) appDialog!: DialogDirective;

  constructor(
    private formBuilder: FormBuilder,
    private dialogService: DialogService
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.closeModal();
  }

  ngAfterViewInit(): void {
    // console.log('appDialog => ', this.appDialog);
  }

  initForm(): void {
    this.form = this.formBuilder.group(
      {
        fullname: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ],
        confirmPassword: ['', Validators.required],
        acceptTerms: [false, Validators.requiredTrue]
      },
      {
        validators: [Validation.match('password', 'confirmPassword')]
      }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    console.log(JSON.stringify(this.form.value, null, 2));
  }

  canDeactivate(): Observable<boolean> {
    if (!this.submitted && this.form.dirty) {
      const data = {
        modalTitle: 'Leave site ?',
        modalText: 'Changes you made may not be saved.'
      }
      if (this.appDialog) {
        this.dialogService.loadComponent(DialogComponent, data, this.appDialog);
      }
      return this.dialogService.isLeavePage.asObservable();
    }
    return of(true);
  }

  closeModal() {
    this.dialogService.isCloseDialog.subscribe({
      next: (val: Boolean) => {
        if (val) {
          this.dialogService.removeComponent(this.appDialog);
        }
      }
    })
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }

}
