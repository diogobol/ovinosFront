import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Animal } from './animal';
import { AppModule } from './app.module';

const httpOptions = { 
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class AnimalApiService {

  baseAPI = "http://localhost:3000/animal";

  constructor(private http: HttpClient) { }

  listar(): Observable<Animal[]>{    
        return this.http.get<Animal[]>(this.baseAPI);
  }

  inserir(animal: Animal): Observable<Animal> {
    return this.http.post<Animal>(this.baseAPI, animal, httpOptions);
  }

  buscarPorId(id:number): Observable<Animal> {
    const uri = `${this.baseAPI}/${id}`;//baseAPI + "/"+ id;
    return this.http.get<Animal>(uri);  
  }

  editar(id: number, animal: Animal): Observable<Animal> {
    const uri = `${this.baseAPI}/${id}`;//baseAPI + "/"+ id;
    return this.http.put<Animal>(uri, animal, httpOptions);    
  }

  deletar(id: number){
    alert(id);
    const uri = `${this.baseAPI}/${id}`;//baseAPI + "/"+ id;
    return this.http.delete(uri,httpOptions);
  }

}
