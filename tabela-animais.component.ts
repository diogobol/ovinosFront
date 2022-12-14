import { Component, OnInit } from '@angular/core';
import { Animal } from '../animal';
import { AnimalApiService } from '../animal-api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tabela-animais',
  templateUrl: './tabela-animais.component.html',
  styleUrls: ['./tabela-animais.component.css']
})
export class TabelaAnimaisComponent {
  
  nomePesquisado="";
  lista: Animal[]  = []

  
  constructor(private servico: AnimalApiService, private http: HttpClient) {
    this.listar();
  }
  listar(){
    this.servico.listar().subscribe(
      (data)=>{
        this.lista = data;
      }
    );
  } 
  ngOnInit():void{}
  
  deletar(id: number){
    this.servico.deletar(id).subscribe(res => {
      this.listar();
    });
  }
  
}
