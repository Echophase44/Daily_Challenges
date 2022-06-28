function bouncingBall(h, bounce, window) {
  if (h < 0) {
    return -1;
  } else if (bounce >= 1 || bounce < 0) {
    return -1;
  } else if (window > h) {
    return -1;
  } else {
    let bounceHeight = h * bounce;
    let viewCount = 1;

    while (bounceHeight > window) {
      bounceHeight = bounceHeight * bounce;
      viewCount = viewCount + 2;
    }

    if (h > window) {
      return viewCount;
    } else {
      return -1;
    }
  }
}

bouncingBall(2, 0.5, 1);
