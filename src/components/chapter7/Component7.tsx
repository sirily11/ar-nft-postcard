"use client";
import * as React from "react";
import { BannerLayer, ParallaxBanner } from "react-scroll-parallax";
import Image from "next/image";
import { Ma_Shan_Zheng } from "next/font/google";
import {
  Description,
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useCallback, useEffect } from "react";
import { useWeb3Modal, useWeb3ModalAccount } from "@web3modal/ethers/react";
import { checkIfUserHasClaimed, claim } from "@/app/(app)/actions";
import { Spinner } from "@/components/spinner";
import { useSearchParams } from "next/navigation";

type Props = {
  title: string;
  claimButton: string;
  dialog: {
    title: string;
    description: string;
    description2: string;
    description3: string;
    description4: string;
    confirm: string;
    cancel: string;
    previous: string;
    done: string;
    success: string;
  };
  checkWallet: string;
  checkInAr: string;
  arlink: string;
};

const font = Ma_Shan_Zheng({
  weight: "400",
  subsets: ["latin"],
});

export function Component7(props: Props) {
  const [open, setOpen] = React.useState(false);
  const [isClaimed, setIsClaimed] = React.useState(false);
  const [isClaiming, setIsClaiming] = React.useState(false);
  const [chapter, setChapter] = React.useState(0);
  const { isConnected, address } = useWeb3ModalAccount();
  const [error, setError] = React.useState<string | null>(null);
  const { open: openWeb3Modal } = useWeb3Modal();
  const params = useSearchParams();
  const invitationCode = params.get("code");

  const handleOpen = useCallback(() => {
    setOpen(true);
    setChapter(0);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
    setChapter(0);
    setError(null);
  }, []);

  const handleClaim = useCallback(async () => {
    if (chapter === 0) {
      setChapter(1);
    } else if (chapter === 1) {
      setChapter(2);
    } else {
      setChapter(3);
      setIsClaiming(true);
      await claim(address!, invitationCode!)
        .then((r) => {
          if (r?.error) {
            alert(r.error);
            setError(r.error);
            return;
          }
          setIsClaimed(true);
        })
        .catch((error) => {
          alert(error.message);
          setError(error.message);
        })
        .finally(() => {
          setIsClaiming(false);
        });
    }
  }, [chapter, address, invitationCode]);

  const handlePrevious = useCallback(() => {
    if (chapter === 1) {
      setChapter(0);
    } else if (chapter === 2) {
      setChapter(1);
    } else {
      setChapter(2);
    }
  }, [chapter]);

  useEffect(() => {
    if (address && invitationCode) {
      checkIfUserHasClaimed(address!, invitationCode!)
        .then((r) => {
          setIsClaimed(r);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [invitationCode, address]);

  const claimButton: BannerLayer = {
    shouldAlwaysCompleteAnimation: true,
    expanded: true,
    translateY: [0, 20],
    opacity: [0, 1, [0, 0, 0, 0]],
    children: (
      <div className={"flex-col flex h-full "}>
        <div
          className={
            "flex flex-row  space-x-2 h-full justify-center items-center"
          }
        >
          {!isConnected && <w3m-button />}
          {/*button*/}
          {isConnected && (
            <button
              className={
                "w-40 active:scale-125 text-yellow-950 active:text-yellow-800 relative"
              }
              onClick={async () => {
                await openWeb3Modal();
              }}
            >
              <Image
                src={"/assets/button.svg"}
                alt={"button"}
                width={300}
                height={200}
                className={"absolute z-0 w-full object-contain"}
              />
              <div
                className={
                  "z-10 absolute w-full h-full flex justify-center font-bold mt-1"
                }
              >
                <span>{props.checkWallet}</span>
              </div>
            </button>
          )}

          {isConnected && isClaimed && (
            <a
              className={
                "w-40 active:scale-125 text-yellow-950 active:text-yellow-800 relative"
              }
              rel={"ar"}
              href={props.arlink}
            >
              <Image
                src={"/assets/button.svg"}
                alt={"button"}
                width={300}
                height={200}
                className={"absolute z-0 w-full object-contain"}
              />
              <div
                className={
                  "z-10 absolute w-full h-full flex justify-center font-bold mt-1"
                }
              >
                <span>{props.checkInAr}</span>
              </div>
            </a>
          )}

          {isConnected && !isClaimed && (
            <button
              className={
                "w-40 active:scale-125 text-yellow-950 active:text-yellow-800 relative"
              }
              onClick={handleOpen}
            >
              <Image
                src={"/assets/button.svg"}
                alt={"button"}
                width={300}
                height={200}
                className={"absolute z-0 w-full object-contain"}
              />
              <div
                className={
                  "z-10 absolute w-full h-full flex justify-center font-bold mt-1"
                }
              >
                <span>{props.claimButton}</span>
              </div>
            </button>
          )}
        </div>
      </div>
    ),
  };

  const background: BannerLayer = {
    scale: [1.05, 1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    image: "/assets/night-sky.svg",
  };

  const headline: BannerLayer = {
    translateY: [0, 5],
    scale: [1, 1.05, "easeOutCubic"],
    opacity: [0.9, 1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="absolute inset-0 flex flex-col items-center justify-center w-full">
        <span
          className="text-5xl md:text-8xl text-white text-center p-2 whitespace-pre break-all"
          style={{ ...font.style }}
        >
          {props.title}
        </span>
      </div>
    ),
  };

  const kuromi: BannerLayer = {
    translateY: [0, 20],
    children: (
      <div
        className={"flex flex-row justify-center absolute bottom-80 left-10"}
      >
        <Image
          src={"/assets/kuromi.svg"}
          alt={"kuromi"}
          width={1000}
          height={1000}
          className={"w-48"}
        />
        <Image
          src={"/assets/doraemon.svg"}
          alt={"kuromi"}
          width={1000}
          height={1000}
          className={"w-64"}
        />
      </div>
    ),
  };

  const done = useCallback(() => {
    setOpen(false);
    setChapter(0);
    setError(null);
  }, []);

  return (
    <div>
      <ParallaxBanner
        layers={[background, headline, kuromi, claimButton]}
        className="h-[150vh] bg-gray-900"
      />
      <Dialog
        onClose={() => {}}
        open={open}
        transition
        className="relative z-50 transition duration-300 ease-out data-[closed]:opacity-0"
      >
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="w-screen space-y-4 border bg-white p-12 rounded-3xl outline outline-gray-200">
            <DialogTitle className="font-bold">
              {props.dialog.title}
            </DialogTitle>
            <DialogBackdrop className="fixed inset-0 bg-black/70 -z-10" />
            <Description>
              {chapter === 0 && props.dialog.description}
              {chapter === 1 && props.dialog.description2}
              {chapter === 2 && (
                <span>
                  {props.dialog.description3}
                  <span className={"text-orange-400 font-bold"}>
                    {props.dialog.description4}
                  </span>
                </span>
              )}

              {chapter === 2 && (
                <div className={"flex justify-center relative"}>
                  <Image
                    src={"/assets/birthday-cake.svg"}
                    alt={"coin"}
                    width={100}
                    height={100}
                    className={"w-72 aspect-auto z-10"}
                  />
                  <Image
                    src={"/assets/2.svg"}
                    alt={"coin"}
                    width={100}
                    height={100}
                    className={
                      "w-14 aspect-auto absolute top-5 left-[68px] rotating-object-right-left"
                    }
                  />
                  <Image
                    src={"/assets/5.svg"}
                    alt={"coin"}
                    width={100}
                    height={100}
                    className={
                      "w-14 aspect-auto absolute top-5 right-[68px] rotating-object-left-right"
                    }
                  />
                  <Image
                    src={"/assets/Kuromi_2.svg"}
                    alt={"coin"}
                    width={100}
                    height={100}
                    className={
                      "w-14 aspect-auto absolute top-5 z-20 rotating-object-left-right"
                    }
                  />
                </div>
              )}

              {chapter === 3 && isClaiming && (
                <div className={"flex justify-center w-full"}>
                  <Spinner />
                </div>
              )}

              {chapter === 3 && isClaimed && (
                <div className={"flex justify-center w-full"}>
                  <span>{props.dialog.success}</span>
                </div>
              )}

              {chapter === 3 && error !== null && (
                <div className={"flex justify-center w-full"}>
                  <span>{error}</span>
                </div>
              )}
            </Description>
            <hr />
            <div className="flex gap-4 justify-between">
              {chapter === 0 && (
                <button
                  className={"active:text-gray-500"}
                  onClick={handleClose}
                >
                  {props.dialog.cancel}
                </button>
              )}

              {chapter > 0 && chapter < 3 && (
                <button
                  className={"active:text-gray-500"}
                  onClick={handlePrevious}
                  disabled={isClaiming}
                >
                  {props.dialog.previous}
                </button>
              )}
              {chapter >= 0 && chapter < 3 && (
                <button
                  className={"active:text-gray-500 disabled:text-gray-500"}
                  onClick={handleClaim}
                  disabled={isClaiming}
                >
                  {props.dialog.confirm}
                </button>
              )}
              {chapter === 3 && (isClaimed || error !== null) && (
                <button
                  className={"active:text-gray-500 disabled:text-gray-500"}
                  onClick={done}
                  disabled={isClaiming}
                >
                  {props.dialog.done}
                </button>
              )}
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  );
}
