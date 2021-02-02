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
          this.connected = false;
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
          this.pluggedIn = false;
          throw 'Could not plug in for some reason' + err;
        })
      )
      .subscribe(() => {
        this.pluggedIn = true;
      });
  }

  onToggle() {
    this.turtling
      ? this.http
          .post('api/chill', {})
          .pipe(
            catchError((err) => {
              throw 'I could not chill: ' + err;
            })
          )
          .subscribe(() => {
            this.turtling = false;
          })
      : this.http
          .post('api/turtle', {})
          .pipe(
            catchError((err) => {
              throw 'I dont block: ' + err;
            })
          )
          .subscribe(() => {
            this.turtling = true;
          });
  }

  constructor(private http: HttpClient) {}
}
