export const getDynamicBase = (uri) => {
    const regx = /^(\/\w+)(\/\d{8})?/
    const matchs = uri.match(regx)
    if (matchs) {
      const [ match ] = matchs
      return match
    }
  
    return uri
  }
