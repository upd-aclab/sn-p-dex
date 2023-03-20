import { type NextPage } from "next";
import { useState } from "react";
import Intro from "~/components/Introduction";
import Navbar from "~/components/Navbar";
import Pager from "~/components/Pager";
import Settings from "~/components/Settings";
import Table from "~/components/Table";
import data from "~/data/data";
import { shorten } from "~/data/utils";

const Home: NextPage = () => {
  const [short, setShort] = useState(true);
  const [page, setPage] = useState(1);

  const decrementPage = () => {
    setPage((previousPage) => previousPage - 1);
  };

  const incrementPage = () => {
    setPage((previousPage) => previousPage + 1);
  };

  const handleChange = () => {
    setShort((previousShort) => !previousShort);
  };

  const states = {
    short,
  };

  const handlers = {
    handleChange,
  };

  const columns = ["Name", "Description", "Reference(s)"];
  let rows = data;

  if (short) {
    rows = shorten(data);
  }

  const pageLength = 15;
  const pages = Math.ceil(rows.length / pageLength);

  return (
    <main className="flex min-h-screen justify-between">
      <div className="w-[30%] border-r border-solid border-white">
        <Navbar />
        <Intro />
        <Settings states={states} handlers={handlers} />
      </div>
      <div className="flex w-[70%] items-center justify-center">
        <section className="flex flex-col gap-4">
          <Table
            columns={columns}
            rows={rows.slice(pageLength * (page - 1), pageLength * page)}
          />
          <Pager
            page={page}
            pages={pages}
            decrementPage={decrementPage}
            incrementPage={incrementPage}
          />
        </section>
      </div>
    </main>
  );
};

export default Home;
