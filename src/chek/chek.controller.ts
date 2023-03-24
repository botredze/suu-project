import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { ChekService } from "./chek.service";
import { CreateCheckDto } from "./dto/сreateCheckDto";


@Controller('chek')
export class ChekController {

  constructor( private checkService: ChekService) {
  }
  @Post('/chek')
  createCheck(@Body() dto: CreateCheckDto) {
    return this.checkService.create(dto);
  }

  @Get()
  getCheck(){
    return this.checkService.getCheck()
  }

  @Get()
  getAllCheckList(){
    return this.checkService.getAll()
  }
}
