fetch('/notifications')
    .then((res) => res.json())
    .then((data) => {
        let output = '';
        if (data.length > 3 || data.length == 3) {
            let latestpost = data.length;
            let lastpost = data.length - 3;
            let fewPosts = data.slice(lastpost, latestpost);
            fewPosts.forEach(function(post) {
                output += `
            <div class="col-md-4">
                         <div class="Byiman-event">
                             <div class="date text-center"><span>${post.date}</span></div>
                             <h3><a>${post.title}</a></h3>
                             <p></span>${post.description}</p>
                         </div>
                     </div>
            `
            });
            document.getElementById('home-announcements').innerHTML = output;
        } else {
            let fewPosts = data;
            fewPosts.forEach(function(post) {
                output += `
                <div class="col-md-4">
                             <div class="Byiman-event">
                                 <div class="date text-center"><span>${post.date}</span></div>
                                 <h3><a>${post.title}</a></h3>
                                 <p></span>${post.description}</p>
                             </div>
                         </div>
                `
            });
            document.getElementById('home-announcements').innerHTML = output;
        }

    })