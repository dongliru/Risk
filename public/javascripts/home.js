$(function () {
    // 左侧柱状图 
    var myChart = echarts.init(document.getElementById("charts-left"));
    var myChart2 = echarts.init(document.getElementById("charts-right"));

    option = {

        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [{
            type: 'value',
            boundaryGap: [0, 0.01],
            splitLine: {
                show: false, //不显示分割线         
            },
        }],
        yAxis: {
            type: 'category',
            data: ['213573', '213572', '213571', '213570', '213569'],
            splitLine: {
                show: false, //不显示分割线         
            },
        },
        series: [{
            name: '2011年',
            type: 'bar',
            data: [18203, 23489, 29034, 104970, 131744],
            itemStyle: {
                //通常情况下：
                normal: { //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
                    label: {
                        show: true,
                        textStyle: {
                            fontWeight: 'bolder',
                            fontSize: '12',
                            fontFamily: '微软雅黑',
                            color: '#828282'
                        },
                        position: 'right'
                    },
                    color: function (params) {
                        var colorList = ['#9fd0fa', '#60a6f5', '#9fd0fa', '#60a6f5', '#3a81f8'];
                        return colorList[params.dataIndex];
                    }
                },
                //鼠标悬停时：
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
        }]
    };
    myChart.setOption(option);
    myChart2.setOption(option);

    var home = {
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

    // $(".content-aside li").mouseover(function () {
    //     $(this).css({
    //         "background":"#3a81f8",       
    //         "border-left": "2px solid white"
    //     })
    //     $(this)
    // })
})