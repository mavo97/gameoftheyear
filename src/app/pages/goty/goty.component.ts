import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Game } from '../../interfaces/interfaces';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.css']
})
export class GotyComponent implements OnInit {

  constructor( private gameService: GameService ) { }

  games: Game[] = [];

  ngOnInit(): void {

    this.gameService.getNominados().subscribe( games => {
      console.log(games);
      this.games = games;
    });

  }
  // tslint:disable-next-line: typedef
  votarJuego( juego: Game ){
    this.gameService.votarJuego( juego.id ).subscribe( (resp: any) => {
      if ( resp.ok ){
        Swal.fire('Gracias', resp.mensaje, 'success');
      }
    });
  }
}
