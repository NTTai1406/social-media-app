const PostService = require('../services/post.service');

class PostController {
    getPosts = PostService.getPosts;
    createPost = PostService.createPost;
    updatePost = PostService.updatePost;
    deletePost = PostService.deletePost;
}

module.exports = new PostController();