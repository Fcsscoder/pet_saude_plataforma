import LoginContainer from '../components/login/LoginContainer';
import BackgroundDecoration from '../components/BackgroundDecoration';

import SideBanner from '/imgs/SideBannerLogin.svg';

export default function Home() {
  return (
    <div className="relative">
      <BackgroundDecoration />
      {/* Main content */}
      <div className="py-5 relative min-h-150 sm:min-h-180 flex items-center justify-center">
        <div className="flex min-h-full items-center justify-center">
          {/* Left column - Login form */}
          <div className="order-2 lg:order-1">
            <LoginContainer />
          </div>
          <img
            className="hidden lg:block w-135 [mask-image:linear-gradient(to_top,transparent_5%,black_30%)]"
            src={SideBanner}
            alt="Imagem de um garota com celular na mão"
          />
        </div>
      </div>
    </div>
  );
}
