$(function(){
        var dataList = [{
            id: 1,
            name: '学习',
            isDo: true
        },
        {
            id: 1,
            name: '吃饭',
            isDo: true
        },
        {
            id: 1,
            name: '睡觉',
            isDo: false
        }
    ]
    
    function data(){
        var re = dataList.map(function (item, index) {
            if (item.isDo) {
                return '<li>\
            <label>\
              <input type="checkbox" checked/>\
              <span class="do">' + item.name + '</span>\
            </label>\
            <button class="btn btn-danger">删除</button>\
            </li>\
            '
            } else {
                return '<li>\
                    <label>\
                      <input type="checkbox"/>\
                      <span>' + item.name + '</span>\
                    </label>\
                    <button class="btn btn-danger">删除</button>\
                    </li>\
                    '
            }
        });
        $('.todo-main').html(re.join(''))
        sj();
    }
    data()
    //删除完成的
    $('.todo-main').on('click', '.btn-danger', function () {
        $(this).parent().remove();
        // console.log(1);
        sj();
    })
    //删除全部已完成
    $('.todo-footer .btn-danger').on('click', function () {
        $('.todo-main input:checked').parent().parent().remove();
        sj();
    })
    //添加任务列表
    $('.todo-header input').on('keyup', function (e) {
        if (e.keyCode === 13) {
            var value = $(this).val().trim();
            if (value) {
                var str = '<li>\
            <label>\
              <input type="checkbox"/>\
              <span>' + value + '</span>\
            </label>\
            <button class="btn btn-danger">删除</button>\
            </li>\
            ';
            } else {
                return;
            }
            $(this).val('');
            $('.todo-main').append(str);
    
            sj();
    
        }
    })
    //动态更改数据
    function sj() {
        $('.wc').text("已完成" + $('.todo-main input:checked').length);
        $('.content').text("/全部" + $('.todo-main input').length);
        if ($('.todo-main input:checked').length === $('.todo-main input').length) {
            $('.todo-footer input').prop('checked', true);
        } else {
            $('.todo-footer input').prop('checked', false);
        }
        if ($('.todo-main input').length === 0) {
            $('.todo-footer').hide();
            $('.todo-main').append('<h1>你还没有任务</h1>');
        } else {
            $('h1').remove();
            $('.todo-footer').show();
        }
    }
    //是否需要全选
    $('.todo-main').on('click', 'input', function () {
        var isChecked = $(this).prop('checked');
        if (isChecked) {
            $(this).next().addClass('do');
        } else {
            $(this).next().removeClass('do');
        }
        sj();
    })
    //全选
    $('.todo-footer input').on('click', function () {
        var flag=$(this).prop('checked');
        if(flag){
            $('.todo-main input').prop('checked',flag).next().addClass('do')
        }else{
            $('.todo-main input').prop('checked',flag).next().removeClass('do')
        }
        sj();
    })
})