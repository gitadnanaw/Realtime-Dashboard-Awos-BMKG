<template>
  <CardAwosComponents
    :title1="site1.nama_site" 
    :windTitle1="site1.icao_code"
    :windDate1="site1.date"
    :windTime1="site1.time"
    :windSpeed1="site1.WS"
    :windDir1="site1.WD"
    :windMax1="site1.WGS"
    :windX1="site1.WGD"
    :windGusty1="site1.TEMP"
    :dataQnh1="site1.QNH"

    :title2="site2.nama_site" 
    :windTitle2="site2.icao_code"
    :windDate2="site2.date"
    :windTime2="site2.time"
    :windSpeed2="site2.WS"
    :windDir2="site2.WD"
    :windMax2="site2.WGS"
    :windX2="site2.WGD"
    :windGusty2="site2.TEMP"
    :dataQnh2="site2.QNH"

    :title3="site3.nama_site" 
    :windTitle3="site3.icao_code"
    :windDate3="site3.date"
    :windTime3="site3.time"
    :windSpeed3="site3.WS"
    :windDir3="site3.WD"
    :windMax3="site3.WGS"
    :windX3="site3.WGD"
    :windGusty3="site3.TEMP"
    :dataQnh3="site3.QNH"
  />
</template>

<script>
import CardAwosComponents from '@/components/comp/CardComp.vue'
import axios from 'axios'

export default {
  name: 'RealtimeView',
  components: {
    CardAwosComponents
  },
  data() {
    return {
      site1: {},
      site2: {},
      site3: {}
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get('http://localhost/localawosapi/getalldata.php')
        const data = response.data
        console.log('Response data:', data)
        this.site1 = data.WARW[0]
        this.site2 = data.WART[0]
        this.site3 = data.WARE[0]
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
  }
}
</script>
