import RegisterContainer from '../components/register/RegisterContainer';
import BackgroundDecoration from '../components/BackgroundDecoration';

import SideBanner from '/imgs/SideBannerRegister.svg';

export default function Register() {
  return (
    <div className="relative">
      <BackgroundDecoration />
      {/* Main content */}
      <div className="py-5 relative min-h-220 flex items-center justify-center">
        <div className="flex min-h-full items-center justify-center">
          <div className="order-2 lg:order-1">
            <RegisterContainer />
          </div>
          <img
            className="hidden lg:block w-150 [mask-image:linear-gradient(to_top,transparent_5%,black_30%)]"
            src={SideBanner}
            alt="Imagem de um garota com celular na mão"
          />
        </div>
      </div>
    </div>
  );
}
