<template>
  <div class="shangbanxiaban">
    <h4>
      工时计算
      <span>
        A&F班
        <a-switch default-checked @change="onChange" />
      </span>
      <a-alert v-show="isSuccess" message="Success Text" type="success">
        <p slot="description">Success</p>
      </a-alert>
      <a-alert v-show="isFail" message="Error Text" description="Error" type="error" />
      <a-button @click="openWorkList">查看工时</a-button>
    </h4>
    <div class="content">
      <div class="box">
        <button @click="handlerFn">
          <img src="@/assets/shangban.jpg" alt />
        </button>
      </div>
      <div class="box">
        <button @click="handlerFn">
          <img src="@/assets/xiaban.jpg" alt />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// import { Switch } from 'ant-design-vue';
export default {
  name: "shangbanxiaban",
  props: {
    msg: String
  },
  data() {
    return {
      isSuccess: false,
      isFail: false
    };
  },
  methods: {
    handlerFn() {
      this.$axios.get("putTime").then(res => {
        if (res.data.success) {
          this.isSuccess = true;
          setTimeout(() => {
            this.isSuccess = false;
          }, 2000);
        } else {
          this.isFail = true;
          setTimeout(() => {
            this.isFail = false;
          }, 2000);
        }
      });
    },
    onChange(checked) {
      console.log(`a-switch to ${checked}`);
    },
    openWorkList() {
      this.$router.push('/dataList')
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped type="less">
.shangbanxiaban {
  height: 100vh;
  background: rgb(31, 24, 55);
}
h4 {
  height: 40px;
  /* background: #f1f1f1; */
  display: flex;
  align-items: center;
  color: #fff;
}
h4::before {
  content: "|";
  margin-right: 10px;
  color: red;
  width: 4px;
  height: 24px;
  background: red;
}
.content {
  height: calc(100vh - 40px);
  /* background: red; */
}
.box {
  height: 45vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.box:nth-child(1) button {
  width: 300px;
  height: 185.4px;
  color: #fff;
  /* background: #2194ff; */
  /* background: rgb(31,80,150); */
  /* border-radius: 5px; */
  outline: none;
  font-size: 24px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
.box:nth-child(2) button {
  width: 300px;
  height: 185.4px;
  color: #fff;
  /* background: rgb(255, 0, 2); */
  /* background: rgb(31,24,100); */
  /* border-radius: 5px; */
  outline: none;
}

.content button {
  height: 60px;
  padding: 0 2em;
  background-color: #fff;
  color: #fff;
  border: none;
  outline: none;
  font-size: 1.6em;
  cursor: pointer;
  position: relative;
  transition: all ease 800ms;
}

button:hover {
  background-color: #fff;
  color: #1aab8a;
}

.content button:before,
.content button:after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 0;
  height: 4px;
  background-color: #1aab8a;
  /* background-color: #fff; */
  transition: all ease 400ms;
}

.content button:after {
  top: inherit;
  right: inherit;
  left: 0;
  bottom: 0;
}

.content button:hover:after,
.content button:hover:before {
  width: 100%;
  transition: all ease 800ms;
}

.content .box button img {
  width: 200px;
}
</style>
