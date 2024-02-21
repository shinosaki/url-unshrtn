const env = {
  app: {
    title: 'Unshrtn | URL Unshortener'
  },
  author: {
    url: 'https://shinosaki.com',
    name: 'shinosaki'
  },
  repo: {
    url: 'https://github.com/shinosaki/url-unshrtn',
    name: 'shinosaki/url-unshrtn'
  }
}

export const Title = `
<div class="my-20 grid gap-4 justify-center">
  <h1 class="text-3xl font-bold text-center">${env.app.title}</h1>
  <ul class="list-disc list-inside">
    <li>Safely restore shortened URL
      <p class="pl-4">(URL un-shortening is handled server side)</p>
    </li>
    <li>No-JS (No JavaScript required)</li>
    <li>Author:
      <a href="${env.author.url}" target="_blank" rel="noopener noreferrer" class="font-bold text-indigo-600">
        ${env.author.name}
      </a>
    </li>
    <li>Github:
      <a href="${env.repo.url}" target="_blank" rel="noopener noreferrer" class="font-bold text-indigo-600">
        ${env.repo.name}
      </a>
    </li>
  </ul>
</div>`

export const Form = `
<div class="w-full flex flex-col justify-center">
  <form method="POST" class="md:mx-[25vw] p-4 grid gap-4">
    <label class="flex flex-col gap-1 w-full">
      <span>URL</span>
      <input
        type="url"
        name="url"
        required
        placeholder="https://shorturl.at/koyEF"
        class="py-1.5 px-2 rounded-lg border"
      >
    </label>
    <button class="py-1.5 w-full rounded-lg bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white font-bold">
      Submit
    </button>
  </form>
</div>`

export const Table = `
<div class="w-full flex flex-col justify-center">
  <table class="mx-4 md:mx-[25vw] mt-10 mb-20 border">
    <thead>
      <tr class="grid grid-cols-3 bg-blue-500 text-white">
        <th class="py-1 px-2 col-span-2">URL</th>
        <th class="py-1 px-2">Status</th>
      </tr>
    </thead>
    <tbody class="divide-y">`

export const Layout = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="/style.css">
  <title>${env.app.title}</title>
</head>
<body>`