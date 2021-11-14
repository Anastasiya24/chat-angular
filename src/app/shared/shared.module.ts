import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { TextareaComponent } from './textarea/textarea.component';
import { ModalComponent } from './modal/modal.component';
import { MessageComponent } from './message/message.component';

const sharedComponents = [ButtonComponent, InputComponent, TextareaComponent, ModalComponent, MessageComponent];
const angularModules = [BrowserModule, FormsModule];

@NgModule({
  declarations: sharedComponents,
  imports: angularModules,
  exports: sharedComponents,
})
export class SharedModule {}
