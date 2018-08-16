function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, '') // Trim - from end of text
}

function dedupe(a) {
  return Array.from(new Set(a))
}
const background = (title) => {
  if (!title) return
  if (title.includes('lockstack')) {
    return 'url("https://files-jkbhagqrri.now.sh/blockstack.png")'
  }
  if (title.includes('EOS')) {
    return 'url("https://files-jkbhagqrri.now.sh/eos.png")'
  }
  if (title.includes('thereum')) {
    return 'url("https://files-jkbhagqrri.now.sh/ethereum.png")'
  }
  if (title.includes('Gaia')) {
    return 'url("https://files-jkbhagqrri.now.sh/gaia.png")'
  }
  if (title.includes('IPFS')) {
    return 'url("https://files-jkbhagqrri.now.sh/ipfs.png")'
  }
  if (title.includes('Steem')) {
    return 'url("https://files-jkbhagqrri.now.sh/steem.png")'
  }
  return null
}
export { slugify, dedupe, background }
