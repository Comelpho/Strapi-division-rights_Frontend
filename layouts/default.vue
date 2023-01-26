<template lang='pug'>
nav.navbar.navbar-expand-lg.navbar-light.bg-light
    .container-fluid
        NuxtLink.navbar-brand(to='/') Меню
        button.navbar-toggler(type='button', data-bs-toggle='collapse', data-bs-target='#navbarText', aria-controls='navbarText', aria-expanded='false', aria-label='Toggle navigation')
            span.navbar-toggler-icon
        #navbarText.collapse.navbar-collapse
            ul.navbar-nav.me-auto.mb-2.mb-lg-0
                li(v-for="item in menu").nav-item
                    NuxtLink.nav-link(aria-current='page', activeClass="active", :to="item.attributes.url") {{ item.attributes.title }}
NuxtPage
</template>


<script setup>

const { $getMenu } = useNuxtApp()


const { data } = await $getMenu()

const menu = data.value.data

console.log(menu);

</script>