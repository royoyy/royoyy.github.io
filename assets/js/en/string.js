let alertPlaceholder=document.getElementById("liveAlertPlaceholder");function alert(b,c,d){let a=document.createElement("div");a.innerHTML='<div class="alert alert-'+c+' d-flex align-items-center alert-dismissible mx-auto w_custom" role="alert"><svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img"><use xlink:href="#'+d+'"/></svg>'+b+'<button type="button" class="btn-close" data-bs-dismiss="alert"></button></div>',alertPlaceholder.appendChild(a),setTimeout(function(){a.innerHTML=""},3e3)}!function(){let a=document.getElementById("length"),b=document.getElementById("lengthRange"),d=document.getElementById("containCheck"),c=document.getElementById("generate"),e=document.getElementById("rs");a.addEventListener("change",function(){if(this.classList.contains("is-valid")?this.classList.remove("is-valid"):this.classList.contains("is-invalid")&&this.classList.remove("is-invalid"),""===this.value)return;let c=document.getElementById("length_tip"),a=1*this.value;a<1||a>32?(c.innerHTML="Length in 1~32 are allowed",this.classList.add("is-invalid")):(this.classList.add("is-valid"),a!==b.value&&(b.value=a))}),b.addEventListener("change",function(){1*this.value!==a&&(a.value=this.value,a.classList.contains("is-invalid")&&a.classList.remove("is-invalid"))}),c.addEventListener("click",function(){let i=document.querySelectorAll(".alert");if([].slice.call(i).map(function(a){return new bootstrap.Alert(a)}).map(function(a){a.close()}),a.classList.contains("is-invalid"))setTimeout('alert("Please check your selection or input.", "warning", "exclamation-triangle-fill")',300);else if(""===a.value)setTimeout('alert("Please enter the string length first.", "warning", "exclamation-triangle-fill")',300);else{let f=a.value,b="";if(d.checked)for(let g=0;g<f;g++){let c=Math.floor(36*Math.random());b+=c<10?String.fromCharCode(c+48):String.fromCharCode(c+87)}else for(let h=0;h<f;h++){let j=Math.floor(10*Math.random());b+=String.fromCharCode(j+48)}e.value=b,setTimeout('alert("Generated successfully.", "success", "check-circle-fill")',300)}})}()