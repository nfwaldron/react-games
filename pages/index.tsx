import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <p>
      <Link href="/memory-game">
        <a>Memory Game Here</a>
      </Link>
    </p>
  </Layout>
)

export default IndexPage
