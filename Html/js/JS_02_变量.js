
/*
JAVA:
    String name;  变量声明
    String password = "abc123"; 变量定义
    数组:
    int[] a1 = new int[10];
    Person[] perArr = new Person[];
    float[] a2 = {10,20,30}
    对象:
    class Person {
        String perName;
        int perAge;
    }

   Person person = new Person();
   p.setPerName("Tom");
   p.setPerAge(25);


JavaScript:
        布尔类型: true  false
        数组:  var carArr = new Array();
        var carArr2 = new Array("akasd","asfeff","rgdfdfgr");
        var carArr3 = ["akasd","asfeff","rgdfdfgr"]

        对象:
        var person = {
            perName:"Tom";
            perAge:20
        }

        var perName = person.perName;



     */

var name;  //不知道是什么数据类型
alert("name 未赋值: " + name)
name="Tom"  //这时侯才知道字符类型为字符串类型

alert("name ="+ name);

name = 20;//数字类型
alert("name = "+ name );

var time = "10:30";  //变量的定义

//定义数组
var carArr = new Array();
carArr[0] = "AuDi";
carArr[1] = "BaM";
carArr[2] = "Voio";

var carArr2 = new Array("AuDi","BaM","Voio");
var carArr3 = ["AuDi","BaM","Voio"]

for (var i = 0; i < carArr.length; i++) {
    alert(carArr[i])
}

//对象:
 var person={
    perName:"Tom",
     perAge:20
 };
var personName = person.perName;
var personAge = person.perAge;
alert("name的数据类型 : " + typeof name)


//日期
var myDate = new Date()
alert("获取日期"+ myDate);
alert("获取当前日期的月份: "+myDate.getMonth());


