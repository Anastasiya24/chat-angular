import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatContainerComponent } from './components/chat-container/chat-container.component';
import { ChatPageComponent } from './components/chat-page/chat-page.component';
import { SharedModule } from '../shared/shared.module';
import { ProfileSettingsComponent } from './components/profile-settings/profile-settings.component';

@NgModule({
  declarations: [ChatContainerComponent, ChatPageComponent, ProfileSettingsComponent],
  imports: [CommonModule, SharedModule],
})
export class ChatModule {}