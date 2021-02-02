import { Injectable } from '@nestjs/common';
import * as ViGEmClient from 'vigemclient';

@Injectable()
export class FamiliarService {
  client: any; // new ViGEmClient();
  connectionError: Error = null; // this.client.connect()
  controller: any; //this.client.createDS4Controller();

  constructor() {
    this.client = new ViGEmClient();
  }

  connect(): null | Error {
    this.connectionError = this.client.connect();

    this.controller = this.client.createDS4Controller();

    return this.connectionError;
  }

  plugInDS4Controller() {
    if (!this.controller) throw Error('Connection Failed');

    this.controller.updateMode = 'manual';
    return this.controller.connect();
  }

  turtle() {
    if (!this.controller) {
      throw Error('Ur not plugged in scrub');
    }

    this.controller.axis.dpadHorz.setValue(-1);
    this.controller.axis.dpadVert.setValue(-1);

    this.controller.update();

    return true;
  }

  chill() {
    if (!this.controller) {
      throw Error('Ur not plugged in scrub');
    }

    this.controller.axis.dpadHorz.setValue(0);
    this.controller.axis.dpadVert.setValue(0);

    this.controller.update();

    return true;
  }
}
