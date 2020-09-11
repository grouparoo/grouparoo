import { useEffect, useState } from "react";
import { SetupStepAPIData } from "../../utils/apiData";
import { ProgressBar } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/router";

export default function SetupStepsNavProgressBar({ execApi }) {
  const [steps, setSteps] = useState<SetupStepAPIData[]>([]);
  const [shouldDisplay, setShouldDisplay] = useState(false);
  const router = useRouter();

  useEffect(() => {
    router?.events?.on("routeChangeStart", getSetupSteps);
    getSetupSteps();
    return () => {
      router?.events?.off("routeChangeStart", getSetupSteps);
    };
  }, []);

  async function getSetupSteps() {
    const { setupSteps, toDisplay } = await execApi("get", `/setupSteps`);
    setShouldDisplay(toDisplay);
    setSteps(setupSteps);
  }

  const activeStep = steps.find((step) => !step.complete);
  const isOnBoardingComplete = steps.every((step) => step.complete);
  const totalStepsCount = steps.length;
  const completeStepsCount = steps.filter((step) => step.complete).length;
  const percentComplete = Math.round(
    (100 * completeStepsCount) / totalStepsCount
  );

  if (!shouldDisplay) return null;

  return (
    <div
      style={{
        backgroundColor: "white",
        width: "100%",
        padding: 20,
        marginTop: 10,
      }}
    >
      <div
        style={{
          fontSize: 18,
          paddingLeft: 0,
          color: "var(--secondary)",
        }}
      >
        <Link href="/setup">
          <a>{isOnBoardingComplete ? "Setup Complete 🎉" : "Get Started:"}</a>
        </Link>
      </div>
      <div
        style={{
          paddingLeft: 0,
          paddingBottom: 10,
          color: "var(--secondary)",
        }}
      >
        {activeStep?.title}
      </div>
      <ProgressBar now={percentComplete} />
    </div>
  );
}
