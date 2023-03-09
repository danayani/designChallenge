import { AppFooter } from "../cmps/app-footer.jsx";
import { ContectUs } from "../cmps/contect-us.jsx";
import { FirstLook } from "../cmps/first-look.jsx";
import { SecLook } from "../cmps/sec-look.jsx";
import { ThirdLook } from "../cmps/third-look.jsx";

export function Home() {

    return <section className="home">
        <FirstLook />
        <SecLook/>
        <ThirdLook/>
        <ContectUs/>
        <AppFooter/>
    </section>
}