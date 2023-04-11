import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  Inject,
} from "@angular/core";
import {
  Validators,
  FormGroup,
  NonNullableFormBuilder,
  FormControl,
} from "@angular/forms";
import { TuiDialogService } from "@taiga-ui/core";

import { UserRegistration } from "../models/userRegistration";
import { CustomvalidationService } from "../services/customvalidation.service";

@Component({
  selector: "app-reactive-form",
  templateUrl: "./reactive-form.component.html",
  styleUrls: ["./reactive-form.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReactiveFormComponent implements OnInit {
  protected registerForm!: FormGroup<UserRegistration>;
  protected submitted = false;

  constructor(
    private readonly formBuilder: NonNullableFormBuilder,
    private readonly customValidator: CustomvalidationService,
    @Inject(TuiDialogService) private readonly dialogs: TuiDialogService
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group(
      {
        email: new FormControl("", [Validators.required, Validators.email, Validators.maxLength(100)]),
        password: new FormControl("", [
          Validators.required,
          this.customValidator.patternValidator(),
        ]),
        confirmPassword: new FormControl("", [Validators.required]),
        agreeToTermsCheckbox: new FormControl(false, [Validators.requiredTrue]),
      },
      {
        validators: [
          this.customValidator.matchPassword("password", "confirmPassword"),
        ],
      }
    );
  }

  protected get registerFormControl() {
    return this.registerForm.controls;
  }

  protected onSubmit(): void {
    this.submitted = true;
    if (this.registerForm.valid) {
      this.dialogs
      .open("Спасибо что заполнил нашу форму регистрации.", {
        label: "Молодец",
        size: "s",
      })
      .subscribe();
    }
  }

  protected resetForm(): void {
    this.registerForm.reset();
  }
}
