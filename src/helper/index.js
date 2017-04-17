import translation from '@/locales'
export const DEFAULT_LNG = 'zh-CN'

import i18next from 'i18next'
i18next.init({
  // debug: process.env.NODE_ENV === 'development',
  lng: DEFAULT_LNG,
  resources: translation
})

const env = process.env.NODE_ENV

export default {
  log (val) {
    if (env === 'development') {
      console.log(val)
    }
  },
  i18n (str, lng = DEFAULT_LNG) {
    return i18next.t(str, {lng: lng})
  }
}
