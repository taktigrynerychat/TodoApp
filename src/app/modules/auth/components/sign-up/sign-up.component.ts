import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UserCredentialsModel} from '../../../../models/user.model';
import {UserService} from '../../../../services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.less']
})
export class SignUpComponent implements OnInit {
  public signUpFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private userService: UserService) {
  }

  ngOnInit(): void {
    this.signUpFormGroup = this.formBuilder.group({
      name: null,
      login: null,
      password: null
    });
  }

  signUp(creds: UserCredentialsModel) {
    this.userService.singUp(creds).subscribe();
  }

}
