import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "./ui/badge";
import { Cpu, MoreHorizontal, Server, Trash2Icon, Wifi } from "lucide-react";
import BatteryStatus from "./BatteryStatus";
import { RSSIStatus } from "./RssiStatus";

interface DeviceCardProps {
  name: string;
  id: string;
  type: string;
  version: string;
  battery: number;
  rssi: number;
  last_seen: string;
  status: boolean;
}

export default function DeviceCard({
  name,
  id,
  type,
  version,
  battery,
  rssi,
  last_seen,
  status,
}: DeviceCardProps) {
  return (
    <Card>
      <CardHeader>
        <div>
          <CardTitle>{name}</CardTitle>
          <CardDescription>
            {status ? (
              <Badge
                variant="secondary"
                className="bg-green-500 text-white ml-2 my-1.5"
              >
                آنلاین
              </Badge>
            ) : (
              <Badge variant="destructive" className="ml-2 my-1.5=">
                آفلاین
              </Badge>
            )}
            <span className="text-muted-foreground text-sm">dev-{id}</span>
          </CardDescription>
        </div>

        <CardAction>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="p-1 rounded hover:bg-muted transition">
                <MoreHorizontal className="w-5 h-5" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>{name}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive focus:text-destructive">
                <Trash2Icon className="w-4 h-4 mr-2" />
                حذف
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </CardAction>
      </CardHeader>

      <CardContent>
        <div className="md:grid grid-cols-2 gap-4 text-sm space-y-2.5">
          <div className="flex items-center gap-1">
            <Cpu className="w-4 h-4" />
            <p>نوع: {type}</p>
          </div>

          <div className="flex items-center gap-1">
            <Server className="w-4 h-4" />
            <p>Firmware: {version}</p>
          </div>

          <BatteryStatus battery={battery} />

          <div className="flex items-center gap-1">
            <RSSIStatus rssi={rssi} />
          </div>
        </div>
      </CardContent>

      <CardFooter>
        <div className="md:flex justify-between w-full items-center text-sm space-y-2.5 ">
          <p>آخرین مشاهده: {last_seen}</p>
          <div className="flex items-center gap-2 ">
            <p>قدرت</p>
            <Switch />
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
