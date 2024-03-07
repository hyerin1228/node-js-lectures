const path = require('path');

function getPost(req, res){
    // res.send('<div><h1>Post Title</h1><p>This is a post</p></div>');
    res.sendFile(path.join(__dirname, '..', 'public', 'images', '11891082_1037114966322124_6993873831007562371_n.jpg'));
}

module.exports = {
    getPost
}