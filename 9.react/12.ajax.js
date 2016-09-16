var xhr = new XMLHttpRequest;
xhr.open('get','https://www.baidu.com/su?cb=jQuery111101007803806431089_1473761177982&wd=a&_=1473761177983',true);
xhr.onreadystatechange = function(){
    if(xhr.readyState == 4){
        console.log(xhr.responseText);
    }
}
xhr.send();