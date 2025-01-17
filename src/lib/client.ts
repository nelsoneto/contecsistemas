import { createClient } from 'contentful'

console.log('CONTENTFUL_SPACE_ID:', process.env.CONTENTFUL_SPACE_ID)
console.log('CONTENTFUL_ACCESS_TOKEN:', process.env.CONTENTFUL_ACCESS_TOKEN)

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
})
