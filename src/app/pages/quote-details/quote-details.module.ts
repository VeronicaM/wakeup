import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { CommonModule } from '@angular/common';

import { routing } from './quote-details.routing';
import { WakeupCommonModule } from '../../common/common.module';
import { QuoteDetailsComponent } from './quote-details.component';
import { WakeupAddCommentComponent } from './components/wakeup-add-comment/wakeup-add-comment.component';
import { WakeupCommentListComponent } from './components/wakeup-comment-list/wakeup-comment-list.component';

@NgModule({
  imports: [
    RouterModule,
    FormsModule,
    MaterialModule,
    CommonModule,
    WakeupCommonModule,
    routing
  ],
  exports: [],
  declarations: [
    QuoteDetailsComponent,
    WakeupAddCommentComponent,
    WakeupCommentListComponent
  ],
  providers: [],
  entryComponents: []
})
export default class QuoteDetailsModule {}
