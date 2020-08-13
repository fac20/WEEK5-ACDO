const submitBtn = document.querySelector("input[type=submit]");


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
        return createPosts(object);
      });
    })
    .catch((error) => console.log(error));
}

function createPosts(object) {
  let username = object.username;
  // let location = object.location;
  let postTitle = object.post_title;
  let textContent = object.text_content;
  let time = object.posted_at;
  let imgSrc = object.image_link;

  const messageBoard = document.querySelector(".messages");
  const template = document.querySelector("template");
  const content = template.content.querySelector("article");
  const newPost = content.cloneNode(true);

  const h3 = newPost.querySelector(".dogpost__msgtitle");
  const message = newPost.querySelector(".dogpost__message");
  const postedBy = newPost.querySelector(".dogpost__details__name");
  const timePosted = newPost.querySelector(".dogpost__details__time");
  const portrait = newPost.querySelector(".dogpost__image");

  h3.textContent = postTitle;
  message.textContent = textContent;
  postedBy.textContent = username;
  timePosted.textContent = time;
  portrait.src = imgSrc;

  messageBoard.appendChild(newPost);

}

submitBtn.addEventListener("click", getPosts);

// // get posts on page load
getPosts();
