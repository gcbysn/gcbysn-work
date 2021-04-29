$.fn.accordion = function (obj) {

    var lis = this.find('li');

    var widthLi = this.width() / lis.length;
    obj.minwidth = obj.minwidth || 100;
    lis.css({
        width: widthLi
    })

    lis.each(function (index, element) {
        $(element).css({
            backgroundColor: obj.colors[index]
        })
    })

    var maxWidth = this.width() - obj.minwidth * (lis.length - 1)

    lis.on('mouseenter', function () {

        $(this).stop(true).animate({
            width: maxWidth
        }).siblings().stop(true).animate({
            width: obj.minwidth
        })

    })
    lis.on('mouseleave', function () {
        lis.stop(true).animate({
            width: widthLi
        })
    })


}