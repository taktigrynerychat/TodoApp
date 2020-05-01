import {Component, Input, OnInit} from '@angular/core';
import {CategoryModel} from '../../../../models/category.model';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.less']
})
export class CategoryFormComponent implements OnInit {

  @Input()
  category: CategoryModel;

  @Input()
  createMode = false;

  @Input()
  buttonText = 'Save';

  categoryForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    if (this.category) {
      this.categoryForm = this.fb.group({
        id: this.category.id,
        name: this.category.name,
        color: this.category.color
      });
    } else if (this.createMode) {
      this.categoryForm = this.fb.group({
        user_id: localStorage.getItem('userId'),
        name: null,
        color: null
      });
    }
  }

  saveCategory() {
    console.log(this.categoryForm.value);
  }
}
