import { useCallback, useState } from 'react';
import { createContainer } from 'unstated-next';
import Axios from 'axios';

interface ListPaperProps {
  id: number;
  title: string;
  description: string;
}

export interface ListPaperOutput {
  listPaper: ListPaperProps[];
  update: ({ q }: { q: string }) => Promise<void>;
}

function useCounter(initialState: ListPaperProps[] = []) {
  const [listPaper, setListPaper] = useState(initialState);

  const update = useCallback(async ({ q }: { q: string }) => {
    const { data }: { data: ListPaperProps[] } = await Axios.request({
      url: 'http://localhost:3001/papers',
      params: { q },
    });

    console.log(data);

    setListPaper(data);
  }, []);
  return { listPaper, update };
}

const Counter = createContainer(useCounter);

export default Counter;
