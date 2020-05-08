import React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import { MemoryGame } from '../components/memory-game'

const MemoryGamePage: React.FunctionComponent = () => (
  <Layout title="About | Next.js + TypeScript Example">
    <h1>Memory Game</h1>
    
    <MemoryGame nbCards={10}/>

    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
)

export default MemoryGamePage
