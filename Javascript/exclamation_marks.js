function remove (string) {
  if (string.endsWith("!") === true){
      return string.slice(0, -1)
      }
  return string
}