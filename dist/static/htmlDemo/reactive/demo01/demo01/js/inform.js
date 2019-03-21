$(function () {
    clickLi();
    hiddenNav();
    seekAnimate();
    dataLineAnimate();
    dataNumAnimate();
    xiaoxi();
    sendMessage();
    eventEnter();
    loginBtn();
});
// 点点
function clickLi() {
    $(".nav-lists-li").each(function () {
        let clickLiK = false;
        $(this).click(function () {
            $(this).next("ul").slideToggle();
            if (!clickLiK) {
                $(this).css({
                    "background": "#2e3033",
                    "border-left": "3px solid #1dc4e9"
                });
                $(this).next("ul").css({
                    "border-left": "3px solid #1dc4e9"
                });
                $(this).children("a").css({
                    "transform": "rotate(90deg)"
                });
                clickLiK = !clickLiK;
            } else {
                $(this).css({
                    "background": "none",
                    "border-left": "3px solid #1e1f21"
                });
                $(this).next("ul").css({
                    "border-left": "3px solid #1e1f21"
                });
                $(this).children("a").css({
                    "transform": "rotate(0deg)"
                });
                clickLiK = !clickLiK;
            }

        });
    });


}

function hiddenNav() {
    let clickLiK2 = true;
    let clickLiK3 = false;
    let clickLiK4 = true;
    $("#moreAA").click(function () {

        if (clickLiK4) {
            $(".logo #moreAA").css({
                "background": "url(images/index/navCuo.png) no-repeat center"
            });
            $(".nav-lists-ul").children("li").css({
                "text-indent": "-200px"
            });
            clickLiK4 = !clickLiK4;
        } else {
            $(".logo #moreAA").css({
                "background": "url(images/index/nav-more.png) no-repeat center"
            });
            $(".nav-lists-ul").children("li").css({
                "text-indent": "25px"
            });
            clickLiK4 = !clickLiK4;
        }
        if (clickLiK2) {
            $(".nav").css({
                "width": 100
            });
            $(".nav-lists-li h2").css({
                "display": "none"
            });
            $(".logo h2").css({
                "display": "none"
            });
            $(".logo #moreAA").css({
                "display": "none"
            });
            clickLiK2 = !clickLiK2;
            clickLiK3 = !clickLiK3;
        } else {
            $(".nav").css({
                "width": 264
            });
            $(".nav-lists-li h2").css({
                "display": "block"
            });
            setTimeout(function () {
                $(".logo h2").css({
                    "display": "block"
                });
            }, 50);
            $(".logo #moreAA").css({
                "display": "block"
            });
            clickLiK2 = !clickLiK2;
            clickLiK3 = !clickLiK3;
        }
    });
    $(".nav").mouseenter(function () {
        if (clickLiK3) {
            if ($(".nav").css("width") == "100px") {
                $(".nav").css({
                    "width": 264
                });
                $(".nav-lists-li h2").css({
                    "display": "block"
                });
                setTimeout(function () {
                    $(".logo h2").css({
                        "display": "block"
                    });
                }, 50);
                $(".logo #moreAA").css({
                    "display": "block"
                });
                $(".nav-lists-ul").children("li").css({
                    "text-indent": "25px"
                });
                // clickLiK2 = !clickLiK2;
            }
        }
    });
    $(".nav").mouseleave(function () {
        if (clickLiK3) {
            if ($(".nav").css("width") == "264px") {
                $(".nav").css({
                    "width": 100
                });
                $(".nav-lists-li h2").css({
                    "display": "none"
                });
                $(".logo h2").css({
                    "display": "none"
                });
                $(".logo #moreAA").css({
                    "display": "none"
                });
                $(".nav-lists-ul").children("li").css({
                    "text-indent": "-200px"
                });
                // clickLiK2 = !clickLiK2;
            }
        }
    });
}

// 搜索框动画
function seekAnimate() {
    $(".seek").click(function () {
        $(this).animate({
            "margin-left": 216
        }, 300, function () {
            $(this).css({
                "display": "none"
            })
            $(".inputSeek").css({
                "display": "block"
            });
        });
    });
    $(".closeSeek").click(function () {
        $(".inputSeek").css({
            "display": "none"
        });
        $(".seek").css({
            "display": "block"
        })
        $(".seek").animate({
            "margin-left": 0
        }, 300);
    });
}

