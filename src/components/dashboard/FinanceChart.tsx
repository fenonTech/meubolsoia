import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Mock data for charts
const monthlyData = [
  { month: "Jan", receitas: 8500, despesas: 5200 },
  { month: "Fev", receitas: 8200, despesas: 4800 },
  { month: "Mar", receitas: 9100, despesas: 5500 },
  { month: "Abr", receitas: 8800, despesas: 5100 },
  { month: "Mai", receitas: 9500, despesas: 5800 },
  { month: "Jun", receitas: 9200, despesas: 5400 },
];

const expenseCategories = [
  { name: "Alimentação", value: 1200, color: "#C8A951" },
  { name: "Transporte", value: 800, color: "#FFD700" },
  { name: "Moradia", value: 2500, color: "#A67C52" },
  { name: "Lazer", value: 400, color: "#F5E6B3" },
  { name: "Outros", value: 500, color: "#2E2E2E" },
];

interface FinanceChartProps {
  type: "line" | "pie";
  title: string;
}

export function FinanceChart({ type, title }: FinanceChartProps) {
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-luxury-gray border border-border rounded-lg p-3 shadow-lg">
          <p className="text-champagne font-medium">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} style={{ color: entry.color }}>
              {entry.dataKey}: R$ {entry.value?.toLocaleString('pt-BR')}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  const PieTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0];
      return (
        <div className="bg-luxury-gray border border-border rounded-lg p-3 shadow-lg">
          <p className="text-champagne font-medium">{data.name}</p>
          <p style={{ color: data.payload.color }}>
            R$ {data.value?.toLocaleString('pt-BR')}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="card-premium">
      <CardHeader>
        <CardTitle className="text-classic-gold font-playfair">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {type === "line" ? (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlyData}>
              <CartesianGrid 
                strokeDasharray="3 3" 
                stroke="#2E2E2E"
                opacity={0.3}
              />
              <XAxis 
                dataKey="month" 
                stroke="#A67C52"
                fontSize={12}
              />
              <YAxis 
                stroke="#A67C52"
                fontSize={12}
                tickFormatter={(value) => `R$ ${(value / 1000).toFixed(0)}k`}
              />
              <Tooltip content={<CustomTooltip />} />
              <Line
                type="monotone"
                dataKey="receitas"
                stroke="#C8A951"
                strokeWidth={3}
                dot={{ fill: "#C8A951", strokeWidth: 2, r: 6 }}
                activeDot={{ r: 8, stroke: "#FFD700", strokeWidth: 2 }}
              />
              <Line
                type="monotone"
                dataKey="despesas"
                stroke="#A67C52"
                strokeWidth={3}
                dot={{ fill: "#A67C52", strokeWidth: 2, r: 6 }}
                activeDot={{ r: 8, stroke: "#F5E6B3", strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={expenseCategories}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {expenseCategories.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<PieTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        )}
      </CardContent>
    </Card>
  );
}