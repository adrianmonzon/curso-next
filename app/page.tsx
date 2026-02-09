import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import './ui/global.css';
import styles from './page.module.css';

export default function Page() {
  return (
    <main className={styles.homeContainer}>
      <div className={styles.headerBox}>
        {/* <AcmeLogo /> */}
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.leftSection}>
          <p className={styles.welcomeText}>
            <strong>Bienvenido al curso.</strong> This is the example for the{' '}
            <a href="https://nextjs.org/learn/" className={styles.welcomeLink}>
              Next.js Learn Course
            </a>
            , brought to you by Vercel.
          </p>
          <Link
            href="/login"
            className={styles.loginButton}
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className={styles.rightSection}>
          {/* Add Hero Images Here */}
        </div>
      </div>
    </main>
  );
}
