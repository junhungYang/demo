// 点击开始游戏  动态生成100个小格   100个div
// leftClick  没有雷  显示数字（代表以当前小格为中心周围8个格的雷数）  扩散(当前周围8个格没有雷)    
//       有雷  gameover
// rigthClick 没有标记&&没有数字--》 进行标记。  有标记 --》取消标记--》 标记是否正确，雷数-1，雷数为0 提示成功
//            已出现数字的话  无效果

var startBtn = document.getElementById('stratBtn')
var boxAndText = document.getElementsByClassName('boxAndText')[0]
var bigBox = document.getElementsByClassName('bigBox')[0]
var leiSurplus;
var litBox;
var alertImg = document.getElementsByClassName('alertImg')[0]
var close = document.getElementById('close');
var leiNum = document.getElementById('leishu');
var leishu = 10;
var strGameKey = true;
function bindEvent(){
   
        startBtn.onclick = function(){
            if(strGameKey){
                boxAndText.style.display = "block";
                boxMake()
                strGameKey = false;
            }
        }
    bigBox.onmousedown = function(e){
        var litBox = e.target
        if(e.button == 2){
            rightClick(litBox)
        }else if(e.button == 0 ){
            leftClick(litBox)
        }
    }
    bigBox.oncontextmenu = function(){
        return false;
    }
    close.onclick = function(){
        alertImg.style.display = "none" ;
        bigBox.innerHTML= '';
        strGameKey = true;
    }
}
bindEvent()
function boxMake(){
    var minemap = [];
    var leiPos ;
    leiSurplus = 10;
    for(var i = 0; i < 10; i++){
        for(var j = 0; j <10; j++){
            var div = document.createElement('div');
            bigBox.appendChild(div);
            div.setAttribute('class','litBox')
            div.setAttribute('id',i + '-' + j)
            minemap.push({mine:0})
        }
    }
    litBox = document.getElementsByClassName('litBox')
    while(leiSurplus){    
        leiPos = Math.round(Math.random()*100);
        if(minemap[leiPos].mine == 0){
           litBox[leiPos].classList.add('isLei')
           minemap[leiPos].mine =1;
           leiSurplus --;
        }
    }
}
function leftClick(event){
    if(event.classList.contains('isLei')){
        for(var i = 0; i <10; i++){
            var isLei = document.getElementsByClassName('isLei')[i];
            isLei.classList.add('haveLei')
        }
        setTimeout(function(){
            alertImg.style.display = "block";
            boxAndText.style.display = "none";
            alertImg.style.backgroundImage ="url('img/over.jpg')"
        },800)
    }else{
        var leiNum = 0;
        var eventId= event.getAttribute('id').split('-');
        var posX = +eventId[0];
        var posY = +eventId[1]

        event.classList.add('noLei')
        for(var i = posX - 1; i <= posX + 1;i++){
            for(var j = posY - 1; j <= posY + 1; j++){
                var boxLeiJud = document.getElementById(i + '-' + j)

                if(boxLeiJud && boxLeiJud.classList.contains('isLei')){
                    leiNum++;
                }
            }
        }
        event.innerHTML = leiNum;
        if (leiNum == 0) {
            for (var i = posX - 1; i <= posX + 1; i++) {
                for (var j = posY - 1; j <= posY + 1; j++) {
                    var nearBox = document.getElementById(i + '-' + j)
                    if(nearBox){
                        if(!nearBox.classList.contains('check')){
                            nearBox.classList.add('check')
                            leftClick(nearBox)
                        }
                    }   
                }
            }
            event.innerHTML = 0
        }
    }

}
function rightClick(event){
    
    if(event.classList.contains('noLei')){
        return;
    }
    event.classList.toggle('rightClick')
    if(event.classList.contains('rightClick') && event.classList.contains('isLei')){
        leishu--;
        leiNum.innerHTML = leishu
    }
    if(!event.classList.contains('rightClick') && event.classList.contains('isLei')){
        leishu++;
        leiNum.innerHTML = leishu
    }
    if(leishu == 0){
        setTimeout(function(){
            alertImg.style.display = "block";
            boxAndText.style.display = "none";
            alertImg.style.backgroundImage ="url('img/success.jpg')" ;
        },300)
    }
}