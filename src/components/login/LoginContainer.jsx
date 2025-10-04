import Input from '../ui/Input';
import { ArrowRight, Shield, Lock } from 'lucide-react';

export default function LoginContainer() {
  return (
    <div className="relative bg-white sm:w-130 rounded-3xl shadow-2xl p-10 border border-gray-100">
      <div className="relative">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Acesso ao Sistema
          </h2>
        </div>

        {/* Login form placeholder area */}
        <div className="space-y-4 mb-6 flex flex-col border-0">
          <label htmlFor="" className="text-gray-900 font-normal text-lg">
            Email
          </label>
          <Input className="border-2 border-gray-300" />
          <label htmlFor="" className="text-gray-900 font-normal text-lg">
            Senha
          </label>
          <Input className="border-2 border-gray-300" />
        </div>

        {/* Action button placeholder */}
        <button className="w-full h-14 bg-gradient-to-r from-[#3490dc] to-[#155dfc] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 group cursor-pointer">
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
        <div className="mt-8 pt-6 border-t border-gray-100">
          <div className="flex items-center gap-2 text-gray-500">
            <Shield className="w-4 h-4" />
            <span className="text-xs">Conexão segura e criptografada</span>
          </div>
        </div>
      </div>
    </div>
  );
}
