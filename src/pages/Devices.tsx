import DeviceCard from "@/components/DeviceCard";
import InfoCard from "@/components/InfoCard";
import { Button } from "@/components/ui/button";
import { Earth, ScanLine } from "lucide-react";

export default function Devices() {
  const devices = [
    {
      device_id: "dev-1000",
      device_name: "Sensor 1",
      status: true,
      type: "Temp/Humidity",
      firmware_version: "v2.5.4",
      battery_level: 66,
      rssi: 20,
      last_seen: "2025-10-14T01:43:00Z",
      power: true,
    },
    {
      device_id: "dev-1001",
      device_name: "Sensor 2",
      status: true,
      type: "Temp/Humidity",
      firmware_version: "v2.5.4",
      battery_level: 81,
      rssi: 59,
      last_seen: "2025-10-14T01:42:30Z",
      power: true,
    },
    {
      device_id: "dev-1002",
      device_name: "Sensor 3",
      status: false,
      type: "Temp/Humidity",
      firmware_version: "v2.5.3",
      battery_level: 40,
      rssi: 85,
      last_seen: "2025-10-14T00:58:14Z",
      power: false,
    },
    {
      device_id: "dev-1003",
      device_name: "Sensor 4",
      status: true,
      type: "Temp/Humidity",
      firmware_version: "v2.5.5",
      battery_level: 92,
      rssi: 63,
      last_seen: "2025-10-14T01:44:10Z",
      power: true,
    },
    {
      device_id: "dev-1004",
      device_name: "Sensor 5",
      status: true,
      type: "Temp/Humidity",
      firmware_version: "v2.5.4",
      battery_level: 57,
      rssi: 72,
      last_seen: "2025-10-14T01:41:25Z",
      power: true,
    },
  ];

  return (
    <main>
      <InfoCard
        title="فهرست دستگاه ها"
        description="کنترل سریع و وضعیت سلامت"
        action={
          <div className="md:flex gap-2 items-center">
            <Button className="shadow flex items-center gap-1">
              از راه دور Provision <Earth />
            </Button>
            <Button className="bg-neutral-200 text-black hover:bg-neutral-300 shadow flex items-center gap-1">
              افزودن دستگاه <ScanLine />
            </Button>
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
