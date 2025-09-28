import { Plus, TrendingUp, Calendar, DollarSign } from "lucide-react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Receitas = () => {
  // Mock data para receitas
  const receitas = [
    { id: 1, descricao: "Salário", valor: 5500.00, data: "2024-01-01", categoria: "Trabalho", status: "Recebido" },
    { id: 2, descricao: "Freelance Design", valor: 800.00, data: "2024-01-05", categoria: "Freelance", status: "Recebido" },
    { id: 3, descricao: "Dividendos", valor: 150.00, data: "2024-01-10", categoria: "Investimentos", status: "Recebido" },
    { id: 4, descricao: "Venda Online", valor: 320.00, data: "2024-01-15", categoria: "Negócio", status: "Pendente" },
  ];

  const totalReceitas = receitas.reduce((sum, receita) => sum + receita.valor, 0);

  return (
    <DashboardLayout>
      <div className="space-y-6 fade-in">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold font-playfair text-gradient-gold mb-2">
              Receitas
            </h1>
            <p className="text-muted-foreground">
              Gerencie suas fontes de renda
            </p>
          </div>
          <Button className="btn-gold">
            <Plus className="mr-2 h-4 w-4" />
            Nova Receita
          </Button>
        </div>

        {/* Resumo */}
        <div className="grid gap-4 md:grid-cols-3">
          <Card className="card-metric">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-elegant-bronze">
                Total do Mês
              </CardTitle>
              <DollarSign className="h-4 w-4 text-classic-gold" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-champagne font-playfair">
                R$ {totalReceitas.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </div>
              <p className="text-xs text-green-400 mt-1">
                ↗ +15% em relação ao mês anterior
              </p>
            </CardContent>
          </Card>

          <Card className="card-metric">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-elegant-bronze">
                Receitas Recebidas
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-classic-gold" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-champagne font-playfair">
                {receitas.filter(r => r.status === "Recebido").length}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                de {receitas.length} total
              </p>
            </CardContent>
          </Card>

          <Card className="card-metric">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-elegant-bronze">
                Maior Receita
              </CardTitle>
              <Calendar className="h-4 w-4 text-classic-gold" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-champagne font-playfair">
                R$ {Math.max(...receitas.map(r => r.valor)).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Salário
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Formulário de Nova Receita */}
        <Card className="card-premium">
          <CardHeader>
            <CardTitle className="text-classic-gold font-playfair">Adicionar Nova Receita</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="descricao" className="text-champagne">Descrição</Label>
                <Input 
                  id="descricao" 
                  placeholder="Ex: Salário, Freelance..." 
                  className="bg-luxury-gray border-luxury-gray focus:border-classic-gold"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="valor" className="text-champagne">Valor</Label>
                <Input 
                  id="valor" 
                  type="number" 
                  placeholder="R$ 0,00" 
                  className="bg-luxury-gray border-luxury-gray focus:border-classic-gold"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="categoria" className="text-champagne">Categoria</Label>
                <Select>
                  <SelectTrigger className="bg-luxury-gray border-luxury-gray focus:border-classic-gold">
                    <SelectValue placeholder="Selecione a categoria" />
                  </SelectTrigger>
                  <SelectContent className="bg-luxury-gray border-border">
                    <SelectItem value="trabalho">Trabalho</SelectItem>
                    <SelectItem value="freelance">Freelance</SelectItem>
                    <SelectItem value="investimentos">Investimentos</SelectItem>
                    <SelectItem value="negocio">Negócio</SelectItem>
                    <SelectItem value="outros">Outros</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="data" className="text-champagne">Data</Label>
                <Input 
                  id="data" 
                  type="date" 
                  className="bg-luxury-gray border-luxury-gray focus:border-classic-gold"
                />
              </div>
            </div>
            <Button className="btn-gold w-full">
              <Plus className="mr-2 h-4 w-4" />
              Adicionar Receita
            </Button>
          </CardContent>
        </Card>

        {/* Lista de Receitas */}
        <Card className="card-premium">
          <CardHeader>
            <CardTitle className="text-classic-gold font-playfair">Receitas Recentes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {receitas.map((receita) => (
                <div key={receita.id} className="flex items-center justify-between p-4 bg-deep-black/20 rounded-lg hover:bg-luxury-gray/30 transition-colors">
                  <div className="flex-1">
                    <h4 className="font-medium text-champagne">{receita.descricao}</h4>
                    <div className="flex items-center gap-4 mt-1">
                      <span className="text-xs text-muted-foreground">{receita.categoria}</span>
                      <span className="text-xs text-muted-foreground">{new Date(receita.data).toLocaleDateString('pt-BR')}</span>
                      <span className={`text-xs px-2 py-1 rounded-full ${receita.status === 'Recebido' ? 'bg-green-400/20 text-green-400' : 'bg-yellow-400/20 text-yellow-400'}`}>
                        {receita.status}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-semibold text-green-400">
                      +R$ {receita.valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Receitas;