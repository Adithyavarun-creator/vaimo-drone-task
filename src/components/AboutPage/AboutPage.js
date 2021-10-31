import React from 'react'
import './AboutPage.styles.css'

const AboutPage=()=>{
    return(
        <div className="container-box">
            <h1 className="header-title">About Me and the Task</h1>
            <article className="about-me">
            ➼   Hey, this is Adithya, I am from India, I came Riga to do my Master degree in Computer Science, and I completed the coursework on October of 2021,
                I did courses related to React on Udemy form the instructors of John Smilga,Andrei Neagoi which made me to understand everything from the basics,
                I ususally started to practise there courses more than twice to recall the concepts and techniques involved and I am sure that it helped me alot to perform the task given by you.
                thanks for giving an opportunity to work with the given task,I completely fetched the details from the API that you gave and I did not hardcode any details,I extracted dynamically 
                from the API as I am using React.
            
            <br />
            <br />
            <br />

                
            ➼  The dificulties according to me where all the items and properties where given in object structure so I was not able to easily map, so I converted
                into array and I just mapped with index of the object elements and for the total calculation part, I just got scrambled up in useReducer part
                and somehow I managed to make the changes in SingleProductPage js file and yet it was much competitive for me to work. There might be some css issues as upto last minute I was
                working on the functional part and PrivateRoute,If there was a quantity  array like quantity:1,
                would have been better to easily map the quantity for each options of 4k,1080p and battery, so that made me to take a long time to work and I 
                made the functionality to work in direct component.The reviews get map once when you keep on refreshing the task page. I added some extra product info in order to make some changes and make much more attractive to look
                I learned how to use timer from youtube videos and implemented it.Login and logout functions are activated import the
                task page. The task page is been provided with a PrivateRoute, so do not forget to check it
                
            <br /> 
            <br />
            <br />
 

            ➼   According to my knowledge I purely prefer to work on function part first and then the design part, to be honest I completed the 
                components and functional part by wednesday and I was making some alterations and some console logs.
                I get many much issues while working on styles but even those styles would give a different and attractive look and I hope I was able to satisfy
                the technical part.
                So the project can run with "npm run" successfully 
                There are totally 5 pages 
              
                 Product Page, About Page ,SignIn Page,Error Page and Task Page
               
                The task page can be accessed only when you login with Auth0, unless it will not be viewed
                Email and password are given in sign-in page
            </article>
            <footer className="footer">Once again thanks for giving me an opportunity...</footer>
        </div>
    )
}

export default AboutPage