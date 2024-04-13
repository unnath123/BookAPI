import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common';
import { timeStamp } from 'console';
import { Request, Response } from 'express';

@Catch(HttpException)
export class BookException implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();

    response
      .status(status)
      .json({
        statusCode: status,
        timeStamp: new Date().toISOString(),
        url:request.url,
        host:request.get("host")
      });
  }
}
