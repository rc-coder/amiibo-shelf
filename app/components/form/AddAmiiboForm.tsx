import { amiibo } from '@/app/utils/utils';
import { addAmiibo } from './actions';
import { IoMdAddCircle } from 'react-icons/io';

const AddAmiiboForm = ({ ...amiiboData }: amiibo) => {
  const { name, amiiboSeries, character, gameSeries, head, image, type, tail } =
    amiiboData;
  return (
    <form action={addAmiibo}>
      <input type="hidden" name="name" value={name} />
      <input type="hidden" name="amiiboSeries" value={amiiboSeries} />
      <input type="hidden" name="character" value={character} />
      <input type="hidden" name="gameSeries" value={gameSeries} />
      <input type="hidden" name="head" value={head} />
      <input type="hidden" name="image" value={image} />
      <input type="hidden" name="type" value={type} />
      <input type="hidden" name="tail" value={tail} />
      <button
        type="submit"
        className=" transform duration-200 hover:text-slate-500 focus-within:text-slate-700 outline-none"
      >
        <IoMdAddCircle size={25} />
      </button>
    </form>
  );
};

export default AddAmiiboForm;
