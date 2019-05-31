import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpExamplesComponent } from './http-examples.component';
import { routing } from './http-examples.routing';
import { CustomerClientService } from './customer-client.service';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [HttpExamplesComponent],
  providers: [CustomerClientService]
})
export class HttpExamplesModule { }
