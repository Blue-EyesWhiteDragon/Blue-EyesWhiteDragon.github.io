import {
    AiFillTwitterCircle,
    AiFillLinkedin,
    AiFillYoutube,
    AiOutlineMail,
    AiTwotoneMail,
} from "react-icons/ai";
import { BsExclude, BsFillHeartFill, BsFillMoonStarsFill, BsFillSunFill, BsHandThumbsUpFill, BsImageFill, BsMusicNoteBeamed, BsMusicNoteList } from "react-icons/bs";
import React, { useState } from "react";
import portfolioPhoto from "/bitmoji-body.png";
import web1 from "/web1.png";
import web2 from "/web2.png";
import web3 from "/web3.jpg";
import web4 from "/web4.jpg";
import web5 from "/web5.jpg";
import web6 from "/web6.jpg";

interface JobEntryProps {
    as : string,
    title : string,
    location : string,
    start : number[],
    end : false | number[],
    brand? : JSX.Element
}

const JobEntry = ( props : JobEntryProps ) => {

    let { as, title, location, start, end, brand } = props;
    let compileProps = { className : "px-6 py-3 first:pt-0 last:pb-0"}

    const parseDate = ( stringArray : number[] ) => {

        let date = new Date();
        date.setMonth(stringArray[0] - 1);
        date.setFullYear(stringArray[1])

        return {date, dateString : `${date.toLocaleString("en-GB", { month : "short", year: "numeric" })}` };

    };

    const getLengthOfEmployment = ( startDate : Date, endDate : Date | false = false, isCurrentJob : boolean = false ) => {

        let parsedEndDate = new Date();

        if ( endDate !== false && isCurrentJob === false ) {
            parsedEndDate = endDate; 
        }

        let a = parsedEndDate.getMonth() - startDate.getMonth();
        let b = parsedEndDate.getFullYear() - startDate.getFullYear();
        if ( a === 0 && b == 0 ) a = 1;
        let c = ( a + (12 * b) );

        return `${Math.floor(c / 12) } Year(s) ${c % 12} Month(s)`;

    };

    let startDateParsed = parseDate(start);
    let endDateParsed;
    let present = false;

    if ( typeof end === "boolean" && end === false ) present = true;
    else endDateParsed = parseDate(end);
    
    const childNode = <div className="flex gap-4">
        <h3 className="text-8xl flex-grow-0 flex-shrink-1 w-24">
            {brand ? brand : <BsImageFill /> }
        </h3>
        <div className="flex-col">
            <h3>{title}</h3>
            <div>{location}</div>
            <div>{startDateParsed.dateString} &rarr; {endDateParsed?.dateString ?? "Present"}</div>
            <div>{ getLengthOfEmployment(startDateParsed.date, endDateParsed?.date ?? false, present) }</div>
        </div>
    </div>

    let newJSX = React.createElement(as, compileProps, childNode);

    return newJSX;

};


