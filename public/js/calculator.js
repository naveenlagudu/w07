$(document).ready(function() {
 
  $("#pace").attr("disabled", "disabled"); 
  $('#calculate').on('click', function (e) {
      
      e.preventDefault();
      var distance =  $("input[name='distance']").val();
      var time      = $("input[name='time']").val();
      if(distance.trim() == ''){
          alert("Please enter distance");
      }
      else if(time.trim() == ''){
          alert("Please enter time");
      }
      else if(isNaN(distance) || distance<0){
       alert('Please enter valid distance');
      $("input[name='distance']").val('');
          
       }
       else if(isNaN(time) || time<0){
       alert('Please enter valid time');
      $("input[name='time']").val('');
      
       }
       else{
       var result  = Calculation(distance, time);       
     
       $("#pace").val(result);}
  });
});


function Calculation(distance, time){
   distance = parseInt(distance);
   time = parseInt(time);
  if(typeof distance != "number" || typeof time != "number"){
      throw Error("Input should be number");
  }
  if(isNaN(distance) || isNaN(time)){
      throw Error("Input should be number");
  }
  return (parseInt(distance) /(parseInt(time))).toFixed(2);
}