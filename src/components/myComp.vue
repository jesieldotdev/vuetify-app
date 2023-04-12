<template>
  <div>
    <p>{{ myProp }}</p>
    
  </div>
</template>

<script>
export default {
  props: {
    myProp: {
      type: String,
      required: true
    }
  }
};
</script>
