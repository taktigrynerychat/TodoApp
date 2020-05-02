import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-create-task-dialog',
  templateUrl: './create-task-dialog.component.html',
  styleUrls: ['./create-task-dialog.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateTaskDialogComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }
}
