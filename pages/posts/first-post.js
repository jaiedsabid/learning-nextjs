import Image from 'next/image';
import Link from 'next/link';

// Local imports.
import { HeadMeta, Layout } from '../../components';
import { prefix } from '../../utils/constants';

export default function FirstPost() {
    return (
        <Layout>
            <HeadMeta title="First Post" description="This is my first post!" />
            <h1>This is my first post!</h1>
            <h2 className="title">
                <Link href="/">← Back to Home page</Link>
            </h2>
            <Image
                src={`${prefix}/images/profile.jpg`}
                alt="Jaied Al Sabid"
                width={420}
                height={300}
            />
        </Layout>
    );
}
