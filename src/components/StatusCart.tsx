import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface StatusCartProps {
  icon: React.ReactNode;
  title: string;
  value: number;
  updated: string;
  online?: number;
  valueColor?: "default" | "success" | "warning" | "error" | undefined;
}

export default function StatusCart({
  icon,
  title,
  value,
  updated,
  online,
  valueColor = "default",
}: StatusCartProps) {
  const valueColorClass = {
    default: "text-foreground",
    success: "text-green-600",
    warning: "text-yellow-500",
    error: "text-red-600",
  }[valueColor];

  return (
    <Card className="w-60 h-52 flex flex-col justify-between p-4  my-4">
      <CardHeader className="flex flex-row items-center justify-between p-0">
        <div className="flex items-center gap-2">
          {icon}
          <span className="text-sm font-medium text-muted-foreground">
            {title}
          </span>
        </div>
        {online !== undefined && (
          <Badge variant="outline" className="text-sm">
            <span className="bg-green-600 w-3 h-3 rounded-full inline-block mr-1"></span>
            {online}
          </Badge>
        )}
      </CardHeader>

      <CardContent className="p-0 flex flex-col justify-between">
        <div className={`text-3xl font-bold mt-3 ${valueColorClass}`}>
          {value}
        </div>
        <p className="text-xs text-muted-foreground mt-1">
          به‌روزشده: {updated}
        </p>
      </CardContent>
    </Card>
  );
}
