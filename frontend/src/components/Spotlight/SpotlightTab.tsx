import Image from 'react-bootstrap/Image';
import spotlightImage from '../../assets/spotlight.jpg';

export default function SpotightTab() {
    return (
        <div>
            <Image src={spotlightImage} roundedCircle />
        </div>
    );
  }