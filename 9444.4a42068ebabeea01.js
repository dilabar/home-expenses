"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9444],{9444:(P,m,s)=>{s.r(m),s.d(m,{LoginPage:()=>v});var g=s(467),d=s(177),n=s(4341),o=s(4742),i=s(4438),p=s(4796),_=s(5260);function c(a,r){1&a&&(i.j41(0,"ion-item")(1,"ion-label",5),i.EFF(2,"Email"),i.k0s(),i.nrm(3,"ion-input",6),i.k0s())}function f(a,r){1&a&&(i.j41(0,"ion-item")(1,"ion-label",5),i.EFF(2,"Password"),i.k0s(),i.nrm(3,"ion-input",7),i.k0s())}function E(a,r){1&a&&(i.j41(0,"ion-item",8)(1,"ion-label",5),i.EFF(2,"Pin"),i.k0s(),i.nrm(3,"ion-input",9),i.k0s())}let v=(()=>{var a;class r{constructor(t,e,l,u){this.formBuilder=t,this.authService=e,this.toastController=l,this.router=u,this.loginForm=this.formBuilder.group({email:["",[n.k0.required,n.k0.email]],password:["",[n.k0.required,n.k0.minLength(6)]],pin:["",[n.k0.required,n.k0.minLength(4),n.k0.maxLength(4)]]})}ngOnInit(){var t,e;this.pin=this.authService.getPin(),""!=this.pin&&null!=this.pin?(this.storedEmail=this.authService.getUser(),null!=this.storedEmail.email&&""!=this.storedEmail.email&&(this.loginForm.patchValue({email:this.storedEmail.email}),null===(t=this.loginForm.get("password"))||void 0===t||t.clearValidators(),this.loginForm.updateValueAndValidity())):(null===(e=this.loginForm.get("pin"))||void 0===e||e.clearValidators(),this.loginForm.updateValueAndValidity())}ionViewWillEnter(){var t,e;this.pin=this.authService.getPin(),""!==this.pin&&null!==this.pin?(this.storedEmail=this.authService.getUser(),null!=this.storedEmail.email&&""!==this.storedEmail.email&&(this.loginForm.patchValue({email:this.storedEmail.email}),null===(t=this.loginForm.get("password"))||void 0===t||t.clearValidators(),this.loginForm.updateValueAndValidity())):(null===(e=this.loginForm.get("pin"))||void 0===e||e.clearValidators(),this.loginForm.updateValueAndValidity())}onSubmit(){if(this.loginForm.valid){const{email:t,password:e,pin:l}=this.loginForm.value;if(this.pin){if(!this.storedEmail.email)return void this.presentToast("Email not found. Please log in with email and password.");this.authService.login(t,void 0,l).subscribe(u=>{u.status?this.router.navigate(["/tabs"]):this.presentToast("Login with PIN failed. Please try again.")})}else this.authService.login(t,e).subscribe(u=>{u?this.router.navigate(["/create-pin"]):this.presentToast("Login failed. Please check your credentials.")})}}presentToast(t){var e=this;return(0,g.A)(function*(){yield(yield e.toastController.create({message:t,duration:2e3,position:"top"})).present()})()}}return(a=r).\u0275fac=function(t){return new(t||a)(i.rXU(n.ok),i.rXU(p.u),i.rXU(o.K_),i.rXU(_.Ix))},a.\u0275cmp=i.VBU({type:a,selectors:[["app-login"]],standalone:!0,features:[i.aNF],decls:14,vars:5,consts:[[3,"ngSubmit","formGroup"],[4,"ngIf"],["slot","center",4,"ngIf"],["expand","full","type","submit",3,"disabled"],["fill","clear","routerLink","/register"],["position","floating"],["type","email","formControlName","email","required",""],["type","password","formControlName","password","required",""],["slot","center"],["type","password","formControlName","pin","required",""]],template:function(t,e){1&t&&(i.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),i.EFF(3,"Login v1"),i.k0s()()(),i.j41(4,"ion-content")(5,"form",0),i.bIt("ngSubmit",function(){return e.onSubmit()}),i.DNE(6,c,4,0,"ion-item",1)(7,f,4,0,"ion-item",1)(8,E,4,0,"ion-item",2),i.j41(9,"ion-button",3),i.EFF(10,"Login"),i.k0s(),i.j41(11,"div")(12,"ion-button",4),i.EFF(13,"Don't have an account? Register"),i.k0s()()()()),2&t&&(i.R7$(5),i.Y8G("formGroup",e.loginForm),i.R7$(),i.Y8G("ngIf",!e.pin),i.R7$(),i.Y8G("ngIf",!e.pin),i.R7$(),i.Y8G("ngIf",e.pin),i.R7$(),i.Y8G("disabled",e.loginForm.invalid))},dependencies:[o.bv,o.Jm,o.W9,o.eU,o.$w,o.uz,o.he,o.BC,o.ai,o.Gw,o.N7,d.MD,d.bT,n.YN,n.qT,n.BC,n.cb,n.YS,n.X1,n.j4,n.JD],styles:[".login-container[_ngcontent-%COMP%]{margin-top:30px}"]}),r})()}}]);