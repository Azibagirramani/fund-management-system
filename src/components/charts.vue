<template>
  <div class="">
    <VueApexCharts
      width="450"
      :options="computedOptions"
      :series="computedSeries"
    />
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";

export default {
  components: {
    VueApexCharts,
  },

  props: {
    option: {
      type: Object,
      default: () => {},
    },
    serie: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    computedOptions() {
      return Object.assign(this.options, this.option);
    },
    computedSeries() {
      return this.serie;
    },
  },
  data() {
    return {
      options: {
        dataLabels: {
          enabled: false,
        },
        legend: {
          show: true,
        },

        colors: ["#4990FA", "#F24D66", "#55BD78"],
        noData: {
          text: undefined,
          align: "center",
          verticalAlign: "middle",
          offsetX: 0,
          offsetY: 0,
          style: {
            color: undefined,
            fontSize: "14px",
            fontFamily: undefined,
          },
        },
        chart: {
          toolbar: {
            show: false,
          },
          type: "bar",
          id: "vuechart-example",
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
        },
        grid: {
          show: false,
        },
      },
      series: [
        {
          name: "Net Profit",
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
        },
        {
          name: "Revenue",
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
        },
        {
          name: "Free Cash Flow",
          data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
        },
      ],
    };
  },
};
</script>

<style></style>
