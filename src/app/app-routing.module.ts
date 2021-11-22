import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';
import { ChatPageComponent } from './chat/components/chat-page/chat-page.component';
import { GreetingPageComponent } from './greeting-page/greeting-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ChatPageComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'greeting',
    component: GreetingPageComponent,
    canActivate: [AuthGuardService],
  },
  { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
