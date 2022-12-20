import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;
  constructor(private fb:FormBuilder,private auth:AuthService,private router:Router){

  }
  ngOnInit(): void {
    this.form = this.fb.group({
      email:['thandarwin1551992@gmail.com',[Validators.required,Validators.email]],
      password:['123456',[Validators.required,Validators.minLength(6)]]
    });
    
  }
  async login(){
    console.log(this.form.value);
    const res= await this.auth.login(this.form.value);
    console.log('login ',res);
    if(res.error){
      //To  do show error alert
      console.log('login account error')


    }else{
      this.router.navigateByUrl('/app',{replaceUrl:true})
    }
  }
  async createAccount(){
    console.log(this.form.value);
    const res = await this.auth.createAccount(this.form.value);
    console.log('Create Account',res);
    if(res.error){
      //To  do show error alert
      console.log('create account error')


    }else{
      this.router.navigateByUrl('/app',{replaceUrl:true})
    }
  }
}
