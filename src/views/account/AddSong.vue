<template>
    <div id="AddSong" class="container mx-auto max-w-4xl pt-20 px-6">
        <div class="text-gray-900 text-xl"> Add Songs</div>
        <div class="bg-green-500 w-full h-1 mb-4"></div>

        <TextInput class="mb-6" label="Add Song" placeholder="New Song Add" v-model:input="title" inputType="text"
            error="this is text error" />


        <div class="w-full">

            <label class="
                                                      block
                                                      uppercase
                                                      tracking-wide
                                                      text-gray-700
                                                      text-xs
                                                      font-bold
                                                      mb-2
                                                ">Select Image</label>

            <input class="
                                                         form-control
                                                         block
                                                         w-full
                                                         px-3
                                                         py-1.5
                                                         text-base
                                                         font-normal
                                                         text-gray-700
                                                         bg-white
                                                         border
                                                         border-solid
                                                         border-gray-400
                                                         rounded
                                                         transition
                                                         ease-in-out
                                                         m-0
                                                         focus:text-gray-700
                                                         focus:bg-white
                                                         focus:border-blue-600
                                                         focus:outline-none
                                                    " type="file" id="image" ref="fileInput"
                @change="getUploadedImage">



        </div>

        <SubmitFormButton btnText="Add Song" />

    </div>
</template>
<script setup>
import TextInput from '@/components/global/TextInput.vue';
import SubmitFormButton from '@/components/global/SubmitFormButton.vue';
</script>
