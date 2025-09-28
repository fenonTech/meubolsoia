import { Minus, TrendingDown, ShoppingCart, Home, Car } from "lucide-react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const Despesas = () => {
  // Mock data para despesas
  const despesas = [
    { id: 1, descricao: "Supermercado ABC", valor: 287.50, data: "2024-01-20", categoria: "Alimentação" },
    { id: 2, descricao: "Posto de Gasolina", valor: 150.00, data: "2024-01-19", categoria: "Transporte" },
    { id: 3, descricao: "Aluguel", valor: 1200.00, data: "2024-01-01", categoria: "Moradia" },
    { id: 4, descricao: "Streaming Netflix", valor: 45.90, data: "2024-01-15", categoria: "Lazer" },
    { id: 5, descricao: "Farmácia", valor: 85.30, data: "2024-01-18", categoria: "Saúde" },
  ];

  const categorias = [
    { name: "Alimentação", value: 850, color: "#C8A951", icon: ShoppingCart },
    { name: "Transporte", value: 450, color: "#FFD700", icon: Car },
    { name: "Moradia", value: 1200, color: "#A67C52", icon: Home },
    { name: "Lazer", value: 200, color: "#F5E6B3", icon: TrendingDown },
    { name: "Saúde", value: 300, color: "#2E2E2E", icon: TrendingDown },
  ];

  const despesasMensais = [
    { mes: "Set", valor: 2800 },
    { mes: "Out", valor: 2400 },
    { mes: "Nov", valor: 2600 },
    { mes: "Dez", valor: 2200 },
    { mes: "Jan", valor: 3000 },
  ];

  const totalDespesas = despesas.reduce((sum, despesa) => sum + despesa.valor, 0);

  return (
    <DashboardLayout>
      <div className="space-y-6 fade-in">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold font-playfair text-gradient-gold mb-2">
              Despesas
            </h1>
            <p className="text-muted-foreground">
              Controle seus gastos e otimize seu orçamento
            </p>
          </div>
          <Button className="btn-gold">
            <Minus className="mr-2 h-4 w-4" />
            Nova Despesa
          </Button>
        </div>

        {/* Cards de Resumo */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card className="card-metric">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-elegant-bronze">
                Total do Mês
              </CardTitle>
              <TrendingDown className="h-4 w-4 text-red-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-champagne font-playfair">
                R$ {totalDespesas.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </div>
              <p className="text-xs text-red-400 mt-1">
                ↗ +8% em relação ao mês anterior
              </p>
            </CardContent>
          </Card>

          {categorias.slice(0, 3).map((categoria, index) => (
            <Card key={index} className="card-metric">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-elegant-bronze">
                  {categoria.name}
                </CardTitle>
                <categoria.icon className="h-4 w-4 text-classic-gold" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-champagne font-playfair">
                  R$ {categoria.value.toLocaleString('pt-BR')}
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  {((categoria.value / categorias.reduce((sum, c) => sum + c.value, 0)) * 100).toFixed(1)}% do total
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Gráficos */}
        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="card-premium">
            <CardHeader>
              <CardTitle className="text-classic-gold font-playfair">Despesas por Categoria</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={categorias}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {categorias.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value: any) => [`R$ ${value.toLocaleString('pt-BR')}`, 'Valor']}
                    contentStyle={{ backgroundColor: '#2E2E2E', border: '1px solid #C8A951' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="card-premium">
            <CardHeader>
              <CardTitle className="text-classic-gold font-playfair">Evolução Mensal</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={despesasMensais}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#2E2E2E" opacity={0.3} />
                  <XAxis dataKey="mes" stroke="#A67C52" fontSize={12} />
                  <YAxis stroke="#A67C52" fontSize={12} tickFormatter={(value) => `R$ ${(value / 1000).toFixed(0)}k`} />
                  <Tooltip 
                    formatter={(value: any) => [`R$ ${value.toLocaleString('pt-BR')}`, 'Despesas']}
                    contentStyle={{ backgroundColor: '#2E2E2E', border: '1px solid #C8A951' }}
                  />
                  <Bar dataKey="valor" fill="#C8A951" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Lista de Despesas Recentes */}
        <Card className="card-premium">
          <CardHeader>
            <CardTitle className="text-classic-gold font-playfair">Despesas Recentes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {despesas.map((despesa) => (
                <div key={despesa.id} className="flex items-center justify-between p-4 bg-deep-black/20 rounded-lg hover:bg-luxury-gray/30 transition-colors">
                  <div className="flex-1">
                    <h4 className="font-medium text-champagne">{despesa.descricao}</h4>
                    <div className="flex items-center gap-4 mt-1">
                      <span className="text-xs text-muted-foreground">{despesa.categoria}</span>
                      <span className="text-xs text-muted-foreground">{new Date(despesa.data).toLocaleDateString('pt-BR')}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-semibold text-red-400">
                      -R$ {despesa.valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Categorias Detalhadas */}
        <Card className="card-premium">
          <CardHeader>
            <CardTitle className="text-classic-gold font-playfair">Análise por Categoria</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {categorias.map((categoria, index) => {
                const IconComponent = categoria.icon;
                return (
                  <div key={index} className="flex items-center gap-3 p-4 bg-deep-black/20 rounded-lg">
                    <div className="p-2 rounded-lg" style={{ backgroundColor: `${categoria.color}20` }}>
                      <IconComponent className="h-5 w-5" style={{ color: categoria.color }} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-champagne">{categoria.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        R$ {categoria.value.toLocaleString('pt-BR')}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-muted-foreground">
                        {((categoria.value / categorias.reduce((sum, c) => sum + c.value, 0)) * 100).toFixed(1)}%
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Despesas;