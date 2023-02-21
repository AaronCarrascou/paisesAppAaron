import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Pais } from '../../interfaces/paises.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {

  pais!:Pais;

  constructor(
    private route: ActivatedRoute, 
    private paisService:PaisService
    ){

  }
  ngOnInit(): void {

    this.route.params
      .pipe(
        switchMap(({id})=>this.paisService.buscarPaisPorCodigo(id)),
        tap(console.log)
      )
      .subscribe(pais=>{
        this.pais=pais[0];
      })

    // this.route.params.subscribe( ({id}) =>{
    //   this.paisService.buscarPaisPorCodigo(id).subscribe((pais)=>{
    //     console.log(pais);
    //   })
    // })
  }



}
