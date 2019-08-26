import * as React from "react";
import { HOSPITAL_FOOTER_TXT, HOSPITAL_FOOTER_LOGO } from "./HospitalFooterModel";
import "./HospitalFooter.scss";

const hostname = window.location.hostname;
const link = hostname === 'www.goodoc.co.kr' || hostname === 'goodoc.co.kr' ? 'https://hello.goodoc.co.kr' : 'https://hello-staging.goodoc.co.kr';
const Empty = () => (<span />);
const HospitalFooter = (DividerVertical: any, VersionTooltip: any = Empty, FooterMenualFiles: any = Empty) => {
    return ({
                isLogin = true,
                isFix = false
            }: {
        isLogin?: boolean;
        isFix?: boolean;
    }) => {
        const openNewLink = (target: "usage" | "privacy" | "alliance") => () => {
            switch (target) {
                case "alliance":
                    window.open(`${link}/alliance`);
                    break;
                default:
                    window.open(`${link}/term#${target}`);
                    break;
            }
        };
        return (
            <footer className={`Footer${isFix ? " fix" : ""}`}>
                <div className="Footer__container">
                    <section className="Footer__section1">
                        <div className="Footer__col1">
                            <div className="Footer__col1--section1">
                                <div
                                    className="Footer__col1--section1 usage"
                                    onClick={openNewLink("usage")}
                                >
                                    {HOSPITAL_FOOTER_TXT.usage}
                                </div>
                                <div
                                    className="Footer__col1--section1 privacy"
                                    onClick={openNewLink("privacy")}
                                >
                                    {HOSPITAL_FOOTER_TXT.privacy}
                                </div>
                                <div
                                    className="Footer__col1--section1 alliance"
                                    onClick={openNewLink("alliance")}
                                >
                                    {HOSPITAL_FOOTER_TXT.alliance}
                                </div>
                            </div>
                            <div className="Footer__col1--section2">
                                <img className="Footer__logo" src={HOSPITAL_FOOTER_LOGO} alt="Carelabs Logo" />
                                <div className="Footer__info">
                                    {
                                        [
                                            HOSPITAL_FOOTER_TXT.componayName,
                                            HOSPITAL_FOOTER_TXT.ceo,
                                            HOSPITAL_FOOTER_TXT.regCode,
                                            HOSPITAL_FOOTER_TXT.phone,
                                            HOSPITAL_FOOTER_TXT.code,
                                            HOSPITAL_FOOTER_TXT.addr,
                                            HOSPITAL_FOOTER_TXT.allRight
                                        ].map((item, idx) => {
                                            return (
                                                <>
                                                    {item}
                                                    {idx === 4 || idx === 6 ?
                                                        (idx === 4 ? <br/> : (<VersionTooltip/> || ''))
                                                        :
                                                        <DividerVertical color={idx === 5 ? 'black' : 'gray'} />
                                                    }
                                                </>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        <div className={`Footer__col2${isLogin ? "" : " bottom"}`}>
                            <div className="Footer__col2--section1">
                                {isLogin ? (<FooterMenualFiles /> || '') : null}
                            </div>
                        </div>
                    </section>
                </div>
            </footer>
        );
    };
};

export default HospitalFooter;
