import type { Config, Context } from "@netlify/functions"
import { getStore } from "@netlify/blobs";
import { defaultFetchOptions, defaultStore } from './defaults.ts'

export default async (request: Request, context: Context) => {
    const { who } = context.params  
    const payload = await request.json()
    const store = getStore(defaultStore)

    await store.setJSON(who, payload)

    return new Response(`Userdata for ${who} updated successfully.`, defaultFetchOptions)
};

export const config: Config = {
  path: "/api/set/:who"
}