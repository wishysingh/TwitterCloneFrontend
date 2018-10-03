import React from 'react';

 const SearchBox = ({search,sQ}) => {
     console.log(search);
  return (
    <div class="panel-heading">
    <div class="media">
    <a class="media-left" href="#fake">
    <img alt="" class="media-object img-rounded" src="http://placehold.it/35x35"/>
</a>
        
        <div class="media-body">
            <div class="form-group has-feedback">
                <label class="control-label sr-only" for="inputSuccess5">Hidden label</label>
                <input type="text" class="form-control" id="search2" aria-describedby="search" onChange={sQ}/>
                <span id='pointer' class="glyphicon glyphicon-camera form-control-feedback" aria-hidden="true" onClick={search}></span>
                <span id="search2" class="sr-only">(success)</span>
            </div>
        </div>
    </div>
</div>
  );
}
  export default SearchBox;