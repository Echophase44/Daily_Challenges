function friend(friends){
  let realFriends = [];
  
  friends.forEach((element)=>{
    if(element.length === 4){
      realFriends.push(element)
    }
  })
  return realFriends
}

friend(["Ryan", "Kieran", "Mark"]