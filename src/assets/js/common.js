/**
 * 函数工具 不注册在vue原型中
 * @author lk 2018-11-08
 */
//cookie
const cookie = {
    set(name, value) {
        if(window.localStorage){
            localStorage.removeItem(name);
            localStorage.setItem(name,value);
        } else {
            var Days = 30;
            var exp = new Date();
            exp.setTime(exp.getTime() + Days * 24 * 60 * 60);
            document.cookie = name + "="+ escape (value) + ";expires=" + exp.toGMTString();
        };
    },
    delete(name) {
        if(window.localStorage){
            localStorage.removeItem(name);
        } else {
            var exp = new Date();
            exp.setTime(exp.getTime() - 1);
            var cval=getCookie(name);
            if(cval!=null){document.cookie= name + "="+cval+";expires="+exp.toGMTString();}
        };
    },
    get(name) {
        if(window.localStorage){
            var arr,reg = new RegExp("(^| )"+name+"=([^;]*)(;|$)");
            arr = localStorage.getItem(name);
            return arr;
        } else {
            var arr,reg = new RegExp("(^| )"+name+"=([^;]*)(;|$)");
            if(arr = document.cookie.match(reg)){
                return unescape(arr[2]);
            }else{
                return null;
            }
        };
    }
};
const common = {
    cookie
};
export default common;