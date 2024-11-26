import { MultiCitySearch } from "./MultiCitySearch";
import { MulticityDatepicker } from "./MulticityDatepicker";
import PropTypes from "prop-types";

export const MultiCityFilters = ({
  onOriginChange,
  onDestinationChange,
  onDateChange,
}) => {
  return (
    <div>
      <div className="lg:inline-flex lg:flex-row flex-col gap-4 w-full">
        <MultiCitySearch
          onOriginChange={onOriginChange}
          onDestinationChange={onDestinationChange}
        />
        <MulticityDatepicker onDateChange={onDateChange} />
      </div>

      <button className="justify-start items-start w-32 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white text-xs font-bold py-3 px-6 rounded-full shadow-lg transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce">
        Add Flight
      </button>
    </div>
  );
};

MultiCityFilters.propTypes = {
  onOriginChange: PropTypes.func.isRequired,
  onDestinationChange: PropTypes.func.isRequired,
  onDateChange: PropTypes.func.isRequired,
};
