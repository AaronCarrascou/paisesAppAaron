import { Component } from '@angular/core';
import { Pais } from '../../interfaces/paises.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent {
  termino:string='';
  hayError:boolean=false;
  paises:Pais[]=[];

  constructor(private paisService: PaisService){}

  buscar(e:any){
    this.termino=e;
    this.hayError=false;
    this.paisService.buscarPaisPorCapital(this.termino).subscribe((res:Pais[])=>{
      console.log(res);
      this.paises=res;
    },
    (err:any)=>{
      console.log('Error', err);
      this.hayError=true;
      this.paises=[];
    })
    
  }

  sugerencias(e:any){
    this.hayError=false;
    
  }
}
