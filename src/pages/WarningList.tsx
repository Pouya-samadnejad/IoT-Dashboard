import InfoCard from "@/components/InfoCard";
import { ScrollArea } from "@/components/ui/scroll-area";
import WarningCard from "@/components/WarningCard";
import warningData from "@/data/warningData.json";
export default function WarningList() {

  const severityOrder : Record<string,number>={
    High:1,
    Medium: 2,
    Low: 3,
  }
  const sortedAlert= [...warningData].sort(
    (a,b)=> severityOrder[a.severity]- severityOrder[b.severity]
  )
    return (
      <InfoCard title="هشدارها" description="اولویت بندی خودکار" >
        <ScrollArea  className="h-96"> {sortedAlert.map((warning) => (
          <WarningCard
            key={warning.id}
            severity={warning.severity}
            title={warning.title}
            time={warning.time}
            description={warning.description}
          />
        ))}</ScrollArea>
       
      </InfoCard>
    );
}