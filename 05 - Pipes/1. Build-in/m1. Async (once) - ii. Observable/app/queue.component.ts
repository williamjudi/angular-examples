/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

import { Component } from '@angular/core';
import { from, Observable } from 'rxjs';

@Component({
  moduleId: __moduleName /* Use __moduleName in SystemJS and module.id in commonjs */,
  selector: 'queue',
  templateUrl: './queue.component.html'
})
export class QueueComponent {
  firstArrival: Observable<Date> = from<Promise<Date>>(
    new Promise(function (resolve /*, reject */) {
      setTimeout(function () {
        resolve(new Date());
      }, 3000);
    })
  );
}
