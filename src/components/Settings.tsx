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
      <label className="flex gap-4">
        <input
          type="checkbox"
          checked={states.short}
          onChange={handlers.handleChange}
        />
        abbreviate &quot;Spiking Neural P Systems&quot; (SNPS)
      </label>
    </section>
  );
};

export default Settings;
