<template>
    <div id="Register">
        <TopNavigation />
        <div class="w-full p-6 flex justify-center items-center">
            <div class="w-full max-w-xs">
                <div class="bg-black p-8 shadow rounded mb-6">
                    <h1 class="mb-6 text-lg text-gray-100 font-thin">Let's get rocking!</h1>

                    <div class="mb-4">

                        <TextInput label="email" :labelColor="false" placeholder="email@gmail.com" v-model:input="email"
                            inputType="text" :error="errors.email ? errors.email[0] : ''" />
                    </div>


                    <div class="mb-4">

                        <TextInput label="password" :labelColor="false" placeholder="password" v-model:input="password"
                            inputType="password" :error="errors.password ? errors.password[0] : ''" />
                    </div>


                    <button class="
                            block
                            w-full
                            bg-green-500
                            text-white
                            rounded-sm
                            py-3
                            px-4
                            text-sm
                            tracking-wide
                            " type="submit" @click="login">
                        Login
                    </button>


                </div>

                <p class="text-center text-md text-gray-900">
                    Already have an account?

                    <router-link to="login" class="text-blue-500 no-underline hover:underline">
                        Login
                    </router-link>


                </p>
            </div>
        </div>
    </div>
</template>


<script setup>

import { ref } from 'vue';
import TextInput from "../components/global/TextInput.vue";
import axios from 'axios'
import { useUserStore } from '../store/user-store.js'



const userStore = useUserStore();


let errors = ref([])
let email = ref(null)
let password = ref(null)


const login = async () => {
    errors.value = []

    try {

        let res = await axios.post('http://127.0.0.1:8000/api/login', {

            email: email.value,
            password: password.value
        })
        console.log(res);
        console.log('ok')

        userStore.setUserDetails(res);
        console.log('no')


    } catch (err) {
        errors.value = err.response.data.errors
    }

}




</script>