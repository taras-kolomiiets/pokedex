import { useDispatch as useDefaultDispatch } from 'react-redux';

import type { AppDispatch } from '@/client/redux/store';

const useDispatch = () => useDefaultDispatch<AppDispatch>();

export default useDispatch;
