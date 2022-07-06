function DNAStrand(dna){
  2
    let deconstructedDna = dna.split("")
  3
    let result = []
  4
    deconstructedDna.forEach((letter) => {
  5
         switch (letter){
  6
          case "A":
  7
             result.push("T")
  8
             break;
  9
          case "T":
  10
             result.push("A")
  11
             break;
  12
          case "G":
  13
             result.push("C")
  14
             break;
  15
          case "C":
  16
             result.push("G")
  17
             break;
  18
             
  19
    }               
  20
                             })
  21
    return result.join("")
  22
  }

  DNAStrand("AAAA")