import { Plus, Download, RefreshCw, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function QuickActions() {
  return (
    <Card className="card-premium">
      <CardHeader>
        <CardTitle className="text-classic-gold font-playfair">Ações Rápidas</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <Button className="btn-gold w-full justify-start">
          <Plus className="mr-2 h-4 w-4" />
          Nova Transação
        </Button>
        
        <Button className="btn-outline-gold w-full justify-start">
          <Target className="mr-2 h-4 w-4" />
          Definir Meta
        </Button>
        
        <Button className="btn-outline-gold w-full justify-start">
          <RefreshCw className="mr-2 h-4 w-4" />
          Sincronizar Bancos
        </Button>
        
        <Button className="btn-outline-gold w-full justify-start">
          <Download className="mr-2 h-4 w-4" />
          Exportar Relatório
        </Button>
        
        <div className="mt-6 p-4 bg-deep-black/30 rounded-lg border border-luxury-gray">
          <h4 className="text-sm font-medium text-classic-gold mb-2">
            Integração n8n
          </h4>
          <p className="text-xs text-muted-foreground mb-3">
            Automatize suas finanças com workflows personalizados
          </p>
          <Button size="sm" className="btn-gold w-full">
            Configurar Automação
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}