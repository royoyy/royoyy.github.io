let daysComputed=function(e){let t=new Date(e.replace(/-/g,"/")),o=new Date,n=o.getHours();if(n>6&&n<19&&(document.getElementById("toNow").src="../assets/img/sun.png"),o.getTime()-t.getTime()>0){let e=o.getTime()-t.getTime();return parseInt(e/864e5)}throw"The incoming time cannot be later than the current date."};document.getElementById("toToday").innerHTML=daysComputed("2022-1-1")+" days ago",new bootstrap.Toast(document.getElementById("liveToast")).show();let popoverTriggerList=[].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]')),popoverList=popoverTriggerList.map(function(e){return new bootstrap.Popover(e)});