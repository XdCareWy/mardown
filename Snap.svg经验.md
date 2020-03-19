#### Snap.svg经验

```js
const svg = Snap("#svgId");
// 画矩形
svg.rect(x,y,w,h,rx,ry);
// 文本
svg.text()
// 设置属性
Element.atrr({})
// 箭头
const p1 = svg.path("M0,0 L0,4 L3,2 L0,0").attr({
  fill: "rgb(49,208,198)"
})
const m2 = p1.marker(0,0,12,12,3,2);
svg.line(fromX,fromY,toX,toY).attr({
  "marker-end": m2,
  fill: "transparent",
  stroke: "rgb(49, 208, 198)",
  "stroke-width": 2,
  "stroke-dasharray": 0,
})
```







#### 2019.8.21

```
transparent 代表着“全透明黑色”，即类似rgba(0,0,0,0)的值。代表背景透明
使用场景：当一个元素覆盖到另外一个元素时，想要显示下面的元素，就把上面的元素的颜色设置为transparent
```

```
js设置css样式
dom.style.属性 = 值
```

