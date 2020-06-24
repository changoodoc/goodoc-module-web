import * as React from "react";
import { HOSPITAL_FOOTER_TXT, HOSPITAL_FOOTER_LOGO } from "./HospitalFooterModel";
import "./HospitalFooter.scss";

const Empty = () => (<span />);
const HospitalFooter = (DividerVertical: any, VersionTooltip: any = Empty, FooterMenualFiles: any = Empty) => {
    return ({
                isLogin = true,
                isFix = false
            }: {
        isLogin?: boolean;
        isFix?: boolean;
    }) => {
        return (
            <footer className={`Footer${isFix ? " fix" : ""}`}>
                <div className="Footer__container">
                    <section className="Footer__section1">
                        <div className="Footer__col1">
                            <div className="Footer__col1--section2">
                                <img className="Footer__logo" src={HOSPITAL_FOOTER_LOGO} alt="Goodoc Logo" />
                                <div className="Footer__info">
                                    {
                                        [
                                            HOSPITAL_FOOTER_TXT.addr,
                                            HOSPITAL_FOOTER_TXT.allRight
                                        ].map((item, idx) => {
                                            return (
                                                <span key={idx}>
                                                {item}{idx === 1 && (<VersionTooltip/> || '')}<br/>
                                              </span>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        <div className={`Footer__col2${isLogin ? "" : " bottom"}`}>
                            <div className="Footer__col2--section1">
                                <FooterMenualFiles
                                    isLogin={isLogin}
                                />
                            </div>
                        </div>
                    </section>
                </div>
            </footer>
        );
    };
};

export default HospitalFooter;
