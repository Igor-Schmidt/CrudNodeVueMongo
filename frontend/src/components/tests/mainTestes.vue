<template>
    <div class="container" id="container-animation">
        <div class="card" id="card-geral-form">
            <div class="card-header">
                <h3>Testes de Vue JS</h3>
            </div>
            <div class="card-body">
                <!-- INICIO PROP TESTE -->
                <!-- Testando Props em Vue JS -->
                <testeProp
                    teste-teste1="Isso é um <h4> de um prop"
                    testeTeste2="Isso é um <p> de um prop"
                />
                <!-- FIM PROP TESTE -->

                <testeLifecycle></testeLifecycle>
            </div>
        </div>
    </div>
</template>

<script src="./TesteScript.js"></script>
<style src="../StyleMain.css"></style>
<style src="./TesteStyle.css"></style>
