import type { StoreOptions } from "@netlify/blobs"

export const defaultFetchOptions = {
    headers: {
        'access-control-allow-origin': '*',
        'cache-control': 'no-store'
    }
  }
  
  export const defaultStore: Partial<StoreOptions> =  {
    name: "katarinas-8th",
    consistency: "strong"
}