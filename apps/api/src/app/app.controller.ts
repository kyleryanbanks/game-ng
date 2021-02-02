import { Controller, Post } from '@nestjs/common';

import { FamiliarService } from './familiar.service';

@Controller()
export class appController {
  constructor(private readonly familiarService: FamiliarService) {}

  @Post('connect')
  connect(): null | Error {
    return this.familiarService.connect();
  }

  @Post('plugDS4')
  plugInDS4Controller(): null | Error {
    return this.familiarService.plugInDS4Controller();
  }

  @Post('downBack')
  holdDownBack() {
    return this.familiarService.holdDownBack();
  }
}