const App = () => {

    const [darkMode, setDarkMode] = useState(true);

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <div className={darkMode ? "dark" : ""}>
            {
                modalVisible ? <style>{`body {overflow: hidden;}`}</style> : ""
            }
            <main className="bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
                <div id="defaultModal" tabIndex={-1} aria-hidden={!modalVisible} className={`overflow-x-hidden overflow-y-auto overscroll-none fixed top-0 right-0 left-0 z-50 p-4 h-full w-full md:inset-0 ${modalVisible ? "" : "hidden"}`}>
                    <div className="relative w-full h-full max-w-5xl m-auto md:h-auto z-10">
                        <div className="relative bg-white rounded-lg shadow-lg dark:bg-gray-800">
                            <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    Resumé
                                </h3>
                                <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal" onClick={() => setModalVisible(false)}>
                                    <BsExclude aria-hidden={!modalVisible} />
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            <ul className="py-3 divide-y divide-slate-200 dark:text-white">
                                <JobEntry as={"li"} brand={<BsMusicNoteList />} title={"Sound Engineer"} location={"Glasgow, United Kingdom"} start={[8, 2022]} end={false} />
                                <JobEntry as={"li"} brand={<img src="https://s3-eu-west-1.amazonaws.com/tpd/logos/5847e5b30000ff000598bd91/0x0.png" alt="Scotvapes" />} title={"Lead Sales"} location={"Inverness, United Kingdom"} start={[8, 2021]} end={[11, 2022]} />
                                <JobEntry as={"li"} brand={<BsMusicNoteList />} title={"Sound Engineer"} location={"Inverness, United Kingdom"} start={[11, 2020]} end={[8, 2022]} />
                                <JobEntry as={"li"} brand={<img src="http://a.mktgcdn.com/p/fot8GcMuoCfmODRxMBi_X70QMmeQCkCdB46-XLhU2nU/500x500.jpg" alt="Blacks" />} title={"Sales Assistant"} location={"Inverness, United Kingdom"} start={[8, 2020]} end={[11, 2020]} />
                                <JobEntry as={"li"} brand={<img src="https://www.thesqcamberley.co.uk/wp-content/uploads/2018/01/Smiggle-logo.jpg" alt="Smiggle" />} title={"Sales Assistant"} location={"Inverness, United Kingdom"} start={[3, 2020]} end={[8, 2020]} />
                                <JobEntry as={"li"} brand={<img className="bg-white" src="https://www.bh2leisure.co.uk/wp-content/uploads/2016/12/Untitled-design-4.png" alt="Nando's" />} title={"Crew Member"} location={"Inverness, United Kingdom"} start={[2, 2020]} end={[3, 2020]} />
                                <JobEntry as={"li"} brand={<img src="https://www.rmhdurhamwake.org/wp-content/uploads/2016/09/mcdonalds-logo.jpg" alt="McDonalds" />} title={"Crew Trainer"} location={"Inverness, United Kingdom"} start={[3, 2018]} end={[2, 2020]} />
                                <JobEntry as={"li"} brand={<img src="https://media.thebestof.co.uk/v2/rule/feature_logo_square/resource_page/1/5c/3c/5c3ca1bb27a7adec7a008a6c_1547477488/Vue.jpg" alt="Vue" />} title={"Customer Assistant"} location={"Inverness, United Kingdom"} start={[8, 2017]} end={[2, 2018]} />
                                <JobEntry as={"li"} brand={<img className="bg-white" src="https://www.tedlearning.co.uk/wp-content/uploads/2020/01/Steinhoff-logo-500x500-1.png" alt="Steinhoff" />} title={"Sales Advisor"} location={"Inverness, United Kingdom"} start={[12, 2016]} end={[1, 2017]} />
                            </ul>
                        </div>
                    </div>
                    <div
                        className="cursor-pointer fixed w-full h-full top-0 left-0 bottom-0 right-0 bg-black dark:bg-white opacity-75 dark:opacity-25"
                        onClick={()=>setModalVisible(false)}></div>
                </div>
                <section className="min-h-screen z-10">
                    <nav className="animate-drop-fade-in-100-fast py-10 mb-12 flex justify-between dark:text-white">
                        <h1 className="font-burtons text-xl flex justify-between gap-2">Made with <BsFillHeartFill className="relative inset-y-1 text-red-500 dark:text-orange-500" /> by J</h1>
                        <ul className="flex items-center">
                            <li>
                                <BsFillMoonStarsFill
                                    onClick={() => setDarkMode(!darkMode)}
                                    className={`cursor-pointer text-2xl ${darkMode ? "" : "hidden"}`}
                                />
                                <BsFillSunFill
                                    onClick={() => setDarkMode(!darkMode)}
                                    className={`fill-orange-600 cursor-pointer text-2xl ${darkMode ? "hidden" : ""}`}
                                />
                            </li>
                            <li>
                                <a
                                    className="bg-red-500 dark:bg-gradient-to-r dark:from-red-500 dark:to-orange-500 select-none text-white px-4 py-2 border-none rounded-md ml-8"
                                    href="#"
                                    onClick={() => setModalVisible(true)}
                                    data-modal-toggle="defaultModal"
                                >
                                    Resumé
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div className="text-center p-10 py-10 select-none">
                        <h2 className="animate-drop-fade-in-100-fast font-display text-5xl py-2 text-red-600 dark:text-orange-400 md:text-6xl">
                            John Andrew Loudon
                        </h2>
                        <h3 className="animate-drop-fade-in-100-fast font-display text-3xl py-2 text-transparent bg-clip-text bg-gradient-to-r from-gray-600 to-gray-800 dark:from-orange-200 dark:to-orange-600 md:text-5xl">
                            <a href="https://github.com/blue-eyeswhitedragon" target="_blank" className="inline-block border-b-2 border-solid-1 border-transparent motion-safe:hover:animate-wiggle hover:border-current hover:text-red-600 dark:hover:text-orange-200 transition ease-in-out duration-200">dev</a>
                            +
                            <a href="https://instagram.com/ho_loofficial" target="_blank" className="inline-block border-b-2 border-solid-1 border-transparent motion-safe:hover:animate-wiggle hover:border-current hover:text-red-600 dark:hover:text-orange-200 transition ease-in-out duration-200">design</a>
                            +
                            <a href="https://ho-lomusic.bandcamp.com" target="_blank" className="inline-block border-b-2 border-solid-1 border-transparent motion-safe:hover:animate-wiggle hover:border-current hover:text-red-600 dark:hover:text-orange-200 transition ease-in-out duration-200">music</a>
                        </h3>
                        <div className="animate-drop-fade-in-100-fast text-6xl md:text-7xl lg:text-8xl flex justify-center gap-8 py-8">
                            <a href="https://www.linkedin.com/in/scripttype" target="_blank" className="motion-safe:hover:animate-wiggle-hold animation-speed-2 text-blue-500 hover:text-blue-300 dark:text-gray-400 dark:hover:text-orange-400 transition ease-in-out duration-200"><AiFillLinkedin /></a>
                            <a href="mailto:jackloudon@live.com" target="_blank" className="motion-safe:hover:animate-wiggle-hold text-blue-400 hover:text-blue-200 dark:text-gray-400 dark:hover:text-orange-400 transition ease-in-out duration-200"><AiTwotoneMail /></a>
                            <a href="https://youtube.com/@ho_loofficial" target="_blank" className="motion-safe:hover:animate-wiggle-hold text-red-600 hover:text-red-400 dark:text-gray-400 dark:hover:text-orange-400 transition ease-in-out duration-200"><AiFillYoutube /></a>
                        </div>
                        <div className="animate-drop-fade-in-100-fast mx-auto bg-gradient-to-b from-red-800 dark:from-orange-500 rounded-full h-40 w-40 relative overflow-hidden mt-1 sm:h-80 sm:w-80 md:h-96 md:w-96">
                            <img src={portfolioPhoto} className="opacity-80 mix-blend-hard-light" />
                        </div>
                    </div>
                </section>
                <style>
                {/*{`.wavylines{
                --mask: radial-gradient(50.65px at 50% calc(100% + 24.00px),#0000 calc(99% - 8px),#000 calc(101% - 8px) 99%,#0000 101%) calc(50% - 80px) calc(50% - 24px + .5px)/160px 48px ,
                        radial-gradient(50.65px at 50% -24px,#0000 calc(99% - 8px),#000 calc(101% - 8px) 99%,#0000 101%) 50% calc(50% + 24px)/160px 48px ;
                -webkit-mask: var(--mask);
                        mask: var(--mask);
                        
                }`
                <div className="relative w-100 h-20 -mx-20 -mt-20 mb-10 mx-auto bg-red-600 dark:bg-orange-600 wavylines"></div>
                */}
                </style>
                <section>
                    
                    <h3 className="font-display text-2xl text-center lg:text-left md:text-4xl py-1 dark:text-white z-10">Things I do</h3>
                    <div className="py-2 lg:flex gap-10 z-10">
                        <div className="text-center shadow-lg p-10 rounded-xl my-10 bg-white dark:bg-gray-800 dark:text-white flex-1">
                            <BsImageFill className="fill-red-600 dark:fill-gray-500 drop-shadow-md mx-auto" size={100} />
                            <h3 className="font-display text-xl font-medium pt-8 pb-2 md:text-2xl xl:text-3xl">
                                Beautiful Designs
                            </h3>
                            <p className="py-2">
                                Creating elegant designs suited for your needs following core
                                design theories.
                            </p>
                            <h4 className="font-display font-semibold pt-4 pb-2 text-red-600 dark:text-orange-500">Design Tools I Use</h4>
                            <p className="text-gray-800 dark:text-white py-1">Photoshop</p>
                            <p className="text-gray-800 dark:text-white py-1">Illustrator</p>
                            <p className="text-gray-800 dark:text-white py-1">Premiere</p>
                            <p className="text-gray-800 dark:text-white py-1">After Effects</p>
                            <p className="text-gray-800 dark:text-white py-1">Godot</p>
                        </div>
                        <div className="text-center shadow-lg p-10 rounded-xl my-10 bg-white dark:bg-gray-800 dark:text-white flex-1">
                            <BsMusicNoteBeamed className="fill-red-600 dark:fill-gray-500 drop-shadow-md mx-auto" size={100} />
                            <h3 className="font-display text-xl font-medium pt-8 pb-2 md:text-2xl xl:text-3xl">
                                Weird music
                            </h3>
                            <p className="py-2">
                                Creating pieces of music or jingles to fit a brand's requirements.
                            </p>
                            <h4 className="font-display font-semibold pt-4 pb-2 text-red-600 dark:text-orange-500">Music Tools I Use</h4>
                            <p className="text-gray-800 dark:text-white py-1">FL Studio</p>
                            <p className="text-gray-800 dark:text-white py-1">Ableton Live</p>
                            <p className="text-gray-800 dark:text-white py-1">Reaper</p>
                            <p className="text-gray-800 dark:text-white py-1">Logic Pro</p>
                            <p className="text-gray-800 dark:text-white py-1">Hardware mixing</p>
                        </div>
                        <div className="text-center shadow-lg p-10 rounded-xl my-10 bg-white dark:bg-gray-800 dark:text-white flex-1">
                            <BsHandThumbsUpFill className="fill-red-600 dark:fill-gray-500 drop-shadow-md mx-auto" size={100} />
                            <h3 className="font-display text-xl font-medium pt-8 pb-2 md:text-2xl xl:text-3xl">
                                Consultation
                            </h3>
                            <p className="py-2">
                                Advising strategies for brand identity with modern technology and offline techniques.
                            </p>
                            <h4 className="font-display font-semibold pt-4 pb-2 text-red-600 dark:text-orange-500">Strategies I offer</h4>
                            <p className="text-gray-800 dark:text-white py-1">Website consultation</p>
                            <p className="text-gray-800 dark:text-white py-1">Contractions & expansions</p>
                            <p className="text-gray-800 dark:text-white py-1">Customer retention</p>
                            <p className="text-gray-800 dark:text-white py-1">Positive reinforcement</p>
                            <p className="text-gray-800 dark:text-white py-1">Staff mentoring</p>
                        </div>
                    </div>
                </section>
                <section className="py-10">
                    <h3 className="font-display text-2xl text-center lg:text-left md:text-4xl py-1 dark:text-white ">Portofolio</h3>
                    <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
                        <div className="basis-1/3 flex-1 ">
                            <img
                                className="rounded-lg object-cover"
                                width={"100%"}
                                height={"100%"}
                                src={web1}
                            />
                        </div>
                        <div className="basis-1/3 flex-1">
                            <img
                                className="rounded-lg object-cover"
                                width={"100%"}
                                height={"100%"}
                                src={web2}
                            />
                        </div>
                        <div className="basis-1/3 flex-1">
                            <img
                                className="rounded-lg object-cover"
                                width={"100%"}
                                height={"100%"}
                                src={web3}
                            />
                        </div>
                        <div className="basis-1/3 flex-1">
                            <img
                                className="rounded-lg object-cover"
                                width={"100%"}
                                height={"100%"}
                                src={web4}
                            />
                        </div>
                        <div className="basis-1/3 flex-1">
                            <img
                                className="rounded-lg object-cover"
                                width={"100%"}
                                height={"100%"}
                                src={web5}
                            />
                        </div>
                        <div className="basis-1/3 flex-1">
                            <img
                                className="rounded-lg object-cover"
                                width={"100%"}
                                height={"100%"}
                                src={web6}
                            />
                        </div>
                    </div>
                </section>
            </main>
            <footer className="py-4 text-center text-gray-400 dark:text-gray-700 bg-white dark:bg-gray-900">
                &copy; John Andrew Loudon {(new Date()).getUTCFullYear()}
            </footer>
        </div>
    )

}

export default App;
