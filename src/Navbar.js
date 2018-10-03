import React from 'react';

 const Navbar = () => {
  return (

<div class="navbar navbar-default navbar-static-top">
	<div class="container">
		<div class="navbar-collapse navbar-collapse-1 collapse" aria-expanded="true">
			<ul class="nav navbar-nav">
				<li class="active">
					<a href="#fake"><span class="glyphicon glyphicon-home"></span> Home</a>
				</li>
				<li>
					<a href="#fake"><span class="glyphicon glyphicon-bell"></span> Notifications</a>
				</li>
				<li>
					<a href="#fake"><span class="glyphicon glyphicon-envelope"></span> Messages</a>
				</li>
			</ul>
			
		</div>
	</div>
</div>


  );
  }
	export default Navbar;