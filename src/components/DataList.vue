<template>
  <div class="dataList">
    <router-link to="/" class="myIconLeft">
      <a-icon type="left"></a-icon>
    </router-link>
    <div>
      <p>
        <span>当月出勤天数 </span>
        <span>{{ countData.chuqinDay }}</span>
      </p>
      <p>
        <span>当月所需工时 </span>
        <span>{{ countData.suoxuDay }}</span>
      </p>
      <p>
        <span>当月累计工时 </span>
        <span>{{ countData.leijiDay }}</span>
      </p>
      <p>
        <span>当月工时盈余 </span>
        <span>{{ countData.queshiDay }}</span>
      </p>
    </div>
    <a-table :columns="columns" :data-source="data">
      <span slot="firstTime" slot-scope="firstTime">{{ firstTime | formateTime }}</span>
      <span slot="endTime" slot-scope="endTime">{{ endTime | formateTime }}</span>
    </a-table>
  </div>
</template>
<script>
// 获取当前月份信息
function getNowDate() {
  let date = new Date();
  console.log(
    date.getFullYear() +
      "-" +
      String(date.getMonth() + 1).padStart(2, 0) +
      "-" +
      String(date.getDate()).padStart(2, 0)
  );
  return (
    date.getFullYear() +
    "-" +
    String(date.getMonth + 1).padStart(2, 0) +
    "-" +
    String(date.getDate).padStart(2, 0)
  );
}
const columns = [
  {
    title: "日期",
    dataIndex: "nowDate",
    key: "nowDate"
  },
  {
    title: "开始时间",
    dataIndex: "firstTime",
    key: "firstTime",
    scopedSlots: { customRender: "firstTime" }
  },
  {
    title: "结束时间",
    dataIndex: "endTime",
    key: "endTime",
    scopedSlots: { customRender: "endTime" },
    ellipsis: true
  },
  {
    title: "有效时间",
    dataIndex: "usedTime",
    key: "usedTime",
    ellipsis: true
  }
];

const data = [];

export default {
  data() {
    return {
      oDataList: [], // 源数据
      data,
      columns,
      countData: {
        chuqinDay: "",
        suoxuDay: "",
        leijiDay: "",
        queshiDay: ""
      }
    };
  },
  filters: {
    formateTime(val) {
      console.log(val);
      return String(val).substring(10, val.length);
    }
  },
  mounted() {
    this.$axios.get("/allData").then(res => {
      console.log("res.data.dataList-->", res.data.dataList);
      if (res.data && Array.isArray(res.data.dataList)) {
        this.oDataList = res.data.dataList.slice(0);
        // 当前月数据
        let xxx = getNowDate();
        this.data = res.data.dataList.map(itemm => {
          console.log("itemm.nowDate-->", itemm.nowDate);
          return {
            ...itemm
          };
        });
        this.jisuan(this.data);
        console.log("this.data-->", this.data);
      }
    });
  },
  methods: {
    jisuan(_arr) {
      this.countData.chuqinDay = _arr.length;
      this.countData.suoxuDay = _arr.length * 8;

      let leiji = 0;
      _arr.map(item => {
        leiji += item.usedTime;
      });
      this.countData.leijiDay = leiji;
      this.countData.queshiDay = leiji - this.countData.suoxuDay;
    }
  }
};
</script>
<style >
.dataList {
  padding-top: 10px;
}
.myIconLeft {
  margin: 10px;
}
</style>