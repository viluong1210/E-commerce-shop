import { HttpStatus } from '@nestjs/common';
export class ErrorException extends Error {
  name: string;

  code: string;

  meta?: any;

  status?: HttpStatus;
  constructor(
    message: string,
    status?: HttpStatus,
    name?: string,
    code?: string,
    meta?: any,
  ) {
    super();
    this.name = name;
    this.message = message;
    this.code = code;
    this.meta = meta;
    this.status = status;
  }
}
