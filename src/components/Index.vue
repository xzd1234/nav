<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { Search } from '@element-plus/icons-vue'

const list = ref([])
const footerList = ref([
  { name: '© 2021 BY ', desc: ' XZD', url: 'https://xiezhendong.cn/nav/' },
  { name: '.', desc: ' 浙ICP备2021013242号-1', url: 'https://beian.miit.gov.cn/' },
])
axios.post('/api/koa/get-navigation').then(res => {
  list.value = res.data.data
})
const goto = (val) => {
  window.open(val)
}
const bgStatus = ref('day')
const input3 = ref('')
const select = ref('https://www.baidu.com/s?wd=')
const selectList = ref([{
  url: 'https://www.baidu.com/s?wd=',
  name: '百度'
},
{
  url: 'https://cn.bing.com/search?q=',
  name: '必应'
},
{
  url: 'https://www.google.com.hk/search?q=',
  name: '谷歌'
},

{
  url: 'https://www.sogou.com/tx?query=',
  name: '搜狗'
}])
const onSearch = () => {
  if (input3.value != '') {
    window.open(select.value + input3.value)
  }

}


</script>

<template>
  <div :class="['pages', bgStatus]">
    <div class="header-box common">
      <div class="logo">工具库</div>
      <div class="input-box">
        <el-input
          v-model="input3"
          size="large"
          autofocus
          placeholder="请输入搜索内容"
          @keydown.enter="onSearch"
        >
          <template #prepend>
            <el-select v-model="select" placeholder="百度" style="width: 80px">
              <el-option v-for="item in selectList" :label="item.name" :value="item.url" />
            </el-select>
          </template>
          <template #append>
            <el-button type="warning" :icon="Search" @click="onSearch"></el-button>
          </template>
        </el-input>
      </div>
      <iframe
        width="242"
        height="90"
        frameborder="0"
        scrolling="no"
        hspace="0"
        allowtransparency="true"
        src="https://i.tianqi.com/?c=code&a=getcode&color=%23FFFFFF&id=35&site=34&icon=1"
      ></iframe>
    </div>
    <div class="common item" v-for="(item, i) of list" :key="i">
      <div class="item-title">{{ item.type }}</div>
      <ul class="list-box">
        <li v-for="(obj, j) in item.list" :key="j" @click="goto(obj.nav_url)">
          <div class="lits-top">
            <img :src="obj.nav_icon" alt />
            <span>{{ obj.nav_title }}</span>
          </div>
          <div class="desc">{{ obj.nav_desc }}</div>
        </li>
      </ul>
    </div>
    <footer class="common">
      <div class="text" v-for="(item, i) of footerList" :key="i">
        {{ item.name }}
        <span @click="goto(item.url)">{{ item.desc }}</span>
      </div>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.pages {
  width: 100%;
  min-height: 900px;
  display: flex;
  flex-direction: column;
}

.common {
  width: 1200px;
  min-height: 80px;
  margin: 10px auto 0;
  border-radius: 8px;
  box-sizing: border-box;
}
.header-box {
  margin-top: 40px;
  height: 140px;
  border-radius: 8px;
  padding: 10px 0 10px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.2);
  .logo {
    width: 180px;
    font-size: 24px;
    font-weight: 600;
    text-align: center;
    color: #fff;
  }
  .input-box {
    height: 42px;
    border-radius: 6px;
    background: #a8abb2;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    overflow: hidden;
    &:deep(.el-input-group--prepend > .el-input__inner:focus) {
      outline: none;
      box-shadow: none;
    }
  }
}
.item {
  min-height: 160px;
  padding: 20px;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 1);
  .item-title {
    text-align: left;
    width: 100%;
    font-weight: 600;
  }
  .list-box {
    width: 100%;
    padding: 0;
    margin: 14px 0 0;
    list-style: none;
    display:flex;
    flex-wrap: wrap;
   /*  display: grid;
    grid-row-gap: 14px;
    grid-column-gap: 14px;
    grid-template-columns: repeat(5, 1fr); */
    li {
      width:124px;
      margin: 6px;
      height: 68px;
      padding: 14px;

      background: rgba(255, 255, 255, 1);
      position: relative;
      cursor: pointer;
      &:hover {
        box-shadow: 0 0 6px #aaa;
      }
      &::before {
        content: " ";
        position: absolute;
        top: 0;
        left: 0;
        width: 200%;
        height: 200%;
        border: 1px solid #aaa;
        border-radius: 8px;
        transform-origin: 0 0;
        transform: scale(0.5);
      }
      .lits-top {
        width: 100%;
        height: 44px;
        display: flex;
        align-items: center;
        img {
          width: 40px;
          height: 40px;
          margin-right: 14px;
          border-radius: 50% 50%;
          border: 1px solid #ccc;
        }
      }
      .desc {
        width: 100%;
        height: 16px;
        margin-top: 8px;
        font-size: 14px;
        text-align: left;
        color: #333;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
      }
    }
  }
}

footer {
  height: 100px;
  line-height: 100px;
  color: #515a6e;
  display: flex;
  justify-content: center;
  .text {
    padding: 0 10px;
    display: flex;
    align-items: center;
    span {
      margin-left: 10px;
      color: #57abf5;
      cursor: pointer;
    }
  }
}
@media (min-width: 1400px) {
  .input-box {
    width: 500px;
  }
}
@media (max-width: 1400px) {
  .common {
    width: 1100px;
    border-radius: 8px;
  }
  .input-box {
    width: 470px;
  }
}
@media (max-width: 1300px) {
  .common {
    width: 1000px;
    border-radius: 8px;
  }
  .input-box {
    width: 440px;
  }
}
@media (max-width: 1200px) {
  .common {
    width: 900px;
    border-radius: 8px;
  }
  .input-box {
    width: 410px;
  }
}
@media (max-width: 1100px) {
  .common {
    width: 800px;
    border-radius: 8px;
  }
  .input-box {
    width: 380px;
  }
}
@media (max-width: 1000px) {
  .common {
    width: 800px;
    border-radius: 8px;
  }
  .input-box {
    width: 350px;
  }
}

.day {
  background: url("../assets/img/day_cloud.png"),
    linear-gradient(180deg, #0260ac, #3992e0 36%, #9ce0fe 77%, #eff9fd);
}

.night {
  background-image: url("../assets/images/night_star.png"),
    linear-gradient(180deg, #1c1e25, #1d516d 40%, #f0f4f5 80%);
}
</style>
