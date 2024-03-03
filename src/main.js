import './assets/css/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'

// Locale imports
import en from '@/locales/en.json'
import es from '@/locales/es.json'

import App from './App.vue'
import router from './router'

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { ViFileTypePython, ViFileTypeDjango, SiFastapi, ViFileTypeJsOfficial, ViFileTypeVue, ViFileTypeTailwind, ViFileTypeHtml, ViFileTypeCss, ViFileTypeAws, ViFileTypeGit, ViFileTypePgsql, ViFileTypeTypescriptOfficial, FcLinux, CoGithub, MdArrowdropdownRound, SiHeroku, FcGoogle, ViFileTypeNpm, IoLogoVercel, MdMinimizeOutlined, FaExternalLinkAlt, FaLock, IoLanguage } from "oh-vue-icons/icons";

addIcons( ViFileTypePython, ViFileTypeDjango, SiFastapi, ViFileTypeJsOfficial, ViFileTypeVue, ViFileTypeTailwind, ViFileTypeHtml, ViFileTypeCss, ViFileTypeAws, ViFileTypeGit, ViFileTypePgsql, ViFileTypeTypescriptOfficial, FcLinux, CoGithub, MdArrowdropdownRound, SiHeroku, FcGoogle, ViFileTypeNpm, IoLogoVercel, MdMinimizeOutlined, FaExternalLinkAlt, FaLock, IoLanguage );

// i18n configuration
const localeValue = document.cookie.split('locale=')[1] || 'en'

const i18n = createI18n({
  legacy: false,
  locale: localeValue,
  messages: {
    en: en,
    es: es
  }
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)

app.component("v-icon", OhVueIcon);
app.mount('#app')
