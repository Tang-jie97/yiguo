<template>
  <div class="list">
    <div class="topbar line-bottom">
      <ul>
        <li
          v-for="data in topbarList"
          :key="data"
          @click="topbarChange(data)"
          :class="{ active: data === current }"
        >
          {{ data }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      topbarList: ["销量", "新品", "价格"],
      data: "销量",
      current: "销量",
    };
  },
  computed: {},
  methods: {
    ...mapMutations("BotbarMod", ["BotShow", "BotHide"]),
    ...mapMutations("TopbarMod", ["TopShow", "TopHide"]),
    topbarChange(data) {
      this.current = data;
    },
  },
  created() {
    this.BotHide();
    this.TopHide();
  },
  destroyed() {
    this.BotShow();
    this.TopShow();
  },
};
</script>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
}
.list {
  .topbar {
    ul {
      display: flex;
      justify-content: space-around;
      li {
        font-size: 15px;
        width: 33.33%;
        text-align: center;
        padding: 10px 0;
      }
    }
    .active {
      border-bottom: 2px solid #11b57c;
      box-sizing: border-box;
      color: #11b57c;
    }
  }
  .line-bottom:after {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 1px;
    background: #ddd;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
    -webkit-transform-origin: 0 100%;
    transform-origin: 0 100%;
  }
}
</style>
