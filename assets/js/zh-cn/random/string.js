let alertPlaceholder=document.getElementById("liveAlertPlaceholder");function clear_alert(){let e=document.querySelectorAll(".alert");[].slice.call(e).map(function(e){return new bootstrap.Alert(e)}).map(function(e){e.close()})}function alert(e,l,t){clear_alert();let i=document.createElement("div");i.innerHTML='<div class="alert alert-'+l+' d-flex align-items-center alert-dismissible mx-auto w_custom" role="alert"><svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img"><use xlink:href="#'+t+'"/></svg>'+e+'<button type="button" class="btn-close" data-bs-dismiss="alert"></button></div>',alertPlaceholder.appendChild(i),setTimeout(function(){i.innerHTML=""},2e3)}!function(){let e=document.getElementById("length"),l=document.getElementById("lengthRange"),t=document.getElementById("containCheck"),i=document.getElementById("generate"),a=document.getElementById("rs");e.addEventListener("change",function(){if(this.classList.contains("is-valid")?this.classList.remove("is-valid"):this.classList.contains("is-invalid")&&this.classList.remove("is-invalid"),""===this.value)return;let e=document.getElementById("length_tip"),t=1*this.value;t<1||t>32?(e.innerHTML="请输入1~32之间的数字",this.classList.add("is-invalid")):(this.classList.add("is-valid"),t!==l.value&&(l.value=t))}),l.addEventListener("change",function(){1*this.value!==e&&(e.value=this.value,e.classList.contains("is-invalid")&&e.classList.remove("is-invalid"))}),i.addEventListener("click",function(){if(clear_alert(),e.classList.contains("is-invalid"))setTimeout('alert("请检查您的输入和选项", "warning", "exclamation-triangle-fill")',200);else if(""===e.value)setTimeout('alert("请检查您的输入和选项", "warning", "exclamation-triangle-fill")',200);else{let l=e.value,i="",n;if(t.checked)for(let s=0;s<l;s++){let r=Math.floor(36*Math.random());i+=n=r<10?String.fromCharCode(r+48):String.fromCharCode(r+87)}else for(let c=0;c<l;c++)i+=n=String.fromCharCode(Math.floor(10*Math.random())+48);a.value=i,setTimeout('alert("生成成功！", "success", "check-circle-fill")',200)}})}();