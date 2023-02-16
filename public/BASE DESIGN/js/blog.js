fetch('https://jsonplaceholder.typicode.com/posts/1')
.then((res) => res.json())
.then((data) => {
  let output = data.body;
  // alert(data.body)
  document.getElementById('trial').innerHTML = output;
  let posts = data;
  posts.forEach(function(post){
    output += `<h1> ${post.title} </h1>`
  });
  document.getElementById('trial').innerHTML = output;
})