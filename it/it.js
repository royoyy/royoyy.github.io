let popoverTriggerList=[].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]')),popoverList=popoverTriggerList.map(function(e){return new bootstrap.Popover(e)}),toURL="",baiduURL1="https://map.baidu.com/search//@13379176.68,3515265.875,19z?querytype=s&wd=%E6%9D%AD%E5%B7%9E%E8%81%94%E5%90%88%E5%86%9C%E6%9D%91%E5%95%86%E4%B8%9A%E9%93%B6%E8%A1%8C-%E5%90%8E%E5%8B%A4%E6%9C%8D%E5%8A%A1%E5%A4%A7%E6%A5%BC",baiduURL2="https://map.baidu.com/search//@13366928,3520123,13z?querytype=s&wd=%E6%9D%AD%E5%B7%9E%E8%81%94%E5%90%88%E9%93%B6%E8%A1%8C%E6%80%BB%E9%83%A8%E5%A4%A7%E6%A5%BC",urcbURL="https://www.urcb.com/urcb/gyyl1/rczp/zpgg/index.shtml",elements=document.getElementsByClassName("jumpable");Array.from(elements).forEach(function(e){e.addEventListener("click",()=>{let t=document.getElementById("confirmBtn"),n=document.getElementById("confirmContent");t.classList.add("disabled"),e.classList.contains("liuxia")?(toURL=baiduURL1,n.innerText="百度地图"):e.classList.contains("zonghang")?(toURL=baiduURL2,n.innerText="百度地图"):e.classList.contains("invite")&&(toURL=urcbURL,n.innerText="杭州联合银行官网"),t.classList.remove("disabled")})}),document.getElementById("confirmBtn").addEventListener("click",()=>{""===toURL?alert("ERROR"):window.open(toURL,"_blank")});