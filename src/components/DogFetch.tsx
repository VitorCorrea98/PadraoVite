import { useDispatch, useSelector } from 'react-redux';
import { fetchDogImage } from '../redux/actions';
import { Dispatch, OverAllState } from '../types';

function DogFetch() {
  const rootState = useSelector((state: OverAllState) => state.dogReducer);
  const dispatch: Dispatch = useDispatch();

  if (rootState.isFetching) return <p>Carregando...</p>;

  return (
    <div className="text-center">
      <button
        onClick={ () => dispatch(fetchDogImage()) }
        className="bg-yellow-400 p-2 text-lg rounded-lg "
      >
        Novo Doguinho
      </button>
      {
  rootState.imageURL
        && <img
          src={ rootState.imageURL }
          alt="Imagem de um cachorro aleatório"
        />
}
    </div>
  );
}

export default DogFetch;
