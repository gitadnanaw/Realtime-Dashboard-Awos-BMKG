<template>
  <div class="container mx-auto h-screen flex justify-center items-center">
    <div class="box-1 text-center">
      <div class="card" style="border: none;">
        <div class="card-header flex justify-between" style="background-color: #213451; border: none; color: white;">
          EXPORT MENU
          <button @click="close">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="card-body" style="background-color: #284063;">
          <form class="max-w-sm mx-auto flex">
            <div class="dd1">
              <select id="dropDown1"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                <option hidden selected>Format File</option>
                <option value="pdf">.Pdf</option>
              </select>
            </div>
            <div class="dd2">
              <select id="dropDown2"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                <option hidden selected>CODE</option>
                <option value="WARW">WARW</option>
                <option value="WART">WART</option>
                <option value="WARE">WARE</option>
                <option value="SEMUA">SEMUA</option>
              </select>
            </div>
          </form>
          <form class="max-w-sm mx-auto flex">
            <div class="dd3">
              <select id="dropDown3"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                <option hidden selected>Jenis Data</option>
                <option value="Bulanan">30-Hari</option>
                <option value="Semua">SEMUA</option>
              </select>
            </div>
          </form>
          <div class="button">
            <button class="bg-blue-600 hover:bg-blue-300 text-white font-bold py-2 px-4 rounded inline-flex items-center"
              @click="exportData">
              <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
              </svg>
              <span>Download</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';

export default {
  name: 'ExportComp',
  data() {
    return {
      allData: {},
      filteredData: {},
      selectedFormat: '',
      selectedCode: '',
      selectedDataType: '',
    };
  },
  methods: {
    close() {
      this.$emit('close');
    },
    async fetchData() {
      try {
        const response = await axios.get('http://localhost/localawosapi/getrecorddata.php');
        this.allData = response.data;
        this.filteredData = this.allData;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    filterData() {
      this.selectedCode = document.getElementById('dropDown2').value;
      this.selectedDataType = document.getElementById('dropDown3').value;

      if (this.selectedCode === 'SEMUA') {
        this.filteredData = {
          WARW_RECORD: this.allData.WARW_RECORD,
          WART_RECORD: this.allData.WART_RECORD,
          WARE_RECORD: this.allData.WARE_RECORD
        };
      } else {
        this.filteredData = {
          [`${this.selectedCode}_RECORD`]: this.allData[`${this.selectedCode}_RECORD`]
        };
      }

      if (this.selectedDataType === 'Bulanan') {
        this.filterByMonth();
      }
      // For 'Semua', we don't need additional filtering
    },
    filterByMonth() {
      Object.keys(this.filteredData).forEach(key => {
        // Sort the data by date in descending order
        this.filteredData[key].sort((a, b) => new Date(b.date) - new Date(a.date));
        
        // Take the latest 30 records
        this.filteredData[key] = this.filteredData[key].slice(0, 30);
      });
    },
    exportData() {
      this.filterData();
      this.selectedFormat = document.getElementById('dropDown1').value;

      if (Object.keys(this.filteredData).length > 0) {
        if (this.selectedFormat === 'pdf') {
          const pdfContent = this.convertToPDF(this.filteredData);
          this.downloadFile(pdfContent.output(), 'pdf');
        }
      } else {
        console.log('No data selected');
      }
    },
    convertToPDF(data) {
      const doc = new jsPDF();
      
      const columns = [
        { header: 'ID', dataKey: 'id_sta' },
        { header: 'Nama Site', dataKey: 'nama_site' },
        { header: 'Alamat', dataKey: 'alamat' },
        { header: 'ICAO Code', dataKey: 'icao_code' },
        { header: 'Date', dataKey: 'date' },
        { header: 'Time', dataKey: 'time' },
        { header: 'WS (km/h)', dataKey: 'WS' },
        { header: 'WD (°)', dataKey: 'WD' },
        { header: 'WGS', dataKey: 'WGS' },
        { header: 'WGD', dataKey: 'WGD' },
        { header: 'TEMP (K)', dataKey: 'TEMP' },
        { header: 'DEWP (K)', dataKey: 'DEWP' },
        { header: 'RH (%)', dataKey: 'RH' },
        { header: 'QNH (hPa)', dataKey: 'QNH' },
        { header: 'DA (ft)', dataKey: 'DA' },
        { header: 'RA', dataKey: 'RA' },
        { header: 'SOL (W/m²)', dataKey: 'SOL' }
      ];

      let startY = 20;

      Object.entries(data).forEach(([key, records]) => {
        // Add header for each code
        doc.setFontSize(16);
        doc.setTextColor(0, 0, 0);
        doc.text(key.replace('_RECORD', ''), 14, startY);
        startY += 10;

        doc.autoTable({
          columns: columns,
          body: records,
          theme: 'grid',
          styles: { fontSize: 8, cellPadding: 1 },
          columnStyles: { id_sta: { cellWidth: 10 } },
          headStyles: { fillColor: [33, 150, 243], textColor: 255 },
          startY: startY
        });

        startY = doc.lastAutoTable.finalY + 20;
      });

      return doc;
    },
    downloadFile(content, format) {
      const blob = new Blob([content], { type: `application/${format}` });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `export_data.${format}`);
      link.click();
    },
  },
  created() {
    this.fetchData();
  }
};
</script>

<style scoped>
.box-1 {
  margin: auto;
  z-index: 9999;
}

.card {
  width: 35rem;
  height: 25rem;
  background-color: white;
}

.dd1 {
  margin-right: 50px;
}

.dd1,
.dd2,
.dd3 {
  margin-top: 50px;
}

.button {
  margin-top: 5rem;
  margin-left: -14.5rem;
}

@media only screen and (max-width: 878px) {
  .card {
    width: 18rem;
    height: 15rem;
    background-color: white;
  }

  .dd1 {
    margin-top: 10px;
    margin-right: 10px;
  }

  .dd2 {
    margin-top: 10px;
  }

  .dd3 {
    margin-top: 20px;
  }

  .button {
    margin-top: 1rem;
    margin-left: -6rem;
  }
}
</style>