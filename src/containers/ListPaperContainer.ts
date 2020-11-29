import { useCallback, useState } from 'react';
import { createContainer } from 'unstated-next';
import Axios from 'axios';

type ListPaperProps = [string, string];

export interface ListPaperOutput {
  listPaper: ListPaperProps[];
  update: ({ q }: { q: string }) => Promise<void>;
}

function useCounter(initialState: ListPaperProps[] = []) {
  const [listPaper, setListPaper] = useState(initialState);

  const getDate = useCallback(async ({ text }: { text: string }) => {
    const { data }: { data: ListPaperProps[] } = await Axios.request({
      method: 'POST',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      url: 'https://api.ali-set.com/get_date',
      params: { text },
    });

    setListPaper(data);
  }, []);

  const setDate = useCallback(
    (data: ListPaperProps[]) => setListPaper(data),
    []
  );

  return { listPaper, getDate, setDate };
}

const Counter = createContainer(useCounter);

export default Counter;
