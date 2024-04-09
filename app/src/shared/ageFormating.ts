export function getAgeWord(age: number) {
    if (age === 1) {
      return "год";
    } else if (age % 10 === 1 && age !== 11) {
      return "год";
    } else if (
      (age % 10 === 2 || age % 10 === 3 || age % 10 === 4) &&
      age !== 12 &&
      age !== 13 &&
      age !== 14
    ) {
      return "года";
    } else {
      return "лет";
    }
  }