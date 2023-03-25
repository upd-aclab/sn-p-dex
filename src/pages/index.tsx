import { type NextPage } from "next";
import { useState } from "react";
import Intro from "~/components/Introduction";
import Navbar from "~/components/Navbar";
import Pager from "~/components/Pager";
import Settings from "~/components/Settings";
import Table from "~/components/Table";
import data from "~/data/data";
import shorten from "~/utils/shorten";
import lcs from "~/utils/lcs";
import type Variant from "~/types/Variant";
import type Name from "~/types/Name";
import clean from "~/utils/clean";

const Home: NextPage = () => {
  const [short, setShort] = useState(true);
  const [variant, setVariant] = useState("");
  const [authorFirstName, setAuthorFirstName] = useState("");
  const [authorLastName, setAuthorLastName] = useState("");
  const [doi, setDoi] = useState("");
  const [page, setPage] = useState(1);

  const decrementPage = () => {
    setPage((previousPage) => previousPage - 1);
  };

  const incrementPage = () => {
    setPage((previousPage) => previousPage + 1);
  };

  const toggleShort = () => {
    setShort((previousShort) => !previousShort);
  };

  const states = {
    short,
    variant,
    authorFirstName,
    authorLastName,
    doi,
  };

  const handlers = {
    toggleShort,
    setVariant,
    setAuthorFirstName,
    setAuthorLastName,
    setDoi,
    setPage,
  };

  const columns = ["Name", "Description", "Reference(s)"];
  let rows = data;

  if (short) {
    rows = shorten(data);
  }

  if (variant) {
    rows = rows
      .map((row) => ({
        ...row,
        matchIndices: lcs(row.name.toLowerCase(), variant.toLowerCase()),
      }))
      .filter((updatedRows) => updatedRows.matchIndices.length > 0)
      .sort((a, b) => b.matchIndices.length - a.matchIndices.length);
  }

  const firstNameMatches = (author: Name) =>
    clean(author.firstName)
      .toLowerCase()
      .startsWith(clean(authorFirstName.toLowerCase()));

  const lastNameMatches = (author: Name) =>
    clean(author.lastName)
      .toLowerCase()
      .startsWith(clean(authorLastName.toLowerCase()));

  const authorMatches = (row: Variant): boolean => {
    if (!row.references) {
      return !(authorFirstName || authorLastName);
    }
    return row.references?.some((reference) =>
      reference.authors.some(
        (author) =>
          (!authorFirstName || firstNameMatches(author)) &&
          (!authorLastName || lastNameMatches(author))
      )
    );
  };

  if (authorFirstName || authorLastName) {
    rows = rows
      .map((row) => ({
        ...row,
        references: row.references?.map((reference) => ({
          ...reference,
          matched: reference.authors.some(
            (author) =>
              (!authorFirstName || firstNameMatches(author)) &&
              (!authorLastName || lastNameMatches(author))
          ),
        })),
        matched: authorMatches(row),
      }))
      .filter((row) => row.matched);
  }

  if (doi) {
    rows = rows
      .map((row) => ({
        ...row,
        references: row.references?.map((reference) => ({
          ...reference,
          matched: reference.doi.toLowerCase() === doi.toLowerCase(),
        })),
      }))
      .map((row) => ({
        ...row,
        matched: row.references?.some((reference) => reference.matched),
      }))
      .filter((row) => row.matched);
  }

  const pageLength = 10;
  const pages = Math.ceil(rows.length / pageLength);

  return (
    <main className="flex min-h-screen justify-between">
      <div className="w-[30%] border-r border-solid border-white">
        <Navbar />
        <Intro />
        <Settings states={states} handlers={handlers} />
      </div>
      <div className="flex w-[70%] items-center justify-center px-10">
        <section className="flex flex-col gap-4">
          {rows.length > 0 ? (
            <>
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
            </>
          ) : (
            <div>No matching data found... ˙◠˙</div>
          )}
        </section>
      </div>
    </main>
  );
};

export default Home;
