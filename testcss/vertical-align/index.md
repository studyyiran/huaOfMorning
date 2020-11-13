有这么几个概念。
一个行框里面，有个隐形的节点。
他的 font-size 和父节点是一样的。他是父元素的代言人
为什么是 font-size 而不是 line-height 呢？
因为就是 font-size 影响一个元素line-height 盒子的，就是他的 font-size。或者说 line-height。

当我们修改父元素font-size 大小的时候。
 1）大家按照 baseline 对其
 2）大家字体一起变化。
 3）无影响

当我们修改子元素 font-size 大小的时候。
 1）大家按照 baseline 对其
 2）大家字体有大有小。
 3）这必然会导致，行框计算的时候，超出原来的高度

当我们修改 vertical-align 的时候。