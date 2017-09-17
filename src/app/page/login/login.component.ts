import {Component, OnInit} from '@angular/core'
import {
  FormBuilder, FormControl,
  FormGroup,
  Validators
} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']

})
export class LoginComponent implements OnInit {
  public validateForm: FormGroup

  _submitForm() {
    for (const i in this.validateForm.controls) {
      console.log(this.validateForm.controls[i].getError('error'))
      this.validateForm.controls[i].markAsDirty()
    }
  }

  testUserName({value}): any {
    return /^[a-zA-Z0-9_]{0,15}$/.test(value) ? null : {error: 'reg'}
  }

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.validateForm = this.fb.group({
      userName: new FormControl(
        null, [Validators.required, Validators.minLength(5), this.testUserName]
      ),
      password: [null, [Validators.required]],
    })
  }
}
