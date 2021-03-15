import Head from 'next/head';
import NavBar from '../src/components/NavBar';

// TODO: need to fetch music genres (by calling Spotify API endpoint), prior to pre-rendering

const Venues = () => {
  return (
    <div>
      <Head>
        <title>Discover</title>
      </Head>

      <NavBar />
      <div>"Populate Music Genres"</div>
    </div>
  );
};

// export async function getStaticProps() {
//   const res = await fetch('https://api.spotify.com/v1/browse/categories');
//   const categories = await res.json();

//   console.log(categories);

//   return {
//     props: {
//       categories,
//     },
//   };
// }

export default Venues;
