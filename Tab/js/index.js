window.onload=function () {
    var tabHead=document.getElementById('tab_head');
    var headList=tabHead.getElementsByTagName('li');
    var contentList=document.getElementsByClassName('dom');

    for(var i=0;i<headList.length;i++){
        var head=headList[i];
        head.index=i;

        head.onmouseover=function () {
            for(var j=0;j<headList.length;j++){
                headList[j].className='';
                contentList[j].style.display='none'
            }
            this.className='selected';

            contentList[this.index].style.display='block';
        };


    }
};