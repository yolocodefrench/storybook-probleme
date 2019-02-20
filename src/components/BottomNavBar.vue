<template>
  <!-- eslint-disable -->
  <div id="bottom-bar-mobile">
    <router-link :to="{ path: 'home' }">
      <div>
        <icon-home class="icon-grey" width="20" height="20"></icon-home>
        <p class="bottom-bar-mobile-title-link">Accueil</p>
      </div>
    </router-link>
    <router-link :to="{ path: 'home' }">
      <div>
        <icon-magnifying-glass class="icon-grey" width="20" height="20"></icon-magnifying-glass>
        <p class="bottom-bar-mobile-title-link">Recherche</p>
    </div>
    </router-link>
    <router-link :to="{ path: 'home' }">
      <div>
        <icon-user class="icon-grey" width="20" height="20"></icon-user>
        <p class="bottom-bar-mobile-title-link">Mon Compte</p>
      </div>
    </router-link>
  </div>
  <!-- eslint-enable -->
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import IconHome from './svg/IconHome.vue';
import IconMagnifyingGlass from './svg/IconMagnifyingGlass.vue';
import IconUser from './svg/IconUser.vue';
import '../scss/_global.scss';
import '../scss/_variables.scss';

@Component({
  components: {
    IconHome,
    IconMagnifyingGlass,
    IconUser,
  },
})
export default class BottomNavBar extends Vue {
  @Prop() private height!: number;

  @Prop() private width!: number;
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

#bottom-bar-mobile{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: $white;
  padding : 10px;
  position : absolute;
  bottom : 0;
  left : 0;
  width : 100%;
  z-index : 2;
  box-shadow: 10px 10px 10px 10px $dark-grey;

  div{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  p{
    margin: 0;

  }

  .bottom-bar-mobile-title-link{
    color : $dark-grey;
  }

}


</style>
