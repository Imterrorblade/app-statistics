import request from '../utils/request'
import data from './datamock'


export const getStatisticsData = ()=> request({
  url: '',//接口路径
  method: 'post',
})

//mock 数据
export const getStatisticsDataMock = ()=> data