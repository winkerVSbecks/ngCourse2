import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-for-example *ngFor="let episode of episodes" [episode]="episode">
      {{episode.title}}
    </app-for-example>
        
    <hr>
    
    <h2>Desugared</h2>
    
    <template ngFor [ngForOf]="episodes" let-episode>
      <app-for-example [episode]="episode">
        {{episode.title}}
      </app-for-example>
    </template>
  `
})
export class AppComponent {
  episodes  = [
    { title: 'Winter Is Coming', director: 'Tim Van Patten' },
    { title: 'The Kingsroad', director: 'Tim Van Patten' },
    { title: 'Lord Snow', director: 'Brian Kirk' },
    { title: 'Cripples, Bastards, and Broken Things', director: 'Brian Kirk' },
    { title: 'The Wolf and the Lion', director: 'Brian Kirk' },
    { title: 'A Golden Crown', director: 'Daniel Minahan' },
    { title: 'You Win or You Die', director: 'Daniel Minahan' }
    { title: 'The Pointy End', director: 'Daniel Minahan' }
  ];
}