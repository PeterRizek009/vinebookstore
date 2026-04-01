// src/hooks/useAuth.js
import { useEffect, useState } from "react";
import { supabase } from "../Supabase";

export const useAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // جيب الـ session الحالية
    supabase.auth.getSession().then(({ data }) => {
      setUser(data.session?.user ?? null);
    });

    // تابع لو الـ user اتغير
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => listener.subscription.unsubscribe();
  }, []);

  const signOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  return { user, signOut };
};