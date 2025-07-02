import { Outlet } from 'react-router-dom';

function RootLayout() {
  return (
    <div>
      {/* Define your layout here */}
      <Outlet />
    </div>
  );
}

export default RootLayout;
