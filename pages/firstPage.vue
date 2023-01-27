<template lang='pug'>
.mt-5
    TableResize(:data="api")
</template>


<script setup>
const { $getFirstTable } = useNuxtApp()


const { data } = await $getFirstTable()

const api = data.value.data
</script>