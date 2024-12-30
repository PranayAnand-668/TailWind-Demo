import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { logout, selectIsAuthenticated } from "../userSlice";

const Welcome = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isAuthenticated = useSelector(selectIsAuthenticated);

  // Redirect unauthenticated users to the login page
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="flex flex-col lg:justify-center">
      <h1 className="text-black lg:text-green-500 m-auto mt-[50px] lg:mb-[25px]">Welcome</h1>
      <button
        className="p-[8px] lg:w-[10em] lg:m-auto bg-blue-700 text-white rounded-lg md:bg-green-500 lg:bg-red-400"
        onClick={handleLogout}
      >
        Log Out
      </button>
    </div>
  );
};

export default Welcome;
