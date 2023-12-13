import { amiibo } from '@/app/utils/utils';
import { removeAmiibo } from './actions';
import { IoMdRemoveCircle } from 'react-icons/io';

const RemoveAmiiboForm = ({ ...amiiboData }: amiibo) => {
  const { head, tail } = amiiboData;
  return (
    <form action={removeAmiibo}>
      <input type="hidden" name="head" value={head} />
      <input type="hidden" name="tail" value={tail} />
      <button
        type="submit"
        className=" hover:text-slate-500 focus-within:text-slate-700 outline-none"
      >
        <IoMdRemoveCircle size={25} />
      </button>
    </form>
  );
};

export default RemoveAmiiboForm;
