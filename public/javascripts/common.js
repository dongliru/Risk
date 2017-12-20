var home = {
    // 缓存DOM元素
        navLeft: $('.nav-left'),
        contentAside: $('.content-aside'),
        contentPrimary: $('.content-primary'),
        navCenterName: $(".nav-center-name"),
        language: $('.language'),
        admin: $('.admin'),
        //左侧导航点击切换
        leftNavToggle: function () {
            if (home.contentAside.width() > 100) {
                home.contentAside.animate({
                    'width': "50px"
                });
                home.contentPrimary.animate({
                    'width': "1469.2px"
                })
            } else {
                home.contentAside.animate({
                    'width': "230px"
                });
                home.contentPrimary.animate({
                    'width': "1289.2px"
                })
            }

        },
        // 元素的显示
        elementShow: function (el) {
            el.removeClass('hide');
            el.addClass('show');
        },
        // 元素的隐藏
        elementHide: function (el) {
            el.removeClass('show');
            el.addClass('hide');
        }
    }
    // 点击按钮，切换左侧导航
    home.navLeft.click(function () {
        home.leftNavToggle();
    })
    // 点击切换登录用户
    home.navCenterName.click(function () {
        home.elementShow(home.admin)
    })
    // 修改语言
    $('.nav-center-name .languageToggle').mouseover(function () {
        home.elementShow(home.language);
    })

    // 点击隐藏列表 
    home.contentPrimary.click(function () {
        home.elementHide(home.admin);
    })
    // 左侧导航点击切换二级标题的显示和隐藏
    $('.content-aside>ul>li>b').click(function () {
        if ($(this).width() < 10) {
            $(this).css({
                'background': "url('../images/siderbar/icon_arrow_down.png')",
                "width": "11px",
                "height": "7px"
            })
            home.elementShow($(this).siblings('ul'));
        } else {
            $(this).css({
                'background': "url('../images/siderbar/icon_arrow_right.png')",
                "width": "7px",
                "height": "11px"
            })
            home.elementHide($(this).siblings('ul'))
        }

    })