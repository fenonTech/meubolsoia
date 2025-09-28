import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Receitas from "./pages/Receitas";
import Despesas from "./pages/Despesas";
import Investimentos from "./pages/Investimentos";
import Metas from "./pages/Metas";
import Configuracoes from "./pages/Configuracoes";
import Notificacoes from "./pages/Notificacoes";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/receitas" element={<Receitas />} />
          <Route path="/despesas" element={<Despesas />} />
          <Route path="/investimentos" element={<Investimentos />} />
          <Route path="/metas" element={<Metas />} />
          <Route path="/configuracoes" element={<Configuracoes />} />
          <Route path="/notificacoes" element={<Notificacoes />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;