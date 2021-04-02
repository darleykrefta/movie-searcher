import unfetch from 'unfetch'

export const fetcher = (url: string, options = {}) => unfetch(url, { ...options }).then((r) => r.json())
