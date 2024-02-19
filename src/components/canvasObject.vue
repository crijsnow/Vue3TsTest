<template>
  <v-stage :config="configKonva">
    <v-layer>
      <v-image :config="configbgc" ></v-image>
      <v-image :config="configSprite"  :crop="{ x: currentFrame * 48, y: 0, width: 48, height: 48 }" @click="fight"></v-image>
      <!-- <v-circle :config="configCircle"></v-circle> -->
    </v-layer>
  </v-stage>
</template>

<script setup lang="ts">
  import {ref,onMounted} from 'vue'
  const configKonva=ref({
        width: 250,
        height: 250
      })
  // const configCircle=ref({
  //       x: 100,
  //       y: 100,
  //       radius: 70,
  //       fill: "red",
  //       stroke: "black",
  //       strokeWidth: 4
  //     })
  /**
   * 错误？图片要怎么加载出来呀
   */
  import img from '../statics/run.png'
  const imgSprite=ref(new Image())
  imgSprite.value.src=img
  const configSprite=ref({
    x:24,
    y:24,
    width: 48,
    height: 48,
    image: imgSprite, // 精灵图的图片资源,不是路径
  })
  const currentFrame=ref(0)
  onMounted(()=>{
    setInterval(()=>{
      if(currentFrame.value<=2) currentFrame.value++
      else currentFrame.value=0
    },100)
  })

  /**
   * 背景图
   */
  import bgc from '../statics/bgc.png'
  const bgcSprite=ref(new Image())
  bgcSprite.value.src=bgc
  const configbgc=ref({
    x:0,
    y:0,
    width:250,
    height:250,
    image:bgcSprite
  })

  /**
   * 战斗动画
   */
  import skillImg from '../statics/Cure4.png'
  import AliceFight from '../statics/Alice018.png'
  const fight:()=>void=()=>{
    console.log(1);
    
  }

</script>

<style scoped>

</style>