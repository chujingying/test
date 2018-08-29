
/*
    Java:
        public int add(int x, int y){
            return x+y;
        }
    JS函数 function
        1.没有参数列表,没有返回值
            function fun_name(){

            }
        2.有参数列表
            function fun_name(param1,param2,....) {

            }

 */

function fun1() {
    alert("清空")
}
function fun2(x, y) {
    alert(x+y);
}

function fun3(obj) {
    alert(obj);
}

function fun4(a, b, c) {
    return a+b+c;
}

function fun5() {
    var x = fun4(1,2,3);

}