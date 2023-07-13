import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signin() {
    return { message: 'I am signin' };
  }

  signup() {
    return { message: 'I am signup' };
  }
}
