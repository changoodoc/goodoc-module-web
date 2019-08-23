import * as React from "react";
import { HospitalFooterLogo, HospitalFooterModel } from "./HospitalFooterModel";

const HospitalFooter = (VersionTooltip: any, DividerVertical: any, FooterMenualFiles: any) => {
    return ({
                isLogin = true,
                isFix = false
            }: {
        isLogin?: boolean;
        isFix?: boolean;
    }) => {
        const openNewLink = (target: "usage" | "privacy" | "alliance") => () => {
            const host = 'https://hello-staging.goodoc.co.kr';
            switch (target) {
                case "alliance":
                    window.open(`${host}/allance`);
                    break;
                default:
                    window.open(`${host}/term#${target}`);
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
                                    {HospitalFooterModel.usage}
                                </div>
                                <div
                                    className="Footer__col1--section1 privacy"
                                    onClick={openNewLink("privacy")}
                                >
                                    {HospitalFooterModel.privacy}
                                </div>
                                <div
                                    className="Footer__col1--section1 alliance"
                                    onClick={openNewLink("alliance")}
                                >
                                    {HospitalFooterModel.alliance}
                                </div>
                            </div>
                            <div className="Footer__col1--section2">
                                <img className="Footer__logo" src={HospitalFooterLogo} alt="Carelabs Logo" />
                                <div className="Footer__info">
                                    {
                                        [
                                            HospitalFooterModel.componayName,
                                            HospitalFooterModel.ceo,
                                            HospitalFooterModel.regCode,
                                            HospitalFooterModel.phone,
                                            HospitalFooterModel.code,
                                            HospitalFooterModel.addr,
                                            HospitalFooterModel.allRight
                                        ].map((item, idx) => {
                                            return (
                                                <>
                                                    {item}
                                                    {idx === 4 || idx === 6 ?
                                                        (idx === 4 ? <br/> : <VersionTooltip/>)
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
                                {isLogin ? <FooterMenualFiles /> : null}
                            </div>
                        </div>
                    </section>
                </div>
            </footer>
        );
    };
};

export default HospitalFooter;
