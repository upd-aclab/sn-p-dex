import type Handlers from "~/types/Handlers";
import type States from "~/types/States";

interface Props {
  states: States;
  handlers: Handlers;
}

const Settings = ({ states, handlers }: Props) => {
  return (
    <section className="px-10">
      <h2 className="mb-2 text-3xl">Settings</h2>
      <label className="mb-4 flex gap-4">
        <input
          type="checkbox"
          checked={states.short}
          onChange={handlers.toggleShort}
        />
        abbreviate &quot;Spiking Neural P Systems&quot; (SNPS)
      </label>
      <div className="flex flex-col gap-4">
        <label>
          <input
            type="text"
            value={states.variantSearch}
            placeholder="Search by variant..."
            onChange={(e) => {
              handlers.setVariantSearch(e.target.value);
              handlers.setPage(1);
            }}
            className="w-full rounded-md border border-solid border-white bg-black px-3 py-2 text-white"
          />
        </label>
        <label>
          <input
            type="text"
            value={states.authorFirstNameSearch}
            placeholder="Search by author's first name..."
            onChange={(e) => {
              handlers.setAuthorFirstNameSearch(e.target.value);
              handlers.setPage(1);
            }}
            className="w-full rounded-md border border-solid border-white bg-black px-3 py-2 text-white"
          />
        </label>
        <label>
          <input
            type="text"
            value={states.authorLastNameSearch}
            placeholder="Search by author's last name..."
            onChange={(e) => {
              handlers.setAuthorLastNameSearch(e.target.value);
              handlers.setPage(1);
            }}
            className="w-full rounded-md border border-solid border-white bg-black px-3 py-2 text-white"
          />
        </label>
      </div>
    </section>
  );
};

export default Settings;
