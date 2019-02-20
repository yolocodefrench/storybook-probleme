<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

export default class Icon extends Vue {
  @Prop() private height!: string;

  @Prop() private width!: string;
}

</script>
