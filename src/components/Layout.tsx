import Head from "next/head";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>SN P Results</title>
      </Head>
      <div className="min-h-screen font-display dark:bg-black dark:text-white">
        {children}
      </div>
    </>
  );
};

export default Layout;
