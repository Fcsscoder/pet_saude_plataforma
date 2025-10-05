//Componentes UI
import Input from '../ui/Input';

//Ícones
import { ArrowRight, Shield } from 'lucide-react';

export default function RegisterContainer() {
  return (
    <div className="relative bg-white w-100 sm:w-140 rounded-3xl sm:shadow-2xl p-10 sm:p-8 border-0 sm:border border-gray-100">
      <div className="relative">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Cadastro</h2>
        </div>

        {/* Cadastro form */}
        <div className="space-y-4 mb-6">
          {/* Nome Completo - ocupa linha inteira */}
          <div className="flex flex-col">
            <label
              htmlFor=""
              className="text-gray-900 font-normal text-lg mb-1">
              Nome Completo
            </label>
            <Input
              className="border-gray-300 outline-0 border-b-2 border-t-0 border-x-0"
              placeholder={'João da Silva'}
            />
          </div>

          {/* CPF e Email - 2 colunas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label
                htmlFor=""
                className="text-gray-900 font-normal text-lg mb-1">
                CPF
              </label>
              <Input
                className="border-gray-300 outline-0 border-b-2 border-t-0 border-x-0"
                placeholder={'000.000.000-00'}
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor=""
                className="text-gray-900 font-normal text-lg mb-1">
                Email
              </label>
              <Input
                className="border-gray-300 outline-0 border-b-2 border-t-0 border-x-0"
                placeholder={'example@gmail.com'}
              />
            </div>
          </div>

          {/* Telefone e Gênero - 2 colunas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label
                htmlFor=""
                className="text-gray-900 font-normal text-lg mb-1">
                Telefone
              </label>
              <Input
                className="border-gray-300 outline-0 border-b-2 border-t-0 border-x-0"
                placeholder={'(00) 00000-0000'}
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor=""
                className="text-gray-900 font-normal text-lg mb-1">
                Gênero
              </label>
              <select className="border-gray-300 outline-0 border-b-2 border-t-0 border-x-0 bg-transparent py-2 text-gray-900">
                <option value="">Selecione</option>
                <option value="feminino">Feminino</option>
                <option value="masculino">Masculino</option>
                <option value="outros">Outros</option>
              </select>
            </div>
          </div>

          {/* Senha e Confirmar Senha - 2 colunas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label
                htmlFor=""
                className="text-gray-900 font-normal text-lg mb-1">
                Senha
              </label>
              <Input
                className="border-gray-300 outline-0 border-b-2 border-t-0 border-x-0"
                placeholder={'***********'}
                type="password"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor=""
                className="text-gray-900 font-normal text-lg mb-1">
                Confirmar Senha
              </label>
              <Input
                className="border-gray-300 outline-0 border-b-2 border-t-0 border-x-0"
                placeholder={'***********'}
                type="password"
              />
            </div>
          </div>
        </div>

        {/* Action button */}
        <button className="w-full h-14 bg-gradient-to-r from-[#3490dc] to-[#155dfc] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 group cursor-pointer">
          <span className="text-white font-semibold text-lg">Criar Conta</span>
          <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
        </button>

        {/* Additional options */}
        <div className="mt-6 flex items-center justify-center text-sm">
          <button className="text-[#3490dc] hover:text-[#155dfc] font-medium transition-colors cursor-pointer">
            Já tenho uma conta
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
