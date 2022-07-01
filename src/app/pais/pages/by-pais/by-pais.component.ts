import { Component, Output } from '@angular/core';
import { Country } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-by-pais',
  templateUrl: './by-pais.component.html',
  styles: [`
  li{
    cursor: pointer;
  }`
  ]
})
export class ByPaisComponent {
  
  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];
  mostrarSugerencias: boolean = false;

  constructor(private paisService: PaisService) { }


  buscar( termino: string ){
    this.hayError = false;
    this.mostrarSugerencias = false;
    this.termino = termino;
    
    this.paisService.buscarPais(this.termino)
          .subscribe({            
            next: (paises) => {
              this.paises = paises;
              console.log(paises)},
            error: (err) => {
              this.hayError = true,
              this.paises = [];
            } 
          }); 
  }

  sugerencias(termino:string){
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = true;

    this.paisService.buscarPais(termino)
          .subscribe({
            next: (paises) => this.paisesSugeridos = paises.splice(0,5),
            error: (err) => this.paisesSugeridos = [],            
          });   
  }

  buscarSugerido( termino: string ){
    this.buscar(termino);
    
  }

}
