
const data: any[] =  ['周一', '周二', '周三', '周四', '周五', '周六', '周日'].map(date=> {
  return {
    date,
    registerCount: Math.floor((Math.random() * 200)) + 800,
    registerCount86: Math.floor(Math.random()* 200) + 500,
    totalCertifiedRate: Math.random(),
    totalVipRate: Math.random(),
    certifiedRate86: Math.random(),
    vipRate86: Math.random(),
    greetReceiveCount: Math.floor(Math.random() * 300) + 100,
    grentSendCount: Math.floor(Math.random() * 300) + 100
  }
})

export default data