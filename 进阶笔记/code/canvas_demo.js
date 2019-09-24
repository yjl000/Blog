const canvas = document.getElementById('myCanvas');
// 创建画板上下文（个人理解，创建可以作2d画的笔）
const ctx = canvas.getContext('2d');

// 创建个人信息区
// 1. 先创建区域大小、位置、背景
ctx.fillStyle = '#ffffff'; // 这里的样式对下一个fillstyle前的元素都有效
ctx.fillRect(20, 20, 297, 240);

// 2.创建头像（引入图片）
let img  = new Image();
img.src = '../images/vatar.png';
// 确保图片加载完成（使用网络请求图片，如果加载没完成，就绘制会报错）
img.onload = function() {
  ctx.drawImage(img, 40, 40);
};

// 3.创建名字
let name = 'KenYang';
let post = 'Web'
ctx.font = '14px 微软雅黑';
ctx.fillStyle = '#333'; // 一定要重新设置颜色，不然会引用上面的白色，也就显示不出来了
ctx.fillText(name, 110, 66);
ctx.font = '12px 微软雅黑';
ctx.fillStyle = '#999';
ctx.fillText(post, 110, 86);

// 绘制笑脸logo
ctx.beginPath();
ctx.arc(65, 125, 16, 0, Math.PI*2, true); // 脸  以（65， 125）为圆心，16为半径，逆时针画一个满圆。
// ctx.moveTo(73, 125); // 将画笔提起，在（73, 125）处落下
ctx.arc(65, 125, 8, 0, Math.PI, false); // 口   以（65, 125）为圆心，8位半径，顺时针画一个半圆；
ctx.moveTo(61, 118);
ctx.arc(58, 118, 3, 0, Math.PI*2, true); // 左眼
ctx.moveTo(75, 118);
ctx.arc(72, 118, 3, 0, Math.PI*2, false); // 右眼；
ctx.stroke(); // 这里的才是显示的边框线条轮廓，之前的只是画出图形而已
ctx.closePath();

// info
let company = 'LEXIN';
let tel = '01234567895';
let address = '中国广东深圳南山';

ctx.font = '12px 微软雅黑';
ctx.fillStyle = '#333';
ctx.fillText(company, 90, 128);

// 三角形logo
ctx.beginPath();
ctx.moveTo(54, 168);  // 最左边的点
ctx.lineTo(68, 150);  // 上顶点
ctx.lineTo(68, 186); // 下顶点
ctx.fill(); // 填充

ctx.fillText(tel, 80, 170);

// 线性渐变logo 
const lingrad = ctx.createLinearGradient(54, 200, 54, 220);
lingrad.addColorStop(0, '#00ABEB');
lingrad.addColorStop(1, '#fff');
// lingrad.addColorStop(0.5, '#26C000');
// lingrad.addColorStop(1, '#fff');
ctx.fillStyle = lingrad;
ctx.fillRect(54,200,20,20);
ctx.font = '12px 微软雅黑';
ctx.fillStyle = '#333';
ctx.fillText(address, 84, 212);

// 创建小程序码区
ctx.fillStyle = '#ffffff'; // 这里的样式对下一个fillstyle前的元素都有效
ctx.fillRect(20, 360, 297, 200);

// 小程序码
let text1 = '长按小程序码';
let text2 = '创建属于你的名片';
let radgrad = ctx.createRadialGradient(105,450,16,110,460,60);
radgrad.addColorStop(0, '#A7D30C');
radgrad.addColorStop(0.9, '#019F62');
radgrad.addColorStop(1, 'rgba(1,159,98,1)');
ctx.fillStyle = radgrad;
ctx.fillRect(30,380,150, 150);
ctx.font = '12px 微软雅黑';
ctx.fillStyle = '#333';
ctx.fillText(text1, 180, 450);
ctx.fillText(text2, 180, 468);