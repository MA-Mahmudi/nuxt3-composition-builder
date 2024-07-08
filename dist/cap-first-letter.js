module.exports.capFirst = (str) => {
  return str[0].toUpperCase() + str.slice(1);
}

module.exports.kebabToCamel = (str) => {
  return str.replace(/-./g, x=>x[1].toUpperCase())
}