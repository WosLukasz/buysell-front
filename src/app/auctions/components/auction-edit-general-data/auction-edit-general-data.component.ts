import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormGroupDirective, Validators, ValidatorFn, ValidationErrors, AbstractControl, FormControl} from '@angular/forms';

@Component({
  selector: 'auction-edit-general-data',
  templateUrl: './auction-edit-general-data.component.html'
})
export class AuctionEditGeneralDataComponent {
  auctionForm: FormGroup;

  constructor(private fgd: FormGroupDirective,
    private fb: FormBuilder
  ) {

  }

  get title(): FormControl {
    return this.auctionForm.controls['title'] as FormControl;
  }

  get price(): FormControl {
    return this.auctionForm.controls['price'] as FormControl;
  }

  get category(): FormControl {
    return this.auctionForm.controls['category'] as FormControl;
  }

  get description(): FormControl {
    return this.auctionForm.controls['description'] as FormControl;
  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.auctionForm = this.fgd.control;
    this.auctionForm.addControl('title', this.fb.control('', [Validators.required, Validators.minLength(5)]));
    this.auctionForm.addControl('category', this.fb.control('', [Validators.required]));
    this.auctionForm.addControl('description', this.fb.control('', [Validators.required, Validators.minLength(15)]));
    this.auctionForm.addControl('price', this.fb.control('', [Validators.required, Validators.min(0)]));
  }

  // forbiddenNameValidator = (): ValidatorFn => {
  //   return (control: AbstractControl): ValidationErrors | null => {
  //     const forbidden = nameRe.test(control.value);
  //     return forbidden ? { forbiddenName: { value: control.value } } : null;
  //   };
  // }

}