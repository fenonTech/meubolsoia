import { Bell, CheckCircle, AlertTriangle, Info, X } from "lucide-react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Notificacoes = () => {
  // Mock data para notificações
  const notificacoes = [
    {
      id: 1,
      tipo: "transacao",
      titulo: "Nova transação detectada",
      descricao: "Débito de R$ 150,00 no cartão ****1234",
      tempo: "Há 2 minutos",
      lida: false,
      icone: AlertTriangle,
      cor: "text-yellow-400"
    },
    {
      id: 2,
      tipo: "meta",
      titulo: "Meta atingida! 🎉",
      descricao: "Você atingiu 100% da meta 'Viagem para Europa'",
      tempo: "Há 1 hora",
      lida: false,
      icone: CheckCircle,
      cor: "text-green-400"
    },
    {
      id: 3,
      tipo: "investimento",
      titulo: "Dividendos recebidos",
      descricao: "R$ 75,50 em dividendos foram creditados",
      tempo: "Há 3 horas",
      lida: true,
      icone: Info,
      cor: "text-classic-gold"
    },
    {
      id: 4,
      tipo: "meta",
      titulo: "Lembrete de Meta",
      descricao: "Faltam R$ 500,00 para atingir sua meta de reserva de emergência",
      tempo: "Há 1 dia",
      lida: true,
      icone: Bell,
      cor: "text-blue-400"
    },
    {
      id: 5,
      tipo: "transacao",
      titulo: "Receita registrada",
      descricao: "Freelance de R$ 800,00 foi adicionado às suas receitas",
      tempo: "Há 2 dias",
      lida: true,
      icone: CheckCircle,
      cor: "text-green-400"
    },
    {
      id: 6,
      tipo: "sistema",
      titulo: "Sincronização concluída",
      descricao: "Suas contas bancárias foram sincronizadas com sucesso",
      tempo: "Há 3 dias",
      lida: true,
      icone: Info,
      cor: "text-classic-gold"
    }
  ];

  const notificacaoesNaoLidas = notificacoes.filter(n => !n.lida);
  const notificacoesLidas = notificacoes.filter(n => n.lida);

  const getTipoColor = (tipo: string) => {
    switch (tipo) {
      case "transacao": return "bg-yellow-400/20 text-yellow-400";
      case "meta": return "bg-green-400/20 text-green-400";
      case "investimento": return "bg-classic-gold/20 text-classic-gold";
      case "sistema": return "bg-blue-400/20 text-blue-400";
      default: return "bg-muted/20 text-muted-foreground";
    }
  };

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
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold font-playfair text-gradient-gold mb-2">
              Notificações
            </h1>
            <p className="text-muted-foreground">
              Acompanhe todas as atualizações do seu MeuBolso
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" className="btn-outline-gold">
              Marcar todas como lidas
            </Button>
            <Button className="btn-gold">
              <Bell className="mr-2 h-4 w-4" />
              Configurar
            </Button>
          </div>
        </div>

        {/* Estatísticas */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card className="card-metric">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-elegant-bronze">
                Não Lidas
              </CardTitle>
              <Bell className="h-4 w-4 text-classic-gold" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-champagne font-playfair">
                {notificacaoesNaoLidas.length}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {notificacoes.length} total
              </p>
            </CardContent>
          </Card>

          <Card className="card-metric">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-elegant-bronze">
                Transações
              </CardTitle>
              <AlertTriangle className="h-4 w-4 text-yellow-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-champagne font-playfair">
                {notificacoes.filter(n => n.tipo === "transacao").length}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                alertas financeiros
              </p>
            </CardContent>
          </Card>

          <Card className="card-metric">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-elegant-bronze">
                Metas
              </CardTitle>
              <CheckCircle className="h-4 w-4 text-green-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-champagne font-playfair">
                {notificacoes.filter(n => n.tipo === "meta").length}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                atualizações de progresso
              </p>
            </CardContent>
          </Card>

          <Card className="card-metric">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-elegant-bronze">
                Investimentos
              </CardTitle>
              <Info className="h-4 w-4 text-classic-gold" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-champagne font-playfair">
                {notificacoes.filter(n => n.tipo === "investimento").length}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                atualizações de portfólio
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Notificações Não Lidas */}
        {notificacaoesNaoLidas.length > 0 && (
          <Card className="card-premium">
            <CardHeader>
              <CardTitle className="text-classic-gold font-playfair flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Não Lidas ({notificacaoesNaoLidas.length})
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {notificacaoesNaoLidas.map((notificacao) => {
                const IconComponent = notificacao.icone;
                return (
                  <div key={notificacao.id} className="flex items-start gap-4 p-4 bg-deep-black/20 rounded-lg border-l-4 border-classic-gold hover:bg-luxury-gray/30 transition-colors">
                    <div className={`p-2 rounded-full bg-deep-black/30 ${notificacao.cor}`}>
                      <IconComponent className="h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="font-medium text-champagne">{notificacao.titulo}</h4>
                          <Badge className={getTipoColor(notificacao.tipo)} variant="outline">
                            {getTipoLabel(notificacao.tipo)}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-muted-foreground">{notificacao.tempo}</span>
                          <Button size="sm" variant="ghost" className="h-6 w-6 p-0 text-muted-foreground hover:text-destructive">
                            <X className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">{notificacao.descricao}</p>
                      <div className="flex gap-2 mt-3">
                        <Button size="sm" className="btn-outline-gold">
                          Marcar como lida
                        </Button>
                        <Button size="sm" variant="ghost" className="text-muted-foreground hover:text-champagne">
                          Ver detalhes
                        </Button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>
        )}

        {/* Notificações Lidas */}
        <Card className="card-premium">
          <CardHeader>
            <CardTitle className="text-classic-gold font-playfair">
              Recentes ({notificacoesLidas.length})
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {notificacoesLidas.map((notificacao) => {
              const IconComponent = notificacao.icone;
              return (
                <div key={notificacao.id} className="flex items-start gap-4 p-4 bg-deep-black/10 rounded-lg opacity-75 hover:opacity-100 transition-opacity">
                  <div className={`p-2 rounded-full bg-deep-black/30 ${notificacao.cor}`}>
                    <IconComponent className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-medium text-champagne">{notificacao.titulo}</h4>
                        <Badge className={getTipoColor(notificacao.tipo)} variant="outline">
                          {getTipoLabel(notificacao.tipo)}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground">{notificacao.tempo}</span>
                        <Button size="sm" variant="ghost" className="h-6 w-6 p-0 text-muted-foreground hover:text-destructive">
                          <X className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{notificacao.descricao}</p>
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>

        {/* Configurações de Notificação */}
        <Card className="card-premium">
          <CardHeader>
            <CardTitle className="text-classic-gold font-playfair">Configurações Rápidas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <div className="p-4 bg-deep-black/20 rounded-lg text-center">
                <AlertTriangle className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
                <h4 className="font-medium text-champagne mb-1">Transações</h4>
                <p className="text-xs text-muted-foreground mb-3">Alertas em tempo real</p>
                <Button size="sm" className="btn-outline-gold w-full">
                  Configurar
                </Button>
              </div>

              <div className="p-4 bg-deep-black/20 rounded-lg text-center">
                <CheckCircle className="h-8 w-8 text-green-400 mx-auto mb-2" />
                <h4 className="font-medium text-champagne mb-1">Metas</h4>
                <p className="text-xs text-muted-foreground mb-3">Progresso e lembretes</p>
                <Button size="sm" className="btn-outline-gold w-full">
                  Configurar
                </Button>
              </div>

              <div className="p-4 bg-deep-black/20 rounded-lg text-center">
                <Info className="h-8 w-8 text-classic-gold mx-auto mb-2" />
                <h4 className="font-medium text-champagne mb-1">Investimentos</h4>
                <p className="text-xs text-muted-foreground mb-3">Updates de portfólio</p>
                <Button size="sm" className="btn-outline-gold w-full">
                  Configurar
                </Button>
              </div>

              <div className="p-4 bg-deep-black/20 rounded-lg text-center">
                <Bell className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                <h4 className="font-medium text-champagne mb-1">Relatórios</h4>
                <p className="text-xs text-muted-foreground mb-3">Resumos periódicos</p>
                <Button size="sm" className="btn-outline-gold w-full">
                  Configurar
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Notificacoes;