function areYouPlayingBanjo(name) {
  let sepName = name.split("");

  if (sepName[0] === "r" || sepName[0] === "R") {
    return `${name} plays banjo`;
  } else {
    return `${name} does not play banjo`;
  }
}

areYouPlayingBanjo("Ringo");
