function changeAllCheckbox() {
  // 4.1 获取所有的任务项的个数
  var allItems = $('.todo-main>li>label>input').length
  // 4.2 获取所有选中的任务项的个数
  var allCheckedItems = $('.todo-main>li>label>input:checked').length
  console.log(allItems, allCheckedItems)
  // 4.3 通过判断这两个数是否相同,来决定全选是否选中
  allItems === allCheckedItems
    ? $('.todo-footer input').prop('checked', true)
    : $('.todo-footer input').prop('checked', false)
}
