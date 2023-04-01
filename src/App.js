import IntroVideo from "./components/IntroVideo";
import Section from "./components/Section";

import "./styles/App.scss";
import "./styles/intro.scss";
import "./styles/section.scss";
import "./styles/footer.scss";
import "./styles/mediaQuery.scss";

import freshTopicImg from "./assests/academy.png";
import freshTopic2Img from "./assests/story.png";
import tedTalksImg from "./assests/in-the-news.gif";
import franchiseImage from "./assests/franchise.gif";
import mapImg from "./assests/locations.png";
import coursesImg from "./assests/image2.png";
import albumImg from "./assests/mba-cares.gif";
import bharatImg from "./assests/image1.png";
import chaiwalaImg from "./assests/image3.png";

import data from "./data/data.json";
import Footer from "./components/Footer";

const yellow = "#fff100",
    pink = "#ed1e79",
    white = "#fff",
    brown = "#6d3d0f";

function App() {
    const {
        freshTopic,
        freshTopic2,
        tedTalks,
        franchise,
        map,
        courses,
        album,
        barat,
        chaiwala,
    } = data;

    return (
        <>
            <IntroVideo />
            {/* FreshTopic */}
            <Section
                h3={freshTopic.heading}
                text={freshTopic.text}
                btnTxt={freshTopic.btn}
                imgSrc={freshTopicImg}
                backgroundColor={pink}
                headingColor={yellow}
                textColor={yellow}
                btnBgColor={yellow}
                btnColor={pink}
            />{" "}
            {/* FreshTopic - 2 */}
            <Section
                h3={freshTopic2.heading}
                text={freshTopic2.text}
                btnTxt={freshTopic2.btn}
                imgSrc={freshTopic2Img}
                backgroundColor={pink}
                headingColor={yellow}
                textColor={yellow}
                btnBgColor={yellow}
                btnColor={pink}
            />
            {/* Ted Talks */}
            <Section
                h3={tedTalks.heading}
                text={tedTalks.text}
                btnTxt={tedTalks.btn}
                imgSrc={tedTalksImg}
                backgroundColor={yellow}
                headingColor={pink}
                textColor={pink}
                btnBgColor={pink}
                btnColor={yellow}
            />
            {/* Franchise */}
            <Section
                h3={franchise.heading}
                text={franchise.text}
                btnTxt={franchise.btn}
                imgSrc={franchiseImage}
                backgroundColor={white}
                headingColor={pink}
                textColor={brown}
                btnBgColor={brown}
                btnColor={yellow}
            />{" "}
            {/* Map */}
            <Section
                h3={map.heading}
                text={map.text}
                imgSrc={mapImg}
                backgroundColor={pink}
                headingColor={yellow}
                textColor={yellow}
                btnBgColor={brown}
                btnColor={yellow}
                hasBtn={false}
            />{" "}
            {/* Courses */}
            <Section
                h3={courses.heading}
                text={courses.text}
                btnTxt={courses.btn}
                imgSrc={coursesImg}
                imgSize={"30%"}
                backgroundColor={yellow}
                headingColor={pink}
                textColor={pink}
                btnBgColor={pink}
                btnColor={yellow}
            />
            {/* Album */}
            <Section
                h3={album.heading}
                text={album.text}
                btnTxt={album.btn}
                imgSrc={albumImg}
                backgroundColor={white}
                headingColor={pink}
                textColor={brown}
                btnBgColor={brown}
                btnColor={yellow}
            />{" "}
            {/* Barat */}
            <Section
                h3={barat.heading}
                text={barat.text}
                btnTxt={barat.btn}
                imgSrc={bharatImg}
                backgroundColor={pink}
                headingColor={yellow}
                textColor={yellow}
                btnBgColor={yellow}
                btnColor={pink}
            />{" "}
            {/* ChaiWala */}
            <Section
                h3={chaiwala.heading}
                text={chaiwala.text}
                btnTxt={chaiwala.btn}
                imgSrc={chaiwalaImg}
                backgroundColor={white}
                headingColor={pink}
                textColor={brown}
                btnBgColor={brown}
                btnColor={yellow}
            />
            <Footer />
        </>
    );
}

export default App;
