import { html, css } from './lib'
import Unshorten from './unshorten'
import style from '../dist/css.json' assert { type: 'json' }

export default {
  async fetch(req) {
    const url = new URL(req.url)

    switch(url.pathname) {
      case '/unshorten':
        const form = (req.method === 'POST') && await req.formData()
        return Unshorten({
          method: req.method,
          target: (form && 'get' in form) && new URL(form.get('url'))
        })

      case '/style.css':
        return css(style.css)

      case '/':
        return html(
          '<iframe src="/unshorten" width="100%" class="h-screen" />'
        )

      default:
        return html('', { status: '404' })
    }
  }
}