import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'game-ng-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  connected = false;
  pluggedIn = false;
  turtling = false;

  onConnect() {
    this.http
      .post('api/connect', {})
      .pipe(
        catchError((err) => {
          throw 'Error connecting. Details: ' + err;
        })
      )
      .subscribe(() => {
        this.connected = true;
      });
  }

  onPlugIn() {
    this.http
      .post('api/plugDS4', {})
      .pipe(
        catchError((err) => {
          throw 'Error connecting. Details: ' + err;
        })
      )
      .subscribe(() => {
        this.pluggedIn = true;
      });
  }

  onTurtle() {
    this.http
      .post('api/holdDownBack', {})
      .pipe(
        catchError((err) => {
          throw 'Error connecting. Details: ' + err;
        })
      )
      .subscribe(() => {
        this.turtling = true;
      });
  }

  constructor(private http: HttpClient) {}
}
