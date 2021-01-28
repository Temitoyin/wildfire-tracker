import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/fire-alert";
const locationMarker = ({ lat, long, onClick }) => {
  return (
    <div className="location-marker" onClick={onClick}>
      <Icon icon={locationIcon} className="location-icon" />
    </div>
  );
};

export default locationMarker;
