import useSelect from "@/hooks/useSelect";
import * as S from "@/components/SelectBox/style";
import { Category, Sort } from "@/constants/selectOption";

interface SelectBoxProps {
  selectorHook: ReturnType<typeof useSelect<Category | Sort>>;
  optionsContents: string[];
}

const SelectBox = ({ selectorHook, optionsContents }: SelectBoxProps) => {
  const { isDropdown, handleDropdown, selected, handleSelected } = selectorHook;

  return (
    <S.Select onClick={handleDropdown}>
      <S.Arrow isDropdown={!!isDropdown} />
      <S.SelectedCardWrapper>
        <S.SelectedCardText isSelected={!!selected}>{selected}</S.SelectedCardText>
      </S.SelectedCardWrapper>
      {isDropdown && (
        <S.OptionWrapper>
          {optionsContents.map((optionContent) => (
            <S.Option key={optionContent} onClick={handleSelected}>
              {optionContent}
            </S.Option>
          ))}
        </S.OptionWrapper>
      )}
    </S.Select>
  );
};

export default SelectBox;
