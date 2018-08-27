//初始化，生成页码
//在立即执行函数内注册createPage方法，暴露接口，同时形成闭包
//在主页面最后的script标签内执行createPage方法
//传入当前页以及总页数
//执行init
//在init内进行第一次的页码生成，并且绑定为按钮绑定事件
//fillHtml。判断是否需要生成上一页按钮，
//判断当前是否需要额外生成第一页按钮，以及其后的省略号
//进入for循环，判断是应该生成连接在一起的页码
//判断是否需要生成第二个省略号
//判断是否需要生成下一页按钮

//bindevent事件绑定
//点击页码时的事件绑定
//点击上一页时的事件绑定
//点击下一页时的事件
//核心 传入fillHtml的对象中的current值
//点击页码时current应该等于要跳转到的页码
//点击上一页时current应该等于当前页current-1

(function($) {
  function init(dom, args) {
    if (
      args.pageCount >= args.current &&
      args.pageCount > 0 &&
      args.current > 0
    ) {
      fillHtml(dom, args);
      // bindEvent(dom,args);
    } else {
      console.log("请输入正确页数");
    }
  }

  function fillHtml(dom, args) {
    dom.html("");
    if (args.pageCount > 1) {
      var prevPage = $('<a href="#" class="prevPage">上一页</a>');
      dom.append(prevPage);
    }

    if (args.current > 3) {
      var firstPage = $(`<a href="#" class="tcdNumber">${1}</a>`);
      dom.append(firstPage);
    }

    if (args.current > 4 && args.pageCount > 5) {
      var omit = $("<span>....</span>");
      dom.append(omit);
    }

    var start = args.current - 2;
    var end = args.current + 2;
    for (; start <= end; start++) {
      if (start != args.current && start > 0 && start <= args.pageCount) {
        dom.append($(`<a href="#" class="tcdNumber">${start}</a>`));
      } else if (start == args.current) {
        dom.append($(`<span class="current">${start}</span>`));
      }
    }

    if (args.pageCount > end + 1) {
      dom.append("<span>....</span>");
    }

    if (args.pageCount > end) {
      dom.append($(`<a href="#" class="tcdNumber">${args.pageCount}</a>`));
    }

    if (args.pageCount > 1) {
      dom.append($('<a href="#" class="prevPage">下一页</a>'));
    }
  }
  $.fn.createPage = function(options) {
    var args = $.fn.extend(
      {
        current: 5,
        pageCount: 14,
        backFn() {}
      },
      options
    );
    init(this, args);
  };
})(jQuery);
