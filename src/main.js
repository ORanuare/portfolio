import './assets/css/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { ViFileTypePython, ViFileTypeDjango, SiFastapi, ViFileTypeJsOfficial, ViFileTypeVue, ViFileTypeTailwind, ViFileTypeHtml, ViFileTypeCss, ViFileTypeAws, ViFileTypeGit, ViFileTypePgsql, ViFileTypeTypescriptOfficial, FcLinux, CoGithub, MdArrowdropdownRound, SiHeroku, FcGoogle, ViFileTypeNpm, IoLogoVercel, MdMinimizeOutlined, FaExternalLinkAlt, FaLock, IoLanguage } from "oh-vue-icons/icons";

addIcons( ViFileTypePython, ViFileTypeDjango, SiFastapi, ViFileTypeJsOfficial, ViFileTypeVue, ViFileTypeTailwind, ViFileTypeHtml, ViFileTypeCss, ViFileTypeAws, ViFileTypeGit, ViFileTypePgsql, ViFileTypeTypescriptOfficial, FcLinux, CoGithub, MdArrowdropdownRound, SiHeroku, FcGoogle, ViFileTypeNpm, IoLogoVercel, MdMinimizeOutlined, FaExternalLinkAlt, FaLock, IoLanguage );

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component("v-icon", OhVueIcon);
app.mount('#app')
