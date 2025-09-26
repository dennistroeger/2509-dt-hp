import { groq } from 'next-sanity'

// Example queries for fetching content from Sanity
export const queries = {
  // Get all posts
  posts: groq`
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      publishedAt,
      "author": author->{name, slug, image},
      "categories": categories[]->{title, slug, color},
      featuredImage
    }
  `,
  
  // Get a single post by slug
  postBySlug: groq`
    *[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      excerpt,
      content,
      publishedAt,
      "author": author->{name, slug, image, bio, socialLinks},
      "categories": categories[]->{title, slug, color},
      featuredImage
    }
  `,
  
  // Get all pages
  pages: groq`
    *[_type == "page"] | order(title asc) {
      _id,
      title,
      slug,
      content,
      seo
    }
  `,
  
  // Get a single page by slug
  pageBySlug: groq`
    *[_type == "page" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      content,
      seo
    }
  `,
  
  // Get all authors
  authors: groq`
    *[_type == "author"] | order(name asc) {
      _id,
      name,
      slug,
      image,
      bio,
      socialLinks
    }
  `,
  
  // Get all categories
  categories: groq`
    *[_type == "category"] | order(title asc) {
      _id,
      title,
      slug,
      description,
      color
    }
  `,
}
