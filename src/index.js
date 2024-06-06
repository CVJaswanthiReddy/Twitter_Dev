const express= require('express');
const connect= require('./config/database');
const app=express();
// const Tweet= require('./models/tweet');

const TweetRepository= require('./repository/tweet-repository');
const Comment= require('./models/comment');
app.listen(3000,async () =>{
    console.log(`server started `);
    await connect();
    console.log('Mongo db connected');
    //for creating tweets
    // const tweet= await Tweet.create({
    //     content:'third Tweet',
       
    // });

    //fetch the tweets
    //const tweets= await Tweet.find();

    //fetch by particular id
    // const tweet= await Tweet.findById('665fe590cb2acd8c3eef22b1');
    // tweet.userEmail='b@c.com';
    // await tweet.save();
    // console.log(tweet);


    //to update the tweet
    // const tweetRepo= new TweetRepository();
    // const tweet= await tweetRepo.update('665fe59f37e9ce06f3c47eb1',
    //     {content:'my tweet is working'});

    // const tweetRepo= new TweetRepository();
    // const tweet= await tweetRepo.create({
    //     content:'tweet with a comment'
    // });
    // tweet.comments.push({
    //     content:'first comment'
    // })
    // await tweet.save();
    // console.log(tweet);

    //created commentschema model

    // const tweetRepo= new TweetRepository();
    // const tweet= await tweetRepo.create({
    //     content:'Tweeet with comment schema'
    // });
    // console.log(tweet);
    // const comment= await Comment.create({content:'new comment'});
    // tweet.comments.push(comment);
    // await tweet.save();
    // console.log(tweet);

    // const tweetRepo= new TweetRepository();
    // const tweet= await tweetRepo.getWithComments('665ff1418f524c4fa7da6376');
    // console.log(tweet);

    const tweetRepo= new TweetRepository();
    const tweet= await tweetRepo.getAll(2,4);
    console.log(tweet[0].contentWithEmail);
})