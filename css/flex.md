
https://blog.windstone.cc/front-end/css/topics/flex-image/
flex内部元素的默认值是保守主义。

flex: 0 1 auto

flex配合image。会有一些神奇
因为image是替换元素。默认情况下，别人是不敢碰他的。除非有人限定了他.

其实看起来，min，max，width任何一个属性都能让他打回原形。

但是这三者并不一样

min-width，让img服从管制，会被shrink
flex-basis 不会产生效果。看起来还是不回碰img的大小
width 非常有效。会让他有所收敛 效果和max-width很像

