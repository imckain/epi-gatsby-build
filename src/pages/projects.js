import React from 'react';
import { graphql, Link } from 'gatsby'

const Projects = ({ data }) => {
    const projects = data.allMarkdownRemark.edges.map(({ node }) => 
        <article key={node.id}>
            <Link to={node.fields.slug}>
                <h2>{node.frontmatter.title}</h2>
            </Link>
            <p>Timeline: {node.frontmatter.date}</p>
            {/* {node.htmlAst.children[0].children[0].value} */}
            {node.excerpt}
        </article>
    );

    return (
        <div>
            <h1>Projects</h1>
            { projects }
        </div>
    );
};

export const query = graphql`
    query {
        allMarkdownRemark {
            edges {
                node {
                    id
                    frontmatter {
                        date(formatString: "MM/DD/YYYY")
                        title
                    }
                    fields{
                        slug
                    }
                    excerpt
                    htmlAst
                }
            }
        }
    }
`;

export default Projects;