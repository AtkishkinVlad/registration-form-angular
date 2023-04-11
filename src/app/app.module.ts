import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TuiRootModule, TuiDialogModule, TuiButtonModule } from '@taiga-ui/core';
import { TuiCheckboxBlockModule, TuiInputModule, TuiInputPasswordModule } from '@taiga-ui/kit';

import { AppComponent } from "./app.component";
import { ReactiveFormComponent } from "./reactive-form/reactive-form.component";
import { PasswordPatternDirective } from "./directives/password-pattern.directive";
import { MatchPasswordDirective } from "./directives/match-password.directive";

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponent,
    PasswordPatternDirective,
    MatchPasswordDirective,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    TuiRootModule,
    TuiCheckboxBlockModule,
    TuiDialogModule,
    TuiInputModule,
    TuiButtonModule,
    TuiInputPasswordModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
