import Image from 'next/image';
import Link from 'next/link';

// Local imports.
import HeadMeta from '../../components/head-meta';
import { prefix } from '../../utils/constants';

export default function FirstPost() {
    return (
        <>
            <HeadMeta title="First Post" description="This is my first post!" />
            <h1>This is my first post!</h1>
            <h2 className="title">
                Back to <Link href="/">Home page</Link>
            </h2>
            <Image
                src={`${prefix}/images/profile.jpg`}
                alt="Jaied Al Sabid"
                width={420}
                height={300}
            />
        </>
    );
}
