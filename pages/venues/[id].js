import Head from 'next/head';
import { useRouter } from 'next/router';

const Venue = () => {
  //gets query params
  const router = useRouter();

  const { id } = router.query;

  return (
    <div>
      <Head>
        <title>Venue</title>
      </Head>
      <h1>Venue: {id}</h1>
      <div>{id} </div>
    </div>
  );
};

export default Venue;