// 数据动画
function dataLineAnimate() {
    $('.dataLine-data').each(function () {
        let a = parseInt($(this).css("width"));
        $(this).css({
            "width": 0
        });
        $(this).animate({
            "width": a
        }, 1000);
    });
    $('.mainContent3SectionMainPDataLine').each(function () {
        let a = parseInt($(this).css("width"));
        $(this).css({
            "width": 0
        });
        $(this).animate({
            "width": a
        }, 1000);
    });
    $('.mainContent4LMainDataLine').each(function () {
        let a = parseInt($(this).css("width"));
        $(this).css({
            "width": 0
        });
        $(this).animate({
            "width": a
        }, 1000);
    });
}

function dataNumAnimate() {
    $(".shuzhi").each(function () {
        let num = $(this).html();
        $(this).html(0);
        let a = 0;
        let b = num / 50;
        let timer = setInterval(() => {
            a += b;
            $(this).html(a.toFixed(2));
            if (a > num) {
                $(this).html(num);
                clearInterval(timer);
            }
        }, 20);
    });
    $(".shuzhi2").each(function () {
        let num = parseInt($(this).html());
        $(this).html(0);
        let a = 0;
        let b = num / 50;
        let timer = setInterval(() => {
            a += b;
            $(this).html(a.toFixed() + "%");
            if (a > num) {
                $(this).html(num + "%");
                clearInterval(timer);
            }
        }, 20);
    });
}

// 消息
function xiaoxi() {
    $(".xiaoxi").click(function () {
        $(".chitchat").animate({
            "right": 0
        }, 500);
    });
    $(".ChatControls").click(function () {
        $(".chitchat").animate({
            "right": -386
        }, 500);
    });
    $(".closeChat").click(function () {
        $(".chatFrame").animate({
            "right": "-100%"
        }, 500);
    });
    $(".chatMain").children("li").each(function () {
        $(this).click(function () {
            $(".chatFrame").animate({
                "right": "0"
            }, 500);
            let user = $(this).children(".chatLi").children("h2").html();
            $(".chatFrame").children(".chatFrameTit").children("span").html(user);
        });
    });
}
// 发送消息
function sendMessage() {
    $(".send").click(function () {
        if ($(".chatContent").val()) {
            let val = $(".chatContent").val();
            $(".chatContent").val("");
            let Mydate = new Date();
            let date = Mydate.getHours() + ":" + Mydate.getMinutes();
            $(".chatMainCon").append(`
                <li class="chatRight">
                    <div class="neirongRight">
                       ${val}
                        <img src="images/index/rightmsg.png" class="rightmsg"/>
                    </div>
                    <span class="rightTime">${date}</span>
                </li>
            `);

        }
        boxScroll($(".chatMainCon")[0])
    });

}

function eventEnter() {
    document.onkeydown = function (event) {
        var code = event.keyCode;
        if (code == 13) { //这是键盘的enter监听事件
            //绑定焦点，有可能不成功，需要多试试一些标签 
            if ($(".chatContent").val()) {
                let val = $(".chatContent").val();
                $(".chatContent").val("");
                let Mydate = new Date();
                let date = Mydate.getHours() + ":" + Mydate.getMinutes();
                $(".chatMainCon").append(`
                    <li class="chatRight">
                        <div class="neirongRight">
                           ${val}
                            <img src="images/index/rightmsg.png" class="rightmsg"/>
                        </div>
                        <span class="rightTime">${date}</span>
                    </li>
                `);

            }
            boxScroll($(".chatMainCon")[0])
        }
    }

}

function boxScroll(o) {
    o.scrollTop = o.scrollHeight;
}

// 登录信息
function loginBtn() {
    $(".setting").click(function () {
        $(".settingSection").toggle();
    });
    $(".lock").click(function () {
        location.href = "login.html";
    });
    $(".tztz").click(function () {
        $(".inform").toggle();
    });
    $(".selectBox").click(function () {
        $(".selectBoxSc").toggle();
    });
}

function toggleFullScreen() {
    if (!document.fullscreenElement && // alternative standard method
        !document.mozFullScreenElement && !document.webkitFullscreenElement) { // current working methods
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
            document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
            document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        }
    } else {
        if (document.cancelFullScreen) {
            document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        }
    }
}