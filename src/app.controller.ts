import {Controller, Get, Req} from "@nestjs/common";
import {AppService} from "./app.service";
import {Request} from "express";

@Controller('/api')
export class AppController {

    constructor(private appService: AppService) {}

    @Get('/users')
    getUsers(){
        return this.appService.getUsers()
    }

    // getUsers(@Req() request: Request):string{
    //     return  'Hello' + request['user']?.email + '!'
    // }
}