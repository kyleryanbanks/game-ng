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

    return this.connectionError;
  }

  plugInDS4Controller() {
    this.controller = this.client.createDS4Controller();
    const err = this.controller.connect();

    if (err) {
      console.log(err.message);
      process.exit(1);
    }

    return this.controller();
  }

  holdDownBack() {
    this.controller.updateMode = 'manual';

    if (!this.controller) {
      throw Error('Ur not plugged in scrub');
    }

    this.controller.axis.dpadHorz.setValue(-1);
    this.controller.axis.dpadVert.setValue(-1);

    this.controller.update();
  }
}
