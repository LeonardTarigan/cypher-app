import {
  Button,
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { Fragment, useState } from "react";
import IconTrash from "../icons/IconTrash";

export default function CardInboxMessage() {
  let [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  return (
    <div className="space-y-2 rounded-xl bg-zinc-100 p-5 dark:bg-zinc-800">
      <div className="flex items-center justify-between gap-5">
        <h3 className="text-sm font-medium">13 Jun 2024 - 05:37:43 PM</h3>
        <Button
          onClick={openDialog}
          className="rounded-md p-2 text-rose-500 transition-all duration-150 hover:bg-rose-500 hover:text-zinc-50 active:scale-95"
        >
          <IconTrash className="size-5" />
        </Button>
        <Transition appear show={isDialogOpen} as={Fragment}>
          <Dialog as="div" className={`relative z-50`} onClose={closeDialog}>
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm" />
            </TransitionChild>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <TransitionChild
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <DialogPanel className="flex w-full max-w-md transform flex-col items-end overflow-hidden rounded-2xl bg-zinc-50 p-5 text-left align-middle shadow-xl transition-all">
                    <DialogTitle
                      as="h3"
                      className="w-full text-xl font-bold leading-6 text-rose-500"
                    >
                      Delete Confirmation
                    </DialogTitle>
                    <div className="mt-2">
                      <p className="">
                        Are you sure want to delete this message? It will be
                        deleted{" "}
                        <span className="font-semibold">permanently</span>!
                      </p>
                    </div>

                    <div className="flex justify-end gap-2">
                      <Button className="mt-10 rounded-lg bg-rose-500 px-4 py-2 font-semibold text-zinc-50 transition-all duration-150 hover:bg-rose-700 active:scale-95">
                        Delete
                      </Button>
                      <Button
                        onClick={closeDialog}
                        className="mt-10 rounded-lg bg-zinc-100 px-4 py-2 font-semibold text-zinc-900 transition-all duration-150 hover:bg-zinc-200 active:scale-95"
                      >
                        Cancel
                      </Button>
                    </div>
                  </DialogPanel>
                </TransitionChild>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda,
        praesentium sed. Est vel corrupti tenetur. Quos incidunt dignissimos ad
        numquam!
      </p>
    </div>
  );
}
