import React, { useEffect } from 'react';
import { PropagateLoader } from 'react-spinners';
import { useLoader } from '../../contexts/LoaderContext';
import { BLUE, LIGHT_GRAY } from '../../constants/ColorsTypes';

export const Loader = () => {
  const { loading } = useLoader();
  if (!loading) return null;
  return (
    <div
      className='d-flex align-items-center justify-content-center position-fixed z-3 top-0 start-0 end-0 bottom-0'
      style={{ zIndex: 10000, background: LIGHT_GRAY }}
    >
      <PropagateLoader color={BLUE} />
    </div>
  );
};
