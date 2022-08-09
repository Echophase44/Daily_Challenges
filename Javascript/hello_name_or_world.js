function hello(name) {
  if(name === "" || name === undefined){
    return "Hello, World!"
  }
  name = name.toLowerCase()
  name = name.charAt(0).toUpperCase() + name.slice(1);
  
  return `Hello, ${name}!`
  
}