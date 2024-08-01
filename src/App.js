import React from 'react';
import axios from 'axios';

const App = () => {
    let data = {
        name: 'Divyansh Chauhan',
        amount: 1,
        number: '99999999',
        MID: 'MID' + Date.now(),
        transactionId: 'T' + Date.now()
    };

    const HandleClick = async () => {
        try {
            const response = await axios.post('https://phone-pe-int.vercel.app/order', data);

            // Log the response to check the structure
            console.log('Backend Response:', response.data);

            // Ensure that the response contains a valid URL
            if (response.data.success === true && response.data.data?.instrumentResponse?.redirectInfo?.url) {
                const redirectUrl = response.data.data.instrumentResponse.redirectInfo.url;
                console.log('Redirecting to:', redirectUrl);
                // Redirect to the payment URL
                window.location.href = redirectUrl;
            } else {
                // Handle cases where the URL is not provided or response is unsuccessful
                console.error('Payment initiation failed or URL is undefined');
            }
        } catch (error) {
            console.error('Error initiating payment:', error);
        }
    };

    return (
        <>
            <button onClick={HandleClick}>Pay Now</button>
        </>
    );
};

export default App;
