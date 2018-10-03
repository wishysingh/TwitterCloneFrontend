import React from 'react';

 const Tweet = ({message,image,name}) => {
  return (
        <div class="panel-body">
			<div class="media">	
			<a class="media-left" href="#fake">
							<img alt="" class="media-object img-rounded" src={image}/>
						</a>	
				<div class="media-body">
					<h4 class="media-heading">{name}</h4>
					<p>{message}</p>
					<ul class="nav nav-pills nav-pills-custom">
								<li><a href="#"><span class="glyphicon glyphicon-share-alt"></span></a></li>
								<li><a href="#"><span class="glyphicon glyphicon-retweet"></span></a></li>
								<li><a href="#"><span class="glyphicon glyphicon-star"></span></a></li>
								<li><a href="#"><span class="glyphicon glyphicon-option-horizontal"></span></a></li>
							</ul>
				</div>
			</div>
		</div>
                 );
                }
                  export default Tweet;