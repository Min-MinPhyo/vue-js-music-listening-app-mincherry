
<template>
    <div>
        <div class="mx-auto py-4">
            <div class="flex flex-wrap font-bold text-gray-100">

                <div class="text-gray-900 text-xl">Posts</div>
                <div class="bg-green-500 w-full h-1"></div>

                <div class="w-full mt-4">
                    <RouterLinkButton class="ml-2" btnText="Create Post" color="green" url="/account/create-post" />

                </div>
            </div>
        </div>

        <div class="flex flex-wrap mb-4">
            <div class="my-1 px-1 w-full md:w-1/2 lg:1/2">

                <div class="rounded-lg border">

                    <a href="#">
                        <img class="rounded-t-lg" src="https://via.placeholder.com/300/500" alt="image" />
                    </a>
                    <div class="p-2 md:p-4">

                        <div class="text-lg">

                            <router-link to="" class="underline
                                       text-blue-500
                                       hover:text-blue-600
                                       ">


                                Text Title

                            </router-link>




                        </div>

                        <p class="py-2"> Location :Test Location</p>
                        <p class="text-gray-dark text-md">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium deserunt explicabo
                            nesciunt unde eius quod ipsa aspernatur obcaecati culpa nihil fugit rem aliquam facere esse
                            hic consequuntur ab, est possimus?

                        </p>


                        <div class="mt-2 flex item-center justify-end">

                            <router-link to="" class="
                                   bg-blue-500
                                   hover:text-blue-700
                                   text-white
                                   text-sm
                                   font-bold
                                   py-1
                                   px-3
                                   rounded-full
                                   ">Edit Post</router-link>


                            <button class="
                                    bg-red-500
                                    hover:text-red-700
                                    text-white
                                    text-sm
                                    font-bold
                                    py-1
                                    px-2
                                    rounded-full
                                     ">
                                Delete Post</button>




                        </div>





                    </div>
                </div>


            </div>
        </div>


    </div>
</template>


<script setup>
import RouterLinkButton from '@/components/global/RouterLinkButton.vue';
// import SongPlayer from '@/components/partials/profile/SongPlayer.vue';


</script>

