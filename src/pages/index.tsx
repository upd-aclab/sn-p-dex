import { type NextPage } from "next";
import { useState } from "react";
import Introduction from "~/components/Introduction";
import Settings from "~/components/Settings";
import Table from "~/components/Table";
import data from "~/data/data";
import { shorten } from "~/data/utils";

const Home: NextPage = () => {
  const [short, setShort] = useState(false);

  const handleChange = () => {
    setShort(!short);
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

  return (
    <main className="flex min-h-screen">
      <div>
        <Introduction />
        <Settings states={states} handlers={handlers} />
      </div>
      <div>
        <Table columns={columns} rows={rows} />
      </div>
    </main>
  );
};

export default Home;
