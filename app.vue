<template lang="pug">
.lds-ring(v-if="loader")
    div
    div
    div
    div
NuxtLayout(:name="authChangeLayout")
</template>


<script setup>
const authChangeLayout = useState('authChangeLayout')
const loader = useState('loader')

</script>
