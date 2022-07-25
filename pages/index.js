import Head from 'next/head'
import requests from '../assets/Requests'
import Main from '../components/Main'
import RowMovies from '../components/Main/RowMovies'

export default function Home() {
  
  return (
    <div>
      <Head>
        <title>Netflix Clone App</title>
        <meta name="Netflix Clone" content="Content of netflix movies" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main/>
      <RowMovies rowId='1' title='Up coming' fetchURL={requests.requestUpComing} key='1' />
      <RowMovies rowId='2' title='Popular' fetchURL={requests.requestPopular} key='2' />
      <RowMovies rowId='3' title='Top Rated' fetchURL={requests.requestTopRated} key='3' />
      <RowMovies rowId='4' title='Trending' fetchURL={requests.requestTrending} key='4' />
      <RowMovies rowId='5' title='Horror' fetchURL={requests.requestHorror} key='5' />
    </div>
  )
}
