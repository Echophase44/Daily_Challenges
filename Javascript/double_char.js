function doubleChar(str) {
  let result = []
  str.split("").forEach((element) => {
    result.push(element)
    result.push(element)
  })
  return result.join("")
}