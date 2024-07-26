const app = document.getElementById('app')
const totalEl = document.getElementById('total')

chrome.bookmarks.getRecent(10000, (results) => {
    totalEl.innerHTML = '总数：' + results.length
})

chrome.bookmarks.getRecent(10000).then((results) => {
    totalEl.innerHTML = '总数：' + results.length
})

// 获取整个书签栏的树结构数据
// chrome.bookmarks.getTree()
// 获取某个父节点下的所有子节点书签
// chrome.bookmarks.getChildren(str)
// 根据条件搜索书签
// chrome.bookmarks.search(str)