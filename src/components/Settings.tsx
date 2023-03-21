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
      <label>
        <input
          type="text"
          value={states.search}
          placeholder="Search for a variant..."
          onChange={(e) => {
            handlers.setSearch(e.target.value);
            handlers.setPage(1);
          }}
          className="w-full rounded-md border border-solid border-white bg-black px-3 py-2 text-white"
        />
      </label>
    </section>
  );
};

export default Settings;
