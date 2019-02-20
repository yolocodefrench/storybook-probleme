<template>
  <div class="home">
    <BottomNavBar></BottomNavBar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import BottomNavBar from '@/components/BottomNavBar.vue'; // @ is an alias to /src

@Component({
  components: {
    BottomNavBar,
  },
})
export default class Home extends Vue {}
</script>
