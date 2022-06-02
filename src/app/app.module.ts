import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ImageComponent } from './image/image.component';
import { HeaderComponent } from './header/header.component';
import { TitleComponent } from './title/title.component';
import { SectionComponent } from './section/section.component';
import { SecondaboutmeComponent } from './secondaboutme/secondaboutme.component';
import { ServsectionComponent } from './servsection/servsection.component';
import { ServsectiontitleComponent } from './servsectiontitle/servsectiontitle.component';
import { ServsectionsecondComponent } from './servsectionsecond/servsectionsecond.component';
import { SkillsecComponent } from './skillsec/skillsec.component';
import { InskillsecComponent } from './inskillsec/inskillsec.component';
import { ContactsecComponent } from './contactsec/contactsec.component';
import { LeftcontactsecComponent } from './leftcontactsec/leftcontactsec.component';
import { RightcontactsecComponent } from './rightcontactsec/rightcontactsec.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ImageComponent,
    HeaderComponent,
    TitleComponent,
    SectionComponent,
    SecondaboutmeComponent,
    ServsectionComponent,
    ServsectiontitleComponent,
    ServsectionsecondComponent,
    SkillsecComponent,
    InskillsecComponent,
    ContactsecComponent,
    LeftcontactsecComponent,
    RightcontactsecComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
