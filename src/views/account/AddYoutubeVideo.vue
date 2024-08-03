<template>
    <div id="Add Youtube Video" class="container mx-auto max-w-4xl pt-20 px-6">
        <div class="text-gray-900 text-xl"> Add Youtube Video</div>
        <div class="bg-green-500 w-full h-1 mb-4"></div>

        <TextInput class="mb-6" label="Add Video" placeholder="New Add Video" v-imodel:input="title" inputType="text"
            error="this is text error" />


        <TextInput class="mb-6" label="Video URL" placeholder="dfddwasswq" v-model:input="videoCode" inputType="text"
            error="this is text error" />



        <SubmitFormButton btnText="Add Youtube Video" />

    </div>
</template>
<script setup>
import TextInput from '@/components/global/TextInput.vue';
import SubmitFormButton from '@/components/global/SubmitFormButton.vue';
</script>
