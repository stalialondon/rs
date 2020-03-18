import React, { useState } from "react"
import moment from "moment"
import styles from "./CommentForm.module.scss"
import firebase from "gatsby-plugin-firebase"

const CommentForm = props => {

    const [submitted, submittedUpdater] = useState(false)

    const addComment = (name, comment, unixTimestamp) => {
        firebase
            .database()
            .ref(`/blogcomments/${props.id}`) // creates the object using contentfuls blog id.
            .push({ name: name, comment: comment, commentDate: unixTimestamp, likes: 0 }) // pushes the comment data to firebase
    }

    const formJSX = <form onSubmit={(e) => {
        e.preventDefault() // prevents page refresh
        const name = e.target.name.value
        const comment = e.target.comment.value
        const date = moment().unix()
        addComment(name, comment, date)
        submittedUpdater(true)

    }} className={styles.commentform}>
        <input className={styles.name} name="name" placeholder="Name" />
        <textarea className={styles.comment} name="comment" placeholder="Comment" />
        <button className={styles.button} type="submit">Submit</button>
    </form>

    return (
        <>
            {!submitted ?
                formJSX
                :
                <p>Thank you For your comment</p>
            }
        </>
    )
}

export default CommentForm
