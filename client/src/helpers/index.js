import jwt_decode from "jwt-decode";

export const isTokenExpire = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const token = user ? jwt_decode(user.token) : "";
  const expirationTime = token.exp * 1000 - 60000 <= Date.now();
  if (expirationTime) {
    localStorage.removeItem("user");
    window.location.reload();
  }
};

export const titleHelper = (title, chars) => {
  return title.substring(0, chars) + "...";
};


export const handleCategoryPosts = (posts, cateforyName) => {
  const categoryPosts = [];
  posts && posts.forEach(post => {
    post.categories.forEach(cate => {
      if(cate.toLowerCase() === cateforyName) {
        categoryPosts.push(post)
      }
    })
  });
  return categoryPosts;
}