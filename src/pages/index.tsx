import { type NextPage } from "next";
import { useState } from "react";
import Introduction from "~/components/Introduction";
import Pager from "~/components/Pager";
import Settings from "~/components/Settings";
import Table from "~/components/Table";
import data from "~/data/data";
import { shorten } from "~/data/utils";

const Home: NextPage = () => {
  const [short, setShort] = useState(false);
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

  const columns = ["Name"];
  let rows = data;

  if (short) {
    rows = shorten(data);
  }

  const pageLength = 15;
  const pages = Math.ceil(rows.length / pageLength);

  return (
    <main className="flex min-h-screen">
      <div>
        <Introduction />
        <Settings states={states} handlers={handlers} />
      </div>
      <div>
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
      </div>
    </main>
  );
};

export default Home;
