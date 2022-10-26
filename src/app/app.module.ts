import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { NavComponent } from './nav/nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{AngularFireModule} from'@angular/fire/compat';
import{environment} from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import{AngularFireAuthModule} from '@angular/fire/compat/auth';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { VideoModule } from './video/video.module';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    UserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    VideoModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
