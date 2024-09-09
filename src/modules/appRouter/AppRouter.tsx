import { Routes, Route, Navigate } from 'react-router-dom';

import React from 'react';
import { publicRoutes } from './routes';
import { RoutesEnum } from '../../utils/enums';

const AppRouter: React.FC = () => {
   return (
      <Routes>
         {publicRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
         ))}

         <Route
            path='*'
            element={<Navigate to={RoutesEnum.RECIPES} replace />}
         />
      </Routes>
   );
};

export default AppRouter;
