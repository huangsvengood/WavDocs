document.addEventListener("DOMContentLoaded", function() { 
    console.log("DOM fully loaded and parsed");
    
    function expandButtons() {
        // 获取当前页面的 URL
        var currentPageUrl = window.location.pathname; 
	console.log("Current Page URL:", currentPageUrl);
	
	let hasClicked = false;
        // 检查当前页面是否为特定页面，比如 Products/index.md
        function expandButtons() { 
	    if (hasClicked) return; 
	    var currentPageUrl = window.location.pathname;
            console.log("Current Page URL:", currentPageUrl);
	    if (currentPageUrl.includes("/Products/")) { 
	    	console.log("Matched specific page");
            // 使用你提供的选择器来选择导航按钮
            	const buttonSelectors = [
		    "#__nav_2_2_label > span",
		    "#__nav_2_3_label > span",
		    "#__nav_2_4_label > span"
            	]; // 添加其他按钮的选择器
            
            	const buttons = document.querySelectorAll(buttonSelectors.join(", ")); 
	    	if (buttons.length > 0) { 
                    console.log("Found", buttons.length, "navigation buttons");
                
                // 遍历每个按钮并点击
                    buttons.forEach(function(button) { 
		    	console.log("Clicking button", button); 
		    	button.click(); // 模拟点击事件
                    });
		    hasClicked = true;
            } else {
                console.log("No navigation buttons found");
            }
        } else {
            console.log("Did not match specific page");
        }
    }
    // 初次页面加载时执行按钮展开操作
    expandButtons();
    
    // 监听 DOM 变化以捕获动态内容加载
    const observer = new MutationObserver(expandButtons); 
    observer.observe(document.body, { childList: true, subtree: true });
});
