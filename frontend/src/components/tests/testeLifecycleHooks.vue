<template>
  <!-- Teste de gatilho onMounted -->
  <!-- INICIO TESTE onMOUNTED -->
  <div>
    <h1>{{ message }}</h1>
  </div>
  <!-- FIM TESTE onMOUNTED -->

  <!-- Teste de gatilho onUpdated -->
  <!-- INICIO TESTE onUPDATED -->
  
  <!-- <br>
  <p>clicks: {{ count }}</p>
  <button class="btn btn-primary" id="count" @click="count++">+ um</button> -->

  <!-- FIM TESTE onUPDATED -->
</template>


<script>

// import { ref, onUpdated } from 'vue';

// const count = ref(0);

// onUpdated(() => {
//   // o conteúdo de texto deve ser o mesmo que o `count.value` atual
//   console.log(document.getElementById('count').textContent);
// });
</script>



<template>
  <div>
    <h1>{{ message }}</h1>
  </div>
</template>

<!-- <script>
import { onMounted, ref } from 'vue';

export default {
  setup() {
    // Definindo uma variável reativa para armazenar a mensagem
    const message = ref('');

    // Definindo a lógica a ser executada após o componente ser montado
    onMounted(() => {
      // Simulando uma operação assíncrona
      setTimeout(() => {
        // Atualizando a mensagem após 2 segundos
        message.value = 'Componente montado!';
      }, 2000);
    });

    // Retornando a variável reativa e/ou outras propriedades
    return {
      message
    };
  }
};
</script> -->

