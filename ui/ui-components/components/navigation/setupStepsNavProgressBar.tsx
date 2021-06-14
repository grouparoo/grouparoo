import { useEffect, useState } from "react";
import { Models } from "../../utils/apiData";
import { ProgressBar } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/router";
import { Actions } from "../../utils/apiData";

export default function SetupStepsNavProgressBar({
  execApi,
  setupStepHandler,
}) {
  const [steps, setSteps] = useState<Models.SetupStepType[]>([]);
  const [shouldDisplay, setShouldDisplay] = useState(false);
  const router = useRouter();

  useEffect(() => {
    getSetupSteps();
    router?.events?.on("routeChangeStart", (url) => {
      if (url !== "/" && !url.match(/^\/session\//)) getSetupSteps();
    });

    setupStepHandler?.subscribe("setup-steps-nav-progress-bar", getSetupSteps);

    return () => {
      setupStepHandler?.unsubscribe(
        "setup-steps-nav-progress-bar",
        getSetupSteps
      );
      router?.events?.off("routeChangeStart", getSetupSteps);
    };
  }, []);

  async function getSetupSteps() {
    if (router.pathname.match(/^\/session/)) return;

    const { setupSteps, toDisplay }: Actions.SetupStepsList = await execApi(
      "get",
      `/setupSteps`
    );

    if (setupSteps) {
      setShouldDisplay(toDisplay);
      setSteps(setupSteps);
    }
  }

  const activeStep = steps.find((step) => !step.complete && !step.skipped);
  const isOnBoardingComplete = steps.every(
    (step) => step.complete || step.skipped
  );
  const totalStepsCount = steps.length;
  const completeStepsCount = steps.filter(
    (step) => step.complete || step.skipped
  ).length;
  const percentComplete = Math.round(
    (100 * completeStepsCount) / totalStepsCount
  );

  if (!shouldDisplay) return null;

  return (
    <div
      style={{
        backgroundColor: "var(--grouparoo-background-blue)",
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
