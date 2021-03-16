import Head from 'next/head';
import Link from 'next/link';

import NavBar from '../../src/components/NavBar';

// TODO: need to fetch music genres (by calling Spotify API endpoint), prior to pre-rendering

const Venues = ({ data }) => {
  return (
    <div>
      <Head>
        <title>Discover</title>
      </Head>
      <NavBar />

      <div>"Music Genres"</div>
      <ul>
        {data.categories.map((category, i) => (
          <li key={i}>
            <Link href="/venues/[id]" as={`/venues/${category.name}`}>
              <a>{category.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

//executed in a node environment, never in the browser
export async function getServerSideProps() {
  const response = await fetch('http://localhost:3000/api/categories');
  const categories = await response.json();

  return {
    props: {
      data: categories,
    },
  };
}

export default Venues;
