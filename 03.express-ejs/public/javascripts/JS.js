/**
 * Created by dllo on 17/8/3.
 */
$("#wechat").on("mouseover",function (ev) {
    $("#shalou").show();
});
$("#wechat").on("mouseout",function (ev) {
    $("#shalou").hide();
})
//滚轮事件
$(document).on("mousewheel DOMMouseScroll", function (e) {
    var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) ||  // chrome & ie
        (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));              // firefox

    if (delta > 0) {
        // 向上滚
        $("#nav").slideDown(1000);
        if($(window).scrollTop()<800){
            $("#click_top").hide();
        }
    } else if (delta < 0) {
        // 向下滚
//            console.log("wheeldown");
        if($(window).scrollTop()>100){
            $("#nav").slideUp(1000);
        }
        if($(window).scrollTop()>500){
            $("#click_top").show();
        }

    }
});

//点top置顶
$("#click_top").on("click",function () {
    $(document.body).scrollTop(0);
})