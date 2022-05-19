import { Component, OnInit } from '@angular/core';

declare function strengthChecker():any; 
declare function toggle():any;
declare function toggle2():any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  public loadScript(url : any){
    let node = document.createElement("script");
    node.src = url;
    node.type = 'text/javascript';
    document.body.append(node);
  } 

  ngOnInit(): void {
    this.loadScript("src/assets/loginCliente.js");
  }

StrengthChecker(){
  strengthChecker();
}

Toggle(){
  toggle();
}


Toggle2(){
  toggle2();
}

}
