import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UserCredentialsModel} from '../../../../models/user.model';
import {UserService} from '../../../../services/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.less']
})
export class SignInComponent implements OnInit {
  public signInFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private userService: UserService) {
  }

  ngOnInit(): void {
    this.signInFormGroup = this.formBuilder.group({
      login: null,
      password: null
    });
  }

  signIn(creds: UserCredentialsModel) {
    this.userService.singIn(creds).subscribe();
  }

}
