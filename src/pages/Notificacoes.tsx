import { Bell, CheckCircle, AlertTriangle, Info, X, TrendingUp, TrendingDown, DollarSign, Target, Calendar } from "lucide-react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const Notificacoes = () => {
  const [filter, setFilter] = useState<"todas" | "naoLidas">("naoLidas");
  
  // Mock data para notificações
  const notificacoes = [
    {
      id: 1,
      tipo: "transacao",
      titulo: "Despesa cadastrada",
      descricao: "Supermercado Extra - R$ 245,80",
      tempo: "Há 5 minutos",
      lida: false,
      icone: TrendingDown,
      cor: "text-red-400"
    },
    {
      id: 2,
      tipo: "meta",
      titulo: "Meta atingida! 🎉",
      descricao: "Você atingiu 100% da meta 'Reserva de Emergência'",
      tempo: "Há 1 hora",
      lida: false,
      icone: Target,
      cor: "text-green-400"
    },
    {
      id: 3,
      tipo: "investimento",
      titulo: "Dividendos recebidos",
      descricao: "R$ 125,50 em dividendos creditados na sua conta",
      tempo: "Há 2 horas",
      lida: false,
      icone: TrendingUp,
      cor: "text-green-400"
    },
    {
      id: 4,
      tipo: "transacao",
      titulo: "Receita registrada",
      descricao: "Salário - R$ 5.800,00",
      tempo: "Há 3 horas",
      lida: false,
      icone: DollarSign,
      cor: "text-green-400"
    },
    {
      id: 5,
      tipo: "meta",
      titulo: "Lembrete de Meta",
      descricao: "Faltam R$ 500,00 para atingir sua meta 'Viagem Europa'",
      tempo: "Há 5 horas",
      lida: true,
      icone: Target,
      cor: "text-yellow-400"
    },
    {
      id: 6,
      tipo: "sistema",
      titulo: "Fatura do cartão disponível",
      descricao: "Fatura do Nubank com vencimento em 15/10 - R$ 1.234,56",
      tempo: "Há 1 dia",
      lida: true,
      icone: Calendar,
      cor: "text-blue-400"
    },
    {
      id: 7,
      tipo: "transacao",
      titulo: "Despesa recorrente",
      descricao: "Netflix - R$ 39,90 debitado automaticamente",
      tempo: "Há 1 dia",
      lida: true,
      icone: TrendingDown,
      cor: "text-red-400"
    },
    {
      id: 8,
      tipo: "investimento",
      titulo: "Valorização de carteira",
      descricao: "Sua carteira valorizou 2.3% neste mês",
      tempo: "Há 2 dias",
      lida: true,
      icone: TrendingUp,
      cor: "text-green-400"
    },
    {
      id: 9,
      tipo: "sistema",
      titulo: "Sincronização concluída",
      descricao: "Suas contas foram sincronizadas com sucesso",
      tempo: "Há 3 dias",
      lida: true,
      icone: CheckCircle,
      cor: "text-green-400"
    },
    {
      id: 10,
      tipo: "meta",
      titulo: "Nova meta criada",
      descricao: "Meta 'Carro Novo' foi criada com sucesso",
      tempo: "Há 4 dias",
      lida: true,
      icone: Target,
      cor: "text-blue-400"
    }
  ];

  const notificacaoesNaoLidas = notificacoes.filter(n => !n.lida);
  const notificacoesFiltradas = filter === "naoLidas" ? notificacaoesNaoLidas : notificacoes;

  const getTipoLabel = (tipo: string) => {
    switch (tipo) {
      case "transacao": return "Transação";
      case "meta": return "Meta";
      case "investimento": return "Investimento";
      case "sistema": return "Sistema";
      default: return "Geral";
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6 fade-in">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Notificações
            </h1>
            <p className="text-muted-foreground">
              {notificacaoesNaoLidas.length} não lida(s) · {notificacoes.length} total
            </p>
          </div>
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => {/* Marcar todas como lidas */}}
            >
              <CheckCircle className="mr-2 h-4 w-4" />
              Marcar todas como lidas
            </Button>
          </div>
        </div>

        {/* Filtros */}
        <div className="flex gap-2">
          <Button
            variant={filter === "naoLidas" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter("naoLidas")}
          >
            <Bell className="mr-2 h-4 w-4" />
            Não lidas ({notificacaoesNaoLidas.length})
          </Button>
          <Button
            variant={filter === "todas" ? "default" : "outline"}
            size="sm"
            onClick={() => setFilter("todas")}
          >
            Todas ({notificacoes.length})
          </Button>
        </div>

        {/* Lista de Notificações */}
        <div className="space-y-3">
          {notificacoesFiltradas.length === 0 ? (
            <Card>
              <CardContent className="p-12 text-center">
                <Bell className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium text-foreground mb-2">
                  Nenhuma notificação
                </h3>
                <p className="text-sm text-muted-foreground">
                  Você está em dia com todas as suas notificações!
                </p>
              </CardContent>
            </Card>
          ) : (
            notificacoesFiltradas.map((notificacao) => {
              const IconComponent = notificacao.icone;
              return (
                <Card 
                  key={notificacao.id} 
                  className={`transition-all hover:shadow-md ${
                    !notificacao.lida ? 'border-l-4 border-l-primary bg-accent/5' : ''
                  }`}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      {/* Ícone */}
                      <div className={`p-2.5 rounded-full bg-background ${notificacao.cor}`}>
                        <IconComponent className="h-5 w-5" />
                      </div>
                      
                      {/* Conteúdo */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <h4 className={`font-medium ${!notificacao.lida ? 'text-foreground' : 'text-muted-foreground'}`}>
                            {notificacao.titulo}
                          </h4>
                          {!notificacao.lida && (
                            <div className="h-2 w-2 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                          )}
                        </div>
                        
                        <p className="text-sm text-muted-foreground mb-2">
                          {notificacao.descricao}
                        </p>
                        
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                          <span>{notificacao.tempo}</span>
                          <span>•</span>
                          <Badge variant="outline" className="text-xs">
                            {getTipoLabel(notificacao.tipo)}
                          </Badge>
                        </div>
                      </div>
                      
                      {/* Ações */}
                      <div className="flex items-center gap-1">
                        {!notificacao.lida && (
                          <Button
                            size="sm"
                            variant="ghost"
                            className="h-8 w-8 p-0"
                            onClick={() => {/* Marcar como lida */}}
                          >
                            <CheckCircle className="h-4 w-4" />
                          </Button>
                        )}
                        <Button
                          size="sm"
                          variant="ghost"
                          className="h-8 w-8 p-0 text-muted-foreground hover:text-destructive"
                          onClick={() => {/* Remover */}}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })
          )}
        </div>

        {/* Estatísticas por Tipo */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Resumo por categoria</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-accent/50">
                <TrendingDown className="h-8 w-8 text-red-400" />
                <div>
                  <p className="text-xs text-muted-foreground">Transações</p>
                  <p className="text-lg font-semibold">
                    {notificacoes.filter(n => n.tipo === "transacao").length}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 rounded-lg bg-accent/50">
                <Target className="h-8 w-8 text-blue-400" />
                <div>
                  <p className="text-xs text-muted-foreground">Metas</p>
                  <p className="text-lg font-semibold">
                    {notificacoes.filter(n => n.tipo === "meta").length}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 rounded-lg bg-accent/50">
                <TrendingUp className="h-8 w-8 text-green-400" />
                <div>
                  <p className="text-xs text-muted-foreground">Investimentos</p>
                  <p className="text-lg font-semibold">
                    {notificacoes.filter(n => n.tipo === "investimento").length}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 rounded-lg bg-accent/50">
                <Info className="h-8 w-8 text-yellow-400" />
                <div>
                  <p className="text-xs text-muted-foreground">Sistema</p>
                  <p className="text-lg font-semibold">
                    {notificacoes.filter(n => n.tipo === "sistema").length}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Notificacoes;
