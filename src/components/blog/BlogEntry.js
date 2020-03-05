import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import EntryCSS from "./BlogEntry.module.scss"
import Button from "../Buttons/PrimaryButtonLink"

const BlogEntry = props => {
  const {
    id,
    slug,
    title,
    categories,
    blogMainImage,
    description,
    blogContent,
    updatedAt,
  } = props.entry.node

  console.log(props)
  return (
    <div className={EntryCSS.blogentry}>
      <div className={EntryCSS.entryImg}>
        <Link to={`/blog/${slug}`}>
          <Img
            fluid={blogMainImage.fluid}
            alt={blogMainImage.description}
          />
        </Link>
      </div>
      <div className={EntryCSS.entrycopy}>
        <h3>{title}</h3>
        <span className={EntryCSS.entrydate}>{updatedAt}</span>
        {categories.map(category => {
          return (
            <span key={category + 1} className={EntryCSS.entrycategory}>
              · &nbsp; {category.name}
            </span>
          )
        })}
        <p>{`${description.description.substr(0, 200)}...`}</p>
        <Button label={"Read More"} link={`/blog/${slug}`} />

      </div>
    </div>
  )
}

export default BlogEntry
