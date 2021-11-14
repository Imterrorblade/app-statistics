<template>
  <div class="container">
    <div>
      <n-data-table :columns="columns" :data="dataList" size="small"></n-data-table>
    </div>
    <div class="chart-container">
      <n-grid x-gap="16" :cols="3">
        <n-gi class="chart-item">
          <bar-chart :data="dataList" x-field="date" y-field="registerCount" title="注册人数"></bar-chart>
        </n-gi>
        <n-gi class="chart-item">
          <bar-chart :data="dataList" x-field="date" y-field="totalCertifiedRate" title="总认证转化率" :config="rateConfig"></bar-chart>
        </n-gi>
        <n-gi class="chart-item">
          <bar-chart :data="dataList" x-field="date" y-field="totalVipRate" title="总vip转化率" :config="rateConfig"></bar-chart> 
        </n-gi>
      </n-grid>
    </div>
  </div>
</template>
<script lang="ts">
import {defineComponent, ref, h } from 'vue'
import { getStatisticsDataMock, getStatisticsData } from '../api/statistics'
import {formatRate} from '../utils/format'
import BarChart from '../components/charts/bar-chart.vue'
export default defineComponent({
  components: {
    BarChart
  },
  setup(){
    //表格配置
    const columns = [{
      key: 'date',
      title: '时间'
    },
    {
      key: 'registerCount',
      title: '注册人数'
    }, {
      key: 'totalCertifiedRate',
      title: '总认证转化率',
      render(row: any){
        return h('span', 
        {},
        {
          default: ()=> formatRate(row.totalCertifiedRate)
        })
      }
    }, 
    {
      key: 'totalVipRate',
      title: '总vip转化率',
      render(row: any){
        return h('span', 
        {},
        {
          default: ()=> formatRate(row.totalVipRate)
        })
      }
    }, {
      key: 'registerCount86',
      title: '86注册人数'
    }, {
      key: 'certifiedRate86',
      title: '86认证转化率',
      render(row: any){
        return h('span', 
        {},
        {
          default: ()=> formatRate(row.certifiedRate86)
        })
      }
    }, {
      key: 'vipRate86',
      title: '86vip转化率',
      render(row: any){
        return h('span', 
        {},
        {
          default: ()=> formatRate(row.vipRate86)
        })
      }
    }, {
      key: 'greetReceiveCount',
      title: '打招呼弹出次数'
    }, {
      key: 'grentSendCount',
      title: '发送打招呼次数'
    }]

    let dataList = ref([])

    //调用接口获取数据 
    const fetchData = async ()=> {
      //数据获取接口，到时候需要放开
      const data = await getStatisticsData()
      dataList.value = data

      //数据mock, 以后要去掉
      // const dataMock = await getStatisticsDataMock()
      // dataList.value = dataMock
    }
    
    fetchData()

    const rateConfig = {
      yAxis: {
        axisLabel: {
          formatter(value: number) {
            return formatRate(value)
          }
        }
      },
      tooltip: {
        formatter(params: any){
          return `${params.marker}${params.name}<span style="margin-left: 16px;">${formatRate(params.value)}</span>`
        }
      }
    }

    return {
      dataList,
      columns,
      rateConfig
    }
  }
})
</script>

<style scoped>
.chart-container {
  padding-top: 16px;
}
.chart-item {
  height: 400px;
}
</style>
