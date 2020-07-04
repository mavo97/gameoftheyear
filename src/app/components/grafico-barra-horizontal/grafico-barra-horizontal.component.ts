import { Component, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-barra-horizontal',
  templateUrl: './grafico-barra-horizontal.component.html',
  styleUrls: ['./grafico-barra-horizontal.component.css']
})
export class GraficoBarraHorizontalComponent implements OnDestroy {

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
    // intervalo;
  @Input() results: any[] = [];
  constructor() {
    /*
    this.intervalo = setInterval( () => {

      console.log('tick');
      const newResults = [...this.results];

      // tslint:disable-next-line: forin
      for ( let i in newResults ) {
        newResults[i].value = Math.round( Math.random() * 500 );
      }

      this.results = [...newResults];
    }, 1500); */
  }

  // tslint:disable-next-line: typedef
  ngOnDestroy(){
    // clearInterval( this.intervalo );
  }

  // tslint:disable-next-line: typedef
  onSelect(event) {
    console.log(event);
  }
}
