import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatContainerComponent } from './components/chat-container/chat-container.component';
import { ChatPageComponent } from './components/chat-page/chat-page.component';
import { SharedModule } from '../shared/shared.module';
import { ProfileSettingsComponent } from './components/profile-settings/profile-settings.component';
import { ServicesModule } from 'src/services/service.module';
import { ModifyFirstLetterToUpperCasePipe } from './pipes/modify-first-letter-to-upper-case.pipe';

@NgModule({
  declarations: [ChatContainerComponent, ChatPageComponent, ProfileSettingsComponent, ModifyFirstLetterToUpperCasePipe],
  imports: [CommonModule, SharedModule, ServicesModule],
})
export class ChatModule {}
