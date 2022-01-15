<template>
  <div>
    <div class="row">
      <div class="col" v-for="(all, index) in cardData" :key="index">
        <BreadCrums
          :total="all.total"
          :title="all.title"
          :percentage="all.percentage"
          :icon="all.icon"
          :exCLass="all.bgClass"
        />
      </div>
    </div>

    <div class="mt-4">
      <div class="card border-0 shadow">
        <div
          class="card-header bg-transparent d-flex justify-content-between align-items-center"
        >
          <p class="mt-3">Projects</p>
          <div class=""><input class="form-control" /></div>
        </div>
        <div class="card-body"><BaseTable /></div>
      </div>
    </div>

    <div class="row mt-4">
      <div class="col">
        <div class="card border-0 shadow">
          <div class="card-header bg-transparent">Project</div>
          <div class="card-body">
            <BaseChart :serie="series2" />
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card border-0 shadow">
          <div class="card-header bg-transparent">Recent report</div>
          <div class="card-body">
            <BaseChart :option="option.config" :serie="option.series" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BreadCrums from "../components/breadcrums.vue";
import BaseChart from "../components/charts.vue";
import BaseTable from "../components/table.vue";
export default {
  components: {
    BreadCrums,
    BaseChart,
    BaseTable,
  },
  data() {
    return {
      cardData: [
        {
          title: "pending requests",
          total: 0,
          percentage: 0,
          icon: "fa fa-cog",
          bgClass: "bg-first",
        },
        {
          title: "Approved requests",
          total: 0,
          percentage: 0,
          icon: "fa fa-cog",
          bgClass: "bg-second",
        },
        {
          title: "Disbursed funds",
          total: 0,
          percentage: 0,
          icon: "fa fa-cog",
          bgClass: "bg-third",
        },
        {
          title: "Rejected Requests",
          total: 0,
          percentage: 0,
          icon: "fa fa-cog",
          bgClass: "bg-fourth",
        },
        {
          title: "Expended",
          total: 0,
          percentage: 0,
          icon: "fa fa-cog",
          bgClass: "bg-fifth",
        },
      ],
      series2: [
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
      option: {
        series: [
          {
            name: "Desktops",
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
          },
        ],

        config: {
          chart: {
            toolbar: {
              show: false,
            },
            type: "line",
          },
          dataLabels: {
            enabled: false,
          },
          colors: ["#55BD78"],
        },
      },
    };
  },
};
</script>

<style></style>
