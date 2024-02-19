<template>
  <v-stage :config="configKonva">
    <v-layer>
      <!-- <v-circle :config="configCircle"></v-circle> -->
      <v-sprite :config="configSprite"></v-sprite>
    </v-layer>
  </v-stage>
</template>

<script setup lang="ts">
  import {ref} from 'vue'
  const configKonva=ref({
        width: 200,
        height: 200
      })
  // const configCircle=ref({
  //       x: 100,
  //       y: 100,
  //       radius: 70,
  //       fill: "red",
  //       stroke: "black",
  //       strokeWidth: 4
  //     })

  const animations:{[key:string]:Array<number>}={
    run:[
      0, 0, 48, 48,
      48, 0, 48, 48,
      96, 0, 48, 48,
      144, 0, 48, 48
    ]
  }
  /**
   * 错误？图片要怎么加载出来呀
   */
  const imgSprite=ref(new Image())
  imgSprite.value.src='../statics/run.png'
  console.log(imgSprite.value)
  const configSprite=ref({
    x:24,
    y:24,
    image: imgSprite.value, // 精灵图的图片资源,不是路径
    animation: 'run', // 动画名称
    frameIndex: 0, // 当前帧索引
    animations: animations,
    frameRate: 7,
  })
</script>

<style scoped>

</style>