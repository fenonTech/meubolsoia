import { Target, Plus, Calendar, CheckCircle } from "lucide-react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const Metas = () => {
  // Mock data para metas financeiras
  const metas = [
    {
      id: 1,
      titulo: "Reserva de Emergência",
      descricao: "6 meses de gastos fixos",
      valorAlvo: 18000,
      valorAtual: 12500,
      prazo: "2024-12-31",
      categoria: "Segurança",
      status: "Em andamento",
      cor: "#C8A951"
    },
    {
      id: 2,
      titulo: "Viagem para Europa",
      descricao: "Férias de 15 dias",
      valorAlvo: 8000,
      valorAtual: 8000,
      prazo: "2024-06-01",
      categoria: "Lazer",
      status: "Concluída",
      cor: "#FFD700"
    },
    {
      id: 3,
      titulo: "Entrada do Apartamento",
      descricao: "20% do valor do imóvel",
      valorAlvo: 50000,
      valorAtual: 15000,
      prazo: "2025-08-31",
      categoria: "Moradia",
      status: "Em andamento",
      cor: "#A67C52"
    },
    {
      id: 4,
      titulo: "Curso de Especialização",
      descricao: "MBA em Finanças",
      valorAlvo: 5000,
      valorAtual: 2500,
      prazo: "2024-07-31",
      categoria: "Educação",
      status: "Em andamento",
      cor: "#F5E6B3"
    },
  ];

  const metasAtivas = metas.filter(meta => meta.status === "Em andamento");
  const metasConcluidas = metas.filter(meta => meta.status === "Concluída");
  const totalAlvo = metasAtivas.reduce((sum, meta) => sum + meta.valorAlvo, 0);
  const totalEconomizado = metasAtivas.reduce((sum, meta) => sum + meta.valorAtual, 0);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Concluída": return "bg-green-400/20 text-green-400";
      case "Em andamento": return "bg-classic-gold/20 text-classic-gold";
      default: return "bg-muted/20 text-muted-foreground";
    }
  };

  const getProgressColor = (progresso: number) => {
    if (progresso >= 100) return "#10B981"; // green
    if (progresso >= 70) return "#C8A951"; // gold
    if (progresso >= 40) return "#FFD700"; // bright gold
    return "#A67C52"; // bronze
  };

  return (
    <DashboardLayout>
      <div className="space-y-6 fade-in">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold font-playfair text-gradient-gold mb-2">
              Metas Financeiras
            </h1>
            <p className="text-muted-foreground">
              Defina e acompanhe seus objetivos financeiros
            </p>
          </div>
          <Button className="btn-gold">
            <Plus className="mr-2 h-4 w-4" />
            Nova Meta
          </Button>
        </div>

        {/* Resumo das Metas */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card className="card-metric">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-elegant-bronze">
                Metas Ativas
              </CardTitle>
              <Target className="h-4 w-4 text-classic-gold" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-champagne font-playfair">
                {metasAtivas.length}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {metasConcluidas.length} concluídas
              </p>
            </CardContent>
          </Card>

          <Card className="card-metric">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-elegant-bronze">
                Total Economizado
              </CardTitle>
              <CheckCircle className="h-4 w-4 text-classic-gold" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-champagne font-playfair">
                R$ {totalEconomizado.toLocaleString('pt-BR')}
              </div>
              <p className="text-xs text-green-400 mt-1">
                {((totalEconomizado / totalAlvo) * 100).toFixed(1)}% do objetivo
              </p>
            </CardContent>
          </Card>

          <Card className="card-metric">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-elegant-bronze">
                Valor Alvo Total
              </CardTitle>
              <Calendar className="h-4 w-4 text-classic-gold" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-champagne font-playfair">
                R$ {totalAlvo.toLocaleString('pt-BR')}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                das metas ativas
              </p>
            </CardContent>
          </Card>

          <Card className="card-metric">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-elegant-bronze">
                Próximo Prazo
              </CardTitle>
              <Calendar className="h-4 w-4 text-classic-gold" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-champagne font-playfair">
                5 meses
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                Curso de Especialização
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Lista de Metas */}
        <div className="grid gap-6">
          <Card className="card-premium">
            <CardHeader>
              <CardTitle className="text-classic-gold font-playfair">Suas Metas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {metas.map((meta) => {
                const progresso = (meta.valorAtual / meta.valorAlvo) * 100;
                const diasRestantes = Math.ceil(
                  (new Date(meta.prazo).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
                );

                return (
                  <div key={meta.id} className="p-6 bg-deep-black/20 rounded-lg border border-luxury-gray hover:bg-luxury-gray/30 transition-colors">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-semibold text-champagne font-playfair">
                            {meta.titulo}
                          </h3>
                          <Badge className={getStatusColor(meta.status)}>
                            {meta.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-1">{meta.descricao}</p>
                        <p className="text-xs text-elegant-bronze">{meta.categoria}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-champagne font-playfair">
                          {progresso.toFixed(0)}%
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {diasRestantes > 0 ? `${diasRestantes} dias` : 'Prazo expirado'}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Progresso</span>
                        <span className="text-champagne">
                          R$ {meta.valorAtual.toLocaleString('pt-BR')} / R$ {meta.valorAlvo.toLocaleString('pt-BR')}
                        </span>
                      </div>
                      
                      <Progress 
                        value={progresso} 
                        className="h-3"
                        style={{
                          background: '#1C1C1C',
                        }}
                      />

                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>Prazo: {new Date(meta.prazo).toLocaleDateString('pt-BR')}</span>
                        </div>
                        <div className="text-sm">
                          <span className="text-muted-foreground">Faltam: </span>
                          <span className="text-classic-gold font-medium">
                            R$ {(meta.valorAlvo - meta.valorAtual).toLocaleString('pt-BR')}
                          </span>
                        </div>
                      </div>
                    </div>

                    {meta.status === "Em andamento" && (
                      <div className="flex gap-2 mt-4">
                        <Button size="sm" className="btn-outline-gold">
                          Adicionar Valor
                        </Button>
                        <Button size="sm" variant="ghost" className="text-muted-foreground hover:text-champagne">
                          Editar Meta
                        </Button>
                      </div>
                    )}
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </div>

        {/* Dicas e Estratégias */}
        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="card-premium">
            <CardHeader>
              <CardTitle className="text-classic-gold font-playfair">Dicas para Alcançar suas Metas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-deep-black/20 rounded-lg border-l-4 border-classic-gold">
                <h4 className="font-medium text-champagne mb-2">Automatize suas Economias</h4>
                <p className="text-sm text-muted-foreground">
                  Configure transferências automáticas para suas metas logo após receber o salário.
                </p>
              </div>
              <div className="p-4 bg-deep-black/20 rounded-lg border-l-4 border-elegant-bronze">
                <h4 className="font-medium text-champagne mb-2">Revise Mensalmente</h4>
                <p className="text-sm text-muted-foreground">
                  Acompanhe o progresso e ajuste os valores se necessário.
                </p>
              </div>
              <div className="p-4 bg-deep-black/20 rounded-lg border-l-4 border-bright-gold">
                <h4 className="font-medium text-champagne mb-2">Comemore Conquistas</h4>
                <p className="text-sm text-muted-foreground">
                  Reconheça e celebre quando atingir marcos importantes.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="card-premium">
            <CardHeader>
              <CardTitle className="text-classic-gold font-playfair">Sugestão de Economia Mensal</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground mb-4">
                Para atingir suas metas no prazo, você precisa economizar aproximadamente:
              </p>
              
              {metasAtivas.map((meta) => {
                const faltante = meta.valorAlvo - meta.valorAtual;
                const diasRestantes = Math.ceil(
                  (new Date(meta.prazo).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
                );
                const mesesRestantes = Math.max(1, Math.ceil(diasRestantes / 30));
                const valorMensal = faltante / mesesRestantes;

                return (
                  <div key={meta.id} className="flex items-center justify-between p-3 bg-deep-black/20 rounded-lg">
                    <div>
                      <p className="font-medium text-champagne text-sm">{meta.titulo}</p>
                      <p className="text-xs text-muted-foreground">{mesesRestantes} meses restantes</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-classic-gold">
                        R$ {valorMensal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                      </p>
                      <p className="text-xs text-muted-foreground">por mês</p>
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Metas;