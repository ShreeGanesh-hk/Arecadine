import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {LayoutComponent} from './layout/layout.component';
import {MatmoduleModule} from '../matmodule.module';

const modules = [
  CommonModule,
  MatmoduleModule,
  RouterModule,
  ReactiveFormsModule,
  FormsModule,
];

const components = [
  LayoutComponent
];

const exported = [
  ...components,
  FormsModule,
  CommonModule,
];

const providers = [
];

@NgModule({
  imports: modules,
  declarations: components,
  exports: exported,
  providers: providers,
  entryComponents:[LayoutComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {
}