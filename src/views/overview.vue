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

    <div class="row mt-4">
      <div class="col">
        <div class="card border-0 shadow">
          <div class="card-header bg-transparent">Projects</div>
          <div class="card-body">
            <BaseChart />
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card border-0 shadow">
          <div class="card-header bg-transparent">Projects</div>
          <div class="card-body">
            <BaseChart />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BreadCrums from "../components/breadcrums.vue";
import BaseChart from "../components/charts.vue";
export default {
  components: {
    BreadCrums,
    BaseChart,
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
    };
  },
};
</script>

<style></style>
