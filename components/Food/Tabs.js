import React, { useState } from 'react'
import PallyTab from '../TabComponent/PallyTab'
import RecommendedTab from '../TabComponent/RecommendedTab'
import ShopTab from '../TabComponent/ShopTab'
import TabContent from '../V2/TabContent'
import TabNavItem from '../V2/TabNavItem'

const Tabs = ({ data }) => {
    const [activeTab, setActiveTab] = useState("shoptab")
    return (
        <div>
            <section className="food-items-bg  d-none d-lg-block webfoodTab-view">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-5">
                            <ul className="nav nav-tabs foodtabs" id="foodTab" role="tablist">
                                <TabNavItem title="Shop" id="shoptab" activeTab={activeTab} setActiveTab={setActiveTab} />
                                <TabNavItem title="Pally" id="pallytab" activeTab={activeTab} setActiveTab={setActiveTab} />
                                <TabNavItem title="Recommended" id="rectab" activeTab={activeTab} setActiveTab={setActiveTab} />

                            </ul>
                        </div>
                    </div>
                    <hr className="border-bottom" />
                    <div className="row ">
                        <div className="col-lg-12">
                            <div className="tab-content main" id="foodTabContent">
                                {/* shop-tab */}
                                <TabContent id='shoptab' activeTab={activeTab}>
                                    <ShopTab />
                                </TabContent>

                                {/* pallytab */}
                                <TabContent id='pallytab' activeTab={activeTab}>
                                    <PallyTab />
                                </TabContent>

                                {/* recommended */}
                                <TabContent id='rectab' activeTab={activeTab}>
                                    <RecommendedTab data={data} />
                                </TabContent>

                            </div>
                            <div className="load-bg text-center mb-5 d-none d-lg-block">
                                <a href="#">
                                    <button tye="button" className="load-more text-uppercase ">
                                        Load more items
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Tabs