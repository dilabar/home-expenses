"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3937],{3937:(y,h,s)=>{s.r(h),s.d(h,{HomePage:()=>C});var v=s(467),n=s(4742),l=s(177),g=s(5873),d=s(5079),t=s(4438),f=s(5312),p=s(7360);let m=(()=>{var o;class i{constructor(e){this.reqResService=e,this.apiUrl=f.c.baseUrl+"api/"}getAccount(){return this.reqResService.get(`${this.apiUrl}get_user_financial_data`,!0)}}return(o=i).\u0275fac=function(e){return new(e||o)(t.KVO(p.E))},o.\u0275prov=t.jDH({token:o,factory:o.\u0275fac,providedIn:"root"}),i})();var R=s(4796),F=s(5260);const P=o=>({color:o});let C=(()=>{var o;class i{constructor(e,a,c,u){this.accountService=e,this.auth=a,this.toastController=c,this.router=u,(0,d.a)({home:g.iRW,"log-out-outline":g.z_V})}ngOnInit(){this.loadData()}loadData(){this.accountService.getAccount().subscribe(e=>{e.status&&(this.greeting=e.greeting,this.username=e.user_name,this.totalexpenses=e.total_expenses,this.totalearning=e.total_earnings,this.totalavl=e.total_available_balance)})}logout(){this.auth.logout().subscribe(e=>{this.presentToast(e.message)}),this.router.navigate(["/login"])}handleRefresh(e){setTimeout(()=>{this.loadData(),e.target.complete()},2e3)}presentToast(e){var a=this;return(0,v.A)(function*(){yield(yield a.toastController.create({message:e,duration:2e3,position:"top"})).present()})()}}return(o=i).\u0275fac=function(e){return new(e||o)(t.rXU(m),t.rXU(R.u),t.rXU(n.K_),t.rXU(F.Ix))},o.\u0275cmp=t.VBU({type:o,selectors:[["app-home"]],standalone:!0,features:[t.aNF],decls:38,vars:21,consts:[[3,"translucent"],["slot","end"],[3,"click"],["name","log-out-outline"],[3,"fullscreen"],["slot","fixed",3,"ionRefresh"],[1,"total-avl",2,"display","flex","justify-content","space-between","align-items","center"],[3,"ngStyle"],[2,"height","50px",3,"color","disabled"],[2,"margin","5px 0"],[1,"expenses",2,"display","flex","justify-content","space-between","align-items","center"]],template:function(e,a){1&e&&(t.j41(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),t.EFF(3),t.k0s(),t.j41(4,"ion-buttons",1)(5,"ion-button",2),t.bIt("click",function(){return a.logout()}),t.nrm(6,"ion-icon",3),t.k0s()()()(),t.j41(7,"ion-content",4)(8,"ion-refresher",5),t.bIt("ionRefresh",function(u){return a.handleRefresh(u)}),t.nrm(9,"ion-refresher-content"),t.k0s(),t.j41(10,"ion-card")(11,"ion-card-header")(12,"ion-card-title"),t.EFF(13),t.k0s()(),t.j41(14,"ion-card-content")(15,"div",6)(16,"div")(17,"h2"),t.EFF(18,"Total Available"),t.k0s(),t.j41(19,"h1",7),t.EFF(20),t.nI1(21,"currency"),t.k0s()(),t.j41(22,"ion-button",8),t.EFF(23,"Transfer"),t.k0s()(),t.nrm(24,"hr",9),t.j41(25,"div",10)(26,"div")(27,"h2"),t.EFF(28,"Total Earning"),t.k0s(),t.j41(29,"h1"),t.EFF(30),t.nI1(31,"currency"),t.k0s()(),t.j41(32,"div")(33,"h2"),t.EFF(34,"Total Expenses"),t.k0s(),t.j41(35,"h1"),t.EFF(36),t.nI1(37,"currency"),t.k0s()()()()()()),2&e&&(t.Y8G("translucent",!0),t.R7$(3),t.JRh(a.greeting),t.R7$(4),t.Y8G("fullscreen",!0),t.R7$(6),t.JRh(a.username),t.R7$(6),t.Y8G("ngStyle",t.eq3(19,P,a.totalavl>=0?"var(--ion-color-success)":"var(--ion-color-danger)")),t.R7$(),t.JRh(t.i5U(21,10,a.totalavl,"INR")),t.R7$(2),t.Y8G("color",a.totalavl>=0?"success":"danger")("disabled",a.totalavl<=0),t.R7$(8),t.JRh(t.i5U(31,13,a.totalearning,"INR")),t.R7$(6),t.JRh(t.i5U(37,16,a.totalexpenses,"INR")))},dependencies:[n.bv,n.Jm,n.QW,n.b_,n.I9,n.ME,n.tN,n.W9,n.eU,n.iq,n.To,n.Ki,n.BC,n.ai,l.MD,l.B3,l.oe],styles:["#container[_ngcontent-%COMP%]{text-align:center;position:absolute;left:0;right:0;top:50%;transform:translateY(-50%)}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}.expenses[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .expenses[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:12px}.total-avl[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:14px}"]}),i})()}}]);