import OverviewCart from "@/components/OverviewCart";
import { TempChart } from "@/components/TempChart";
import { TraficChart } from "@/components/TraficChart";

export default function Overview() {
  return (
    <main className="flex gap-2">
      <div className="w-2/3">
        <OverviewCart
          title="تله متری محیط"
          description="دما و رطوبت آخرین ۵۰ نمونه 
"
        >
          <TempChart />
        </OverviewCart>
      </div>
      <div className="w-1/3">
        <OverviewCart
          title="ترافیک شبکه"
          description="پیام دقیقه
"
        >
          <TraficChart />
        </OverviewCart>
      </div>
    </main>
  );
}
