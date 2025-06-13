import Form from "@/components/Form";
import StepBlock from "@/components/StepBlock";

const steps = [
  { icon: "step1.svg", title: "Le rêve libère l’expression" },
  { icon: "step2.svg", title: "Le sens éclaire le parcours" },
  // etc...
];

export default function Home() {
    return (
        <main className="flex flex-col md:flex-row">
            <section className="md:w-1/2 p-6 bg-[#7AA8AC] text-white">
                <h2>Pour commencer…</h2>
                <Form />
            </section>
            <section className="md:w-1/2 p-6">
                <h2>Votre Shynleï c’est..</h2>
                {steps.map((step, i) => (
                    <StepBlock key={i} icon={step.icon} title={step.title} index={i + 1} />
                ))}
            </section>
        </main>
    );
}
