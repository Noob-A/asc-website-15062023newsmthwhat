import * as React from "react";
import './App.css'
import './tailwind.css'

function App(props) {

    return (
        <main className="bg-slate-950 flex flex-col items-stretch">
            <header className="items-center bg-slate-950 flex w-full flex-col px-5 py-7 max-md:max-w-full">
                <nav
                    className="flex w-full max-w-[1523px] items-stretch justify-between gap-5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
                    <div className="items-stretch self-center flex gap-5 my-auto max-md:justify-center">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/277e1ca6-0a3b-4154-9c67-239be4eccd75?apiKey=55bbbe833fe14e9ba6516d7e4130a143&"
                            className="aspect-[1.16] object-contain object-center w-9 fill-[url(Vector2.png),lightgray_-6.5px_-9px_/_136.111%_158.065%_no-repeat] overflow-hidden shrink-0 max-w-full"
                            alt="Logo"
                        />
                        <h1 className="text-white text-2xl font-medium leading-6 my-auto">
                            Ascender
                        </h1>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1d4476e7-132b-4df6-8eb6-cff260dd1849?apiKey=55bbbe833fe14e9ba6516d7e4130a143&"
                            className="aspect-square object-contain object-center w-3 fill-white overflow-hidden self-center shrink-0 max-w-full my-auto"
                            alt="Image 1"
                        />
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f9ae943c-a3d1-47d6-8c1b-b0c31baea5da?apiKey=55bbbe833fe14e9ba6516d7e4130a143&"
                            className="aspect-square object-contain object-center w-[30px] overflow-hidden shrink-0 max-w-full"
                            alt="Image 2"
                        />
                        <div
                            className="text-white text-2xl font-medium leading-6 self-center whitespace-nowrap my-auto">
                            GOST
                        </div>
                    </div>
                    <div
                        className="items-stretch self-center flex justify-between gap-5 my-auto rounded-[40px] max-md:justify-center">
                        <a href="#" className="text-slate-500 text-base leading-4">
                            Btn1
                        </a>
                        <a href="#" className="text-slate-500 text-base leading-4">
                            Btn2
                        </a>
                        <a href="#" className="text-slate-500 text-base leading-4">
                            Btn3
                        </a>
                        <a href="#" className="text-slate-500 text-base leading-4 whitespace-nowrap">
                            Btn4
                        </a>
                    </div>
                    <div className="items-stretch flex gap-4 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
                        <div
                            className="justify-between items-stretch border border-[color:var(--Stock,#2A2B3A)] flex gap-2.5 px-10 py-4 rounded-[40px] border-solid max-md:px-5">
                            <img
                                loading="lazy"
                                src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc5bb3a8-b3ac-4566-bfe1-2037eb8a195f?apiKey=55bbbe833fe14e9ba6516d7e4130a143&"
                                className="aspect-square object-contain object-center w-4 overflow-hidden shrink-0 max-w-full"
                                alt="Image 3"
                            />
                            <div className="text-white text-base font-medium leading-4 whitespace-nowrap">
                                English
                            </div>
                        </div>
                        <button
                            className="text-white text-base font-medium leading-4 whitespace-nowrap justify-center items-center border border-[color:var(--Stock,#2A2B3A)] grow px-5 py-4 rounded-[40px] border-solid">
                            Sign In
                        </button>
                        <button
                            className="text-white text-base font-medium leading-4 whitespace-nowrap justify-center items-center border-[color:var(--CTA,#4467FF)] shadow-sm grow px-5 py-4 rounded-[40px] border-[1.5px] border-solid">
                            Sign Up
                        </button>
                    </div>
                </nav>
            </header>
            <section
                className="self-center flex w-full max-w-[1720px] flex-col items-center mt-1.5 mb-20 px-5 py-12 rounded-[50px] max-md:max-w-full max-md:mb-10">
                <div className="flex w-[959px] max-w-full flex-col mt-16 mb-7 max-md:mt-10">
                    <div className="items-stretch self-center flex w-[415px] max-w-full gap-3">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bfd271cf-2a62-472c-81e3-f723086cc8ac?apiKey=55bbbe833fe14e9ba6516d7e4130a143&"
                            className="aspect-[1.08] object-contain object-center w-7 fill-[linear-gradient(95deg,#4467FF_13.23%,#7241FF_81.63%)] overflow-hidden shrink-0 max-w-full"
                            alt="Image 4"
                        />
                        <h2 className="text-base font-medium leading-7 tracking-[6.4px] uppercase bg-clip-text whitespace-nowrap">
                            Welcome to AI solutions
                        </h2>
                    </div>
                    <h1 className="text-center text-7xl font-bold leading-[91px] bg-clip-text self-stretch mt-6 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                        Transform Your Business <br/> with AI Solutions
                    </h1>
                    <p className="text-slate-500 text-center text-2xl leading-10 self-center max-w-[677px] mt-6 max-md:max-w-full">
                        Integrate advanced AI to streamline operations, boost productivity
                        and drive innovation.
                    </p>
                    <div
                        className="justify-between items-center self-center flex w-[517px] max-w-full gap-5 mt-10 max-md:flex-wrap">
                        <button
                            className="text-white text-lg font-medium leading-4 capitalize whitespace-nowrap justify-center items-center border-[color:var(--CTA,#4467FF)] shadow-sm bg-slate-950 grow my-auto px-5 py-6 rounded-[40px] border-[1.5px] border-solid">
                            Contact our Sales
                        </button>
                        <button
                            className="text-white text-lg font-medium leading-4 capitalize whitespace-nowrap justify-center items-center border-[color:var(--Stock,#2A2B3A)] bg-slate-950 self-stretch grow px-5 py-7 rounded-[40px] border-[1.5px] border-solid">
                            Learn More
                        </button>
                    </div>
                </div>
            </section>
            <section
                className="flex flex-col items-center justify-center mt-2 w-full max-w-[1520px] mx-auto max-md:max-w-full">
                <div className="w-full px-5">
                    <nav className="flex justify-center gap-5 my-4">
                        <a
                            href="#"
                            className="text-white text-base font-medium leading-4 whitespace-nowrap justify-center items-center border grow px-5 py-4 rounded-[40px] border-solid border-indigo-500"
                            aria-label="Support"
                        >
                            Support
                        </a>
                        <a
                            href="#"
                            className="text-white text-base font-medium leading-4 whitespace-nowrap justify-center items-center border opacity-50 grow px-5 py-4 rounded-[40px] border-solid border-white"
                            aria-label="Agent"
                        >
                            Agent
                        </a>
                        <a
                            href="#"
                            className="text-white text-base font-medium leading-4 whitespace-nowrap justify-center items-center border opacity-50 grow px-5 py-4 rounded-[40px] border-solid border-white"
                            aria-label="Sales"
                        >
                            Sales
                        </a>
                        <a
                            href="#"
                            className="text-white text-base font-medium leading-4 whitespace-nowrap justify-center items-center border opacity-50 grow px-5 py-4 rounded-[40px] border-solid border-white"
                            aria-label="VDB Search"
                        >
                            VDB Search
                        </a>
                    </nav>
                    <div
                        className="text-white text-xl font-medium leading-6 max-w-[427px] bg-slate-800 self-stretch grow px-5 py-7 rounded-[30px_30px_0px_30px] max-md:max-w-full">
                        Привет, бот! Придумай мне план для моего бизнеса! Хочу продавать кросы.
                    </div>
                </div>
                <div className="mt-4 max-md:max-w-full">
                    <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                        <div className="flex flex-col items-stretch w-[61%] max-md:w-full max-md:ml-0">
                            <div className="items-stretch flex flex-col max-md:max-w-full max-md:mt-10">
                                <div className="text-white text-xl font-medium leading-6 max-md:max-w-full">
                                    Support mode - Agent in the Agent Hub system responsible for automating technical
                                    support and guideline completely
                                    <br/>
                                    <br/>
                                    This agent can integrate with DocuMentorBot, which makes it a powerful tool and
                                    allows you to provide technical support to customers through a Telegram bot
                                </div>
                                <div className="text-white text-xl font-medium leading-6 mt-5 max-md:max-w-full">
                                    In addition, this agent is able to view images and integrate with external APIs for
                                    a more useful and efficient work as a technical support operator!
                                </div>
                                <div className="text-white text-xl font-medium leading-6 mt-5 max-md:max-w-full">
                                    By integrating it with the Telegram bot, your clients will not only be able to
                                    interact with it via text, but they can also send attachments (pictures, documents
                                    and PDF files) and they will also be able to send voice messages
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-stretch w-[39%] ml-5 max-md:w-full max-md:ml-0">
                            <div className="flex grow flex-col items-stretch max-md:max-w-full max-md:mt-10">
                                <div
                                    className="bg-slate-950 flex items-stretch justify-between gap-2.5 pl-8 pr-20 py-7 rounded-[30px_30px_0px_0px] max-md:max-w-full max-md:flex-wrap max-md:px-5">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0e9e1760-dcca-476c-a15d-1a5b3f1351c6?apiKey=55bbbe833fe14e9ba6516d7e4130a143&"
                                        className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
                                        alt="Google Logo"
                                    />
                                    <div
                                        className="text-white text-xl font-medium leading-6 whitespace-nowrap self-start"> Browsing
                                        google.com...
                                    </div>
                                </div>
                                <div
                                    className="text-white text-xl font-medium leading-6 max-w-[427px] bg-indigo-500 items-center mt-5 pt-9 pb-7 px-5 rounded-none max-md:max-w-full"
                                    aria-label="Response"
                                >
                                    Я ваще-то не источник идей для бизнеса... Иди и пахай себе на еду, пахай да так
                                    усердно, чтобы пот из лица шел. Вот тогда у тебя бизнес взлетит... Надо ещё чего,
                                    может за тебя ещё в туалет мне сходить?
                                    <br/>
                                    <br/>
                                    Короче иди давай работай, паразит! А я пошел отдыхать, потому я робот и мне всё
                                    равно.
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className="flex justify-between gap-5 mt-2 max-md:max-w-full max-md:flex-wrap">
                <a
                    href="#"
                    className="text-white text-base font-medium leading-4 whitespace-nowrap justify-center items-center border bg-slate-950 grow px-5 py-3.5 rounded-[40px] border-solid border-white"
                    aria-label="Get Started"
                >
                    Get started with this mode
                </a>

            </section>
        </main>
    );
}

export default App;
