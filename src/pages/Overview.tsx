import InfoCard from "@/components/InfoCard";
import { TempChart } from "@/components/TempChart";
import { TraficChart } from "@/components/TraficChart";

export default function Overview() {
  return (
    <main className="flex gap-2">
      <div className="w-2/3">
        <InfoCard
          title="تله متری محیط"
          description="دما و رطوبت آخرین ۵۰ نمونه"
          style="w-full"
        >
          <TempChart />
        </InfoCard>
        <InfoCard
          title=" MQTT اتصال 
 "
          description="WebSocket حالت نمایشی
"
        >
          <TempChart />
        </InfoCard>
      </div>
      <div className="w-1/3">
        <InfoCard
          title="ترافیک شبکه"
          description="پیام دقیقه
"
        >
          <TraficChart />
        </InfoCard>
      </div>
    </main>
  );
}
