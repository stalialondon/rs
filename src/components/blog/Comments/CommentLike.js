import React, { useState, useEffect } from "react"
import firebase from "gatsby-plugin-firebase"
import LikeIcon from "../../icons/like"
import styles from "./CommentLike.module.scss"

const CommentLike = props => {
    const [numberOfLikes, numberOfLikesUpdater] = useState(0)
    const [commentClicked, commentClickedUpdater] = useState(false)

    useEffect(() => {
        // creates a listener for Click events. when the value changes in firebase it updates the component state for numberlikes
        firebase
            .database()
            .ref(`/blogcomments/${props.blogId}/${props.commentId}/likes`) // creates the object using contentfuls blog id.
            .on('value', (snapshot) => {
                numberOfLikesUpdater(snapshot.val())
            })
        return () => {
            // when the component gets removed the firebase listener is turned off
            firebase
                .database()
                .ref(`/blogcomments/${props.blogId}/${props.commentId}/likes`)
                .off()
        };
    })

    // handles the like click for the component
    const handleLikeRequest = (numberOfLikes) => {
        firebase
            .database()
            .ref(`/blogcomments/${props.blogId}/${props.commentId}/likes`)
            .set(numberOfLikes + 1) // sets the comment data to firebase

        // document.getElementById('likecontainer').style.pointerEvents = 'none' // disables the like button from being clicked multiple times 
        Array.from(document.getElementsByClassName(props.commentId)).forEach((element) => {
            element.style.pointerEvents = 'none'
        });

        commentClickedUpdater(true) // updates the state to clicked so the like icon knows to change color 
    }

    return (
        <div onClick={() => {
            handleLikeRequest(numberOfLikes)
        }} className={`${styles.commentlike} ${props.commentId}`}>
            <div className={styles.likes}>{numberOfLikes}</div>
            <LikeIcon style={commentClicked ? { fill: "black" } : null} />  {/*  change color of like icon once clicked */}
        </div>
    )
}

export default CommentLike
