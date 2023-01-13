import { Route, Routes } from 'react-router-dom';

import { Home } from '../pages/Home';
import { NewDish } from '../pages/NewDish';
import { EditDish } from '../pages/EditDish';
import { DetailDish } from '../pages/DetailDish';
import { MyRequest } from '../pages/MyRequest';
import { PurchaseRequests } from '../pages/PurchaseRequests';

export function AppRoutes() {
   return (
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/create-dish" element={<NewDish />} />
         <Route path="/update-dish/:id" element={<EditDish />} />
         <Route path="/delete-dish/:id" element={<Home />} />
         <Route path="/detail-dish/:id" element={<DetailDish />} />
         <Route path="/my-request" element={<MyRequest />} />
         <Route path="/purchase-requests" element={<PurchaseRequests />} />
      </Routes>
   )
}