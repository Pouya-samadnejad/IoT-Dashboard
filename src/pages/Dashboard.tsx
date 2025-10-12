import StatusCart from "@/components/StatusCart";
import TabSection from "@/components/TabSection";
import { BellDot, Gauge, Server, Wifi } from "lucide-react";

export default function Dashboard() {
  const items = [
    {
      title: "آنلاین",
      icon: Wifi,
      value: 4,
      status: "green",
      updated: "10:45",
      online: 4,
      valueColor: "default",
    },
    {
      title: "آفلاین",
      icon: Server,
      value: 2,
      status: "red",
      updated: "10:45",
      valueColor: "error",
    },
    {
      title: "میانکین خطا (ms)",
      icon: Gauge,
      value: 1,
      status: "yellow",
      updated: "10:45",
      valueColor: "warning",
    },
    {
      title: "هشدار  فعال  ",
      icon: BellDot,
      value: 3,
      status: "blue",
      updated: "10:45",
      valueColor: "default",
    },
  ];
  return (
    <main className="p-4">
      <div className="flex gap-4">
        {items.map((item) => (
          <StatusCart
            key={item.title}
            icon={<item.icon />}
            title={item.title}
            value={item.value}
            updated={item.updated}
            online={item.online}
            valueColor={item.valueColor}
          />
        ))}
      </div>
      <TabSection />
    </main>
  );
}
