import { NgModule } from "@angular/core";
import { MaterialModule } from "@angular/material";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { AuthenticationGuard } from "./guards/authentication.guard";
import { UserDetailResolver } from "./guards/user-details.resolver";
import {
  LoginService,
  AuthTokenService,
  QuestionSetService,
  QuestionService,
  QuoteService,
  TopicService
} from "./services";
import { WakeupTopBarComponent } from "./components/wakeup-top-bar/wakeup-top-bar.component";
import { WakeupSideNavComponent } from "./components/wakeup-side-nav/wakeup-side-nav.component";
import { WakeupCardComponent } from "./components/wakeup-card/wakeup-card.component";

@NgModule({
  imports: [MaterialModule, CommonModule, RouterModule, ReactiveFormsModule, FormsModule],
  declarations: [
    WakeupTopBarComponent,
    WakeupSideNavComponent,
    WakeupCardComponent
  ],
  providers: [
    AuthTokenService,
    LoginService,
    QuestionSetService,
    QuestionService,
    QuoteService,
    TopicService,
    AuthenticationGuard,
    UserDetailResolver
  ],
  exports: [
    WakeupTopBarComponent,
    WakeupSideNavComponent,
    WakeupCardComponent,
    MaterialModule,
    CommonModule, 
    RouterModule, 
    ReactiveFormsModule, 
    FormsModule
  ]
})
export class WakeupCommonModule {}
