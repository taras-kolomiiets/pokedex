import { useSelector as useDefaultSelector } from 'react-redux';

import type { RootState } from '@/client/redux/store';
import type { TypedUseSelectorHook } from 'react-redux';

const useSelector: TypedUseSelectorHook<RootState> = useDefaultSelector;

export default useSelector;
