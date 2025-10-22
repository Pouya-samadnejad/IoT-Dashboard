import DeviceCard from "@/components/DeviceCard";
import DialogSection from "@/components/DialogSection";
import DeviceForm from "@/components/DeviceForm";
import InfoCard from "@/components/InfoCard";
import { Button } from "@/components/ui/button";
import { DialogTrigger } from "@/components/ui/dialog";
import { useDeviceStore } from "@/store/deviceStore";
import { Earth, ScanLine } from "lucide-react";

export default function Devices() {
  const { devices } = useDeviceStore();
  return (
    <main>
      <InfoCard
        title="فهرست دستگاه ها"
        description="کنترل سریع و وضعیت سلامت"
        action={
          <div className="md:flex gap-2 space-y-2 lg:space-y-0 items-center">
            <Button className="shadow flex items-center gap-1">
              از راه دور Provision <Earth />
            </Button>

            <DialogSection
              trigger={
                <DialogTrigger>
                  <Button className="bg-neutral-200 text-black hover:bg-neutral-300 shadow flex items-center  ">
                    افزودن دستگاه <ScanLine />
                  </Button>
                </DialogTrigger>
              }
              title="افزودن دستگاه جدید"
              description="اطلاعات دستگاه جدید را وارد کنید"
            >
              <DeviceForm />
            </DialogSection>
          </div>
        }
      >
        <div className="lg:grid lg:grid-cols-2 2xl:grid-cols-3 gap-3">
          {devices.map((device) => (
            <DeviceCard
              key={device.device_id}
              name={device.device_name}
              battery={device.battery_level}
              rssi={device.rssi}
              last_seen={new Date(device.last_seen).toLocaleString()} // فرمت تاریخ
              status={device.status}
              type={device.type}
              id={device.device_id}
              version={device.firmware_version}
              power={device.power}
            />
          ))}
        </div>
      </InfoCard>
    </main>
  );
}
