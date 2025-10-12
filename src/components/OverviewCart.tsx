import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { ReactNode } from "react";

interface OverviewCartProps {
  title?: string;
  description?: string;
  children?: ReactNode;
}

export default function OverviewCart({
  title = "نمای کلی",
  description = "نمای کلی سیستم",
  children = <></>,
}: OverviewCartProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
}
