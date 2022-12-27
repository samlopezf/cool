import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Samuel.Cool</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Samuel.Cool" />
        <p className="description">
          ❄️❄️❄️
        </p>
      </main>

      <Footer />
    </div>
  )
}
