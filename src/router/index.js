import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Register from "../views/RegisterView.vue";
import Login from "../views/LoginView.vue";
import AccountView from "../views/AccountView.vue";
import ProfileSection from "../views/account/ProfileSection.vue";
import EditProfile from "@/views/account/EditProfile.vue";
import AddSong from "@/views/account/AddSong.vue";
import DeleteSong from "@/views/account/DeleteSong.vue";
import AddYoutubeVideo from "@/views/account/AddYoutubeVideo.vue";
import DeleteYoutubeVideo from "@/views/account/DeleteYoutubeVideo.vue";
import CreatePost from "@/views/account/CreatePost.vue";
import EditPost from "@/views/account/EditPost.vue";
import PostsSection from "@/views/account/PostsSection.vue";
import PostById from "@/views/account/PostById.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },

  {
    path: "/register",
    name: "Register",
    component: Register,
  },

  {
    path: "/login",
    name: "Login",
    component: Login,
  },

  {
    path: "/account",
    component: AccountView,
    children: [
      {
        path: "profile",
        name: "ProfileSection",
        component: ProfileSection,
      },
      {
        path: "edit-profile",
        name: "EditProfile",
        component: EditProfile,
      },
      {
        path: "add-song",
        name: "AddSong",
        component: AddSong,
      },

      {
        path: "delete-song",
        name: "DeleteSong",
        component: DeleteSong,
      },
      {
        path: "add-youtube-video",
        name: "AddYoutubeVideo",
        component: AddYoutubeVideo,
      },
      {
        path: "delete-youtube-video",
        name: "DeleteYoutubeVideo",
        component: DeleteYoutubeVideo,
      },
      {
        path: "create-post",
        name: "CreatePost",
        component: CreatePost,
      },
      {
        path: "edit-post",
        name: "EditPost",
        component: EditPost,
      },
      {
        path: "posts",
        name: "PostsSection",
        component: PostsSection,
      },
      {
        path: "post-by-id",
        name: "PostById",
        component: PostById,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
