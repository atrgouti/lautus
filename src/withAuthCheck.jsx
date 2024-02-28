import React, { useEffect } from "react";
import supabase from "../src/api/supabase"; // Import supabase client instance
import { useNavigate } from "react-router-dom";

const withAuthCheck = (WrappedComponent) => {
  const AuthCheck = (props) => {
    const navigate = useNavigate();

    useEffect(() => {
      const checkAuth = async () => {
        const {
          data: { user },
        } = await supabase.auth.getUser();

        if (!user) {
          // If user is not authenticated, redirect to login page
          navigate("/login");
        }
      };

      checkAuth();
    }, [history]);

    return <WrappedComponent {...props} />;
  };

  return AuthCheck;
};

export default withAuthCheck;
