import { html, manualFetch } from './lib'
import { Layout, Form, Title, Table } from './pages'

export default async function Unshorten({ method, target }) {
  if (method !== 'POST') return html(Title + Form)

  const { readable, writable } = new TransformStream()
  const writer = writable.getWriter()
  const write = (v) => writer.write(new TextEncoder().encode(v))

  write(Layout + Title + Form + Table)
  followRedirect(target.toString(), write, () => writer.close())

  return html(readable, {}, false)
}

const followRedirect = async (target, write, cb) => {
  while(true) {
    const { url, status, redirect } = await manualFetch(target)
    write(`<tr class="grid grid-cols-3">
      <td class="col-span-2 line-clamp-1 px-2 py-1 hover:line-clamp-none">${url}</td>
      <td class="px-2 py-1">${status}</td>
    </tr>`)

    if (!redirect) {
      write(`<tr>
        <td class="px-2 py-1 text-center text-white font-bold bg-green-500">Done!</td>
      </tr>
      </tbody>`)
      break
    }

    target = redirect
  }

  cb()
}