export default defineNuxtPlugin(async () => {
    const acceptToken = useCookie("accept_token");
    const loader = useState("loader", () => false);
    const authChangeLayout = useState("authChangeLayout");

    try {
        var apiFetch = await $fetch.create({
            baseURL: "http://localhost:1337",
            async onRequest ({ request, options }) {
                loader.value = true;
            },
            async onResponse ({ request, response, options }) {
                console.log("Ответ от сервера", response);

                if(response._data && response._data.jwt ){
                    acceptToken.value = response._data.jwt
                    authChangeLayout.value = "default";
                }

                loader.value = false;
            },
            async onRequestError ({ request, options, error }) {
                loader.value = false;
            },
            responseType: "json",
        });
    } catch (err) {
        console.log("errr: ", err);
    }

    async function login (query: any) {
        
        return await useAsyncData("login", () => apiFetch(`/api/auth/local`, {
            method: "POST",

            body: JSON.stringify(query),
            cache: "no-cache",
        }),

        );
    }



    async function getFirstTable () {
        
        return await useAsyncData("firstTable", () => apiFetch(`/api/first-tables`, {
            method: "GET",
            headers:{
                "Authorization": `Bearer ${acceptToken.value}`,
            },
            cache: "no-cache",
        }),

        );
    }

    async function getSecondTable () {
        
        return await useAsyncData("secondTable", () => apiFetch(`/api/second-tables`, {
            method: "GET",
            headers:{
                "Authorization": `Bearer ${acceptToken.value}`,
            },
            cache: "no-cache",
        }),

        );
    }


    async function getThirdTable () {
        
        return await useAsyncData("thirdTable", () => apiFetch(`/api/third-tables`, {
            method: "GET",
            headers:{
                "Authorization": `Bearer ${acceptToken.value}`,
            },
            cache: "no-cache",
        }),

        );
    }

    async function getMenu() {
        
        
        return await useAsyncData("menu", () => apiFetch(`/api/menus`, {
            method: "GET",
            headers:{
                "Authorization": `Bearer ${acceptToken.value}`,
            },
            cache: "no-cache",
        }),

        );
    }
    

    return {
        provide: {
            login,
            getFirstTable,
            getSecondTable,
            getThirdTable,
            getMenu
        },
    };
});
