import React from 'react'
import Layout from '../components/layout/layout'
import SEO from '../components/seo'
import Footer from '../components/footer'

export interface ContentProps {
  pageContext: {
    title: string
  }
}

const ContentPage: React.FC<ContentProps> = ({ children, pageContext }) => {
  const { title } = pageContext

  return (
    <Layout>
      <SEO title={title} />
      {children}
      <Footer />
    </Layout>
  )
}

export default ContentPage
