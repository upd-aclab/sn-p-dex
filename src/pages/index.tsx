import { type NextPage } from "next";
import Table from "~/components/Table";

const Home: NextPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-5xl">SN P Results</h1>
      <Table />
    </main>
  );
};

export default Home;
