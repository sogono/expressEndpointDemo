$(document).ready(function(){
  console.log('Ready!');
});

function b1(){
  $.ajax({
    method:'GET',
    url:'/pokemon',
    success: (data) =>{
      console.log(data);
    }
  });
}

function b2(){
  $.ajax({
    method:'POST',
    url:'/pokemon',
    data:{
      test1: 'test',
      test2: true,
      text: $('#t1').val()
    },
    success: (data) =>{
      $('#t1').val('');
    }
  });
}