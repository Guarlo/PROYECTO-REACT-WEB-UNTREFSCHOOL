
function yearBudget (budget, diffYear) {
  return budget -= (budget * (diffYear * 3) / 100)
}

function brandBudget (budget, brand) {
  switch(brand) {
    case 'apple':
      return budget += (budget * 40 / 100)
      break
    case 'samsung':
      return budget += (budget * 30 / 100)
      break
    case 'huawei':
      return budget += (budget * 15 / 100)
      break
    case 'lenovo':
      return budget += (budget * 10 / 100)
      break
    case 'noblex':
      return budget += (budget * 10 / 100)
      break
    case 'lg':
      return budget += (budget * 5 / 100)
      break
    case 'bgh':
      return budget += (budget * 5 / 100)
      break
    default: break
  }
}

function planBudget (budget, device) {
  return (device === 'celular')
           ? budget += (budget * 20 / 100)
           : ( (device === 'computadora')
                ? budget += (budget * 50 / 100)
                : 0 )
}

export default function getFinalBudget (budget, brand, year, device) {
  let finalBudget
  let diffYear = new Date().getFullYear() - year
  finalBudget = yearBudget(budget, diffYear)
  finalBudget = brandBudget(finalBudget, brand)
  finalBudget = planBudget(finalBudget, device)
  return parseFloat(finalBudget).toFixed(2)
}