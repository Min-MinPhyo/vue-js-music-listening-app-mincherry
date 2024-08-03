<template>
    <div id="EditPost" class="container max-w-4xl mx-auto pt-20 pb-20 px-6">
        <div class="text-gray-900 text-xl">Edit Post</div>
        <div class="bg-green-500 w-full h-1"></div>

        <CropperModal v-if="showModal" :minAspectRatioProp="{ width: 16, height: 9 }"
            :maxAspectRatioProp="{ width: 16, height: 9 }" @croppedImageData="setCroppedImageData"
            @showModal="showModal = false" />



        <div class="flex flex-wrap mt-4 mb-6">
            <div class="w-full md:w-1/2 px-3">

                <TextInput label="Title" placeholder="Post title" v-model:input="title" inputType="text"
                    error="this is text error" />
            </div>


            <div class="w-full md:w-1/2 px-3">
                <TextInput label="Location" placeholder="Taungoo" v-model:input="location" inputType="text"
                    error="this is text error" />
            </div>
        </div>


        <div class="flex flex-wrap mt-4 mb-6">
            <div class="w-full md:w-1/2 px-3">
                <DisplayCropperButton label="Post Image" btnText="Add Post Image" @showModal="showModal = true" />
            </div>
        </div>


        <div class="flex flex-wrap mt-4 mb-6">
            <div class="w-full px-3">
                <CroppedImage label="Cropped Image" :image="image" />
            </div>
        </div>


        <div class="flex flex-wrap mt-4 mb-6">
            <div class="w-full md:w-1/2 px-3">
                <TextArea label="Description" placeholder="Please enter some international there" v-model="description"
                    error="this is an error text" />
            </div>
        </div>

        <div class="flex flex-wrap mt-4 mb-6">
            <div class="w-full px-3">
                <SubmitFormButton btnText="Update Post" />
            </div>
        </div>

    </div>
</template>
<script setup>
import TextInput from "@/components/global/TextInput.vue";
import CroppedImage from "@/components/global/CroppedImage.vue";
import { ref } from "vue";
import TextArea from '../../components/global/TextArea.vue';
import SubmitFormButton from '../../components/global/SubmitFormButton.vue';
import DisplayCropperButton from "@/components/global/DisplayCropperButton.vue";
import CropperModal from '../../components/global/CropperModal.vue';

let showModal = ref(false);
let title = ref(null);
let location = ref(null);

let description = ref(null);

// let imageData = null;
let image = ref(null);


const setCroppedImageData = (data) => {
    // imageData = data;
    image.value = data.imageUrl
}
</script>
