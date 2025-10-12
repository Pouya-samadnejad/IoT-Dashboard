import { Spinner } from "@/components/ui/spinner";
export default function Loading() {
  return (
    <div className="h-screen w-full flex items-center justify-between">
      <div className="mx-auto">
        <Spinner />
      </div>
    </div>
  );
}
