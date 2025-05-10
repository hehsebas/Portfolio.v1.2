import TransitionPage from "@/components/transition-page";
import ContainerPage from "@/components/container";
import Avatar from "@/components/avatar";
import CounterServices from "@/components/counter-services";
import TimeLane from "@/components/time-line";
import DelayedVisibility from "@/components/visibility";
import MotionTransition from "@/components/transition-components";
function PageAboutMe() {
  return (
    <>
      <TransitionPage />
      <ContainerPage>
        <Avatar />
        <DelayedVisibility>
          <MotionTransition position="top">
            <h1 className="flex items-center justify-center w-full text-2xl font-bold text-center ">
              My personal trajectory.
            </h1>
          </MotionTransition>
        </DelayedVisibility>
        <CounterServices />
        <TimeLane />
      </ContainerPage>
    </>
  );
}
export default PageAboutMe;
