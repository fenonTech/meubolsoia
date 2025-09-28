import { TrendingUp, PieChart, DollarSign, Target } from "lucide-react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart as RechartsPieChart, Pie, Cell } from "recharts";

const Investimentos = () => {
  // Mock data para investimentos
  const portfolioData = [
    { mes: "Set", valor: 15000 },
    { mes: "Out", valor: 15800 },
    { mes: "Nov", valor: 16200 },
    { mes: "Dez", valor: 15900 },
    { mes: "Jan", valor: 17500 },
  ];

  const investimentos = [
    { tipo: "Ações", valor: 8500, percentual: 48.6, cor: "#C8A951", rendimento: 12.5 },
    { tipo: "Fundos", valor: 4200, percentual: 24.0, cor: "#FFD700", rendimento: 8.3 },
    { tipo: "CDB", valor: 3000, percentual: 17.1, cor: "#A67C52", rendimento: 11.2 },
    { tipo: "Tesouro", valor: 1800, percentual: 10.3, cor: "#F5E6B3", rendimento: 9.8 },
  ];

  const totalInvestido = investimentos.reduce((sum, inv) => sum + inv.valor, 0);
  const rendimentoMedio = investimentos.reduce((sum, inv) => sum + (inv.rendimento * inv.percentual / 100), 0);

  return (
    <DashboardLayout>
      <div className="space-y-6 fade-in">
        <div>
          <h1 className="text-3xl font-bold font-playfair text-gradient-gold mb-2">
            Investimentos
          </h1>
          <p className="text-muted-foreground">
            Acompanhe seu portfólio e performance dos investimentos
          </p>
        </div>

        {/* Resumo do Portfólio */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card className="card-metric">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-elegant-bronze">
                Total Investido
              </CardTitle>
              <DollarSign className="h-4 w-4 text-classic-gold" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-champagne font-playfair">
                R$ {totalInvestido.toLocaleString('pt-BR')}
              </div>
              <p className="text-xs text-green-400 mt-1">
                ↗ +16.7% este ano
              </p>
            </CardContent>
          </Card>

          <Card className="card-metric">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-elegant-bronze">
                Rendimento Médio
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-classic-gold" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-champagne font-playfair">
                {rendimentoMedio.toFixed(1)}%
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                ao ano
              </p>
            </CardContent>
          </Card>

          <Card className="card-metric">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-elegant-bronze">
                Maior Posição
              </CardTitle>
              <PieChart className="h-4 w-4 text-classic-gold" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-champagne font-playfair">
                48.6%
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                em Ações
              </p>
            </CardContent>
          </Card>

          <Card className="card-metric">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-elegant-bronze">
                Meta Anual
              </CardTitle>
              <Target className="h-4 w-4 text-classic-gold" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-champagne font-playfair">
                68%
              </div>
              <p className="text-xs text-green-400 mt-1">
                R$ 20.000 objetivo
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Gráficos */}
        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="card-premium">
            <CardHeader>
              <CardTitle className="text-classic-gold font-playfair">Evolução do Portfólio</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={portfolioData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#2E2E2E" opacity={0.3} />
                  <XAxis dataKey="mes" stroke="#A67C52" fontSize={12} />
                  <YAxis stroke="#A67C52" fontSize={12} tickFormatter={(value) => `R$ ${(value / 1000).toFixed(0)}k`} />
                  <Tooltip 
                    formatter={(value: any) => [`R$ ${value.toLocaleString('pt-BR')}`, 'Valor']}
                    contentStyle={{ backgroundColor: '#2E2E2E', border: '1px solid #C8A951' }}
                  />
                  <Line
                    type="monotone"
                    dataKey="valor"
                    stroke="#C8A951"
                    strokeWidth={3}
                    dot={{ fill: "#C8A951", strokeWidth: 2, r: 6 }}
                    activeDot={{ r: 8, stroke: "#FFD700", strokeWidth: 2 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="card-premium">
            <CardHeader>
              <CardTitle className="text-classic-gold font-playfair">Distribuição do Portfólio</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <RechartsPieChart>
                  <Pie
                    data={investimentos}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="valor"
                  >
                    {investimentos.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.cor} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value: any) => [`R$ ${value.toLocaleString('pt-BR')}`, 'Valor']}
                    contentStyle={{ backgroundColor: '#2E2E2E', border: '1px solid #C8A951' }}
                  />
                </RechartsPieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Detalhamento dos Investimentos */}
        <Card className="card-premium">
          <CardHeader>
            <CardTitle className="text-classic-gold font-playfair">Detalhamento por Tipo</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {investimentos.map((investimento, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 rounded-full" style={{ backgroundColor: investimento.cor }}></div>
                      <h4 className="font-medium text-champagne">{investimento.tipo}</h4>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-champagne">
                        R$ {investimento.valor.toLocaleString('pt-BR')}
                      </p>
                      <p className="text-sm text-green-400">
                        +{investimento.rendimento}% a.a.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Participação no portfólio</span>
                      <span className="text-champagne">{investimento.percentual}%</span>
                    </div>
                    <Progress 
                      value={investimento.percentual} 
                      className="h-2"
                      style={{ 
                        background: '#1C1C1C',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Oportunidades e Recomendações */}
        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="card-premium">
            <CardHeader>
              <CardTitle className="text-classic-gold font-playfair">Oportunidades</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-deep-black/20 rounded-lg border-l-4 border-classic-gold">
                <h4 className="font-medium text-champagne mb-2">Diversificação em Renda Fixa</h4>
                <p className="text-sm text-muted-foreground">
                  Considere aumentar a posição em CDBs e Tesouro Direto para equilibrar o risco.
                </p>
              </div>
              <div className="p-4 bg-deep-black/20 rounded-lg border-l-4 border-elegant-bronze">
                <h4 className="font-medium text-champagne mb-2">Fundos Imobiliários</h4>
                <p className="text-sm text-muted-foreground">
                  Uma nova classe de ativos pode diversificar ainda mais seu portfólio.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="card-premium">
            <CardHeader>
              <CardTitle className="text-classic-gold font-playfair">Próximos Vencimentos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-deep-black/20 rounded-lg">
                <div>
                  <p className="font-medium text-champagne">CDB Banco XYZ</p>
                  <p className="text-sm text-muted-foreground">Vence em 15 dias</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-champagne">R$ 5.000</p>
                  <p className="text-sm text-green-400">+11.2%</p>
                </div>
              </div>
              <div className="flex items-center justify-between p-3 bg-deep-black/20 rounded-lg">
                <div>
                  <p className="font-medium text-champagne">Tesouro Prefixado</p>
                  <p className="text-sm text-muted-foreground">Vence em 45 dias</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-champagne">R$ 3.000</p>
                  <p className="text-sm text-green-400">+9.8%</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Investimentos;