import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-grafico-barra-horizontal',
  templateUrl: './grafico-barra-horizontal.component.html',
  styleUrls: ['./grafico-barra-horizontal.component.css']
})
export class GraficoBarraHorizontalComponent implements OnDestroy {

  constructor() {
    this.intervalo = setInterval( () => {

      console.log('tick');
      const newResults = [...this.results];

      // tslint:disable-next-line: forin
      for ( let i in newResults ) {
        newResults[i].value = Math.round( Math.random() * 500 );
      }

      this.results = [...newResults];
    }, 1500);
  }

  results: any[] = [
    {
      name: 'Juego 1',
      value: 25
    },
    {
      name: 'Juego 2',
      value: 10
    },
    {
      name: 'Juego 3',
      value: 25
    },
    {
      name: 'Juego 4',
      value: 30
    }
  ];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Juegos';
  showYAxisLabel = true;
  yAxisLabel = 'Votos';

  colorScheme = 'nightLights';
  intervalo;

  // tslint:disable-next-line: typedef
  ngOnDestroy(){
    clearInterval( this.intervalo )
  }

  // tslint:disable-next-line: typedef
  onSelect(event) {
    console.log(event);
  }
}
