export const formatRate = (rate: number)=> {
  return Math.round(rate * 10000) / 100 + '%'
}