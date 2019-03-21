function shownewlist(){
    $.get("newslists.nd",{},function(str){
        let arr=JSON.parse(str);//对返回的数据进行解析
        let htmlStr="";
        for(let i=0;i<arr.length;i++){
            htmlStr+='<li class="new-li">\
            <p class="p-link"><a href="#">'+arr[i].yjzx+'</a><a href="#"><img src="img/index/dot2.png" alt=""></a></p>\
            <ul>\
                <li>\
                    <h3>'+arr[i].newlist[0].title+'</h3>\
                    <p>'+arr[i].newlist[0].text+'</p>\
                    <h4><a href="#">'+arr[i].newlist[0].tag+'</a><span>'+arr[i].newlist[0].data+'</span></h4>\
                </li>\
                <li>\
                    <h3>'+arr[i].newlist[1].title+'</h3>\
                    <p>'+arr[i].newlist[1].text+'</p>\
                    <h4><a href="#">'+arr[i].newlist[1].tag+'</a><span>'+arr[i].newlist[1].data+'</span></h4>\
                </li>\
                <li>\
                    <h3>'+arr[i].newlist[2].title+'</h3>\
                    <p>'+arr[i].newlist[2].text+'</p>\
                    <h4><a href="#">'+arr[i].newlist[2].tag+'</a><span>'+arr[i].newlist[2].data+'</span></h4>\
                </li>\
                <li>\
                <h3>'+arr[i].newlist[3].title+'</h3>\
                <p>'+arr[i].newlist[3].text+'</p>\
                <h4><a href="#">'+arr[i].newlist[3].tag+'</a><span>'+arr[i].newlist[3].data+'</span></h4>\
            </li>\
            </ul>\
        </li>'
        }
        console.log(htmlStr);
        $("#new-ul-list").html(htmlStr);
    })
}
$(function(){
    console.log("ajax123")
    shownewlist();
})