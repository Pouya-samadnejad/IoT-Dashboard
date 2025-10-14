import { Skeleton } from "@/components/ui/skeleton";
import PanelLayout from "@/layout/PanelLayout";
import { lazy, Suspense } from "react";

const Dashboard = lazy(() => import("@/pages/Dashboard"));
const Devices = lazy(() => import("@/pages/Devices"));
const Datas = lazy(() => import("@/pages/Datas"));
const Conections = lazy(() => import("@/pages/Conections"));
const Users = lazy(() => import("@/pages/Users"));

const SuspenseWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Suspense
      fallback={
        <div className="p-6 space-y-4">
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <Skeleton className="h-10 w-10 rounded-full" />
            <div className="space-y-2 w-full">
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          </div>
          <Skeleton className="h-48 w-full rounded-xl" />
          <Skeleton className="h-48 w-full rounded-xl" />
        </div>
      }
    >
      {children}
    </Suspense>
  );
};

export const PanelRoutes = [
  {
    path: "/",
    element: <PanelLayout />,
    children: [
      {
        index: true,
        element: (
          <SuspenseWrapper>
            <Dashboard />
          </SuspenseWrapper>
        ),
      },
      {
        path: "devices",
        element: (
          <SuspenseWrapper>
            <Devices />
          </SuspenseWrapper>
        ),
      },
      {
        path: "conections",
        element: (
          <SuspenseWrapper>
            <Conections />
          </SuspenseWrapper>
        ),
      },
      {
        path: "datas",
        element: (
          <SuspenseWrapper>
            <Datas />
          </SuspenseWrapper>
        ),
      },
      {
        path: "users",
        element: (
          <SuspenseWrapper>
            <Users />
          </SuspenseWrapper>
        ),
      },
    ],
  },
];
