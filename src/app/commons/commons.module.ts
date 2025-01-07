import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from './../app-routing.module';
import { AppCardComponent } from './layout/app-card/app-card.component'; 
import { TranslateModule } from "@ngx-translate/core";
import { TextInputComponent } from './inputs/text-input/text-input.component';
import { TextAreaInputComponent } from './inputs/text-area-input/text-area-input.component';
import { DictionaryInputComponent } from './inputs/dictionary-input/dictionary-input.component';
import { AmountInputComponent } from './inputs/amount-input/amount-input.component';
import { NumberFormatDirective } from './inputs/number-format.directive';
import { ImageUploadComponent } from './inputs/image-upload/image-upload.component';
import { CurrencyPipe } from './pipes/currency.pipe';
import { FormButtonsComponent } from './form-buttons/form-buttons.component';
import { LineSeparatorComponent } from './layout/line-separator/line-separator.component';
import { ViewHeaderComponent } from './layout/view-header/view-header.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ContactComponent,
    AppCardComponent,
    TextInputComponent,
    TextAreaInputComponent,
    DictionaryInputComponent,
    AmountInputComponent,
    NumberFormatDirective,
    ImageUploadComponent,
    CurrencyPipe,
    FormButtonsComponent,
    LineSeparatorComponent,
    ViewHeaderComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    TranslateModule
  ],
  exports: [
    HeaderComponent,
    ContactComponent,
    AppCardComponent, 
    TextInputComponent,
    AmountInputComponent,
    TextAreaInputComponent,
    ImageUploadComponent,
    CurrencyPipe,
    FormButtonsComponent,
    LineSeparatorComponent,
    ViewHeaderComponent,
  ]
})
export class CommonsModule { }
