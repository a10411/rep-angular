import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marcar-servico',
  templateUrl: './marcar-servico.component.html',
  styleUrls: ['./marcar-servico.component.css']
})
export class MarcarServicoComponent implements OnInit {


  tipText = "Deve lavar o seu cão, pelo menos, uma vez por mês.";
  selected = ["selected", "", ""];
  AnimaisList:any=[];
  NotificacoesList:any=[];

  constructor( ) { }

  public loadScript(url : any){
    let node = document.createElement("script");
    node.src = url;
    node.type = 'text/javascript';
    document.body.append(node);
  }

  ngOnInit(){
   
  }

  

 

}
