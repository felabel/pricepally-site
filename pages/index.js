import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/navbar'
import Hero from '../components/hero'
import Partner from '../components/partner'
import Download from '../components/download'
import Footer from '../components/footer'
import Script from 'next/script'
import Tabs from '../components/Food/Tabs'
import MobileLoader from '../components/loader/MobileLoader'
import Category from '../components/category'
import { GetProducts as getProducts } from '../hooks/useAPI'

export default function Home({data}) {
  return (
    <div className=''>
      <Head>
        <title>Lagos Grocery Store | Affordable foodstuff Shopping at Pricepally</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/images/favicon.png" />


      </Head>
      <main>
        <Navbar />
        <Hero />
        <Category />
        <Tabs data={data} />
        <Partner />
        <Download />
        <Footer />
        <MobileLoader />
      </main>

      <Script src="/static/js/jquery.min.js"></Script>
      <Script src="/static/js/popper.min.js"></Script>
      <Script src="/static/js/bootstrap.min.js"></Script>
      {/* <Script src="/static/js/script.js"></Script> */}
      {/* <Script src="/static/js/multislider.js"></Script> */}
    </div>
  )
}
export async function getServerSideProps() {

  const res = await getProducts();
  const data = res.recommendedproducts;

  return { props: { data } }
}