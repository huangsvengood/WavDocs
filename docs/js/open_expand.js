document.addEventListener("DOMContentLoaded", function() {
    // 获取当前页面的 URL
    var currentPageUrl = window.location.pathname; console.log("Current Page URL:", currentPageUrl);
    // 检查当前页面是否为特定页面，比如 feature_guide/index.md
    if (currentPageUrl.includes("/Products/")) { console.log("Matched specific page");
        // 选择你要默认展开的导航项
        const navItemsToExpand = [ ".md-nav__item--nested[data-path*='subsection1']", // 
            修改此选择器以匹配具体的导航项 ".md-nav__item--nested[data-path*='subsection2']" // 
            修改此选择器以匹配具体的导航项
        ]; navItemsToExpand.forEach(function(selector) { const item = document.querySelector(selector); if 
            (item) {
                item.classList.add("md-nav__item--active");
            }
        });
    } else {
        console.log("Did not match specific page");
    }
});
