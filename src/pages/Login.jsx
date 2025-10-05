import LoginHeader from '../components/login/LoginHeader';
import LoginContainer from '../components/login/LoginContainer';
import LoginFooter from '../components/login/LoginFooter';
import BackgroundDecoration from '../components/login/BackgroundDecoration';

import SideBanner from '/imgs/SideBannerLogin.svg';

export default function Home() {
  return (
    <div className="relative">
      <BackgroundDecoration />
      {/* Main content */}
      <div className="py-5 relative min-h-200 flex items-center justify-center">
        <div className="flex min-h-full items-center justify-center">
          {/* Left column - Login form */}
          <div className="order-2 lg:order-1">
            <LoginContainer />
          </div>
          <img
            className="hidden lg:block w-150 [mask-image:linear-gradient(to_top,transparent_5%,black_30%)]"
            src={SideBanner}
            alt="Imagem de um garota com celular na mão"
          />
        </div>

        {/* Footer */}
        {/* <LoginFooter /> */}
      </div>

      {/* Institutional badge
      <div className="fixed bottom-8 right-8 bg-white rounded-2xl shadow-lg px-6 py-4 border border-gray-100 hidden lg:block">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3490dc] to-[#155dfc] flex items-center justify-center">
            <span className="text-white font-bold text-sm">BR</span>
          </div>
          <div>
            <div className="text-xs text-gray-500 font-medium">
              Sistema Brasileiro
            </div>
            <div className="text-sm font-semibold text-gray-900">
              Plataforma Acadêmica
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
