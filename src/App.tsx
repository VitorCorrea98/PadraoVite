import { useDispatch, useSelector } from 'react-redux';
import { actionClick, actionCount } from './redux/actions';

type RootState = {
  counterReducer: {
    count: number;
    clicks: number;
  }
};

function App() {
  const count = useSelector((state: RootState) => state.counterReducer.count);
  const click = useSelector((state: RootState) => state.counterReducer.clicks);

  const dispatch = useDispatch();

  const handleClick = (counts = 1) => {
    dispatch(actionCount(counts));
    dispatch(actionClick());
  };

  return (
    <div className="flex flex-col items-center h-screen justify-center gap-4">
      <h1>Contador</h1>
      <h2 className="border-b-8 border-y-green-950">{ count }</h2>
      <h2 className="border-b-8 border-y-green-950">{ click }</h2>
      <div className="flex gap-2">
        <button
          className="bg-slate-400 p-3 rounded-lg"
          onClick={ () => handleClick() }
        >
          Incrementa 1
        </button>
        <button
          className="bg-red-500 p-3 rounded-lg"
          onClick={ () => handleClick(5) }
        >
          Incrementa 5
        </button>
      </div>
    </div>
  );
}

export default App;
