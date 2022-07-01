import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styles: [
  ]
})
export class ByCapitalComponent {

  
  
  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];

  constructor(private paisService: PaisService) { }


  buscar( termino: string ){
    this.hayError = false;
    this.termino = termino;
    
    this.paisService.buscarCapital(this.termino)
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

}
