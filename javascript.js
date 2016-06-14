   function myFunction(e) {
     console.log(e);
      var rect = e.getBoundingClientRect();
      var x = event.clientX;
      var y = event.clientY;
      if( x - rect.left < 10)
      {
        e.style.display='none';
      }
      if(rect.right - x  < 10)
      {
        var rate = e.getAttribute("rate");
        var name = e.getAttribute("name");
        var model = e.getAttribute("model");
        window.location="description.html?name="+name+"&model="+model+"&rate="+rate;
      }
   }

   function getData(){
     var url = window.location.href;
     var reqArr = [];
     var reqKey = [];
     var str;
     var res = url.substring(url.indexOf('?')+1);
     res.split('&').map(function (item,index) {
       reqArr[index] = item.substring(item.indexOf('=')+1).replace('%20',' ');
       reqKey[index] = item.substring(0,item.indexOf('='));
     });
     for(var i = 0; i<reqArr.length;i++){
       var tableRef = document.getElementById('myTable').getElementsByTagName('tbody')[0];
       var newRow   = tableRef.insertRow(tableRef.rows.length);
       var newText  = document.createTextNode(reqKey[i]);
       var newCell  = newRow.insertCell(0);
       newCell.appendChild(newText);
       var newText  = document.createTextNode(reqArr[i]);
       var newCell  = newRow.insertCell(1);
       newCell.appendChild(newText);
    }
   }
