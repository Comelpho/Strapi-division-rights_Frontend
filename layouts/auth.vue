<template lang='pug'>
.vh-100.d-flex.justify-content-center.align-items-center
    .container
        .row.d-flex.justify-content-center
            .col-12.col-md-8.col-lg-6
                .card.bg-white
                    .card-body.p-5
                        form(@submit="auth").mb-3.mt-md-4
                            h2.fw-bold.mb-2.text-uppercase Авторизация
                            p.mb-4 Введите логин и пароль
                            .mb-3
                                label.form-label(for='login') Логин*
                                input#login.form-control(type='text', required, v-model="authParams.identifier" placeholder='Username*')
                            .mb-3
                                label.form-label(for='password') Пароль*
                                input#password.form-control(type='password', required, v-model="authParams.password" placeholder='*******')
                            .d-grid
                                button.btn.btn-outline-dark(type='submit') Авторизоваться
                        
</template>


<script setup>
const { $login } = useNuxtApp()

const authParams = ref({
    identifier: "",
    password: ""
})

async function auth (e) {
    e.preventDefault()
    const { error, data } = await $login(authParams.value)
}

</script>