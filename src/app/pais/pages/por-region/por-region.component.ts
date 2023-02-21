import { Component } from '@angular/core';
import { Pais } from '../../interfaces/paises.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent {

  hayError:boolean=false;

  regiones:string[]=[
    'Africa', 
    'Americas', 
    'Asia', 
    'Europe',
    'Oceania'

  ]

  paises:Pais[]=[];

  regionActiva:string=''

  constructor(
    private paisService:PaisService
  ){}

  activarRegion (region:string){

    if(region===this.regionActiva){return;}
    this.regionActiva=region;

    this.paisService.buscarPaisPorRegion(region).subscribe((res:any)=>{
      this.paises=res;
    })

  }

  getClaseCSS(region:string):string{
    return (region===this.regionActiva)? 'btn btn-primary' : 'btn btn-outline-primary'
  }
}
