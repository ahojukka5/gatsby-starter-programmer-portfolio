import { graphql, useStaticQuery } from 'gatsby';

const query = graphql`
  query SITE_METADATA_QUERY {
    site {
      siteMetadata {
        author
        title
        description
      }
    }
  }
`;

const useSiteMetadata = () => {
  const { site } = useStaticQuery(query);
  return site.siteMetadata;
};

export default useSiteMetadata;
