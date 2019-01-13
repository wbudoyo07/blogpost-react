import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="blog-post">
          <h1>My first blog post</h1>
          <p className="date"> March 11th, 2015</p>
          <h2>This is my first blog post</h2>
          <p className="main-text">
            This is a very <strong> strong</strong>text, because it is <strong> bold</strong> <br></br>
            I would like to <em>emphasize </em> how important it is to follow this course until the end!<br></br>
            This is some <u>underlined </u>text.<br></br>
             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia nesciunt doloremque minima illum, quisquam vel nisi itaque unde officiis exercitationem sed quos amet recusandae delectus dolore quia aut laborum vitae.
          </p>

          <img src="/images/logo.jpg" alt="The HTML5 logo"/>
          <a href="http://www.udemy.com">Link to Udemy</a>
          <a href="/images/logo.jpg" target="_blank">HTML logo</a>
          <h2> HTML is amazing </h2>
          <p className="main-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia nesciunt doloremque minima illum, quisquam vel nisi itaque unde officiis exercitationem sed quos amet recusandae delectus dolore quia aut laborum vitae.
         </p>
         </div>
         <div className="other-posts">
         dummy text
         </div>
         <div className="clearfix"></div>
         <div className="author-box">
         <img src="/images/profilePic.jpeg" alt="profile-pic"/>
         <p class ="author-text">William Budoyo</p>   
         </div>

         </div>  
      </div>
    );
  }
}

export default App;
