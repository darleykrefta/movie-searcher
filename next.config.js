/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const withImages = require('next-images')
module.exports = {
  ...withImages(),
  images: {
    domains: ['m.media-amazon.com']
  }
}
