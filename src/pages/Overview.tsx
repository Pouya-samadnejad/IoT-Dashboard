import InfoCard from "@/components/InfoCard";
import MqttSection from "@/components/MqttSection";
import { TempChart } from "@/components/TempChart";
import { TraficChart } from "@/components/TraficChart";

export default function Overview() {
  return (
    <main className="p-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 ">
          <InfoCard
            title="تله متری محیط"
            description="دما و رطوبت آخرین ۵۰ نمونه"
            className="w-full"
          >
            <TempChart />
          </InfoCard>
        </div>
        <div>
          <InfoCard title="ترافیک شبکه" description="پیام دقیقه">
            <TraficChart />
          </InfoCard>
        </div>
      </div>

      <div className="mt-4">
        <MqttSection />
      </div>
    </main>
  );
}
