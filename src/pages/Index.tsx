import { Wallet, TrendingUp, TrendingDown, Target } from "lucide-react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { FinanceChart } from "@/components/dashboard/FinanceChart";
import { QuickActions } from "@/components/dashboard/QuickActions";

const Index = () => {
  // Mock data
  const transacoes = [
    { data: "31/10", descricao: "iFood", categoria: "Alimentação", valor: 50.00, tipo: "despesa" },
    { data: "30/10", descricao: "Uber", categoria: "Locomoção", valor: 50.00, tipo: "despesa" },
    { data: "27/10", descricao: "Aluguel", categoria: "Despesas Fixa", valor: 50.00, tipo: "despesa" },
    { data: "26/10", descricao: "Desenvolvimento Sistema", categoria: "Entrada", valor: 50.00, tipo: "receita" },
    { data: "25/10", descricao: "Emprestimo", categoria: "Despesas Variaveis", valor: 50.00, tipo: "despesa" },
    { data: "24/10", descricao: "Freelancer", categoria: "Entrada", valor: 50.00, tipo: "receita" },
  ];

  const contasPagar = [
    { data: "31/10", descricao: "iFood", categoria: "Alimentação", valor: 50.00 },
    { data: "31/10", descricao: "iFood", categoria: "Alimentação", valor: 50.00 },
    { data: "31/10", descricao: "iFood", categoria: "Alimentação", valor: 50.00 },
  ];

  const categoriasGastos = [
    { name: "Alimenta", value: 70, color: "#22D3EE" },
    { name: "Aluguel", value: 60, color: "#FFA500" },
    { name: "Esporte", value: 50, color: "#C8A951" },
    { name: "Transporte", value: 40, color: "#FFD700" },
    { name: "Educação", value: 30, color: "#FF6B6B" },
    { name: "Lazer", value: 20, color: "#A67C52" },
    { name: "Outros", value: 10, color: "#888888" },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6 fade-in">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-bright-gold mb-1">
            DashBoard Financeiro
          </h1>
          <p className="text-muted-foreground text-sm">
            Bem-Vindo ao seu controle financeiro inteligente
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid gap-4 md:grid-cols-3">
          <div className="card-premium p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Saldo Atual</p>
                <p className="text-3xl font-bold text-champagne">R$ 1.250,37</p>
                <p className="text-xs text-muted-foreground mt-1">+12% em relação ao mês anterior</p>
              </div>
              <div className="text-bright-gold text-4xl">💰</div>
            </div>
          </div>
          
          <div className="card-premium p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Receita do mês</p>
                <p className="text-3xl font-bold text-champagne">R$ 1.250,37</p>
                <p className="text-xs text-green-400 mt-1">+8% em relação ao mês anterior</p>
              </div>
              <div className="text-bright-gold text-4xl">💵</div>
            </div>
          </div>
          
          <div className="card-premium p-6">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Despesas do mês</p>
                <p className="text-3xl font-bold text-champagne">R$ 6.749,64</p>
                <p className="text-xs text-red-400 mt-1">↗ +8% em relação ao mês anterior</p>
              </div>
              <div className="text-red-400 text-4xl">↓</div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Últimas Transações */}
          <div className="card-premium p-6">
            <h3 className="text-xl font-bold text-champagne mb-4">Últimas Transações</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 text-muted-foreground font-medium">Data</th>
                    <th className="text-left py-2 text-muted-foreground font-medium">Descrição</th>
                    <th className="text-left py-2 text-muted-foreground font-medium">Categoria</th>
                    <th className="text-right py-2 text-muted-foreground font-medium">Valor</th>
                  </tr>
                </thead>
                <tbody>
                  {transacoes.map((t, i) => (
                    <tr key={i} className="border-b border-border/50">
                      <td className="py-3 text-muted-foreground">{t.data}</td>
                      <td className="py-3 text-champagne">{t.descricao}</td>
                      <td className="py-3">
                        <span className={`text-xs px-2 py-1 rounded ${
                          t.tipo === 'receita' ? 'bg-green-500/20 text-green-400' : 
                          t.categoria === 'Despesas Fixa' ? 'bg-red-500/20 text-red-400' :
                          t.categoria === 'Despesas Variaveis' ? 'bg-orange-500/20 text-orange-400' :
                          'bg-blue-500/20 text-blue-400'
                        }`}>
                          {t.categoria}
                        </span>
                      </td>
                      <td className={`py-3 text-right font-semibold ${
                        t.tipo === 'receita' ? 'text-green-400' : 'text-red-400'
                      }`}>
                        R$ {t.valor.toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Despesas por categoria */}
          <div className="card-premium p-6">
            <h3 className="text-xl font-bold text-champagne mb-4">Despesas por categoria</h3>
            <FinanceChart type="pie" title="" />
            <div className="mt-4 text-center">
              <p className="text-sm text-muted-foreground">TOTAL DESPESAS</p>
              <p className="text-2xl font-bold text-champagne">R6.749,63</p>
            </div>
          </div>
        </div>

        {/* Bottom Grid */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Contas a pagar */}
          <div className="card-premium p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="text-bright-gold text-5xl">📅</div>
              <h3 className="text-xl font-bold text-champagne">Contas a pagar</h3>
            </div>
            <div className="space-y-3">
              {contasPagar.map((conta, i) => (
                <div key={i} className="bg-deep-black/30 p-3 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex-1">
                      <div className="flex gap-8 text-sm">
                        <div>
                          <span className="text-muted-foreground">Data</span>
                          <p className="text-champagne">{conta.data}</p>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Descrição</span>
                          <p className="text-champagne">{conta.descricao}</p>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Categoria</span>
                          <p className="text-bright-gold">{conta.categoria}</p>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Valor</span>
                          <p className="text-red-400 font-semibold">R$ {conta.valor.toFixed(2)}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visão por categoria */}
          <div className="card-premium p-6">
            <h3 className="text-xl font-bold text-champagne mb-4">Visão por categoria</h3>
            <div className="space-y-3">
              {categoriasGastos.map((cat, i) => (
                <div key={i} className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="text-champagne">{cat.name}</span>
                    <span className="text-muted-foreground">
                      (R$ {(cat.value * 10).toFixed(2)} de R$ {(cat.value * 14.29).toFixed(2)})
                    </span>
                  </div>
                  <div className="h-2 bg-deep-black/50 rounded-full overflow-hidden">
                    <div 
                      className="h-full rounded-full transition-all"
                      style={{ 
                        width: `${cat.value}%`,
                        backgroundColor: cat.color 
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
