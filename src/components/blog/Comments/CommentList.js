import React, { useState, useEffect } from "react"
import firebase from "gatsby-plugin-firebase"
import moment from "moment"
import LikeIcon from "../../icons/like"
import CommentLike from "./CommentLike"
import styles from "./CommentList.module.scss"

const CommentList = props => {

    const [commentsList, commentsListUpdater] = useState(undefined)

    useEffect(() => {
        firebase.database().ref(`blogcomments/${props.id}`).on("value", (data) => {
            if (data.val()) {
                commentsListUpdater(data.val()) // add firebase comments to local state
            }
        })

        return () => {
            firebase.database().ref(`blogcomments/${props.id}`).off() // turns on the listener on exiting page.
        };
    }, [props.id])

    // creates the jsx for the comments from objects from local state
    const renderComments = (commentsList) => {
        const comments = Object.entries(commentsList).map(([k, v]) => ({ ...v, id: k })).reverse()
        return (comments.map((commentObject) => {
            const { name, comment, commentDate, id } = commentObject
            return (
                <div className={styles.commentcontainer} key={id}>
                    <div className={styles.commentdetails}>
                        <p className={styles.commenter}>{name}</p>
                        <p className={styles.commenttime}>{moment.unix(commentDate).fromNow()}</p>
                        <CommentLike blogId={props.id} commentId={id} />
                    </div>
                    <p className={styles.comment}>{comment}</p>

                </div>
            )
        }))
    }


    return (
        <section>
            {commentsList !== undefined ?
                renderComments(commentsList)
                : <p>No Comments Yet, Be The First To Comment!!!</p>}
        </section>
    )
}

export default CommentList
