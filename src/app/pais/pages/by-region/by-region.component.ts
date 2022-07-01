import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [
  ]
})
export class ByRegionComponent {

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  paises: Country[] = [];

  constructor( private paisService: PaisService) { }

  getClaseCss(region: string): string{
    return (region === this.regionActiva) 
                ? 'btn btn-outline-dark active' 
                : 'btn btn-outline-dark';
  }
  activarRegion(region: string){

    if(region === this.regionActiva){return};

    this.regionActiva = region;
    this.paises = [];
    
    this.paisService.buscarRegion(this.regionActiva)
          .subscribe({
            next: (paises => this.paises = paises),            
          });
  } 

}
