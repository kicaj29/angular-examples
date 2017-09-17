import { InjectionToken } from '@angular/core';
import { MyDataService } from './my-data.service';

export const ROOT_MYDATASERVICE = new InjectionToken<MyDataService>('DataService');
