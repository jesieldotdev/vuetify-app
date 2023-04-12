<template>
  <div>
    <my-Comp :my-prop="myVariable"></my-Comp>
  </div>
</template>

<script>
import myComp from '../components/myComp.vue';

export default {
  components: {
    myComp
  },
  data() {
    return {
      myVariable: 'Hello, world!'
    };
  }
};
</script>
