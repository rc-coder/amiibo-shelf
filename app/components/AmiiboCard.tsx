import Image from 'next/image';
import AddAmiiboForm from './form/AddAmiiboForm';
import RemoveAmiiboForm from './form/RemoveAmiiboForm';
import { amiibo } from '../utils/utils';
import { getServerSession } from 'next-auth';
import { authOptions } from '../api/auth/[...nextauth]/route';

type Props = {
  amiiboData: amiibo;
  buttonToggle: boolean;
};

async function AmiiboCard(props: Props) {
  const { name, amiiboSeries, character, gameSeries, image } = props.amiiboData;
  const session = await getServerSession(authOptions);
  return (
    <div className="flex w-60 bg-gray-200 h-100  text-slate-900 items-center justify-center border-4 border-red-800 rounded-sm bg-[linear-gradient(35deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] overflow-hidden bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] bg-no-repeat shadow-2xl transition-[background-position_0s_ease] hover:bg-[position:200%_0,0_0] hover:duration-[1000ms] group transform duration-200 hover:rotate-1">
      <div className="flex flex-col w-full">
        <div className="pt-4 pb-4 flex justify-center w-full border-b border-red-800">
          <Image
            src={image}
            width={90}
            height={90}
            loading="lazy"
            alt="Amiibo image"
            className="object-cover object-center max-h-90 h-auto w-auto transform duration-200 group-hover:scale-110"
          />
        </div>
        <div className="w-full flex flex-col items-start justify-between p-4">
          <h2 className="block font-sans text-xl antialiased font-medium leading-snug tracking-normal text-blue-gray-900 mb-2">
            {name}
          </h2>
          <p className="block font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
            <span className="text-xs font-light">Character: </span> {character}
          </p>
          <p className="block font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
            <span className="text-xs font-light">Series: </span> {amiiboSeries}
          </p>
          <p className="block font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
            <span className="text-xs font-light">Game: </span>
            {gameSeries}
          </p>
        </div>
        <div
          className="absolute bottom-0 right-1"
          title={`${props.buttonToggle ? 'Add Amiibo' : 'Remove Amiibo'}`}
        >
          {session && (
            <div>
              {props.buttonToggle ? (
                <AddAmiiboForm {...props.amiiboData} />
              ) : (
                <RemoveAmiiboForm {...props.amiiboData} />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AmiiboCard;
