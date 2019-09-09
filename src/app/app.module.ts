import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatExpansionModule, MatFormFieldModule, MatSelectModule, MatStepperModule, MatProgressSpinnerModule} from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HomeComponent } from './components/home/home.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule} from '@angular/material/list';
import { MatCardModule} from '@angular/material/card';
import { NewsFeedComponent } from './components/news-feed/news-feed.component';
import { NewsArticleComponent } from './components/news-article/news-article.component';
import { MatBadgeModule } from '@angular/material/badge';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { MatInputModule } from '@angular/material/input';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ForumComponent } from './components/forum/forum.component';
import { ForumSectionComponent } from './components/forum-section/forum-section.component';
import { APIRequestComponent } from './services/apirequest/apirequest.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewsFeedComponent,
    NewsArticleComponent,
    RegisterFormComponent,
    LoginFormComponent,
    ForumComponent,
    ForumSectionComponent,
    APIRequestComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    MatTabsModule,
    MatToolbarModule,
    MatDividerModule,
    MatListModule,
    MatCardModule,
    MatBadgeModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
