<!--
* @Description
* @Author 王利伟
* @Date 2024/06/26 16:28:54
-->
<template>
  <div class="">
    <h1>这是主应用</h1>
    <WujieVue name="vue3" url="http://127.0.0.1:5174/"></WujieVue><!--第一个微前端子应用-->
    <WujieVue name="vue3" url="http://127.0.0.1:5175/"></WujieVue><!--第一个微前端子应用-->
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue';

export default {
  name: '',
  setup() {
    const state = reactive({});
    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="less" scoped></style>
