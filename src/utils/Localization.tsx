import { useLocales } from "../locals";
import Ripples from "react-ripples";

const LocalLization = ({ onClose }: any) => {
  const { allLangs, currentLang, onChangeLang,translate } = useLocales();

  const handleChangeLang = (newLang: string) => {
    onChangeLang(newLang);
  
  };
  return (
    <div className="flex flex-col gap-2 p-1 w-full bg-white ">
      {allLangs.map((option, key) => (
        <div
          key={key}
          onClick={() => handleChangeLang(option.value)}
          className={`flex items-center gap-2 cursor-pointer   ${currentLang.value === option.value ? "bg-whitePalexl" : "bg-white"
            } p-2 `}
        >
          <img src={option.icon} alt={option.label} />

          <button className="text-default font-normal">
            {translate(`localization.${option.label}`) as any}
          </button>
        </div>
      ))}
    </div>
  );
};

export default LocalLization;