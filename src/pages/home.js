import Header from "../header";
import Gibjohnpicture from "../components/homepageimage";
import Homepagebuttons from "../components/frontpagebuttons";
import Heroes from "../components/heroes";
import Navbar from "../components/navbar";

export default function Home(){
    return(
        <>
            <div>
                
                <Navbar></Navbar>
                <Header></Header>
                <Gibjohnpicture></Gibjohnpicture>
                
                <Heroes></Heroes>
            </div>
        </>
    )
}