import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Animal } from '../animal';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimalApiService } from '../animal-api.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-cadastro-animais',
  templateUrl: './cadastro-animais.component.html',
  styleUrls: ['./cadastro-animais.component.css']
})
export class CadastroAnimaisComponent implements OnInit{
  
  constructor(
    private servico: AnimalApiService,
    private router: Router ,
    private route: ActivatedRoute,
    private http: HttpClient
    ){}  

  id!: number;  
  animal = new Animal();
 
  mensagem:string  = "";  
  
  botaoAcao ="Salvar";
  titulo ="Cadastro de Aniamis"  
  
  ngOnInit():void{
    this.id = this.route.snapshot.params['id'];
    this.mensagem = "";
    if(this.id){    
      this.botaoAcao = "Editar";
    }    
  }
    salvar() {
      if(!this.id) {
       alert("salvar");
        this.servico.inserir(this.animal).subscribe(animal => {
          this.mensagem = this.animal.nome
          + " cadastrado com sucesso!";
          this.animal = new Animal();
        });
      }
      else {
        alert("editar");
        this.servico.editar(this.id, this.animal).subscribe(animal => {
          this.mensagem = this.animal.nome,
          + " editado com sucesso!";
        });
        //this.router.navigate(['/tabelaAnimal']);
      }
    }

    cancelar(){
       this.router.navigate(['/tabela']);
    }
}
