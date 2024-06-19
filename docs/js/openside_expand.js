document.addEventListener("DOMContentLoaded", function() {
    // 获取当前页面的 URL
    var currentPageUrl = window.location.pathname; 
    console.log("Current Page URL:", currentPageUrl);
    // 检查当前页面是否为特定页面，比如 Products/index.md
    if (currentPageUrl.includes("/Products/")) { 
	console.log("Matched specific page");
        // 选择你要默认点击的导航按钮
        const navButtonSelector = "#__nav_2_2_label > span"; // 修改此选择器以匹配具体的导航按钮 
	const button = document.querySelector(navButtonSelector); 
	if (button) {
            console.log("Found the navigation button, clicking it"); 
	    button.click(); // 模拟点击事件
        } else {
            console.log("Navigation button not found");
        }
    } else {
        console.log("Did not match specific page");
    }
});
