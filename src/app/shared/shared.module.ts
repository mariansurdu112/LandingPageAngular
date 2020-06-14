import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageTranslationModule } from './modules/language-translation/language-translation.module';
import { PageHeaderModule } from './modules/page-header/page-header.module';
import { StatModule } from './modules/stat/stat.module';
import { SharedPipesModule } from './pipes/shared-pipes.module';
import { ArhitectService } from './services/arhitect.service';
import { CercetatorService } from './services/cercetator.service';
import { ContactService } from './services/contact.service';
import { CribaService } from './services/criba.service';
import { DashboardService } from './services/dashboard.service';
import { OmService } from './services/om.service';
import { ProfesorService } from './services/professor.service';
import { PhotoUploadComponent } from './components/photo-upload/photo-upload.component';
import { PhotoService } from './services/photo.service';



@NgModule({
  declarations: [PhotoUploadComponent],
  imports: [
    CommonModule,
    LanguageTranslationModule,
    PageHeaderModule,
    StatModule,
    SharedPipesModule
  ],
  providers: [ArhitectService, CercetatorService, ContactService, CribaService,
    DashboardService, OmService, ProfesorService, PhotoService],
  exports: [PhotoUploadComponent],
})
export class SharedModule { }
