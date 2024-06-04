import { ToastDispatchContext, ToastStateContext } from "@/provider/toastProvider";
import { useContext } from "react";

const useToast = () => {
  const toastList = useContext(ToastStateContext) || [];
  const setToastList = useContext(ToastDispatchContext);

  const onCloseToast = (id: number) => {
    const newToasts = toastList?.filter((toast) => toast.id !== id) || [];
    setToastList(newToasts);
  };

  const onAddToast = (message: string) => {
    const newToasts = [...toastList, { id: Math.random() * 1000, message }];
    setToastList(newToasts);
  };

  return { onCloseToast, onAddToast };
};

export default useToast;
