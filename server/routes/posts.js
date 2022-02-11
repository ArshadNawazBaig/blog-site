const router = require("express").Router();
const Post = require("../models/Post");

router.post("/", async (req, res) => {
  try {
    const { title, desc, photo, username, categories } = req.body;
    const newPost = await new Post({
      title,
      desc,
      photo,
      username,
      categories,
    });
    const post = await newPost.save();
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
      const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        const updatedPost = await Post.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedPost);
      } catch (error) {
        res.status(500).json(error);
      }
    } else {
      res.status(401).json("Not allowed!");
    }
  } catch (error) {}
});

router.delete("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if(post.username === req.body.username) {
            try {
                await post.delete();
                res.status(200).json("Post is successfully deleted!");
            } catch (error) {
                res.status(401).json("You can only delete your own posts!")
            }
        }
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json(error);
    }
})

router.get("/", async (req, res) => {
    const username = req.query.username;
    const category = req.query.category;
  
    try {
      let posts;
      if (username) {
        posts = await Post.find({ username });
      } else if (category) {
        posts = await Post.find({
          categories: {
            $in: [category],
          },
        });
      } else {
        posts = await Post.find();
      }
      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json(error);
    }
  });

module.exports = router;
