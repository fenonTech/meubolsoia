import { Wallet, TrendingUp, TrendingDown, Target } from "lucide-react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { FinanceChart } from "@/components/dashboard/FinanceChart";
import { QuickActions } from "@/components/dashboard/QuickActions";

const Index = () => {
  // Mock data - TODO: Substituir por dados reais do banco de dados
  const mockData = {
    saldo: 5000.00,
    receitas: 8500.00,
    despesas: 2300.00,
    economia: 6200.00,
  };

  return (
    <DashboardLayout>
      <div className="space-y-6 fade-in">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold font-playfair text-gradient-gold mb-2">
            Dashboard Financeiro
          </h1>
          <p className="text-muted-foreground">
            Bem-vindo ao seu controle financeiro inteligente
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <MetricCard
            title="Saldo Atual"
            value={`R$ ${mockData.saldo.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`}
            subtitle="Disponível em todas as contas"
            icon={<Wallet className="h-5 w-5" />}
            trend={{ value: "+12%", direction: "up" }}
            className="scale-in"
          />
          
          <MetricCard
            title="Receitas do Mês"
            value={`R$ ${mockData.receitas.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`}
            subtitle="Entrada de recursos"
            icon={<TrendingUp className="h-5 w-5" />}
            trend={{ value: "+8%", direction: "up" }}
            className="scale-in"
          />
          
          <MetricCard
            title="Despesas do Mês"
            value={`R$ ${mockData.despesas.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`}
            subtitle="Gastos realizados"
            icon={<TrendingDown className="h-5 w-5" />}
            trend={{ value: "-5%", direction: "down" }}
            className="scale-in"
          />
          
          <MetricCard
            title="Meta de Economia"
            value={`R$ ${mockData.economia.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`}
            subtitle="73% da meta atingida"
            icon={<Target className="h-5 w-5" />}
            trend={{ value: "+23%", direction: "up" }}
            className="scale-in"
          />
        </div>

        {/* Charts Section */}
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 slide-up">
            <FinanceChart type="line" title="Evolução Mensal - Receitas vs Despesas" />
          </div>
          
          <div className="slide-up">
            <FinanceChart type="pie" title="Gastos por Categoria" />
          </div>
        </div>

        {/* Actions Section */}
        <div className="grid gap-6 lg:grid-cols-4">
          <div className="lg:col-span-3 slide-up">
            {/* TODO: Adicionar área de transações recentes aqui */}
            <div className="card-premium p-6">
              <h3 className="text-lg font-semibold text-classic-gold font-playfair mb-4">
                Transações Recentes
              </h3>
              <div className="space-y-3">
                {[
                  { desc: "Salário - Empresa XYZ", value: "+R$ 5.500,00", date: "Hoje" },
                  { desc: "Supermercado ABC", value: "-R$ 287,50", date: "Ontem" },
                  { desc: "Transferência PIX", value: "-R$ 150,00", date: "2 dias" },
                  { desc: "Freelance Design", value: "+R$ 800,00", date: "3 dias" },
                ].map((transaction, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-deep-black/20 rounded-lg hover:bg-luxury-gray/30 transition-colors">
                    <div>
                      <p className="text-sm font-medium text-champagne">{transaction.desc}</p>
                      <p className="text-xs text-muted-foreground">{transaction.date}</p>
                    </div>
                    <span className={`font-semibold ${transaction.value.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                      {transaction.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="slide-up">
            <QuickActions />
          </div>
        </div>

        {/* Integration Notice */}
        <div className="mt-8 p-4 bg-luxury-gray/50 border border-classic-gold/20 rounded-lg">
          <p className="text-sm text-elegant-bronze">
            <strong>Dados Mockados:</strong> Esta interface está pronta para integração com banco de dados real e automações n8n.
            Os valores exibidos são exemplos para demonstração da funcionalidade.
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
