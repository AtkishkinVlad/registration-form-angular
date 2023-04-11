import { FormControl } from "@angular/forms";

export interface UserRegistration {
  email: FormControl<string>;
  password: FormControl<string>;
  confirmPassword: FormControl<string>;
  agreeToTermsCheckbox: FormControl<boolean>;
}
