"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[550],{550:(c,P,t)=>{t.r(P),t.d(P,{CreatePinPage:()=>C});var g=t(177),r=t(4341),e=t(4742),n=t(4438),m=t(4796),p=t(5260);let C=(()=>{var s;class l{constructor(a,i){this.authService=a,this.router=i,this.pin="",this.confirmPin=""}ngOnInit(){}createPin(){this.pin===this.confirmPin?this.authService.setPin(this.pin).subscribe(a=>{a.status&&this.router.navigate(["tabs"])}):alert("PINs do not match!")}}return(s=l).\u0275fac=function(a){return new(a||s)(n.rXU(m.u),n.rXU(p.Ix))},s.\u0275cmp=n.VBU({type:s,selectors:[["app-create-pin"]],standalone:!0,features:[n.aNF],decls:16,vars:2,consts:[[1,"ion-padding"],[3,"submit"],["position","floating"],["type","password","name","pin","required","",3,"ngModelChange","ngModel"],["type","password","name","confirmPin","required","",3,"ngModelChange","ngModel"],["expand","full","type","submit"]],template:function(a,i){1&a&&(n.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),n.EFF(3,"Create PIN"),n.k0s()()(),n.j41(4,"ion-content",0)(5,"form",1),n.bIt("submit",function(){return i.createPin()}),n.j41(6,"ion-item")(7,"ion-label",2),n.EFF(8,"Enter PIN"),n.k0s(),n.j41(9,"ion-input",3),n.mxI("ngModelChange",function(o){return n.DH7(i.pin,o)||(i.pin=o),o}),n.k0s()(),n.j41(10,"ion-item")(11,"ion-label",2),n.EFF(12,"Confirm PIN"),n.k0s(),n.j41(13,"ion-input",4),n.mxI("ngModelChange",function(o){return n.DH7(i.confirmPin,o)||(i.confirmPin=o),o}),n.k0s()(),n.j41(14,"ion-button",5),n.EFF(15,"Create PIN"),n.k0s()()()),2&a&&(n.R7$(9),n.R50("ngModel",i.pin),n.R7$(4),n.R50("ngModel",i.confirmPin))},dependencies:[e.bv,e.Jm,e.W9,e.eU,e.$w,e.uz,e.he,e.BC,e.ai,e.Gw,g.MD,r.YN,r.qT,r.BC,r.cb,r.YS,r.vS,r.cV]}),l})()}}]);