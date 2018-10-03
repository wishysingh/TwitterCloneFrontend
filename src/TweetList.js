import React from 'react';
import Tweet from './Tweet';

const TweetList = ({ mess }) => {
    const TweetComponent = mess.map((k,i) => {console.log(k.text);
        return <Tweet key={i} message={k.text} name={k.user.name} image={k.user.profile_image_url}/>
    });
    return (
        <div>
        <div>
            {TweetComponent}
        </div>
        <div>
        <button type="button" class="btn btn-info but">load more</button>
        </div>
        </div>
    );
}

export default TweetList;

