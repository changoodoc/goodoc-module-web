import * as React from "react";
import HospitalFooterModel from './HospitalFooterModel';

const HospitalFooter = (DividerVertical: any, FooterUrls: any, FooterMenualFiles: any) => {
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
                    <img className="Footer__logo" src={logo} alt="Carelabs Logo" />
                    <div className="Footer__col1--section1">
                        {HospitalFooterModel.phone}
                    <br />
                    {HospitalFooterModel.email}
                    <br />
                    <span>
                    {HospitalFooterModel.allRight}{" "}
                        <span className="Footer__subText">v0.1.0</span>
                    </span>
                    </div>
                    <div className="Footer__col1--section2">
                    {[
                        HospitalFooterModel.componayName,
                        HospitalFooterModel.regCode,
                        HospitalFooterModel.ceo,
                        HospitalFooterModel.addr,
                        HospitalFooterModel.goodocCEO,
                        HospitalFooterModel.code
                    ].map((item, idx, arr) => {
                        return (
                            <>
                                {item}
                                {
                                    idx % 3 ?
                                      <DividerVertical color="black" /> :
                                      (idx === 3 ? <br /> : '')
                                }
                            </>
                        )
                    })}
                    </div>
                    <div className="Footer__col1--section3">
                    {isLogin ? <FooterUrls /> : null}
                    </div>
                </div>
                <div className={`Footer__col2${isLogin ? "" : " bottom"}`}>
                    <div className="Footer__col2--section1">
                    {isLogin ? <FooterMenualFiles /> : <FooterUrls />}
                    </div>
                </div>
                </section>
                <div className="Footer__divider" />
                <section className="Footer__section2">
                {HospitalFooterModel.desc}
                </section>
            </div>
        </footer>
        );
    };
};

export default HospitalFooter;
