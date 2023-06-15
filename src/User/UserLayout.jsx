import ResponsiveAppBar from '../Components/Header';
import { Outlet } from 'react-router-dom';

export const UserLayout = () => {
  return (
    <div>
      <ResponsiveAppBar />
      <Outlet />
    </div>

  );
};
export default UserLayout;