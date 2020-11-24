<template>
  <div class="container">
    <div>
      <van-search
        v-model="serachWord"
        show-action
        shape="round"
        background="#4fc08d"
        placeholder="请输入搜索关键词"
        @search="onSearch"
      >
        <template #action>
          <div @click="onSearch">搜索</div>
        </template>
      </van-search>
    </div>
    <div>
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
      </van-swipe>
    </div>
    <div>
      <van-notice-bar
        left-icon="volume-o"
        text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。"
      />
    </div>
    <div>
      <van-grid :column-num="4">
        <van-grid-item v-for="value in 8" :key="value" icon="photo-o" text="文字" />
      </van-grid>
    </div>
    <div class="lists-title">
      <van-icon name="fire-o" /><span class="lists-title-tx">推荐</span>
    </div>
    <div class="lists">
      <van-cell v-for="item in 5" :key="item">
        <p>在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。</p>
        <div>
          <span>水电费</span>
          <span>水电费</span>
          <span>水电费</span>
        </div>
      </van-cell>
    </div>
    <van-tabbar v-model="tabActive" :fixed="false">
      <van-tabbar-item icon="home-o">
        首页
      </van-tabbar-item>
      <van-tabbar-item icon="search">
        搜索
      </van-tabbar-item>
      <van-tabbar-item icon="friends-o">
        我的
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Index',
  data () {
    return {
      serachWord: '',
      tabActive: 0
    }
  },
  methods: {
    onSearch() {
      //
    }
  }
})
</script>
<style lang="less">
  .container {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
  .lists {
    flex:1;
    overflow: auto;
  }
  .lists-title {
    background: #fafafa;
    font-size: 18px;
    padding: 5px 15px;
    .van-icon-fire-o,
    .lists-title-tx {
      vertical-align: middle;
    }
    .van-icon-fire-o {
      color: red;
    }
    .lists-title-tx {
      padding-left: 5px;
    }
  }

</style>
