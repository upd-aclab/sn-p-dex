import type Handlers from "~/types/Handlers";
import type States from "~/types/States";

interface Props {
  states: States;
  handlers: Handlers;
}

const Settings = ({ states, handlers }: Props) => {
  return (
    <section>
      <h2 className="text-4xl">Settings</h2>
      <label>
        <input
          type="checkbox"
          checked={states.short}
          onChange={handlers.handleChange}
        />
        Abbreviate &quot;Spiking Neural P Systems&quot;?
      </label>
    </section>
  );
};

export default Settings;
