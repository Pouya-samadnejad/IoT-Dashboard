import * as React from "react";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

interface ScrollAreaSectionProps {
  messages: string[];
}
export function ScrollAreaSection({ messages }: ScrollAreaSectionProps) {
  return (
    <ScrollArea className="h-84 w-full">
      <div className="space-y-2">
        {messages?.length === 0 ? (
          <p className="text-sm text-gray-400 text-center py-8">
            هنوز فعالیتی ثبت نشده
          </p>
        ) : (
          messages
            ?.slice()
            .reverse()
            .map((msg, idx) => (
              <React.Fragment key={idx}>
                <div className="flex justify-between items-center text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-sky-600 rounded-full" />
                    <span>{msg}</span>
                  </div>
                  <span className="text-xs text-gray-500">
                    {new Date().toLocaleTimeString()}
                  </span>
                </div>
                {idx < messages.length - 1 && <Separator className="my-2" />}
              </React.Fragment>
            ))
        )}
      </div>
    </ScrollArea>
  );
}
