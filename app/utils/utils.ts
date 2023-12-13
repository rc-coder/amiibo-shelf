export async function getAmiibos(type: string) {
  const res = await fetch(`https://amiiboapi.com/api/amiibo/?type=${type}`, {
    cache: 'no-store',
  });
  const amiibos = res.json();

  return amiibos;
}

export type amiibo = {
  amiiboSeries: string;
  character: string;
  gameSeries: string;
  head: string;
  image: string;
  name: string;
  type: string;
  tail: string;
};
