import Image from 'next/image';

// Local imports.
import { prefix } from '../../utils/constants';

const ImageWithPrefix = ({ src, alt, ...props }) => {
    return <Image src={`${prefix}/images/profile.jpg`} alt={alt} {...props} />;
};

export default ImageWithPrefix;
