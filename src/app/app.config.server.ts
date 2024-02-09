import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { SocketService } from './shared/socket.service';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    SocketService
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
