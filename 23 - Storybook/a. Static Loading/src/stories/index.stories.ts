import { storiesOf } from '@storybook/angular';
import { text } from '@storybook/addon-knobs';

import { Welcome, Button } from '@storybook/angular/demo';

import { GreetingComponent } from '../app/greeting/greeting.component';

storiesOf('GreetingComponent', module)
  .add('without name', () => ({
    component: GreetingComponent,
    props: {
      name: ''
    },
    info: {
      text: `
            Component won't show "Hello !" when there is no name, but instead doesn't show *anything* at all.
          `
    }
  }))
  .add('with name', () => ({
    component: GreetingComponent,
    props: {
      name: 'Storybook'
    }
  }))
  .add('knobs', () => ({
    component: GreetingComponent,
    props: {
      name: text('Name', 'Storybook')
    }
  }));
