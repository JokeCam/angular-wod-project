import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LaunchComponent } from "./components/launch/launch.component";
import { AppDndDirective } from './shared/directives/app-dnd.directive';
import { WindowComponent } from './shared/components/window/window.component';


@NgModule({
  declarations: [
    AppComponent,
    LaunchComponent,
    AppDndDirective,
    WindowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AppDndDirective],
  bootstrap: [AppComponent]
})

export class AppModule { }
