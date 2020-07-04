import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Game } from '../interfaces/interfaces';
import { of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private games: Game[] = [];

  constructor( private http: HttpClient ) {  }

  // tslint:disable-next-line: typedef
  getNominados() {

    if (this.games.length > 0){
      console.log('Desde cache');
      return of(this.games);
    }else{
      console.log('Desde internet');
      return this.http.get<Game[]>(`${environment.url}/api/goty`).pipe(
        tap( games => this.games = games )
      );
    }
  }

  // tslint:disable-next-line: typedef
  votarJuego( id: string ){
    return this.http.post(`${environment.url}/api/goty/${id}`, { })
    .pipe(
      catchError( err => {
        return of(err.error);
      })
    );
  }

}
