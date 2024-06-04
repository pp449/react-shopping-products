import { createContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

export interface ToastType {
  id: number;
  message: string;
}

interface ToastProviderProps {
  children: ReactNode;
}

export const ToastStateContext = createContext<ToastType[] | null>(null);
export const ToastDispatchContext = createContext<Dispatch<SetStateAction<ToastType[]>>>(() => {});

const ToastsProvider = ({ children }: ToastProviderProps) => {
  const [toasts, setToasts] = useState<ToastType[]>([]);

  return (
    <ToastStateContext.Provider value={toasts}>
      <ToastDispatchContext.Provider value={setToasts}>{children}</ToastDispatchContext.Provider>
    </ToastStateContext.Provider>
  );
};

export default ToastsProvider;
