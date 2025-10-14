import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardAction,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { ReactNode } from "react";

interface InfoCardProps {
  title?: string;
  description?: string;
  icon?: ReactNode;
  children?: ReactNode;
  footer?: string;
  action?: ReactNode;
  online?: number;
  valueColor?: string;
  style?: string;
}

export default function InfoCard({
  title = "",
  description = "",
  icon,
  children,
  footer,
  action,
  online,
  valueColor = "default",
  style = "",
}: InfoCardProps) {
  const valueColorClass = {
    default: "text-foreground",
    success: "text-green-600",
    warning: "text-yellow-500",
    error: "text-red-600",
  }[valueColor];

  return (
    <Card className={` ${style}`}>
      <CardHeader>
        <div className="flex items-center gap-1">
          {icon}
          <CardTitle>{title}</CardTitle>
        </div>

        {description && <CardDescription>{description}</CardDescription>}
        {action ? (
          <CardAction>{action}</CardAction>
        ) : online !== undefined ? (
          <CardAction>
            <Badge variant="outline" className="text-sm">
              <span className="bg-green-600 w-3 h-3 rounded-full inline-block mr-1"></span>
              {online}
            </Badge>
          </CardAction>
        ) : null}
      </CardHeader>

      <CardContent className={valueColor ? valueColorClass : ""}>
        {children}
      </CardContent>

      {footer && (
        <CardFooter className="text-xs text-muted-foreground">
          {footer}
        </CardFooter>
      )}
    </Card>
  );
}
