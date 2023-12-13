import { amiibo, getAmiibos } from '../utils/utils';
import AmiiboCard from './AmiiboCard';

export async function AmiiboShowcase({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const search =
    typeof searchParams.search === 'string'
      ? searchParams.search.toLowerCase()
      : undefined;
  const amiiboType =
    typeof searchParams.type === 'string' ? searchParams.type : 'figure';
  const data = await getAmiibos(amiiboType);
  const amiibos = data.amiibo;
  const filteredAmiibos = amiibos.filter(
    (amiibo: amiibo) =>
      amiibo.name.toLowerCase().includes(`${search}`) ||
      amiibo.character.toLowerCase().includes(`${search}`) ||
      amiibo.amiiboSeries.toLowerCase().includes(`${search}`) ||
      amiibo.gameSeries.toLowerCase().includes(`${search}`)
  );

  //Filter gameSeries

  // const gameSeries: string[] = amiibos
  //   .map((amiibo: any) => amiibo.gameSeries)
  //   .reduce((acc: string[], series: string) => {
  //     if (!acc.includes(series)) {
  //       acc.push(series);
  //     }
  //     return acc;
  //   }, []);

  return (
    <>
      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {!search
          ? amiibos.map((amiibo: amiibo) => (
              <div
                key={amiibo.tail + amiibo.tail}
                className="flex justify-center"
              >
                <AmiiboCard buttonToggle={true} amiiboData={amiibo} />
              </div>
            ))
          : filteredAmiibos.map((amiibo: amiibo) => (
              <div
                key={amiibo.tail + amiibo.tail}
                className="flex justify-center"
              >
                <AmiiboCard buttonToggle={true} amiiboData={amiibo} />
              </div>
            ))}
      </div>
    </>
  );
}
