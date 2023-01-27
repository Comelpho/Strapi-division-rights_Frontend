<template lang='pug'>
.mt-5
    TableResize(:data="api")
</template>

<script setup>
const { $getThirdTable } = useNuxtApp()


const { data } = await $getThirdTable()

const api = data.value.data
</script>