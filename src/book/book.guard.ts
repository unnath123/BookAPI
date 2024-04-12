
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Request } from 'express';

@Injectable()
export class BookGuard implements CanActivate {
public token : string = "abcd123";

  canActivate(context: ExecutionContext,): boolean  {
    const ctx = context.switchToHttp();
    const request = ctx.getRequest<Request>();

    console.log(request.header("token"))
    if(request.header("token") != this.token) return false
    if(request.header("token") == this.token){
        return true
    } 
  }
}
