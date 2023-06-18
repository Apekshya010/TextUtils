import React from 'react'
import aboutimage from '../assets/textutils_img.png';

const About = (props) => {
  return (

        <div class="container text-center my-5">
        <div class="row">
            <div class="col">
            <img src={aboutimage} style={{height:400}}  alt="about"/>
            </div>
            <div class="col" style={{color:props.mode==='dark'?'white':'black'}}>
            <h2>About Us</h2>
            <p><b>The Text Utils app is a versatile tool designed to assist users with various text-related tasks and manipulations. It offers a range of features that enable efficient text transformation, encoding/decoding, analysis, and more. 
                One of the primary functions of the Text Utils app is text transformation. Users can easily convert the case of text, whether it's transforming it to uppercase, lowercase and removing extra spaces between the words.
                It also counts the total number of words and characters and the total time to read the text written. Users can view the application in both dark and light mode that makes it more fascinating.</b></p>
            </div>
            
        </div>
        </div>
           
        
  )
}
export default About;
