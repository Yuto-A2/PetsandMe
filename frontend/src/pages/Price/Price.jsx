import React from 'react'
import './Price.css'
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"

export default function Price() {
    return (
        <>
            <Header />
            {/* price list */}
            <h2 className="header">Price List</h2>
            <div className='priceContainer'>
                <div className="priceItems">WALKS</div>
                <div className="priceBox">
                    <div className="priceExplain">
                        <div className="pricesSet">
                            <div className="items">30min Walks </div>
                            <div className="prices">$30</div>
                        </div>
                        <div className="pricesSet">
                            <div className="items">Pack Walks </div>
                            <div className="prices">$25</div>
                        </div>
                        <div className="pricesSet">
                            <div className="items">Adventure Walks </div>
                            <div className="prices">$45</div>
                        </div>
                        <p>Any additional dogs in same household is an extra $10.</p>
                    </div>
                </div>

                <div className="priceItems priceItems2">CHECK-INS</div>
                <div className="priceBox">
                    <div className="priceExplain priceExplain2">
                        <div className="pricesSet">
                            <div className="items">One check-ins </div>
                            <div className="prices">$15</div>
                        </div>
                        <div className="pricesSet">
                            <div className="items">Two check-ins </div>
                            <div className="prices">$30</div>
                        </div>
                        <div className="pricesSet">
                            <div className="items">Additional check-ins </div>
                            <div className="prices">$5</div>
                        </div>
                        <div className="pricesSet">
                            <div className="items">Pee Breaks </div>
                            <div className="prices">$15</div>
                        </div>
                        <p>Additional check in per pet in same household is an extra $10.</p>
                    </div>
                </div>

                <div className="priceItems priceItems3">BOARDING</div>
                <div className="priceBox">
                    <div className="priceExplain">
                        <div className="pricesSet">
                            <div className="items">Boardings </div>
                            <div className="prices">$65</div>
                        </div>
                        <div className="pricesSet">
                            <div className="items">Cat sitting </div>
                            <div className="prices">$35</div>
                        </div>
                        <p>Any additional dog/cat in same household there is a $10 discount</p>
                    </div>
                </div>
                <p>Looking for something else? Please ask!</p>
                <p>We are here for your pets and you.</p>
            </div>
            <Footer />
        </>
    )
}
