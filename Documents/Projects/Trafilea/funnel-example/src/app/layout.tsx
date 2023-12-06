"use client";

import { useEffect, useRef, useState } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {
  initialize,
  customEventEmitter,
  EventsEnum,
  NodeTypeEnum,
} from "funnel-builder-sidecar";
import Popup from "@/components/popup";
import "./globals.css";
import { useRouter } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const funnelNodeId = useRef<any>("");
  const router = useRouter();

  const redirectManually = () => {
    customEventEmitter.emit(EventsEnum.TEST_EVENT, funnelNodeId.current);
  };

  useEffect(() => {
    initialize("9eff4821-22ab-4f7b-a91b-55b91219984f");
    const noRedirectSub = customEventEmitter.on(
      EventsEnum.NO_REDIRECT_AVAILABLE,
      (currentNode: any) => {
        funnelNodeId.current = currentNode.id;
        if (currentNode.node_type === NodeTypeEnum.POPUP) {
          setOpen(true);
        } else if (currentNode.node_type === NodeTypeEnum.METRICS) {
          console.log(currentNode.funnelId, currentNode.description);
          alert(currentNode.description);
          redirectManually();
        }
      }
    );

    const endReachedSub = customEventEmitter.on(EventsEnum.END_REACHED, () => {
      router.push("/end");
    });

    return () => {
      noRedirectSub();
      endReachedSub();
    };
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        <>
          {children}
          <Popup open={open} setOpen={setOpen} close={redirectManually} />
        </>
      </body>
    </html>
  );
}
