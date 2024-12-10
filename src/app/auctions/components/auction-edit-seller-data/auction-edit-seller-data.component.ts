import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormGroupDirective, Validators, ValidatorFn, ValidationErrors, AbstractControl, FormControl} from '@angular/forms';

@Component({
  selector: 'app-auction-edit-seller-data',
  templateUrl: './auction-edit-seller-data.component.html'
})
export class AuctionEditSellerDataComponent {
  auctionForm: FormGroup;

  constructor(private fgd: FormGroupDirective,
    private fb: FormBuilder
  ) {

  }

  get firstname(): FormControl {
    return this.auctionForm.controls['firstname'] as FormControl;
  }

  get name(): FormControl {
    return this.auctionForm.controls['name'] as FormControl;
  }

  get location(): FormControl {
    return this.auctionForm.controls['location'] as FormControl;
  }

  get email(): FormControl {
    return this.auctionForm.controls['email'] as FormControl;
  }

  get phone(): FormControl {
    return this.auctionForm.controls['phone'] as FormControl;
  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.auctionForm = this.fgd.control;
    this.auctionForm.addControl('firstname', this.fb.control('', [Validators.required]));
    this.auctionForm.addControl('name', this.fb.control('', [Validators.required]));
    this.auctionForm.addControl('location', this.fb.control('', [Validators.required]));
    this.auctionForm.addControl('email', this.fb.control('', [Validators.required, Validators.email]));
    this.auctionForm.addControl('phone', this.fb.control('', [Validators.required, Validators.pattern('^[- +()0-9]+$')]));
  }

  // phoneValidator = (): ValidatorFn => {
  //   return (control: AbstractControl): ValidationErrors | null => {
  //     const forbidden = nameRe.test(control.value);
  //     return forbidden ? { forbiddenName: { value: control.value } } : null;
  //   };
  // }

}
