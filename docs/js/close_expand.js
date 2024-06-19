document.addEventListener("DOMContentLoaded", function() {
    // 获取当前页面的 URL
    var currentPageUrl = window.location.href;
    // 检查当前页面是否为特定页面，比如 not_expand.md
    if (currentPageUrl.includes("/Products/index.md")) {
        // 如果当前页面是特定页面，则移除所有子部分的默认展开类
        const items = document.querySelectorAll(".md-nav__item--nested"); items.forEach(function(item) { 
            item.classList.remove("md-nav__item--active");
        });
    }
});
