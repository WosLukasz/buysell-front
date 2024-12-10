import { ChangeDetectionStrategy, Component, DestroyRef, forwardRef, inject, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormControl, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, noop, tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';



@Component({
  selector: 'app-amount-input',
  templateUrl: './amount-input.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: AmountInputComponent,
      multi: true,
    },
  ],
  styleUrls: ['./amount-input.component.scss']
})
export class AmountInputComponent implements ControlValueAccessor, OnInit {

  @Input() label: string;
  
  formControl: FormControl;

  destroyRef: DestroyRef = inject(DestroyRef);

  fb: FormBuilder = inject(FormBuilder);

  constructor() {
    this.formControl = this.fb.control(undefined, []);
  }

  onChange: (value: number) => void = noop;
  onTouch: () => void = noop;

  registerOnChange(fn: (value: number) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    isDisabled ? this.formControl.disable() : this.formControl.enable();
  }

  writeValue(value: number): void {
    // convert to string
    this.formControl.setValue(value, { emitEvent: false });
  }

  ngOnInit(): void {
    this.formControl.valueChanges
      .pipe(
        debounceTime(200),
        tap(value => this.onChange(value)),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe();
  }
}