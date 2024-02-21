<script setup lang="ts">
  import { ref,computed, provide } from 'vue'
  import type {InjectionKey,Ref} from 'vue'
  import testNum from './components/testNum.vue';
  import canvasObject from './components/canvasObject.vue';
  import flash_record from './components/flash_record.vue';
  import test2 from './components/test2.vue';
  import pixi from './components/pixi.vue';
  /**
   * particles_background存在问题
   */
  // import particles_background from './components/particles_background.vue';

  // TODO testtag
  // FIXME testtag
  
  const testInver=ref<string>('')
  const istrue=computed(()=>{
    const arr=testInver.value.split('')
    return arr.reverse().join('')===testInver.value
  })

  const key:InjectionKey<Ref<string>>=Symbol('123')
    provide(key,testInver)
    // const abc=inject<Ref(string)>(key)
    /**
     * 问题，这个组件引入时是引入了一个构造函数/类？
     * 是
     */
  import {testInput} from './useFuction/TestInput'
  const {testStrHandler,testdata,han,abled,setAbled}=testInput()

  const func=ref<string>('')

  const set1=ref(10)
  const set2=ref(2)
</script>

<template>
  <!-- <particles_background></particles_background> -->
  输入测试数据:<input type="text" v-model="testdata" :disabled="abled"><br>
  <testStrHandler v-model:getdata="testdata" ref="han" @update:abled="setAbled"></testStrHandler>
  <br><br>
  镜像测试数据:<input type="text" v-model.trim="testInver">
  <div>{{ istrue }}</div>
  <br><br>
  一元方程求解(ax=c):<input type="text" v-model="func" placeholder="请输入一元一次方程"><br>
  <testNum v-model:func="func"></testNum>
  <br><br>
  canvas：<canvasObject></canvasObject>
  <br><br>
  <flash_record></flash_record>
  <br>
  <test2 v-model:set1="set1" v-model:set2="set2"></test2>
  <br>
  <pixi></pixi>
</template>

<style scoped>

</style>
