import './assets/css/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'

// Locale imports
import en_loc from '@/locales/en.json'
import es_loc from '@/locales/es.json'

import App from './App.vue'
import router from './router'

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { ViFileTypePython, ViFileTypeDjango, SiFastapi, ViFileTypeJsOfficial, ViFileTypeVue, ViFileTypeTailwind, ViFileTypeHtml, ViFileTypeCss, ViFileTypeAws, ViFileTypeGit, ViFileTypePgsql, ViFileTypeTypescriptOfficial, FcLinux, CoGithub, MdArrowdropdownRound, SiHeroku, FcGoogle, ViFileTypeNpm, IoLogoVercel, MdMinimizeOutlined, FaExternalLinkAlt, FaLock, IoLanguage, CoMx, CoUs } from "oh-vue-icons/icons";

addIcons( ViFileTypePython, ViFileTypeDjango, SiFastapi, ViFileTypeJsOfficial, ViFileTypeVue, ViFileTypeTailwind, ViFileTypeHtml, ViFileTypeCss, ViFileTypeAws, ViFileTypeGit, ViFileTypePgsql, ViFileTypeTypescriptOfficial, FcLinux, CoGithub, MdArrowdropdownRound, SiHeroku, FcGoogle, ViFileTypeNpm, IoLogoVercel, MdMinimizeOutlined, FaExternalLinkAlt, FaLock, IoLanguage, CoMx, CoUs );

// i18n configuration
const locale = localStorage.getItem('locale') || (navigator.language.startsWith('es') ? 'es' : 'en');

const i18n = createI18n({
  legacy: false,
  locale: locale,
  warnHtmlInMessage: "off",
  fallbackLocale: 'en',
  messages: {
    en: en_loc,
    es: es_loc
  }
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)

app.component("v-icon", OhVueIcon);
app.mount('#app')
