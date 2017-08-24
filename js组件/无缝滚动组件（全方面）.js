/**
 * Created by sunchenshidabendan on 2017/8/24.
 */
// var oRolling = document.getElementById('rolling');
// var oMUnit = document.getElementById('m_unit');
// var oListUl = document.getElementsByTagName('ul')[0];
// var listlength = oListUl.getElementsByTagName('li').length;
//向左横向滚动
// oListUl.innerHTML += oListUl.innerHTML;
//
// var nowLeft = 0;
// var timer;
// move();
// oRolling.onmousemove = function () {
//   clearInterval(timer);
// };
// oRolling.onmouseout = function () {
//   move();
// };
// function move() {
//   clearInterval(timer);
//   timer = setInterval(function () {
//     nowLeft -= 3;
//     if (nowLeft < -num * listlength){
//       nowLeft = 0;
//     }
//     oMUnit.style.left = nowLeft + "px";
//   },20)
// }
//向下纵向滚动
// var oRolling = document.getElementById('rolling');
// var oMUnit = document.getElementById('m_unit');
// var oListUl = document.getElementsByTagName('ul')[0];
// var listlength = oListUl.getElementsByTagName('li').length;
// oListUl.innerHTML += oListUl.innerHTML;
// var nowTop = 0;
// var timer;
// move();
// oRolling.onmousemove = function () {
//   clearInterval(timer);
// };
// oRolling.onmouseout = function () {
//   move();
// };
// function move() {
//   clearInterval(timer);
//   timer = setInterval(function () {
//     nowTeft += 3;
//     if (nowTop > num * listlength){
//       nowTop = 0;
//     }
//     oMUnit.style.top = nowTop + "px";
//   },20)
// }