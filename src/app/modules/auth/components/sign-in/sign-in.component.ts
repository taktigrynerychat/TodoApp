import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UserCredentialsModel} from '../../../../models/user.model';
import {UserService} from '../../../../services/user.service';
import {Router} from '@angular/router';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs/internal/Subject';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignInComponent implements OnInit, OnDestroy {
  signInFormGroup: FormGroup;
  private unsub = new Subject();

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
    this.userService.singIn(creds)
      .pipe(takeUntil(this.unsub))
      .subscribe({
      next: value => {
        localStorage.setItem('user', JSON.stringify(value));
        localStorage.setItem('userId', '' + value.id);
      },
      complete: () => {
        this.router.navigate(['/dashboard']);
      }
    });
  }

  ngOnDestroy(): void {
    this.unsub.unsubscribe();
  }

}
