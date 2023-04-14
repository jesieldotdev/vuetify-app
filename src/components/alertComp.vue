<template>
  <div>
    
    <button @click="mostrarAlerta()">Mostrar Alerta</button>
  </div>
</template>

<script>
import Toasted from 'vue-toasted';

export default {
  methods: {
    mostrarAlerta() {
      this.$toasted.show('Mensagem do alerta', { duration: 2000 });
    }
  },
  mounted() {
    this.$toasted.register('my_app_name', {
      duration: 3000,
      position: 'top-center',
      theme: 'bubble'
    });
  },
  components: {
    Toasted
  }
};
</script>
