import { Layout } from './pages'

export const html = (body, options = {}, isLayout = true) => {
  if (isLayout) {
    body = Layout + body
  }

  const res = new Response(body, options)
  res.headers.set('Content-Type', 'text/html')
  return res
}

export const css = (body, options = {}) => {
  const res = new Response(body, options)
  res.headers.set('Content-Type', 'text/css')
  return res
}

export const manualFetch = async (url, options) => {
  return fetch(url, { redirect: 'manual', ...options }).then(r => ({
    url: r.url,
    status: r.status,
    redirect: r.headers.get('Location')
  }))
}