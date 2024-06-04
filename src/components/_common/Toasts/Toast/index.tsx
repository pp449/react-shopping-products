import { useEffect, useState } from "react";
import useToast from "@/hooks/useToast";
import { ToastType } from "@/provider/toastProvider";
import * as S from "@/components/_common/Toasts/Toast/style";

const Toast = ({ id, message }: ToastType) => {
  const [isClose, setIsClose] = useState<boolean>(false);
  const { onCloseToast } = useToast();

  useEffect(() => {
    if (!isClose) return;

    const timer = setTimeout(() => {
      onCloseToast(id);
    }, 500);

    return () => clearTimeout(timer);
  }, [isClose, onCloseToast, id]);

  useEffect(() => {
    const closeTimer = setTimeout(() => {
      setIsClose(true);
    }, 2500);

    return () => {
      clearTimeout(closeTimer);
    };
  }, []);

  return <S.Wrapper isClose={isClose}>{message}</S.Wrapper>;
};

export default Toast;
