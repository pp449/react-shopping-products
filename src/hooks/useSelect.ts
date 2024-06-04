import { MouseEventHandler, useState } from "react";

const useSelect = <T>(initialSelected: T) => {
  const [isDropdown, setIsDropdown] = useState(false);
  const [selected, setSelected] = useState<T>(initialSelected);

  const handleDropdown: MouseEventHandler<HTMLUListElement> = () => {
    if (isDropdown) {
      setIsDropdown(false);
      return;
    }

    setIsDropdown(true);
  };

  const handleSelected: MouseEventHandler<HTMLLIElement> = (e) => {
    const { textContent } = e.currentTarget;
    if (!textContent) return;
    setSelected(textContent as T);
    setIsDropdown(false);
  };

  return { isDropdown, handleDropdown, selected, handleSelected };
};

export default useSelect;
