//Componentes UI
import Input from '../ui/Input';

//Ícones
import { ArrowRight, Shield, Lock } from 'lucide-react';

export default function LoginContainer() {
  return (
    <div className="relative bg-white w-100 sm:w-120 rounded-3xl sm:shadow-2xl p-10 sm:p-8 border-0 sm:border border-gray-100">
      <div className="relative">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Entrar</h2>
        </div>

        {/* Login form placeholder area */}
        <div className="space-y-4 mb-6 flex flex-col border-0">
          <label htmlFor="" className="text-gray-900 font-normal text-lg mb-1 ">
            Email
          </label>
          <Input
            className=" border-gray-300 outline-0 border-b-2 border-t-0 border-x-0"
            placeholder={'example@gmail.com'}
          />
          <label htmlFor="" className="text-gray-900 font-normal text-lg mb-1">
            Senha
          </label>
          <Input
            className="border-gray-300 outline-0 border-b-2 border-t-0 border-x-0"
            placeholder={'***********'}
          />
        </div>

        {/* Action button placeholder */}
        <button className="w-60 m-auto sm:w-full h-14 bg-gradient-to-r from-[#3490dc] to-[#155dfc] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 group cursor-pointer">
          <span className="text-white font-semibold text-lg">
            Entrar no Sistema
          </span>
          <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
        </button>

        {/* Additional options */}
        <div className="mt-6 flex items-center justify-between text-sm">
          <button className="text-[#3490dc] hover:text-[#155dfc] font-medium transition-colors cursor-pointer">
            Esqueci minha senha
          </button>
          <button className="text-gray-600 hover:text-gray-900 font-medium transition-colors cursor-pointer">
            Primeiro acesso
          </button>
        </div>

        {/* Security badge */}
        <div className="mt-4 pt-6 border-t border-gray-100">
          <div className="flex items-center gap-2 text-gray-500">
            <Shield className="w-4 h-4" />
            <span className="text-xs">Conexão segura e criptografada</span>
          </div>
        </div>
      </div>
    </div>
  );
}
