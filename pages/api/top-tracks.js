import { getTopTracks } from '../../lib/spotify';

export default async (req, res) => {
  const response = await getTopTracks();
  const { items } = await response.json();

  const tracks = items.map((track) => ({
    artists: track.artists.map((_artist) => _artist.name).join(', '),
    title: track.name,
  }));

  return res.status(200).json({ tracks });
};
