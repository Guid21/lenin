import { useState } from 'react';
import { createContainer } from 'unstated-next';

type IsLoadingProps = boolean;

export interface IsLoadingOutput {
  status: IsLoadingProps;
}

function useCounter(initialState: IsLoadingProps = false) {
  const [isLoading, setIsLoading] = useState(initialState);

  return { isLoading, setIsLoading };
}

const Counter = createContainer(useCounter);

export default Counter;
