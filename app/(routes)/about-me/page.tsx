import TransitionPage from "@/components/transition-page";
import ContainerPage from "@/components/container";
import Avatar from "@/components/avatar";
function PageAboutMe() {
    return (
        <>
            <TransitionPage/>
            <ContainerPage>
                <Avatar/>
                <h1 className="flex items-center justify-center w-full text-2xl font-bold text-center ">
                    My personal trajectory.
                </h1>
            </ContainerPage>
        </>
    );
}
export default PageAboutMe;