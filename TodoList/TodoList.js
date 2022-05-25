


 // Get the modal add
 var modal = document.getElementById("add-item");
 window.onclick = function (event) {
   if (event.target == modal) {
     modal.style.display = "none";
   }
 };
 
 function detailFunction() {
  var checkBox = document.getElementById("id-checkbox");
  var update = document.getElementById("update-item");
  if (checkBox.checked == true){
    update.style.display = "block";
  } else {
    update.style.display = "none";
  }
}
 
 // Get the modal update
//  var modal = document.getElementById("update-item");
//  window.onclick = function (event) {
//    if (event.target == modal) {
//      modal.style.display = "none";
//    }
//  };


document.querySelector('#push').onclick = function(){
  if(document.querySelector('#add-item input').value.length == 0){
      alert("Please Enter a Task")
  }
  else{
      document.querySelector('#id-list').innerHTML += `
            <br />
          <li class="li-item" id="id-li">
            <div class="a"><input class="ip-item" type="checkbox" onclick="detailFunction()" name="" id="id-checkbox" />
            <p class="p-title"> ${document.querySelector('#add-item input').value}</p>
            </div>
            <div class="b">
              <button class="btn-detail" onclick="document.getElementById('update-item').style.display='block'">Detail</button>
              <button class="btn-remove" id="id-remove">Remove</button>
            </div>
            <br />
      `;

      var current_tasks = document.querySelectorAll(".id-li");
      for(var i=0; i<current_tasks.length; i++){
          current_tasks[i].onclick = function(){
              this.parentNode.remove();
          }
      }
  }
}