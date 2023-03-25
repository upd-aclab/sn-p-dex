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
      <label className="mb-4 flex gap-4 hover:cursor-pointer">
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
            value={states.variant}
            placeholder="Search by variant..."
            onChange={(e) => {
              handlers.setVariant(e.target.value);
              handlers.setPage(1);
            }}
            className="w-full rounded-md border border-solid border-white bg-black px-3 py-2 text-white"
          />
        </label>
        <label>
          <input
            type="text"
            value={states.authorFirstName}
            placeholder="Search by author's first name..."
            onChange={(e) => {
              handlers.setAuthorFirstName(e.target.value);
              handlers.setPage(1);
            }}
            className="w-full rounded-md border border-solid border-white bg-black px-3 py-2 text-white"
          />
        </label>
        <label>
          <input
            type="text"
            value={states.authorLastName}
            placeholder="Search by author's last name..."
            onChange={(e) => {
              handlers.setAuthorLastName(e.target.value);
              handlers.setPage(1);
            }}
            className="w-full rounded-md border border-solid border-white bg-black px-3 py-2 text-white"
          />
        </label>
        <label>
          <input
            type="text"
            value={states.doi}
            placeholder="Search by DOI..."
            onChange={(e) => {
              handlers.setDoi(e.target.value);
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
