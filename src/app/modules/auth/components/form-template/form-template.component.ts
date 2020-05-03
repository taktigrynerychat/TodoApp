import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormTemplateComponent implements OnInit {
  @Input()
  form: FormGroup;

  @Input()
  type: string;

  @Output()
  formSubmit: EventEmitter<any> = new EventEmitter<any>();

  hide = true;

  constructor() {
  }

  ngOnInit(): void {
  }

  formAction() {
    this.formSubmit.emit(this.form.value);
  }

}
