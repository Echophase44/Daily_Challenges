function calculateYears(principal, interest, tax, desired) {
  if (principal === desired) {
    return 0;
  }
  let result = principal;
  let y = 0;
  while (result <= desired) {
    let difference = result * interest;
    let taxes = difference * tax;
    result = result + (difference - taxes);
    y++;
  }
  return y;
}
