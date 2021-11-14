import request from '../utils/request'
import data from './datamock'


export const getStatisticsData = (params?:any)=> request({
  url: '/statistic_list',//接口路径 自己改
  method: 'post',
  data: params //如果有参数，请传入
})

//mock 数据
export const getStatisticsDataMock = ()=> Promise.resolve(data)