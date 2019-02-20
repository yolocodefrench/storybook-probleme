import Vue from 'vue';

import { storiesOf } from '@storybook/vue';

import BottomNavBar from '../src/components/BottomNavBar.vue';

storiesOf('BottomNavBar', module)
  .add('Barre de navigation du bas', () => ({
    components: { BottomNavBar },
    template: '<BottomNavBar></BottomNavBar>',
  }));
