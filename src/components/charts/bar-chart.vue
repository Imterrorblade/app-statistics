<template>
  <div ref="chartRef" class="chart-container" ></div>
</template>
<script lang="ts">
import { defineComponent, ref, toRefs, computed, onMounted, watch } from 'vue'
import * as echarts from 'echarts'
export default defineComponent({
  props: {
    title: {
      type: String,
      default: ''
    },
    data: {
      type: Array,
      default(){
        return []
      }
    },
    xField: {
      type: String,
      default: 'date'
    },
    yField: {
      type: Number,
      default: 0
    }
  },
  setup(props){
    const chartRef = ref(null)
    const chart = ref(null)
    const {title, data, xField, yField} = toRefs(props)
    const option = computed(()=>{
      return {
        title: title?
        {
          text: title.value
        }: null,
        tooltip: {},
        legend: {},
        xAxis: {
          data: data.value.map((item: any) => item[xField.value])
        },
        yAxis: {},
        series: {
          type: 'bar',
          data: data.value.map((item: any) => item[yField.value])
        },
       

      }     
    })

    const init =() => {
      chart.value = echarts.init(chartRef.value)
    }

    const render = ()=> {
      chart.value.setOption(option.value)
    }

    onMounted(() => {
      init()
      render()
    })

    watch(option, ()=> {
      render()
    }, {
      immediate: false
    })

    return {
      chartRef
    }
  }
})
</script>
<style>
.chart-container {
  width: 100%;
  height: 100%;
}
</style>

