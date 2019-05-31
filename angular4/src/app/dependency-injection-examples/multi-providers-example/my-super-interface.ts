import { InjectionToken } from '@angular/core';

export interface MySuperInterface {
  getName() : string;
}

export const MY_SUPER_INTERFACE_TOKEN = new InjectionToken<MySuperInterface>('MySuperInteraceToken');
