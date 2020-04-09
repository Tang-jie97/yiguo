<template>
  <div id="home">
    <!-- 开始的遮罩层 -->
    <van-overlay :show="show" @click="show = false" z-index="10">
      <div class="wrapper" @click="show = false">
        <div class="block" @click.stop>
          <van-icon name="close" size="0.32rem" color="rgb(170, 162, 162)" @click="show = false" />
          <img :src="showImg" alt />
        </div>
      </div>
    </van-overlay>

    <!-- 组件懒加载 -->
    <lazy-component>
      <!-- swipe轮播图 -->
      <div class="swipe">
        <van-swipe :autoplay="3000" width="100%" height="2.18rem">
          <van-swipe-item v-for="(image, index) in banners" :key="index">
            <img v-lazy="image.imgUrl" />
          </van-swipe-item>
        </van-swipe>
      </div>

      <!-- 菜单栏 -->
      <div class="menu">
        <van-grid :gutter="10">
            <van-grid-item
                v-for="value in 8"
                :key="value"
                icon="photo-o"
                text="文字"
            />
        </van-grid>
      </div>
    </lazy-component>
  </div>
</template>

<script>
import Vue from "vue";
import { Toast, Overlay, Button, Icon, Swipe, SwipeItem, Lazyload, Grid, GridItem } from "vant";

Vue.use(Toast).use(Overlay).use(Button).use(Icon).use(Swipe).use(SwipeItem).use(Grid).use(GridItem).use(Lazyload, { lazyComponent: true });
export default {
  data() {
    return {
      show: true,
      showImg:"https://img11.yiguoimg.com/d/items/2020/200331/9570215171106943_896x1086.png",
      banners: [
        {
          imgUrl:"https://img13.yiguoimg.com/d/items/2019/190627/9288738360567515_1125x652.jpg"
        },
        {
          imgUrl:"https://img12.yiguoimg.com/d/items/2020/200331/9288740194330751_1125x652.jpg"
        },
        {
          imgUrl:"https://img10.yiguoimg.com/d/items/2020/200319/9288740124338291_1125x652.jpg"
        },
        {
          imgUrl:"https://img12.yiguoimg.com/d/items/2020/200408/9288740231948424_1125x652.jpg"
        },
        {
          imgUrl:"https://img11.yiguoimg.com/d/items/2020/200402/9288740204587138_1125x652.jpg"
        },
        {
          imgUrl:"https://img10.yiguoimg.com/d/items/2020/200402/9288740205537410_1125x652.jpg"
        }
      ]
    };
  },
  created() {
    Toast({
      message: "加载中...",
      icon: "https://img07.yiguoimg.com/e/web/170113/01851/110053/1.gif",
      duration: 500
    });
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.block {
  width: 3rem;
  height: 3.6rem;
  position: relative;
  .van-icon-close {
    position: absolute;
    right: 0;
    top: -15px;
  }
  img {
    width: 100%;
    height: 100%;
  }
}
// 轮播图
.swipe {
  width: 100%;
  height: 2.18rem;
  position: relative;
  img {
    width: 100%;
    height: 2.18rem;
  }
  ::v-deep {
    .van-swipe__indicators {
      bottom: 40px;
    }
  }
}
</style>
