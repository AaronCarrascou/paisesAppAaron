import { Component } from '@angular/core';
import { Pais } from '../../interfaces/paises.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent {

  termino:string='';
  hayError:boolean=false;
  paises:Pais[]=[];
  paisesSugeridos:Pais[]=[];
  mostrarSugerencias:boolean=false;


  constructor(private paisService: PaisService){}

  buscar(e:any){
    this.termino=e;
    this.hayError=false;
    this.paisService.buscarPais(this.termino).subscribe((res:Pais[])=>{
      
      this.paises=res;
    },
    (err:any)=>{
      
      this.hayError=true;
      this.paises=[];
    })
    
  }

  sugerencias(e:any){
    this.mostrarSugerencias=true;
    this.termino=e;
    this.hayError=false;
    this.paisService.buscarPais(this.termino).subscribe((res:Pais[])=>{
      
      this.paisesSugeridos=res.splice(0,3);
    },
    (err:any)=>{

      this.paisesSugeridos=[];
    })
    
  }

  buscarSugerido(termino:string){
    
    this.buscar(termino);
  }
}
