<template lang='pug'>
.mt-5
    TableResize(:data="api")
</template>

<script setup>
const { $getSecondTable } = useNuxtApp()


const { data } = await $getSecondTable()

const api = data.value.data
</script>