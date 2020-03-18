import React, { useState, useEffect } from "react"
import firebase from "gatsby-plugin-firebase"
import BlogClapIcon from "../../icons/clap"
import styles from "./BlogClap.module.scss"

const BlogClap = props => {
    const [numberOfClaps, numberOfClapsUpdater] = useState(0)
    const [clapClicked, clapClickedUpdater] = useState(false)

    useEffect(() => {
        // creates a listener for Click events. when the value changes in firebase it updates the component state for numberclaps
        firebase
            .database()
            .ref(`blogclaps/${props.id}/likes`) // creates the object using contentfuls blog id.
            .on('value', (snapshot) => {
                numberOfClapsUpdater(snapshot.val())
            })
        return () => {
            // when the component gets removed the firebase listener is turned off
            firebase
                .database()
                .ref(`blogclaps/${props.id}/likes`)
                .off()
        };
    })

    // handles the like click for the component
    const handleLikeRequest = (numberOfLikes) => {
        firebase
            .database()
            .ref(`blogclaps/${props.id}/likes`)
            .set(numberOfLikes + 1) // sets the comment data to firebase

        // grabs an html collection and converts it to array and then loops through applying the style point event to none.
        Array.from(document.getElementsByClassName('blogclapcontainer')).forEach((element) => {
            element.style.pointerEvents = 'none'
        }); // disables all the clap buttons from being clicked multiple times 
        clapClickedUpdater(true) // updates the state to clicked so the like icon knows to change color 
    }

    return (
        <div onClick={() => {
            handleLikeRequest(numberOfClaps)
        }} className={`${styles.blogclaps} blogclapcontainer`}>
            <div style={clapClicked ? { borderColor: "#ea8a6e" } : null} className={styles.clapicon}>
                <BlogClapIcon
                    style={clapClicked ? { fill: "#ea8a6e" } : null} />
            </div> {/*  change color of like icon once clicked */}
            <div className={styles.claps}><span>{numberOfClaps} claps</span></div>
        </div >
    )
}

export default BlogClap
