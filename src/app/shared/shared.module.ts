import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageTranslationModule } from './modules/language-translation/language-translation.module';
import { PageHeaderModule } from './modules/page-header/page-header.module';
import { StatModule } from './modules/stat/stat.module';
import { ArhitectService } from './services/arhitect.service';
import { CercetatorService } from './services/cercetator.service';
import { ContactService } from './services/contact.service';
import { CribaService } from './services/criba.service';
import { DashboardService } from './services/dashboard.service';
import { OmService } from './services/om.service';
import { ProfesorService } from './services/professor.service';
import { PhotoUploadComponent } from './components/photo-upload/photo-upload.component';
import { PhotoService } from './services/photo.service';
import { EditorViewComponent } from './components/editor-view/editor-view.component';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { NoItemsComponent } from './components/no-items/no-items.component';



@NgModule({
  declarations: [PhotoUploadComponent, EditorViewComponent, SafeHtmlPipe, NoItemsComponent],
  imports: [
    CommonModule,
    LanguageTranslationModule,
    PageHeaderModule,
    StatModule
  ],
  providers: [ArhitectService, CercetatorService, ContactService, CribaService,
    DashboardService, OmService, ProfesorService, PhotoService],
  exports: [PhotoUploadComponent, EditorViewComponent, SafeHtmlPipe, NoItemsComponent],
})
export class SharedModule { }
