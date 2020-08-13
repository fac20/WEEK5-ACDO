function getPosts() {
  return fetch("/get-posts")
    .then((res) => {
      if (!res.ok) {
        throw new Error("Server error");
      } else {
        return res;
      }
    })
    .then((res) => res.json())
    .then((data) => {
      const posts = data.map((object) => {
        let title = object.title;
        let message = object.message;
        return createPosts(title, message);
      });
    })
    .catch((error) => console.log(error));
}

// function createPosts(title, message) {
//   const template = document.querySelector("template");
//   const content = template.content.querySelector("article");
//   const newPost = content.cloneNode(true);

//   const h2 = newPost.querySelector("h2");
//   const p = newPost.querySelector("p");

//   h2.textContent = title;
//   p.textContent = message;

//   main.appendChild(newPost);
// }

// submitButton.addEventListener("click", getPosts);

// // get posts on page load
// getPosts();
