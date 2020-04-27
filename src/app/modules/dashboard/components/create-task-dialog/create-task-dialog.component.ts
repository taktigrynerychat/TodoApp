import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-create-task-dialog',
  templateUrl: './create-task-dialog.component.html',
  styleUrls: ['./create-task-dialog.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateTaskDialogComponent implements OnInit {
  public createFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.createFormGroup = this.formBuilder.group({
      user_id: null,
      name: null,
      description: null,
      end_date: null,
      category_id: null
    });
  }

  submit(e) {
    console.log(e);
  }
}
