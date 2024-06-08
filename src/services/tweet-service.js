const { TweetRepository }=require('../repository/index')

class TweetService{
    constructor(){
        this.tweetRepository= new TweetRepository();
    }

    async create(data){
        const content= data.content;
        const tags= content.match(/#[a-zA-Z0-9_]+/g); //this regex extracts hashatag
        tags = tags.map((tag =>tag.substring(1)));
        console.log(tags);
        const tweet= await this. tweetRepository.create(data)
        //todocreate hashtags and add here
        /**
         * 1. bulcraete in mongoose
         * 2. filter title of hashtag based on multiple tags
         * 3. How to add tweet id inside all the hashtags
         */
        return tweet;
        
    }
}

module.exports=TweetService;

/**
 * this is my #first #tweet. i am really #excited
 */