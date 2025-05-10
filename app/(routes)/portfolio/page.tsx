import MotionTransition from "@/components/transition-components";
import DelayedVisibility from "@/components/visibility";
import ContainerPage from "@/components/container";
import TransitionPage from "@/components/transition-page";
import PortfolioBox from "@/components/PortfolioBox";
import { dataPortfolio } from "@/data";
function PortfolioPage() {
  return (
    <div>
      <TransitionPage />
      <ContainerPage>
        <DelayedVisibility>
          <MotionTransition position="top">
            <div className="flex flex-col justify-center h-full text-center">
              <h1 className="text-2xl font-bold leading-tight text-center md:text-4xl md:mb-5">
                My lastest projects and works.
              </h1>
              <div className="relative z-10 grid max-w-5xl gap-6 mx-auto mt-4 md:grid-cols-4">
                {dataPortfolio.map((data) => (
                    <PortfolioBox key={data.id} data={data} />
                    ))}
              </div>
            </div>
          </MotionTransition>
        </DelayedVisibility>
      </ContainerPage>
    </div>
  );
}
export default PortfolioPage;
