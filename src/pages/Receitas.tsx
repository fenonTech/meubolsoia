import { Plus, TrendingUp, Calendar, DollarSign, Briefcase, Home, ShoppingBag } from "lucide-react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const Receitas = () => {
  // Mock data para receitas
  const receitas = [
    { id: 1, descricao: "Salário - Empresa XYZ", valor: 5500.00, data: "2024-01-05", categoria: "Salário", recorrente: true },
    { id: 2, descricao: "Freelance - Design", valor: 800.00, data: "2024-01-12", categoria: "Freelance", recorrente: false },
    { id: 3, descricao: "Dividendos - Ações", valor: 235.00, data: "2024-01-15", categoria: "Investimentos", recorrente: false },
    { id: 4, descricao: "Aluguel Recebido", valor: 1200.00, data: "2024-01-10", categoria: "Aluguel", recorrente: true },
    { id: 5, descricao: "Venda Produto", valor: 450.00, data: "2024-01-18", categoria: "Vendas", recorrente: false },
  ];

  const categorias = [
    { name: "Salário", value: 5500, color: "#22D3EE", icon: DollarSign },
    { name: "Freelance", value: 800, color: "#C8A951", icon: Briefcase },
    { name: "Investimentos", value: 235, color: "#FFD700", icon: TrendingUp },
    { name: "Aluguel", value: 1200, color: "#A67C52", icon: Home },
    { name: "Vendas", value: 450, color: "#F5E6B3", icon: ShoppingBag },
  ];

  const receitasMensais = [
    { mes: "Set", valor: 7200 },
    { mes: "Out", valor: 7800 },
    { mes: "Nov", valor: 7500 },
    { mes: "Dez", valor: 8000 },
    { mes: "Jan", valor: 8185 },
  ];

  const totalReceitas = receitas.reduce((sum, receita) => sum + receita.valor, 0);

  return (
    <DashboardLayout>
      <div className="space-y-6 fade-in">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold text-bright-gold mb-1">
              Receitas
            </h1>
            <p className="text-muted-foreground text-sm">
              Acompanhe suas entradas e fontes de renda
            </p>
          </div>
          <Button className="btn-gold">
            <Plus className="mr-2 h-4 w-4" />
            Nova Receita
          </Button>
        </div>

        {/* Cards de Resumo */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card className="card-metric">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-elegant-bronze">
                Total do Mês
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-green-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-champagne font-playfair">
                R$ {totalReceitas.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </div>
              <p className="text-xs text-green-400 mt-1">
                ↗ +12% em relação ao mês anterior
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
              <CardTitle className="text-classic-gold font-playfair">Receitas por Categoria</CardTitle>
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
                <BarChart data={receitasMensais}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#2E2E2E" opacity={0.3} />
                  <XAxis dataKey="mes" stroke="#A67C52" fontSize={12} />
                  <YAxis stroke="#A67C52" fontSize={12} tickFormatter={(value) => `R$ ${(value / 1000).toFixed(0)}k`} />
                  <Tooltip 
                    formatter={(value: any) => [`R$ ${value.toLocaleString('pt-BR')}`, 'Receitas']}
                    contentStyle={{ backgroundColor: '#2E2E2E', border: '1px solid #C8A951' }}
                  />
                  <Bar dataKey="valor" fill="#22D3EE" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Lista de Receitas Recentes */}
        <Card className="card-premium">
          <CardHeader>
            <CardTitle className="text-classic-gold font-playfair">Receitas Recentes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 text-muted-foreground font-medium">Descrição</th>
                    <th className="text-left py-2 text-muted-foreground font-medium">Categoria</th>
                    <th className="text-left py-2 text-muted-foreground font-medium">Data</th>
                    <th className="text-left py-2 text-muted-foreground font-medium">Tipo</th>
                    <th className="text-right py-2 text-muted-foreground font-medium">Valor</th>
                  </tr>
                </thead>
                <tbody>
                  {receitas.map((receita) => (
                    <tr key={receita.id} className="border-b border-border/50 hover:bg-luxury-gray/30 transition-colors">
                      <td className="py-3 text-champagne font-medium">{receita.descricao}</td>
                      <td className="py-3 text-muted-foreground">{receita.categoria}</td>
                      <td className="py-3 text-muted-foreground">{new Date(receita.data).toLocaleDateString('pt-BR')}</td>
                      <td className="py-3">
                        <span className={`text-xs px-2 py-1 rounded ${
                          receita.recorrente ? 'bg-blue-500/20 text-blue-400' : 'bg-gray-500/20 text-gray-400'
                        }`}>
                          {receita.recorrente ? 'Recorrente' : 'Única'}
                        </span>
                      </td>
                      <td className="py-3 text-right">
                        <div className="text-lg font-semibold text-green-400">
                          +R$ {receita.valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
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

export default Receitas;