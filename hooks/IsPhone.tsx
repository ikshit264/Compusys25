"use client"

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

// Redux Slice
const isMobileViewSlice = createSlice({
  name: 'isMobileView',
  initialState: { isMobileView: false },
  reducers: {
    setMobileView: (state, action) => {
      state.isMobileView = action.payload;
    },
  },
});

// Redux Store
const store = configureStore({
  reducer: {
    isMobileView: isMobileViewSlice.reducer,
  },
});

// Hook: Detects if the device is in mobile view
export const useIsPhone = () => {
  const dispatch = useDispatch();
  const isMobileView = useSelector((state: { isMobileView: { isMobileView: boolean } }) => state.isMobileView.isMobileView);

  useEffect(() => {
    const handleResize = () => {
      dispatch(isMobileViewSlice.actions.setMobileView(window.innerWidth <= 1200));
    };

    handleResize(); // Set initial state
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [dispatch]);

  return isMobileView;
};

// Wrapper Component for Redux Provider
export const ReduxProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
