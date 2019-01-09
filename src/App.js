import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h1>My first blog post</h1>
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
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia nesciunt doloremque minima illum, quisquam vel nisi itaque unde officiis exercitationem sed quos amet recusandae delectus dolore quia aut laborum vitae.
         </p>
         <img src="/images/profilePic.jpeg" alt="profile-pic"/>
         <p class ="author-text">William Budoyo</p>     
      </div>
    );
  }
}

export default App;
