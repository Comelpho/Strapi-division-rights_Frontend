export default defineNuxtRouteMiddleware(async (to, from) => {
    const acceptToken = useCookie('accept_token')
    const authChangeLayout = useState('authChangeLayout', () => "auth")
    

    if(acceptToken.value){
        authChangeLayout.value = "default"
    }else{
        authChangeLayout.value = "auth"
        return true
    }

  })