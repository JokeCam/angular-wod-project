import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LaunchComponent } from "./components/launch/launch.component";
import { AppDndDirective } from './shared/directives/app-dnd.directive/app-dnd.directive';
import { WindowComponent } from './shared/components/window/window.component';
import { ReactiveFormsModule } from "@angular/forms";
import { NgxsModule } from "@ngxs/store";
import { AppState } from "./store/state/app.state";
import { NgxsReduxDevtoolsPluginModule } from "@ngxs/devtools-plugin";
import { NgxsWindowComponent } from './components/windows/ngxs-window/ngxs-window.component';

@NgModule({
  declarations: [
    AppComponent,
    LaunchComponent,
    AppDndDirective,
    WindowComponent,
    NgxsWindowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxsModule.forRoot(AppState, {
      developmentMode: true
    }),
    NgxsReduxDevtoolsPluginModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
