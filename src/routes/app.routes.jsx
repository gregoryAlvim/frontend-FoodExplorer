import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { NewDish } from '../pages/NewDish';
import { EditDish } from '../pages/EditDish';
import { DeleteDish } from '../pages/DeleteDish';

export function AppRoutes() {
   return (
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/create-dish" element={<NewDish />} />
         <Route path="/update-dish/:id" element={<EditDish />} />
         <Route path="/delete-dish/:id" element={<Home />} />
      </Routes>
   )
}