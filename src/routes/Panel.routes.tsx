import InfoCardSkeleton from "@/components/InfoCardSkeleton";
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
        <div className="p-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <InfoCardSkeleton />
          <InfoCardSkeleton />
          <InfoCardSkeleton />
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
