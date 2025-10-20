import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Devices from "@/pages/Devices";
import Overview from "@/pages/Overview";
import WarningList from "@/pages/WarningList";
import Settings from "@/pages/Settings";
import { AnimatePresence, motion } from "motion/react";
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
        <AnimatePresence>
          <motion.div
            key="overview" // هر تب یک key متفاوت داشته باشه
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Overview />
          </motion.div>
        </AnimatePresence>
      </TabsContent>
      <TabsContent value="devices">
        <AnimatePresence mode="wait">
          <motion.div
            key="devices"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Devices />
          </motion.div>
        </AnimatePresence>
      </TabsContent>

      <TabsContent value="alerts">
        <AnimatePresence>
          <motion.div
            key="alerts"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <WarningList />
          </motion.div>
        </AnimatePresence>
      </TabsContent>
      <TabsContent value="settings">
        <AnimatePresence>
          <motion.div
            key="settings"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Settings />
          </motion.div>
        </AnimatePresence>
      </TabsContent>
    </Tabs>
  );
}
