$(function(){
  $('header').load("/section/header.html");
  $('#stats').load("/section/stats.html");
  // Load the blog elements before executing the loadBlog function
  $('#news').load("/section/news.html", function() { loadBlog(); });
  $('#about').load("/section/about.html");
  $('#contact').load("/section/contact.html", function() { loadContact(); });
  $('footer').load("/section/footer.html");
});

function loadBlog(blogs = 1, arrow = 1) {
  var total = 3; // Number of blogs published
  var limit = 3; // Number of blogs to display
  var count = '';
  var item = '';
  var arr = [];
  var modal = '';
  var image = '';
  var caption = '';
  var thumb = '';
  var title = '';
  var post = '';
  while(arr.length < limit){
    if (arr.indexOf(blogs) === -1) {
      arr.push(blogs);
      if (blogs < total) blogs++;
    }
  }
  $.each(arr, function(index, value) {
    count = (index + 1).toString();
    image = '#blogImage' + count;
    caption = '#blogCaption' + count;
    modal = '#blogModal' + count;
    if (value > 0) {
      item = '0' + value.toString();
      thumb = "img/blog/" + item + "-thumbnail.jpg";
      title = "blog/captions/" + item + "-caption.html";
      post = "blog/posts/" + item + "-post.html";
      $(image).attr('src', thumb);
      $(caption).load(title);
      $(modal).load(post);
      $(caption).parent().show();
    }
    else {
      $(image).removeAttr('src');
      $(caption).parent().hide();
    }
  });
}

function loadContact() {
  $('.kwes-form a').first().remove();
}

function submitContact() {
  var name = $('#txtName').val();
  var phone = $('#txtPhone').val();
  var email = $('#txtEmail').val();
  if (name == '' || phone != '' || email == '')
  {
    $('#divError').show();
    return;
  }
  else
  {
    $('#divError').hide();
  }
}
