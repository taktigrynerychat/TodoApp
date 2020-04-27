import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UserCredentialsModel} from '../../../../models/user.model';
import {UserService} from '../../../../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignInComponent implements OnInit {
  public signInFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.signInFormGroup = this.formBuilder.group({
      login: null,
      password: null
    });
  }

  signIn(creds: UserCredentialsModel) {
    this.userService.singIn(creds).subscribe({
      next: value => {
        localStorage.setItem('user', JSON.stringify(value));
        localStorage.setItem('userId', '' + value.id);
      },
      complete: () => {
        this.router.navigate(['/dashboard']);
      }
    });
  }

}
