import { Settings, User, Bell, Shield, Database, Palette } from "lucide-react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

const Configuracoes = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6 fade-in">
        <div>
          <h1 className="text-3xl font-bold font-playfair text-gradient-gold mb-2">
            Configurações
          </h1>
          <p className="text-muted-foreground">
            Personalize sua experiência no MeuBolso
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Perfil do Usuário */}
          <Card className="card-premium">
            <CardHeader>
              <CardTitle className="text-classic-gold font-playfair flex items-center gap-2">
                <User className="h-5 w-5" />
                Perfil do Usuário
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="nome" className="text-champagne">Nome Completo</Label>
                <Input 
                  id="nome" 
                  defaultValue="João Silva" 
                  className="bg-luxury-gray border-luxury-gray focus:border-classic-gold"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-champagne">E-mail</Label>
                <Input 
                  id="email" 
                  type="email" 
                  defaultValue="joao@exemplo.com" 
                  className="bg-luxury-gray border-luxury-gray focus:border-classic-gold"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="telefone" className="text-champagne">Telefone</Label>
                <Input 
                  id="telefone" 
                  placeholder="(11) 99999-9999" 
                  className="bg-luxury-gray border-luxury-gray focus:border-classic-gold"
                />
              </div>
              <Button className="btn-gold w-full">
                Salvar Alterações
              </Button>
            </CardContent>
          </Card>

          {/* Notificações */}
          <Card className="card-premium">
            <CardHeader>
              <CardTitle className="text-classic-gold font-playfair flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Preferências de Notificação
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-champagne font-medium">E-mail de Transações</p>
                  <p className="text-sm text-muted-foreground">Receba alertas de novas transações</p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <Separator className="bg-luxury-gray" />
              
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-champagne font-medium">Lembretes de Metas</p>
                  <p className="text-sm text-muted-foreground">Acompanhe o progresso das suas metas</p>
                </div>
                <Switch defaultChecked />
              </div>
              
              <Separator className="bg-luxury-gray" />
              
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-champagne font-medium">Relatórios Mensais</p>
                  <p className="text-sm text-muted-foreground">Resumo mensal das finanças</p>
                </div>
                <Switch />
              </div>
              
              <Separator className="bg-luxury-gray" />
              
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-champagne font-medium">Alertas de Orçamento</p>
                  <p className="text-sm text-muted-foreground">Aviso quando ultrapassar limites</p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>

          {/* Segurança */}
          <Card className="card-premium">
            <CardHeader>
              <CardTitle className="text-classic-gold font-playfair flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Segurança
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="senha-atual" className="text-champagne">Senha Atual</Label>
                <Input 
                  id="senha-atual" 
                  type="password" 
                  placeholder="••••••••" 
                  className="bg-luxury-gray border-luxury-gray focus:border-classic-gold"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="nova-senha" className="text-champagne">Nova Senha</Label>
                <Input 
                  id="nova-senha" 
                  type="password" 
                  placeholder="••••••••" 
                  className="bg-luxury-gray border-luxury-gray focus:border-classic-gold"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmar-senha" className="text-champagne">Confirmar Senha</Label>
                <Input 
                  id="confirmar-senha" 
                  type="password" 
                  placeholder="••••••••" 
                  className="bg-luxury-gray border-luxury-gray focus:border-classic-gold"
                />
              </div>
              
              <Separator className="bg-luxury-gray" />
              
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-champagne font-medium">Autenticação 2FA</p>
                  <p className="text-sm text-muted-foreground">Maior segurança para sua conta</p>
                </div>
                <Switch />
              </div>
              
              <Button className="btn-outline-gold w-full">
                Atualizar Senha
              </Button>
            </CardContent>
          </Card>

          {/* Integrações */}
          <Card className="card-premium">
            <CardHeader>
              <CardTitle className="text-classic-gold font-playfair flex items-center gap-2">
                <Database className="h-5 w-5" />
                Integrações
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-deep-black/20 rounded-lg border border-luxury-gray">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-champagne">Sincronização Bancária</h4>
                  <span className="text-xs bg-green-400/20 text-green-400 px-2 py-1 rounded-full">Ativo</span>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  Conecte suas contas bancárias para importação automática
                </p>
                <Button size="sm" className="btn-outline-gold">
                  Gerenciar Contas
                </Button>
              </div>
              
              <div className="p-4 bg-deep-black/20 rounded-lg border border-luxury-gray">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-champagne">Automação n8n</h4>
                  <span className="text-xs bg-yellow-400/20 text-yellow-400 px-2 py-1 rounded-full">Configurar</span>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  Automatize fluxos financeiros com workflows personalizados
                </p>
                <Button size="sm" className="btn-gold">
                  Configurar Workflows
                </Button>
              </div>
              
              <div className="p-4 bg-deep-black/20 rounded-lg border border-luxury-gray">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium text-champagne">API de Investimentos</h4>
                  <span className="text-xs bg-gray-400/20 text-gray-400 px-2 py-1 rounded-full">Inativo</span>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  Sincronize dados da sua corretora de investimentos
                </p>
                <Button size="sm" className="btn-outline-gold" disabled>
                  Em Breve
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Aparência */}
          <Card className="card-premium lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-classic-gold font-playfair flex items-center gap-2">
                <Palette className="h-5 w-5" />
                Aparência e Preferências
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="space-y-2">
                  <Label htmlFor="moeda" className="text-champagne">Moeda Padrão</Label>
                  <Select defaultValue="brl">
                    <SelectTrigger className="bg-luxury-gray border-luxury-gray focus:border-classic-gold">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-luxury-gray border-border">
                      <SelectItem value="brl">Real Brasileiro (R$)</SelectItem>
                      <SelectItem value="usd">Dólar Americano ($)</SelectItem>
                      <SelectItem value="eur">Euro (€)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="idioma" className="text-champagne">Idioma</Label>
                  <Select defaultValue="pt-br">
                    <SelectTrigger className="bg-luxury-gray border-luxury-gray focus:border-classic-gold">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-luxury-gray border-border">
                      <SelectItem value="pt-br">Português (BR)</SelectItem>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="es">Español</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="timezone" className="text-champagne">Fuso Horário</Label>
                  <Select defaultValue="america-sao-paulo">
                    <SelectTrigger className="bg-luxury-gray border-luxury-gray focus:border-classic-gold">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="bg-luxury-gray border-border">
                      <SelectItem value="america-sao-paulo">São Paulo (GMT-3)</SelectItem>
                      <SelectItem value="america-new-york">New York (GMT-5)</SelectItem>
                      <SelectItem value="europe-london">London (GMT+0)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <Button className="btn-gold">
                  <Settings className="mr-2 h-4 w-4" />
                  Salvar Configurações
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Configuracoes;