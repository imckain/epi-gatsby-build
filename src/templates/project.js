import React from 'react';
import { graphql } from 'gatsby';

const Project = ({ data }) => {

    return (
        <article>
            <h1>{data.markdownRemark.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{__html: data.markdownRemark.html}} />
        </article>
    );
};

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug }}) {
            frontmatter {
              title
            }
            html
          }
    }
`;

export default Project;