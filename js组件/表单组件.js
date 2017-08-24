/**
 * Created by sunchenshidabendan on 2017/8/24.
 */
var oForm = document.getElementsByTagName("form")[0];
var oname = document.getElementsByTagName("input")[0];
var oage = document.getElementsByTagName("input")[1];
var ocode = document.getElementsByTagName("input")[2];
var oagaincode = document.getElementsByTagName("input")[3];
var ophone = document.getElementsByTagName("input")[4];
var omail = document.getElementsByTagName("input")[5];
var namestat = false;
var agestat = false;
var codestat = false;
var againcodestat = false;
var phonestat = false;
var mailstat = false;
//用户名验证
oname.onblur=function () {
  namestat=/^([a-z]|[A-Z]).{5,11}$/.test(oname.value);
  if(!namestat){
    alert("用户名长度6-12位");
  }
  checkFormState();
};
//年龄验证
oage.onblur=function () {
  agestat = /^([a-z]|[A-Z]).{5,11}$/.test(oage.value);
  if (!agestat) {
    alert("请输入数字");
  }
  if((oage.value<10)||(oage.value>110)){
    alert("年龄不在可注册范围");
    return false;
  }
  checkFormState();
};
//设置密码
ocode.onblur=function () {
  codestat = /^([a-z]|[A-Z]).{5,11}$/.test(ocode.value);
  if(!/^.{6,16}$/.test(ocode.value)){
    alert("密码长度6-16位");
  }
  checkFormState();
};
//确认密码
oagaincode.onblur=function () {
  againcodestat = /^([a-z]|[A-Z]).{5,11}$/.test(oagaincode.value);
  if(!/^.{6,16}$/.test(oagaincode.value)){
    alert("密码长度6-16位");
  }
  if(ocode.value!=oagaincode.value){
    alert("两次密码不同");
    return false;
  }
  checkFormState();
};
//手机验证
ophone.onblur=function () {
  phonestat = /^([a-z]|[A-Z]).{5,11}$/.test(ophone.value);
  if(!/^1[3578]\d{9}$/.test(ophone.value)){
    alert("请输入数字");
  }
  checkFormState();
};
//邮箱验证
omail.onblur=function () {
  mailstat = /^([a-z]|[A-Z]).{5,11}$/.test(omail.value);
  if(!/^\w+@\w+\.\w+$/.test(omail.value)){
    alert("请输入正确邮箱");
  }
  checkFormState();
};
function checkFormState() {
  formState = nameState && ageState && mobileState && emailState;
  oSubmit.disabled = !formState;
}
//英文验证
function isEnglish(str){
  if(str==null||str=="") return false;
  var result=str.match(/^[A-Za-z]+$/);
  if(result==null)return false;
  return true;
}
//邮政编码验证
function isZipCode(str){
  if(str==null||str=="") return false;
  var result=str.match(/^[0-9]{6}$/);
  if(result==null)return false;
  return true;
}
//验证字符是否合法
function isRightfulString(str){
  if(str==null||str=="") return false;
  var result=str.match(/^[A-Za-z0-9_-]+$/);
  if(result==null)return false;
  return true;
}
//身份证号码验证
function isIdCardNo(num){
  //　 if (isNaN(num)) {alert("输入的不是数字！"); return false;}
  var len = num.length, re;
  if (len == 15)
    re = new RegExp(/^(\d{6})()?(\d{2})(\d{2})(\d{2})(\d{2})(\w)$/);
  else if (len == 18)
    re = new RegExp(/^(\d{6})()?(\d{4})(\d{2})(\d{2})(\d{3})(\w)$/);
  else {alert("输入的数字位数不对。"); return false;}
  var a = num.match(re);
  if (a != null)
  {
    if (len==15)
    {
      var D = new Date("19"+a[3]+"/"+a[4]+"/"+a[5]);
      var B = D.getYear()==a[3]&&(D.getMonth()+1)==a[4]&&D.getDate()==a[5];
    }
    else
    {
      var D = new Date(a[3]+"/"+a[4]+"/"+a[5]);
      var B = D.getFullYear()==a[3]&&(D.getMonth()+1)==a[4]&&D.getDate()==a[5];
    }
    if (!B) {alert("输入的身份证号 "+ a[0] +" 里出生日期不对。"); return false;}
  }
  if(!re.test(num)){alert("身份证最后一位只能是数字和字母。");return false;}
  return true;
}