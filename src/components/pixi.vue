<template>
  <div ref="box"></div>
</template>

<script setup lang="ts">
  import * as PIXI from 'pixi.js'
  import {ref,onMounted} from 'vue'
  const box=ref()
  const app=new PIXI.Application({ 
    width: 800,         // default: 800 宽度
    height: 500,        // default: 600 高度
    antialias: true,    // default: false 反锯齿
    // transparent: false, // default: false 透明度  这个不在类型中，已经取消了吗？
    resolution: 1,       // default: 1 分辨率 
    backgroundColor:0x061639
  })

  // 程序时间
  let time_m=0//

  import Alice018 from '../statics/Alice018.png'
  import yellow from '../statics/particles_yellow.png'
  import pink from '../statics/particles_pink.png'
  import purple from '../statics/particles_purple.png'
  import qing from '../statics/particles_qing.png'
  onMounted(async()=>{
    box.value.appendChild(app.view)


    //创建容器
    const container= new PIXI.Container()
    console.log(app.renderer.width,app.screen.width);
    container.x=0
    container.y=0
    container.width=app.renderer.width/2
    container.height=app.renderer.height/2
    container.sortableChildren=true
    app.stage.addChild(container)

    // 容器背景颜色
    const bgc=new PIXI.Graphics()
    bgc.beginFill(0x234466)
    // console.log(container.width,container.height)//0,0
    bgc.drawRect(0,0,400,250)
    bgc.endFill()
    bgc.zIndex=0
    

    // console.log(particles_yellow.worldTransform);
    // console.log(particles_qing.toGlobal(new PIXI.Point(0,0)));

    const texture =await PIXI.Assets.load(Alice018);
    // This creates a texture from a 'bunny.png' image
    const bunny = new PIXI.Sprite(texture);
    bunny.zIndex=10
    // Setup the position of the bunny
    bunny.x = container.width / 2;
    bunny.y = container.height / 2;
  
    // Rotate around the center
    bunny.anchor.x =container.width/2;
    bunny.anchor.y =container.height/2;

    // 绘制一个矩形
    const rectangle=new PIXI.Graphics()
    rectangle.beginFill(0xccbbff)
    rectangle.drawRect(0,0,30,30)
    rectangle.endFill()
    rectangle.zIndex=1

    //直接创建精灵

    const particles:Array<PIXI.Sprite>=[]

    const particles_yellow=PIXI.Sprite.from(yellow)
    const particles_qing=PIXI.Sprite.from(qing)
    const particles_pink=PIXI.Sprite.from(pink)
    const particles_purple=PIXI.Sprite.from(purple)
    particles_yellow.x=400-particles_yellow.width
    particles_yellow.y=250-particles_yellow.height
    particles_yellow.zIndex=3
    particles_qing.x=400-particles_yellow.width
    particles_qing.y=0
    particles_qing.zIndex=3
    particles_pink.x=0
    particles_pink.y=250-particles_yellow.height
    particles_pink.zIndex=3
    particles_purple.x=0
    particles_purple.y=0
    particles_purple.zIndex=3

    particles.push(particles_pink,particles_purple,particles_qing,particles_yellow)

    
    container.addChild(bgc)
    container.addChild(particles_yellow)
    container.addChild(particles_qing)
    container.addChild(particles_pink)
    container.addChild(particles_purple)
    container.addChild(rectangle)
    container.addChild(bunny)
    
    app.ticker.add((time) => {
        // each frame we spin the bunny around a bit
        time_m+=time
        rectangle.x=200 + Math.cos(time_m/50.0) * 100.0-15;
        rectangle.y=125+ Math.sin(time_m/50.0) * 100.0-15;
        const amount = Math.sin(time_m/60)
        const scale_num = 1.0 + 0.25 * amount;
        const alpha = 0.75 + 0.25 * amount;
        for(let i=0;i<particles.length;i++){
          particles[i].scale=({x:scale_num,y:scale_num})
          particles[i].alpha=alpha
          particles[i].x=particles[i].x?400-particles[i].width:0
          particles[i].y=particles[i].y?250-particles[i].height:0
          // console.log(container.width);
        }
    });
  })



  // 第二部分测试
</script>