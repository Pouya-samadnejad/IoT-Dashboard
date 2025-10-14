import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Devices from "@/pages/Devices";
import Overview from "@/pages/Overview";

export default function TabSection() {
  return (
    <Tabs defaultValue="account" className="w-full">
      <TabsList className="w-full">
        <TabsTrigger value="overview">نمای کلی</TabsTrigger>
        <TabsTrigger value="devices">دستکاه ها</TabsTrigger>
        <TabsTrigger value="alerts">هشدارها</TabsTrigger>
        <TabsTrigger value="settings">تنظیمات</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <Overview />
      </TabsContent>
      <TabsContent value="devices">
        <Devices />
      </TabsContent>

      <TabsContent value="password"></TabsContent>
      <TabsContent value="settings">Manage your settings here.</TabsContent>
    </Tabs>
  );
}
