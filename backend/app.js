const express = require('express');

const app = express();

app.use('/api/posts', (req, res, next) => {
  const posts = [
    { 
      id: 'fasodinr3o',
      title: 'first server-side post',
      content: 'this is coming from the server'
    },
    { 
      id: 'aciabjeoj',
      title: 'second server-side post', 
      content: 'this is coming from the server'
    }
  ];
  res.status(200).json({
    message: 'Posts fetched successfully!',
    posts: posts
  });
});

module.exports = app;
