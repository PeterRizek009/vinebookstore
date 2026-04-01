import { supabase } from "../Supabase";

const Auth = () => {

  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: window.location.origin }
    });
    if (error) console.log(error);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">

      {/* Left Side */}
      <div className="hidden lg:flex flex-1 bg-indigo-900 flex-col justify-between p-12">
        <div>
          <span className="text-white font-bold text-2xl tracking-wide" style={{ fontFamily: "Georgia, serif" }}>
            VINE <span className="text-green-400">bookstore</span>
          </span>
        </div>

        <div>
          <h2 className="text-white text-4xl font-bold leading-snug mb-4">
            Discover your next<br />favourite book.
          </h2>
          <p className="text-indigo-300 text-sm leading-relaxed max-w-sm">
            Thousands of books across every genre. Add to your wishlist, build your cart, and enjoy reading.
          </p>
        </div>

        <div className="flex gap-6">
          {[
            { number: "6K+", label: "Books" },
            { number: "120+", label: "Authors" },
            { number: "30+", label: "Categories" },
          ].map(stat => (
            <div key={stat.label}>
              <p className="text-white font-bold text-xl">{stat.number}</p>
              <p className="text-indigo-300 text-xs">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Side */}
      <div className="flex-1 flex items-center justify-center px-8">
        <div className="w-full max-w-sm">

          {/* Logo on mobile */}
          <div className="lg:hidden mb-8 text-center">
            <span className="font-bold text-2xl text-indigo-900" style={{ fontFamily: "Georgia, serif" }}>
              VINE <span className="text-green-500">bookstore</span>
            </span>
          </div>

          <h1 className="text-3xl font-bold text-indigo-900 mb-2">Welcome Back</h1>
          <p className="text-gray-400 text-sm mb-8">Sign in to your account to continue</p>

          {/* Google Button */}
          <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-3 border border-gray-200 rounded-xl px-4 py-3.5 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition mb-6"
          >
            <img src="https://www.google.com/favicon.ico" className="w-4 h-4" alt="Google" />
            Continue with Google
          </button>

          <div className="flex items-center gap-3 mb-6">
            <div className="flex-1 h-px bg-gray-200"></div>
            <span className="text-xs text-gray-400">secure login</span>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          {/* Info */}
          <div className="bg-indigo-50 rounded-xl p-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center shrink-0 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-indigo-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div>
                <p className="text-indigo-900 text-xs font-semibold mb-0.5">Safe & Secure</p>
                <p className="text-indigo-400 text-xs leading-relaxed">
                  We use Google OAuth to keep your account safe. We never store your password.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Auth;