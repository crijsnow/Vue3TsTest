<template>
  <div ref="box"></div>
</template>

<script setup lang="ts">
  import * as PIXI from 'pixi.js'
  import {ref,onMounted} from 'vue'
  const box=ref()
  const app=new PIXI.Application({ 
    width: 400,         // default: 800 宽度
    height: 250,        // default: 600 高度
    antialias: true,    // default: false 反锯齿
    // transparent: false, // default: false 透明度  这个不在类型中，已经取消了吗？
    resolution: 1,       // default: 1 分辨率 
    backgroundColor:0x061639
  })

  // 程序时间
  let time_m=0

  import Alice018 from '../statics/Alice018.png'
  import yellow from '../statics/particles_yellow.png'
  import pink from '../statics/particles_pink.png'
  import purple from '../statics/particles_purple.png'
  import qing from '../statics/particles_qing.png'
  onMounted(async()=>{
    box.value.appendChild(app.view)
    const texture =await PIXI.Assets.load(Alice018);
    // This creates a texture from a 'bunny.png' image
    const bunny = new PIXI.Sprite(texture);
  
    // Setup the position of the bunny
    bunny.x = app.renderer.width / 2;
    bunny.y = app.renderer.height / 2;
  
    // Rotate around the center
    bunny.anchor.x = 0.5;
    bunny.anchor.y = 0.5;
  
    // Add the bunny to the scene we are building
    app.stage.addChild(bunny);
  
    // Listen for frame updates
    app.ticker.add((time) => {
        // each frame we spin the bunny around a bit
        time_m+=time
        bunny.rotation += 0.01;
        rectangle.x=app.renderer.width/2 + Math.cos(time_m/50.0) * 100.0-15;
        rectangle.y=app.renderer.height/2+ Math.sin(time_m/50.0) * 100.0-15;
        const amount = Math.sin(time_m/60)
        const scale = 1.0 + 0.25 * amount;
        const alpha = 0.75 + 0.25 * amount;
        for(let i=0;i<particles.length;i++){
          particles[i].scale.set(scale)
          particles[i].alpha=alpha
          particles[i].x=particles[i].x?app.renderer.width-particles[i].width:0
          particles[i].y=particles[i].y?app.renderer.height-particles[i].height:0
        }
    });

    // 绘制一个矩形
    const rectangle=new PIXI.Graphics()
    rectangle.beginFill(0xccbbff)
    rectangle.drawRect(0,0,30,30)
    rectangle.endFill()
    app.stage.addChild(rectangle)

    //直接创建精灵

    const particles:Array<PIXI.Sprite>=[]

    const particles_yellow=PIXI.Sprite.from(yellow)
    const particles_qing=PIXI.Sprite.from(qing)
    const particles_pink=PIXI.Sprite.from(pink)
    const particles_purple=PIXI.Sprite.from(purple)
    particles_yellow.x=app.renderer.width-36
    particles_yellow.y=app.renderer.height-36

    particles_qing.x=app.renderer.width-36
    particles_qing.y=0

    particles_pink.x=0
    particles_pink.y=app.renderer.height-36

    particles_purple.x=0
    particles_purple.y=0

    // app.stage.addChild(particles_yellow)
    // app.stage.addChild(particles_qing)
    // app.stage.addChild(particles_pink)
    // app.stage.addChild(particles_purple)
    particles.push(particles_pink,particles_purple,particles_qing,particles_yellow)

    //创建容器
    const container= new PIXI.Container()
    console.log(app.renderer.width,app.screen.width);
    container.x=0
    container.y=0
    app.stage.addChild(container)
    container.addChild(particles_yellow,particles_qing,particles_pink,particles_purple)
    
  })



  // 第二部分测试
</script>