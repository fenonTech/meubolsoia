import { ReactNode } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string;
  subtitle?: string;
  icon: ReactNode;
  trend?: {
    value: string;
    direction: "up" | "down";
  };
  className?: string;
}

export function MetricCard({
  title,
  value,
  subtitle,
  icon,
  trend,
  className,
}: MetricCardProps) {
  return (
    <Card className={cn("card-metric", className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-elegant-bronze">
          {title}
        </CardTitle>
        <div className="text-classic-gold">{icon}</div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-champagne font-playfair">
          {value}
        </div>
        {subtitle && (
          <p className="text-xs text-muted-foreground mt-1">{subtitle}</p>
        )}
        {trend && (
          <p className="text-xs mt-1">
            <span
              className={cn(
                "font-medium",
                trend.direction === "up" ? "text-green-400" : "text-red-400"
              )}
            >
              {trend.direction === "up" ? "↗" : "↘"} {trend.value}
            </span>
            <span className="text-muted-foreground"> em relação ao mês anterior</span>
          </p>
        )}
      </CardContent>
    </Card>
  );
}