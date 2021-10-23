import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';


if (environment.production) {
  enableProdMode();
}

let google_map_key = environment.google_map_api_key;

let node = document.createElement('script');
node.src = `https://maps.googleapis.com/maps/api/js?key=${google_map_key}`;
node.type = 'text/javascript';

document.getElementsByTagName('head')[0].appendChild(node);


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
